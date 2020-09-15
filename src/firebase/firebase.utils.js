import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDtg-AElOXe_OTgTJDEYsjC9v1qlyPjEi0",
  authDomain: "react-redux-62d70.firebaseapp.com",
  databaseURL: "https://react-redux-62d70.firebaseio.com",
  projectId: "react-redux-62d70",
  storageBucket: "react-redux-62d70.appspot.com",
  messagingSenderId: "1064945721532",
  appId: "1:1064945721532:web:fe3ac28140fc69174370b9",
  measurementId: "G-G6F8B1015V"
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
