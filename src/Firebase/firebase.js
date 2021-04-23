import app from "firebase/app";
import "firebase/firestore";

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
    app.initializeApp(config);

    this.firestore = app.firestore();
    this.serverTimestamp = app.firestore().app.firebase_.firestore.FieldValue.serverTimestamp;
  }
}

export default Firebase;
