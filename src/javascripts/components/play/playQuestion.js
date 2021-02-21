import { getCurrentAnswer, updateCurrentAnswer, addQuizTime } from '../../helpers/data/currentQuizData';
import playResults from './playResults';

const playQuestion = () => {
  const { question = null, index, allQuestions } = getCurrentAnswer();

  if (question) {
    document.querySelector('#play-body').innerHTML = `<div class="play-question">
    <div class="play-question-image"><img src="https://firebasestorage.googleapis.com/v0/b/bhm-trivia-app.appspot.com/o/category_images%2Fcat-1.jpg?alt=media&token=05f77b38-720a-454d-a716-cf1d07d8a3ad" alt="image"></div>
    
    <div class="card question-card">
      <div class="card-body">
      <h3 class="play-question-count text-white">Question ${index + 1} / ${allQuestions.length}</h3>
      <div class="play-question-text">${question.question}</div>
      <div class="play-question-answers-container">
      <ul>
        <li>
          <input type="radio" id="answer1" name="selector" value="${question.answers[0]}">
          <label for="answer1">${question.answers[0]}</label>
          <div class="check"></div>
        </li>
        <li>
          <input type="radio" id="answer2" name="selector" value="${question.answers[1]}">
          <label for="answer2">${question.answers[1]}</label>
          <div class="check"><div class="inside"></div></div>
        </li>
        <li>
          <input type="radio" id="answer3" name="selector" value="${question.answers[2]}">
          <label for="answer3">${question.answers[2]}</label>
          <div class="check"><div class="inside"></div></div>
        </li>
      </ul>
    </div>
    <div class="play-question-submit-container"><button disabled id="play-question-submit" type="button" class="btn btn-block btn-light submit-button">Submit Your Answer</button>
    </div>
    </div>
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
