import { addDoc, collection, getFirestore, serverTimestamp } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getToken, getMessaging } from "firebase/messaging";

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

    this.messaging = getMessaging(firebaseApp, );
    this.registration;

    navigator.serviceWorker
      .register('/extra-sw.js')
      .then((registration) => {
        this.registration = registration;
      });
  }

  subscribeToTopic(topic) {
    getToken(this.messaging, {vapidKey: process.env.REACT_APP_VAPID_KEY, serviceWorkerRegistration: this.registration}).then((currentToken) => {
      if (currentToken) {
        addDoc(collection(this.firestore, "subscriptions"), {
          code: topic,
          fcmToken: currentToken,
          createdBy: "",
          createdAt: serverTimestamp(),
        });
      }
    }).catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
    });
  }
}

export default Firebase;
