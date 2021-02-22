import { loader } from '../components/loader';
import rankToggle from '../components/rankToggle';
import leaderboardEvents from '../events/leaderboardEvents';
import { getUserTodayRank } from '../helpers/data/scoreData';

const leaderboard = () => {
  document.querySelector('#app').innerHTML = '<div class="d-flex button-row"><div id="back-btn"><i class="fas fa-chevron-left"></i> BACK</div><div id="logout-button"></div></div>';
  document.querySelector('#app').innerHTML += `
      <div id="score-toggle" class="btn-group btn-group-lg" role="group" aria-label="score button group">
      <button id="week-scores" type="button" class="btn score-btn-group">Week</button>
      <button id="today-scores" type="button" class="btn score-btn-group selected-time-option">Today</button>
      <button id="all-time-scores" type="button" class="btn score-btn-group">All Time</button>
    </div>`;

  document.querySelector('#app').innerHTML += '<div id="leaderboard-body"></div>';

  loader('#app', true);
  leaderboardEvents();
  getUserTodayRank().then((scores) => rankToggle(scores));
};

export default leaderboard;
