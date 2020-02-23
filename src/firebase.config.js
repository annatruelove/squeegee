import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA4BVgnfrQYRsr8GTQryF1wQiYMzeBqoCY",
    authDomain: "squeegee-1d2f9.firebaseapp.com",
    databaseURL: "https://squeegee-1d2f9.firebaseio.com",
    projectId: "squeegee-1d2f9",
    storageBucket: "squeegee-1d2f9.appspot.com",
    messagingSenderId: "448161831961",
    appId: "1:448161831961:web:b77fddcb7d94887eecde88",
    measurementId: "G-TP1R9Z8DJ2"
  };

  export const app = firebase.initializeApp(firebaseConfig)