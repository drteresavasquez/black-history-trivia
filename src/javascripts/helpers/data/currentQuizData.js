let quizData = {};

const getQuizData = () => quizData;

const updateQuizData = (newInfo) => {
  quizData = { ...quizData, ...newInfo };
  return quizData;
};

const getCurrentAnswer = () => {
  const { questions } = getQuizData();
  const currQuesIndex = questions.findIndex((q) => q.gotCorrect === null);
  const question = questions[currQuesIndex];
  return {
    question,
    index: currQuesIndex,
    allQuestions: questions,
  };
};

const updateCurrentAnswer = (newInfo) => {
  const { question, index, allQuestions } = getCurrentAnswer();
  const newQuestionInfo = [...allQuestions];
  newQuestionInfo[index] = { ...question, ...newInfo };
  updateQuizData({ questions: newQuestionInfo });
};

export {
  getQuizData, updateQuizData, getCurrentAnswer, updateCurrentAnswer
};
