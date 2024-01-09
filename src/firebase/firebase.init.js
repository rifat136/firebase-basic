// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAvfJtsKl6sOj9BGAzTaklhaVuWE4tySms",
    authDomain: "fir-projects-one.firebaseapp.com",
    projectId: "fir-projects-one",
    storageBucket: "fir-projects-one.appspot.com",
    messagingSenderId: "492879008044",
    appId: "1:492879008044:web:75e5b264f7f7d0c11d1c89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;