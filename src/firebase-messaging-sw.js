// import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";
// import { onBackgroundMessage } from "firebase/messaging/sw";

console.log('%c SERVICE WORKER HERE', 'font-size: 10px');

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_MESSAGING_APP_ID,
};

const firebaseApp = initializeApp(config);


if ("serviceWorker" in navigator) {
  const messaging = getMessaging(firebaseApp);
}

// onBackgroundMessage(messaging, (payload) => {
//   console.log('[firebase-messaging-sw.js] Received background message ', payload);

//   const notificationTitle = 'Background Message Title';
//   const notificationOptions = {
//     body: 'Background Message body.',
//   };

//   self.registration.showNotification(notificationTitle,
//     notificationOptions);
// });
