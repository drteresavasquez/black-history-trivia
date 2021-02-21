import firebase from 'firebase/app';
import 'firebase/auth';

const signMeOut = () => {
  console.log('clicked');
  firebase.auth().signOut();
  document.querySelector('#nav-bar').innerHTML = '';
};

const logoutButton = () => {
  const domString = '<div id="google-auth">LOGOUT <i class="fa fa-sign-out-alt" aria-hidden="true"></i></div>';
  document.querySelector('#logout-button').innerHTML = domString;
  document.querySelector('#google-auth').addEventListener('click', signMeOut);
};

export default logoutButton;
