import { getCurrentAnswer, updateCurrentAnswer } from '../../helpers/data/currentQuizData';

const playQuestion = () => {
  const { question, index, allQuestions } = getCurrentAnswer();
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
  <div class="play-question-submit-container"><button id="play-question-submit" type="button" class="btn btn-light">Submit Your Answer</button>
  </div>
  `;

  document.querySelector('#play-body').addEventListener('input', (e) => {
    const answerValue = e.target.value;
    updateCurrentAnswer({ selectedAnswer: answerValue });
  });
};
export default playQuestion;
