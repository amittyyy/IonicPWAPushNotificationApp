importScripts('https://www.gstatic.com/firebasejs/8.2.9/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.9/firebase-analytics.js');

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBW8xD6sQU5Di--P2f_4KGM_1G8zOmzqtc",
    authDomain: "ionicpwapushnotificationapp.firebaseapp.com",
    projectId: "ionicpwapushnotificationapp",
    storageBucket: "ionicpwapushnotificationapp.appspot.com",
    messagingSenderId: "562871214004",
    appId: "1:562871214004:web:7b30187478823fff741ce1",
    measurementId: "G-Y5GKRXH6CF"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const messaging = firebase.messaging;
 
