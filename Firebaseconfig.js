    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
    import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
    import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";
  
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyAJcJS-EaA1gyVd5TdMZ6kbB45_FN1PFkg",
      authDomain: "nexus-c6655.firebaseapp.com",
      projectId: "nexus-c6655",
      storageBucket: "nexus-c6655.appspot.com",
      messagingSenderId: "738781615552",
      appId: "1:738781615552:web:4d577e9b69b92a799a2425"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const db = getFirestore(app);