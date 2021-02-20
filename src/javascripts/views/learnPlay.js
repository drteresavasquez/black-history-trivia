import flashcard from '../../assets/flashcard.png';
import game from '../../assets/game.png';

const learnPlay = () => {
  document.querySelector('#app').innerHTML = `
  <div class="image-cards splash">
    <div class="card m-3 learn-play" style="width: 18rem;">
      <img id="learn-card" class="card-img-top" src="${flashcard}" alt="flashcard">
      <div class="card-body">
        <h3>Learn</h3>
        <p>Explore achievements of Black people in sports, arts, science, entertainment, and more! </p>
      </div>
    </div>
    <div class="card m-3 learn-play" style="width: 18rem;">
      <img id="game-card" class="card-img-top" src="${game}" alt="game">
      <div class="card-body">
      <h3>Play</h3>
      <p>Test your knowledge of Black achievements against the clock and other users! </p>
    </div>
  </div>`;
};

export default learnPlay;
