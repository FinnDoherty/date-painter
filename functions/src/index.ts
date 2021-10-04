import * as functions from "firebase-functions";
import admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

exports.notifyUser = functions.firestore.document('swatches/{swatchId}')
  .onCreate(event => {
    const message = event.data();
    const name = message.name;
    const code = message.canvasRef;

    functions.logger.log('Detected new entry: ' + name + ' on ' + code);

    const payload = {
      notification: {
        title: code,
        body: `${name} submitted a response`,
        icon: 'https://datepainter.com/favicon.ico'
      }
    };

    return admin.firestore()
    .collection('subscriptions')
    .where("code", "==", code)
    .get()
    .then((result) => {
      const tokens: string[] = result.docs.map(doc => doc.data().fcmToken);
      const uniqueTokens = [... new Set(tokens)];

      functions.logger.log('Preparing ' + uniqueTokens.length + ' notifications');

      let promises: Promise<any>[] = [];
      uniqueTokens.forEach(t => promises.push(admin.messaging().sendToDevice(t, payload)));

      return Promise.all(promises);
    })
    .catch((error) => {
      functions.logger.error('Error getting document or sending to device: ', error);
    });
  })
