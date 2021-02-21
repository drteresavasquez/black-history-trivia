// import flashCardFlipper from '../events/flashcardEvents';

// const flashcards = () => {
//   document.querySelector('#app').innerHTML = '<div class="d-flex button-row"><div id="back-btn"><i class="fas fa-chevron-left"></i> BACK</div><div id="logout-button"></div></div>';
//   document.querySelector('#app').innerHTML += `<div class="scene scene--card">
//   <div class="flashcard">
//     <div class="flashcard__face flashcard__face--front">front</div>
//     <div class="flashcard__face flashcard__face--back">back</div>
//   </div>
// </div>`;

//   flashCardFlipper();
// }
import learnEvents from '../events/learnEvents';
import learnCategoryEvents from '../components/learn/learnCategorySelect';

const flashcards = () => {
  document.querySelector('#app').innerHTML = '<div class="d-flex button-row"><div id="back-btn"><i class="fas fa-chevron-left"></i> BACK</div><div id="logout-button"></div></div>';
  document.querySelector('#app').innerHTML += '<div id="learn-body"></div>';
  learnCategoryEvents();
  learnEvents();
};

export default flashcards;
