import { getCurrentAnswer, updateCurrentAnswer } from '../../helpers/data/currentQuizData';

const playFeedback = () => {
  const { question, index, allQuestions } = getCurrentAnswer();
  const { correctAnswer, selectedAnswer } = question;
  const gotCorrect = correctAnswer === selectedAnswer;
  const isLast = index + 1 === allQuestions.length;
  updateCurrentAnswer({ gotCorrect });
  document.querySelector('#play-body').innerHTML = `
  <div class="play-feedback play-feedback-${gotCorrect ? 'correct' : 'incorrect'}">
    <h3 class="play-feedback-title text-white">${gotCorrect ? 'Right on!<br> Your Answer is Correct' : 'Your Answer is Incorrect'}</h3>
    <div class="play-feedback-image"><img src=
    ${gotCorrect ? '"https://firebasestorage.googleapis.com/v0/b/bhm-trivia-app.appspot.com/o/answer_queues%2Fcorrectanswer.png?alt=media&token=7f4ad05d-7089-4319-aec4-5f9cae9c7dc0" alt="right on!"' : '"https://firebasestorage.googleapis.com/v0/b/bhm-trivia-app.appspot.com/o/answer_queues%2Fstudy.png?alt=media&token=ebba63e6-5fd9-4473-bdbe-66d845c0d478" alt="study, fam!"'}>
    </div>
    <div class="play-feedback-button-container"><button id="play-next-question" type="button" class="btn play-cat-btns btn-light">${isLast ? 'Finish Quiz' : 'Next Question'}</button></div>
  </div>
`;
};
export default playFeedback;
