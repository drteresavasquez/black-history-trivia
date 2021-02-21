import { getCurrentAnswer, updateCurrentAnswer } from '../../helpers/data/currentQuizData';

const playFeedback = () => {
  const { question, index, allQuestions } = getCurrentAnswer();
  const { correctAnswer, selectedAnswer } = question;
  const gotCorrect = correctAnswer === selectedAnswer;
  const isLast = index + 1 === allQuestions.length;
  updateCurrentAnswer({ gotCorrect });
  document.querySelector('#play-body').innerHTML = `
  <div class="play-feedback play-feedback-${gotCorrect ? 'correct' : 'incorrect'}">
    <div class="play-feedback-title">${gotCorrect ? 'Your Answer is Correct' : 'Your Answer is Incorrect'}</div>
    <div class="play-feedback-image"></div>
    <div class="play-feedback-button-container"><button id="play-next-question" type="button" class="btn">${isLast ? 'Finish Quiz' : 'Next Question'}</button></div>
  </div>
`;
};
export default playFeedback;
