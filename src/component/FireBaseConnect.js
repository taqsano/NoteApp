import * as firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyBK1Geoche_i3doXGYAo2D3onOCkaj6zNQ",
  authDomain: "noteapp-bfb66.firebaseapp.com",
  databaseURL: "https://noteapp-bfb66.firebaseio.com",
  projectId: "noteapp-bfb66",
  storageBucket: "noteapp-bfb66.appspot.com",
  messagingSenderId: "347722497448",
  appId: "1:347722497448:web:aa74b71db3218c9e"
};
  

     
firebase.initializeApp(firebaseConfig);
export const notedata = firebase.database().ref('DataNote')
