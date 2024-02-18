  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";

// Configuring Firebase
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
firebase.initializeApp(firebaseConfig);

// Referencing Database
let contactFormDB = firebase.database().ref('contactForm');

document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit the form
function submitForm(e) {
    e.preventDefault();

    let name = getElementVal('name');
    let email = getElementVal('email');
    let message = getElementVal('message');

    saveMessages(name, email, message);

    // Enable Alert
    document.getElementById('alert').style.display = 'block';

    // Remove Alert
    setTimeout(() => {
        document.getElementById('alert').style.display = 'none';
    }, 3000);

    // Reset the form
    document.getElementById('contactForm').reset();
}

// Saving the messages
const saveMessages = (name, email, message) => {
    let newContactForm = contactFormDB.push();
    newContactForm.set({
        name: name,
        email: email,
        message: message
    })
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};
