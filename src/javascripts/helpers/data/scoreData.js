import axios from 'axios';
import firebaseConfig from '../apiKeys';
import { getUsers } from './userData';

const dbUrl = firebaseConfig.databaseURL;

const getScores = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/scores.json`)
    .then((response) => {
      resolve(Object.values(response.data));
    })
    .catch((error) => reject(error));
});

const getUserRank = () => new Promise((resolve, reject) => {
  const mergedArray = [];
  Promise.all([getUsers(), getScores()]).then(([userArray, scoresArray]) => {
    userArray.forEach((user) => {
      const userScores = scoresArray.filter((score) => user.uid === score.user_id);
      const score = userScores.reduce((a, b) => a + b.score, 0);
      mergedArray.push({ ...user, score });
    });
    const sorted = mergedArray.sort((a, b) => b.score - a.score);
    resolve(sorted);
  }).catch((error) => reject(error));
});

const postScore = (scoreObj) => new Promise((resolve, reject) => {
  axios
    .post(`${dbUrl}/scores.json`, scoreObj)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});
export { getScores, getUserRank, postScore };
