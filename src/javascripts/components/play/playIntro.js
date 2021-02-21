import getQuestions from '../../helpers/data/questionData';
import { getCategory } from '../../helpers/data/categoryData';
import arrayShuffler from '../../helpers/arrayShuffler';
import { updateQuizData } from '../../helpers/data/currentQuizData';
import { loader } from '../loader';
import catImageUrl from '../../helpers/catImageUrl';

const updateAnswerInfo = (questions) => questions.map((question) => {
  const { ans_1: a1, ans_2: a2, ans_3: a3 } = question;
  const answers = arrayShuffler([a1, a2, a3]);
  return {
    ...question,
    answers,
    correctAnswer: a1,
    gotCorrect: null,
  };
});

const playIntro = (categoryId) => {
  loader('#play-body');

  const qPromise = getQuestions(categoryId).then((resp) => arrayShuffler(resp).slice(0, 5));
  const catPromise = getCategory(categoryId);

  Promise.all([qPromise, catPromise]).then(([qResp, { name: catName, id: catId }]) => {
    const newQuestionInfo = updateAnswerInfo(qResp);
    updateQuizData({ questions: newQuestionInfo, category: catName, catId });

    document.querySelector('#play-body').innerHTML = `
      <div class="play-intro-container">
        <div class="play-intro-details">
        <h3 class="play-intro-details-title text-white">Play ${catName}</h3>
        <div class="play-intro-image"><img src="${catImageUrl(categoryId)}" alt="image"></div>
          <div class="play-intro-details-buttons"><button id="play-quiz-start" type="button" class="btn play-cat-btns btn-light">PLAY!</button>
          </div>
        </div>
      </div>
    `;
  });
};
export default playIntro;
