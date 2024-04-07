import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


const firebaseConfig={
    apiKey: "AIzaSyDDuH3V7vNrCwCVL2rGvRRBehF_SfJQHCg",
    authDomain: "feat-18527.firebaseapp.com",
    databaseURL: "https://feat-18527-default-rtdb.firebaseio.com",
    projectId: "feat-18527",
    storageBucket: "feat-18527.appspot.com",
    messagingSenderId: "1012805698328",
    appId: "1:1012805698328:web:b58bd338522229dc39d46d",
    measurementId: "G-FT1MQT0TN4"
}

export const app = initializeApp(firebaseConfig);

const db= getFirestore(app);


export const FIREBASE_AUTH=getAuth(app);

export {db}

