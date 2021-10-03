import { addDoc, collection, getFirestore, serverTimestamp } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getToken, getMessaging, onMessage } from "firebase/messaging";

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_MESSAGING_APP_ID,
};

class Firebase {
  constructor() {
    const firebaseApp = initializeApp(config);
    this.firestore = getFirestore(firebaseApp);

    this.messaging = getMessaging(firebaseApp);

    onMessage(this.messaging, (message) => {
      console.log('message received');
      console.log(message);
      alert(message);
    })
  }

  subscribeToTopic(topic) {
    console.log('subscribeToTopic');

    getToken(this.messaging, {vapidKey: process.env.REACT_APP_VAPID_KEY}).then((currentToken) => {
      if (currentToken) {
        console.log('%c Current token' + currentToken, 'font-size: 10px');

        addDoc(collection(this.firestore, "subscriptions"), {
          code: topic,
          fcmToken: currentToken,
          createdBy: "",
          createdAt: serverTimestamp(),
        });
        console.log('got token');
      } else {
        // Show permission request UI
        console.log('No registration token available. Request permission to generate one.');
      }
    }).catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
    });
  }
}

export default Firebase;
