import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = require("./app_config.json")

// Firebase 
export const firebase_app = firebase.initializeApp({

    apiKey: config.firebase.apiKey,
    authDomain:config.firebase.authDomain,
    databaseURL: config.firebase.databaseURL,
    projectId: config.firebase.projectId,
    storageBucket: config.firebase.storageBucket,
    messagingSenderId: config.firebase.messagingSenderId,
    appId:config.firebase.appId

});

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();
export const twitterProvider = new  firebase.auth.TwitterAuthProvider();
export const githubProvider = new  firebase.auth.GithubAuthProvider();
export const db =  firebase.firestore();

// Auth0
export const auth0 = ({
    domain : config.auth0.domain,
    clientId : config.auth0.clientID,
    redirectUri : config.auth0.redirectUri
})

// Jwt
export const Jwt_token = config.jwt_token



