import { getCurrentAnswer, updateCurrentAnswer } from '../../helpers/data/currentQuizData';

const playFeedback = () => {
  const { question } = getCurrentAnswer();
  const { correctAnswer, selectedAnswer } = question;
  const gotCorrect = correctAnswer === selectedAnswer;
  updateCurrentAnswer({ gotCorrect });
  document.querySelector('#play-body').innerHTML = `
  <div class="play-feedback play-feedback-${gotCorrect ? 'correct' : 'incorrect'}">
    <div class="play-feedback-title">${gotCorrect ? 'You Answer is Correct' : 'You Answer is Incorrect'}</div>
    <div class="play-feedback-image"></div>
    <div class="play-feedback-button-container"><button id="play-next-question" type="button" class="btn btn-light">Next Question</button></div>
  </div>
`;
};
export default playFeedback;
