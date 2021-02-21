/* eslint import/no-cycle: [0, { ignoreExternal: true }] */
import firebase from 'firebase/app';
import 'firebase/auth';
import domClickEvents from '../events/domEvents';

const signMeOut = () => {
  document.querySelector('body').removeEventListener('click', domClickEvents);
  firebase.auth().signOut();
};

const logoutButton = () => {
  const domString = '<div id="google-auth">LOGOUT <i class="fa fa-sign-out-alt" aria-hidden="true"></i></div>';
  document.querySelector('#logout-button').innerHTML = domString;
  document.querySelector('#google-auth').addEventListener('click', signMeOut);
};

export default logoutButton;
