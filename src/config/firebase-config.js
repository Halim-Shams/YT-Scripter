// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyDRjiSmkt0bRU621X2CjunN4t-u_fsGYC4',
	authDomain: 'yt-scripter.firebaseapp.com',
	projectId: 'yt-scripter',
	storageBucket: 'yt-scripter.appspot.com',
	messagingSenderId: '990695557890',
	appId: '1:990695557890:web:371993d7d0dddfc292501b',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

// Next Steps
// -firebase init
// firebase deploy
