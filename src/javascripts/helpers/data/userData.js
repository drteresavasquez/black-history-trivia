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

const getUserScore = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/scores.json?orderBy="user_id"&equalTo="${uid}"`)
    .then((response) => {
      const scores = Object.values(response.data);
      const totalScore = scores.reduce((a, b) => a + b.score, 0);

      const scoresByCategory = [];
      const catArray = Array.from({ length: 7 }, (_, i) => i + 1);
      catArray.forEach((cat) => {
        const newb = scores.filter((score) => cat === score.cat_id);
        const catScore = newb.reduce((a, b) => a + b.score, 0);
        scoresByCategory.push({ score: catScore, id: cat });
      });
      resolve([totalScore, scoresByCategory]);
    })
    .catch((error) => reject(error));
});

export { userData, getUsers, getUserScore };
