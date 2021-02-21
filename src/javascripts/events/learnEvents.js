import learnQuestions from '../components/learn/learnQuestion';
import { startCardData, updateCurrentCard } from '../helpers/data/currentFlashCardData';

const learnEvents = () => {
  const playBody = document.querySelector('#learn-body');
  playBody.addEventListener('click', (e) => {
    const [eventId, itemId] = e.target.id.split('--');
    if (eventId.includes('learn-category-select')) startCardData(itemId).then(learnQuestions);
    if (eventId.includes('learn-question-back')) {
      updateCurrentCard(false);
      learnQuestions();
    }

    if (eventId.includes('learn-question-next')) {
      updateCurrentCard(true);
      learnQuestions();
    }
  });
};

export default learnEvents;
