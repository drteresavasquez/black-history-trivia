import rank from '../components/rank';

const leaderboard = () => {
  document.querySelector('#app').innerHTML = '';
  document.querySelector('#app').innerHTML = '<div class="d-flex button-row"><div id="back-btn"><i class="fas fa-chevron-left"></i> BACK</div><div id="logout-button"></div></div>';
  document.querySelector('#app').innerHTML += '<h2 class="text-white">Leaderboard</h2>';
  rank();
};

export default leaderboard;
