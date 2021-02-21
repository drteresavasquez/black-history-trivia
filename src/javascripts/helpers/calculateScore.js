const QUESTION_POINTS = 80;
const MAX_MINUTE = 2;

const calculateScore = (secondsUsed, correctAnswers) => {
  const answerScore = correctAnswers * QUESTION_POINTS;
  let timeScore = (MAX_MINUTE * 60 - secondsUsed);
  if (timeScore > 0) {
    timeScore *= correctAnswers;
  } else {
    timeScore *= 5;
  }
  const totalScore = timeScore + answerScore;

  return totalScore;
};

export default calculateScore;
