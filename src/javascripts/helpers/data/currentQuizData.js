let quizData = {};

const getQuizData = () => quizData;

const updateQuizData = (newInfo) => {
  quizData = { ...quizData, ...newInfo };
  return quizData;
};

export {
  getQuizData, updateQuizData
};
