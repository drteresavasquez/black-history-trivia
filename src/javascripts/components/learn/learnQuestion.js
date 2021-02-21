import { getCardData, getCurrentCard } from '../../helpers/data/currentFlashCardData';

const showInfo = (showQuestion = true) => (showQuestion ? `Question: ${getCurrentCard().question}` : `Answer: ${getCurrentCard().ans_1}`);

const learnQuestion = () => {
  let showQuestion = true;
  const { categoryInfo: { name: catName }, currentIndex, questions } = getCardData();

  document.querySelector('#learn-body').innerHTML = `
  <div class="learn-question-container">
    <div class="learn-question-title">BHT Flash Cards</div>
    <div class="learn-question-category">Current Category: ${catName}</div>
    <div class="learn-question-info-container">
    <div class="learn-question-info-text" id="learn-question-info-text-container">${showInfo(showQuestion)}</div>
    <div class="learn-question-info-button-container"><button class="btn btn-light learn-question-info-button" id="learn-question-toggler">Show Answer</button></div>
    </div>
    <div>
      <div>
        <button class="btn btn-light learn-question-info-button" ${currentIndex === 0 ? 'disabled' : ''} id="learn-question-back">Go Back</button>
      </div>
      <div>
        <button class="btn btn-light btn-lightlearn-question-info-button" id="learn-question-next">${currentIndex === questions.length - 1 ? 'Start Over' : 'Next'}</button>
      </div>
    </div>
    </div>
  `;

  document.querySelector('#learn-question-toggler').addEventListener('click', () => {
    showQuestion = !showQuestion;
    document.querySelector('#learn-question-info-text-container').innerHTML = showInfo(showQuestion);
    document.querySelector('#learn-question-toggler').innerHTML = showQuestion ? 'Show Answer' : 'Show Question';
  });
};

export default learnQuestion;
