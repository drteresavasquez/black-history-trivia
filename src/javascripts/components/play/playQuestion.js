import { getCurrentAnswer, updateCurrentAnswer, addQuizTime } from '../../helpers/data/currentQuizData';
import playResults from './playResults';

const playQuestion = () => {
  const { question = null, index, allQuestions } = getCurrentAnswer();

  if (question) {
    document.querySelector('#play-body').innerHTML = `<div class="play-question">
    <div class="play-question-count">Question ${index + 1} / ${allQuestions.length}</div>
    <div class="play-question-text">${question.question}</div>
    <div class="play-question-answers-container">
      <div class="play-question-answer custom-control custom-radio">
        <input type="radio" id="answer1" name="customRadio" class="play-question-answer-input custom-control-input" value="${question.answers[0]}">
        <label class="custom-control-label play-question-answer-label" for="answer1">${question.answers[0]}</label>
      </div>
      <div class="play-question-answer custom-control custom-radio">
        <input type="radio" id="answer2" name="customRadio" class="play-question-answer-input custom-control-input" value="${question.answers[1]}">
        <label class="custom-control-label play-question-answer-label" for="answer2">${question.answers[1]}</label>
      </div>
      <div class="play-question-answer custom-control custom-radio">
        <input type="radio" id="answer3" name="customRadio" class="play-question-answer-input custom-control-input" value="${question.answers[2]}">
        <label class="custom-control-label play-question-answer-label" for="answer3">${question.answers[2]}</label>
      </div>
    </div>
    <div class="play-question-submit-container"><button disabled id="play-question-submit" type="button" class="btn">Submit Your Answer</button>
    </div>
    `;

    document.querySelector('#play-body').addEventListener('input', (e) => {
      const answerValue = e.target.value;
      updateCurrentAnswer({ selectedAnswer: answerValue });
      document.querySelector('#play-question-submit').removeAttribute('disabled');
    });
  } else {
    addQuizTime(false);
    playResults();
  }
};
export default playQuestion;
