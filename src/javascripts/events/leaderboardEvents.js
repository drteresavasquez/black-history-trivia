/* eslint import/no-cycle: [0, { ignoreExternal: true }] */
import rankToggle from '../components/rankToggle';
import { getUserAllTimeRank, getUserTodayRank, getUserWeekRank } from '../helpers/data/scoreData';

const leaderboardEvents = () => {
  const leaderboardToggle = document.querySelector('#score-toggle');

  leaderboardToggle.addEventListener('click', (e) => {
    const timeframe = e.target.id;
    if (timeframe === 'week-scores' || timeframe === 'today-scores' || timeframe === 'all-time-scores') {
      $('.score-btn-group').removeClass('selected-time-option');
      $(`#${timeframe}`).addClass('selected-time-option');
    }

    if (timeframe === 'week-scores') getUserWeekRank().then((scores) => rankToggle(scores));
    if (timeframe === 'today-scores') getUserTodayRank().then((scores) => rankToggle(scores));
    if (timeframe === 'all-time-scores') getUserAllTimeRank().then((scores) => rankToggle(scores));
  });
};

export default leaderboardEvents;
