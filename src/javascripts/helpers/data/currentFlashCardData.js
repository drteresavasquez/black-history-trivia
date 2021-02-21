import { getCategory } from './categoryData';
import getQuestions from './questionData';

let cardData = {};

const getCardData = () => cardData;

const updateCardData = (newInfo) => {
  cardData = { ...cardData, ...newInfo };
};

const getCurrentCard = () => cardData.questions[cardData.currentIndex];

const updateCurrentCard = (next = true) => {
  const newData = { ...cardData };
  if ((newData.currentIndex === 0 && !next)) {
    throw Error('Cannot update to an index that does not exist');
  } else if (newData.currentIndex === (newData.questions.length - 1) && next) {
    newData.currentIndex = 0;
  } else if (next) {
    newData.currentIndex += 1;
  } else if (!next) {
    newData.currentIndex -= 1;
  }
  updateCardData(newData);
};

const startCardData = (categoryId) => {
  document.querySelector('#learn-body').innerHTML = `
  <div class="play-loader spinner-border text-light" role="status">
    <span class="sr-only">Loading...</span>
  </div>`;

  const questionPromise = getQuestions(categoryId).then((questions) => ({ questions, currentIndex: 0 }));

  return Promise.all([getCategory(categoryId), questionPromise]).then(([categoryInfo, quesResp]) => {
    updateCardData({ ...quesResp, categoryInfo });
  });
};

export {
  getCardData, updateCardData, getCurrentCard, updateCurrentCard, startCardData
};
