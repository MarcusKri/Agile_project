// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCD6_RGh52KSAgIPJr7RJ-_OU6r8Z8vRFY",
	authDomain: "examatcampus-52420.firebaseapp.com",
	projectId: "examatcampus-52420",
	storageBucket: "examatcampus-52420.appspot.com",
	messagingSenderId: "1010435245228",
	appId: "1:1010435245228:web:139e610aabaa7adddccb09",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
