import axios from 'axios';
import firebaseConfig from '../apiKeys';
import { getUsers } from './userData';

const dbUrl = firebaseConfig.databaseURL;

const getAllScores = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/scores.json`)
    .then((response) => {
      resolve(Object.values(response.data));
    })
    .catch((error) => reject(error));
});

const getTodayScores = () => new Promise((resolve, reject) => {
  const D = new Date();
  const today = `${D.getMonth() + 1}/${D.getDate()}/${D.getFullYear()}`;
  axios.get(`${dbUrl}/scores.json?orderBy="date_submitted"&startAt="${today}"&endAt="${today}"`)
    .then((response) => {
      resolve(Object.values(response.data));
    })
    .catch((error) => reject(error));
});

const getWeekScores = () => new Promise((resolve, reject) => {
  const D = new Date();
  const W = new Date(new Date().setDate(new Date().getDate() - 7));
  const week = `${W.getMonth() + 1}/${W.getDate()}/${W.getFullYear()}`;
  const today = `${D.getMonth() + 1}/${D.getDate()}/${D.getFullYear()}`;
  axios.get(`${dbUrl}/scores.json?orderBy="date_submitted"&startAt="${week}"&endAt="${today}"`)
    .then((response) => {
      resolve(Object.values(response.data));
    })
    .catch((error) => reject(error));
});

const getUserAllTimeRank = () => new Promise((resolve, reject) => {
  const mergedArray = [];
  Promise.all([getUsers(), getAllScores()]).then(([userArray, scoresArray]) => {
    userArray.forEach((user) => {
      const userScores = scoresArray.filter((score) => user.uid === score.user_id);
      const score = userScores.reduce((a, b) => a + b.score, 0);
      mergedArray.push({ ...user, score });
    });
    const sorted = mergedArray.sort((a, b) => b.score - a.score);
    resolve(sorted);
  }).catch((error) => reject(error));
});

const getUserTodayRank = () => new Promise((resolve, reject) => {
  const mergedArray = [];
  Promise.all([getUsers(), getTodayScores()]).then(([userArray, scoresArray]) => {
    userArray.forEach((user) => {
      const userScores = scoresArray.filter((score) => user.uid === score.user_id);
      const score = userScores.reduce((a, b) => a + b.score, 0);
      mergedArray.push({ ...user, score });
    });
    const sorted = mergedArray.sort((a, b) => b.score - a.score);
    resolve(sorted);
  }).catch((error) => reject(error));
});

const getUserWeekRank = () => new Promise((resolve, reject) => {
  const mergedArray = [];
  Promise.all([getUsers(), getWeekScores()]).then(([userArray, scoresArray]) => {
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
export {
  getUserAllTimeRank, postScore, getUserTodayRank, getUserWeekRank
};
