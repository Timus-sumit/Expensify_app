import * as firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyBJNOG41JRMiVTN_y_kLHLTG1eKnA__KDc",
    authDomain: "rupee-manager.firebaseapp.com",
    databaseURL: "https://rupee-manager-default-rtdb.firebaseio.com",
    projectId: "rupee-manager",
    storageBucket: "rupee-manager.appspot.com",
    messagingSenderId: "487248360359",
    appId: "1:487248360359:web:74c597bbc0c71188c3fc82"
  };

  firebase.initializeApp(firebaseConfig);

  const database = firebase.database();


export default database;