import firebase from 'firebase';


const config ={
  apiKey: "AIzaSyDM9CFL7Gnxc5U1hro5L-yheb6bdP0e6zo",
  authDomain: "guildhall-38fb5.firebaseapp.com",
  databaseURL: "https://guildhall-38fb5.firebaseio.com"
};

firebase.initializeApp(config);
export const auth = firebase.auth;
export const db = firebase.database();


