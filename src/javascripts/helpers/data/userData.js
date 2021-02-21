import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getUsers = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/users.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const userData = (user) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/users.json?orderBy="uid"&equalTo="${user.uid}"`)
    .then((response) => {
      if (!Object.values(response.data).length) {
        const userObject = {
          uid: user.uid,
          displayName: user.displayName,
          image: user.photoURL,
          email: user.email,
        };

        axios.post(`${dbUrl}/users.json`, userObject)
          .then((userResponse) => {
            axios.patch(`${dbUrl}/users/${userResponse.data.name}.json`, { firebaseKey: userResponse.data.name });
          })
          .catch((error) => reject(error));
      }
    });
});

export { userData, getUsers };
