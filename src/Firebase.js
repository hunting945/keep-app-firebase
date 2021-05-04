import firebase from 'firebase'
import credential from './FirebaseConfig.json'

var firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
};


(function () {
    firebaseConfig.apiKey = credential.API_KEY;
    firebaseConfig.authDomain = credential.AUTHDOMAIN;
    firebaseConfig.databaseURL = credential.DATABASEURL;
    firebaseConfig.projectId = credential.PROJECT_ID;
    firebaseConfig.storageBucket = credential.STORAGEBUCKET;
    firebaseConfig.messagingSenderId = credential.SENDER_ID;
    firebaseConfig.appId = credential.APP_ID;
})();

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase