import firebase from 'firebase/app';
import 'firebase/auth';
import loginButton from '../components/loginButton';
import logoutButton from '../components/logoutButton';
import navBar from '../components/navBar';
import loginScreen from '../views/loginScreen';
import firebaseConfig from './apiKeys';
import userData from './data/userData';

const checkLoginStatus = () => {
  firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // person is logged in do something...
      navBar();
      logoutButton();
      userData(user); // checks for new user
    } else {
      // person is NOT logged in
      loginScreen();
      loginButton();
    }
  });
};

export default checkLoginStatus;
