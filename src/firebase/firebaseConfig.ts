import 'firebase/firestore';
import 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyAzEk-E8_LH_6LygYBf06P38g_k4vFq9S4',
	authDomain: 'pinterestexample-a1ea5.firebaseapp.com',
	projectId: 'pinterestexample-a1ea5',
	storageBucket: 'pinterestexample-a1ea5.appspot.com',
	messagingSenderId: '881357218497',
	appId: '1:881357218497:web:56e55ed63ff034eefc2a40',
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
initializeApp(firebaseConfig);

const db = getFirestore();

const googleAuthProvider = new GoogleAuthProvider();

export { db, googleAuthProvider };
