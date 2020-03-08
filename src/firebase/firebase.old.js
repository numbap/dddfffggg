import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyD7_Z2TobGXT3ixtHPAu--UPreX4ljf29A",
  authDomain: "deleteme-d6ad1.firebaseapp.com",
  databaseURL: "https://deleteme-d6ad1.firebaseio.com",
  projectId: "deleteme-d6ad1",
  storageBucket: "deleteme-d6ad1.appspot.com",
  messagingSenderId: "492571662602",
  appId: "1:492571662602:web:5d8f07ae9c48e5622882f3",
  measurementId: "G-7FT0PYWGTL"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
