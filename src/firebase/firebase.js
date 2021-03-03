import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyA7uM418oyRWDCuu0_LBmgGF3wuJCn45zo",
    authDomain: "expensify-bc1c5.firebaseapp.com",
    databaseURL: "https://expensify-bc1c5-default-rtdb.firebaseio.com",
    projectId: "expensify-bc1c5",
    storageBucket: "expensify-bc1c5.appspot.com",
    messagingSenderId: "1048590808464",
    appId: "1:1048590808464:web:30b5358fe6d93f9de92f15",
    measurementId: "G-Y8ZL5VE1DY"
};

firebase.initializeApp(firebaseConfig);

firebase.database().ref().set({
    name: 'Matheus'
})