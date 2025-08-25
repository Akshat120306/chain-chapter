// Import Firebase SDKs directly from Google CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPf9fdfL3LcUi8RbnQNdqBEoVlMy2Omxs",
  authDomain: "chain-chapter.firebaseapp.com",
  projectId: "chain-chapter",
  storageBucket: "chain-chapter.firebasestorage.app",
  messagingSenderId: "69927887973",
  appId: "1:69927887973:web:a48bd6095870dad6a7528c",
  measurementId: "G-1K06SJ1585"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export services for use in other files
export const auth = getAuth(app);
export const db = getFirestore(app);
