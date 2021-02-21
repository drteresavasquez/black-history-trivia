import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;
const getCategories = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/categories.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

export const getCategory = (categoryId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/categories.json?orderBy="id"&equalTo=${categoryId}`)
    .then((response) => resolve(...Object.values(response.data)))
    .catch((error) => reject(error));
});

export default getCategories;
