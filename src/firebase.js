import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyA9BxtTZYeI-j-8Vbu1i_Olh5BNyPUz6uQ',
  authDomain: 'react-slack-clone-3cade.firebaseapp.com',
  databaseURL: 'https://react-slack-clone-3cade.firebaseio.com',
  projectId: 'react-slack-clone-3cade',
  storageBucket: 'react-slack-clone-3cade.appspot.com',
  messagingSenderId: '1086645720976',
  appId: '1:1086645720976:web:ab7cf788407f64bf940515'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const signInWithGoogle = () => {
  // Initialize google provider
  const googleProvider = new firebase.auth.GoogleAuthProvider();

  // Ask user to select gmail account in a new popup window
  auth.signInWithPopup(googleProvider);
};

export const signOut = () => {
  auth.signOut();
};

export const createOrGetUserProfileDocument = async user => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email, photoURL } = user;

    try {
      const user = {
        display_name: displayName,
        email,
        photo_url: photoURL,
        created_at: new Date()
      };
      await userRef.set(user);
    } catch (error) {
      console.log('Error', error);
    }
  }

  return getUserDocument(user.uid);
};

async function getUserDocument(uid) {
  if (!uid) return null;

  try {
    const userDocument = await firestore.collection('user').doc(uid);
    return userDocument;
  } catch (error) {
    console.error('Error in getUserDocument', error.message);
  }
}
