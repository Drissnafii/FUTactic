// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCI3fM3WaTApcrG8oa9v4odfr4Z0gZRvHA",
  authDomain: "futactic.firebaseapp.com",
  projectId: "futactic",
  storageBucket: "futactic.firebasestorage.app",
  messagingSenderId: "660461651116",
  appId: "1:660461651116:web:cf89d82787ec68c6b70b09",
  measurementId: "G-ZV2QWX6Z7X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);