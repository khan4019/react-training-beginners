import firebase from 'firebase';
 var config = {
    apiKey: "AIzaSyDeS_Zc0zmi4_VO6O-BYidZwOa6a2W6y5c",
    authDomain: "react-test-8a4f2.firebaseapp.com",
    databaseURL: "https://react-test-8a4f2.firebaseio.com",
    projectId: "react-test-8a4f2",
    storageBucket: "react-test-8a4f2.appspot.com",
    messagingSenderId: "31182436657"
  };
 
var fire = firebase.initializeApp(config);
export default fire;