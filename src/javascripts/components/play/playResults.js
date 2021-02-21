import firebase from 'firebase/app';
import { getQuizData } from '../../helpers/data/currentQuizData';
import { postScore } from '../../helpers/data/scoreData';
import { loader } from '../loader';

const QUESTION_POINTS = 80;
const MAX_MINUTE = 2;
const playResults = () => {
  loader('#play-body');
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
      <h3 class="play-results-score text-white">Score: ${totalScore} PTS</h3>
      <div class="play-results-correctnum text-white">You got ${totalCorrect} / ${totalQuestions} correct</div>
      <div class="play-results-time text-white">You finished in ${mins}m ${seconds}s</div>
      <div class="play-intro-image"><img src="https://firebasestorage.googleapis.com/v0/b/bhm-trivia-app.appspot.com/o/answer_queues%2Fscoreresults.png?alt=media&token=5c2aa3f9-16cc-4135-980a-bc44c402dc38" alt="image"></div>
      <div class="play-results-button-container">
        <button id="play-show-leaderboard" class="play-results-button btn play-cat-btns btn-light">Go to leaderboard</button>
      </div>
    </div>
    `;
  });
};
export default playResults;
