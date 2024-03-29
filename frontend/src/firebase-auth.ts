import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

// NOTE: This is the Firebase configuration for the project. It is not sensitive information.
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

const firebase_app = initializeApp(firebaseConfig);

// init firebase auth, store auth service ref in a context
export const auth = getAuth(firebase_app); 
export default firebase_app;
// export const AuthContext = React.createContext(auth);
