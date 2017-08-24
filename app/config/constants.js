import firebase from 'firebase';


const config = {
    apiKey           : 'AIzaSyA7GFEzToPrVv6bvCFyzsjQwMXdalUsOvc',
    authDomain       : 'redux-test-auth.firebaseapp.com',
    databaseURL      : 'https://redux-test-auth.firebaseio.com',
    projectId        : 'redux-test-auth',
    storageBucket    : 'redux-test-auth.appspot.com',
    messagingSenderId: '499504906767'
};
firebase.initializeApp(config);

export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;
