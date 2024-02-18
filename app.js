  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAQYdEIrsksIn6Rye1TZ9ZoyrLHU6jfHg4",
    authDomain: "max-learn-b0415.firebaseapp.com",
    projectId: "max-learn-b0415",
    storageBucket: "max-learn-b0415.appspot.com",
    messagingSenderId: "530326840871",
    appId: "1:530326840871:web:7c2f6df90be90127409002",
    measurementId: "G-RS36TEXZFH"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
