import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


const firebaseConfig={
    apiKey: "AIzaSyCDf20CG_tsdwdvDopOsECRnBo5QkQxlO4",
    authDomain: "feat-17f7c.firebaseapp.com",
    projectId: "feat-17f7c",
    storageBucket: "feat-17f7c.appspot.com",
    messagingSenderId: "643343899657",
    appId: "1:643343899657:web:ef0c0eadb64b052f186cd8",
    measurementId: "G-N8R379N17D"
}

export const app = initializeApp(firebaseConfig);

const db= getFirestore(app);


export const FIREBASE_AUTH=getAuth(app);

export {db}

