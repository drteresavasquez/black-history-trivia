import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const userData = (user) => new Promise((resolve, reject) => {
  const userObject = {
    displayName: user.displayName,
    image: 
  };

  console.warn(userObject);
  // axios.post(`${dbUrl}/users.json`, userObject)
  //   .then((response) => console.warn(response))
  //   .catch((error) => reject(error));
});

export default userData;
