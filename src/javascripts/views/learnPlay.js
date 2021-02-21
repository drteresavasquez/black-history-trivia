const learnPlay = () => {
  document.querySelector('#app').innerHTML = `
  <div class="image-cards splash">
    <div class="card m-3 learn-play" id="learn-card">
      <div class="card-body">
        <h3>Learn</h3>
        <p>Explore achievements of Black people in sports, arts, science, entertainment, and more! </p>
      </div>
    </div>
    <div class="card m-3 learn-play" id="game-card">
      <div class="card-body">
        <h3>Play</h3>
        <p>Test your knowledge of Black achievements against the clock and other users! </p>
      </div>
    </div>
    <div class="card m-3 learn-play" id="leaderboard-card">
      <div class="card-body">
        <h3>Leaderboard</h3>
        <p>Test your knowledge of Black achievements against the clock and other users! </p>
      </div>
    </div>
    <div class="card m-3 learn-play" id="profile-card">
      <div class="card-body">
        <h3>Profile</h3>
        <p>Test your knowledge of Black achievements against the clock and other users! </p>
      </div>
    </div>
  </div>`;
};

export default learnPlay;
