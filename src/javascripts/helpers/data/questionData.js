import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;
const getQuestions = (categoryId) => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/questions.json?orderBy="cat_id"&equalTo="${categoryId}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

export default getQuestions;
