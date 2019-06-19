function _interopDefault(ex) {
  return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
}
var firebase = _interopDefault(require('@firebase/app'));
require('@firebase/auth');
require('@firebase/database');
require('@firebase/firestore');
require('@firebase/functions');
require('@firebase/messaging');
require('@firebase/storage');
require('@firebase/performance');

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
