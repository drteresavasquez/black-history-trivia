import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;
export const postScore = (scoreObj) => new Promise((resolve, reject) => {
  axios
    .post(`${dbUrl}/scores.json`, scoreObj)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export default '';
