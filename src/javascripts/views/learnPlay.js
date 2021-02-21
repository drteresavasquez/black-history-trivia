import brain from '../../assets/icons/noun_brain_icon.png';
import quiz from '../../assets/icons/noun_quiz_icon.png';
import profile from '../../assets/icons/profile_ppt.png';
import leaderboard from '../../assets/icons/leaderboard_ppt.png';

const learnPlay = () => {
  document.querySelector('#app').innerHTML = `
  <div class="image-cards splash">
    <div class="card m-3 learn-play" id="learn-card">
      <div class="card-body">
        <div class="card-header-img">
          <img src="${brain}" alt="brain">
          <h3>Learn</h3>
        </div>
        <p>Explore achievements of Black people in sports, arts, science, entertainment, and more!</p>
      </div>
    </div>
    <div class="card m-3 learn-play" id="game-card">
      <div class="card-body">
        <div class="card-header-img">
          <img src="${quiz}" alt="quiz">
          <h3>Play</h3>
        </div>
        <p>Test your knowledge of Black achievements against the clock and other users! </p>
      </div>
    </div>
    <div class="card m-3 learn-play" id="leaderboard-card">
      <div class="card-body">
        <div class="card-header-img">
          <img src="${leaderboard}" alt="leaderboard">
          <h3>Leaderboard</h3>
        </div>
        <p>See how your score compares to other players and see if you can take first place</p>
      </div>
    </div>
    <div class="card m-3 learn-play" id="profile-card">
      <div class="card-body">
        <div class="card-header-img">
          <img src="${profile}" alt="profile">
          <h3>Profile</h3>
        </div>
        <p>View your profile and scores to see how you are holding up against the competition</p>
      </div>
    </div>
  </div>`;
};

export default learnPlay;
