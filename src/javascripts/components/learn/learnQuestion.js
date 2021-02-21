import flashCardFlipper from '../../events/flashcardEvents';
import { getCardData, getCurrentCard } from '../../helpers/data/currentFlashCardData';

const showInfo = (showQuestion = true) => (showQuestion ? `<div><h3>Question</h3><br> ${getCurrentCard().question}</div>` : `<div><h3>Answer</h3><br> ${getCurrentCard().ans_1}</div>`);

const learnQuestion = () => {
  let showQuestion = true;
  const { categoryInfo: { name: catName }, currentIndex, questions } = getCardData();

  document.querySelector('#learn-body').innerHTML = `
  <div class="learn-question-container">
    <h3 class="learn-question-title text-white">BHT Flash Cards</h3>
    <div class="learn-question-category text-white">${catName}</div>
    <div class="scene scene--card">
      <div class="flashcard">
        <div class="learn-question-info-text flashcard__face flashcard__face--front" id="learn-question-info-text-container">${showInfo(showQuestion)}</div>
        <div class="flashcard__face flashcard__face--back">${showInfo(!showQuestion)}</div>
      </div>
    </div>
    <div class="flashcards-button-bar">
      <div>
        <button class="btn btn-light learn-question-info-button" ${currentIndex === 0 ? 'disabled' : ''} id="learn-question-back">< Back</button>
      </div>
      <div class="learn-question-info-button-container"><button class="btn btn-light learn-question-info-button" id="learn-question-toggler">Show Answer</button></div>
      <div>
        <button class="btn btn-${currentIndex === questions.length - 1 ? 'info' : 'light'} learn-question-info-button" id="learn-question-next">${currentIndex === questions.length - 1 ? 'Start Over' : 'Next >'}</button>
      </div>
    </div>
    </div>
  `;

  document.querySelector('#learn-question-toggler').addEventListener('click', () => {
    showQuestion = !showQuestion;
    document.querySelector('#learn-question-toggler').innerHTML = showQuestion ? 'Show Answer' : 'Show Question';
  });
  document.querySelector('.flashcard').addEventListener('click', () => {
    showQuestion = !showQuestion;
    document.querySelector('#learn-question-toggler').innerHTML = showQuestion ? 'Show Answer' : 'Show Question';
  });

  flashCardFlipper();
};

export default learnQuestion;
