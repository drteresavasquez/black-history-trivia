import firebase from 'firebase/app';
import 'firebase/auth';
import { loader } from '../components/loader';
import loginButton from '../components/loginButton';
import domEvents from '../events/domEvents';
import learnPlay from '../views/learnPlay';
import loginScreen from '../views/loginScreen';
import firebaseConfig from './apiKeys';
import { userData } from './data/userData';

const checkLoginStatus = () => {
  loader('#app');
  firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      userData(user);
      learnPlay();
      domEvents();
    } else {
      loginScreen();
      loginButton();
    }
  });
};

export default checkLoginStatus;
