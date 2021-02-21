const flashCardFlipper = () => {
  const card = document.querySelector('.flashcard');
  $('#learn-question-toggler').on('click', () => {
    card.classList.toggle('is-flipped');
  });
  $('.flashcard').on('click', () => {
    card.classList.toggle('is-flipped');
  });
};

export default flashCardFlipper;
