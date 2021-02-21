import firebase from 'firebase/app';
import { getQuizData } from '../../helpers/data/currentQuizData';
import { postScore } from '../../helpers/data/scoreData';

const QUESTION_POINTS = 80;
const MAX_MINUTE = 2;
const playResults = () => {
  document.querySelector('#play-body').innerHTML = `
  <div class="play-loader spinner-border text-light" role="status">
    <span class="sr-only">Loading...</span>
  </div>`;
  const {
    endTime, questions, startTime, catId
  } = getQuizData();

  const totalQuestions = questions.length;
  const totalCorrect = questions.filter((q) => q.gotCorrect).length;
  const answerScore = totalCorrect * QUESTION_POINTS;

  const secondsUsed = Math.ceil(Math.abs(endTime - startTime) / 1000);
  const timeScore = (MAX_MINUTE * 60 - secondsUsed) * 5;
  const totalScore = timeScore + answerScore;

  const mins = Math.floor(secondsUsed / 60);
  const seconds = Math.floor(secondsUsed % 60);

  const D = new Date();
  postScore({
    cat_id: catId,
    date_submitted: `${D.getMonth() + 1}/${D.getDate()}/${D.getFullYear()}`,
    score: totalScore,
    user_id: firebase.auth().currentUser.uid,
  }).then(() => {
    document.querySelector('#play-body').innerHTML = `
    <div class="play-results">
      <div class="play-results-score">Score: ${totalScore}</div>
      <div class="play-results-correctnum">${totalCorrect} / ${totalQuestions}</div>
      <div class="play-results-time">Finished in ${mins}m ${seconds}s</div>
      <div class="play-results-button-container">
        <button id="play-show-leaderboard" class="play-results-button btn">Go to leaderboard</button>
      </div>
    </div>
    `;
  });
};
export default playResults;
