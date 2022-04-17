// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAm2p_VOVX9BD-C5vKgNgMwLnynBT6AIfg",
    authDomain: "fir-routerintegration-tp01.firebaseapp.com",
    projectId: "fir-routerintegration-tp01",
    storageBucket: "fir-routerintegration-tp01.appspot.com",
    messagingSenderId: "327044309424",
    appId: "1:327044309424:web:379b8c69f537cd6394b675"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;