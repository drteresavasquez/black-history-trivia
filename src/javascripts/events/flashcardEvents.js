const flashCardFlipper = () => {
  const card = document.querySelector('.flashcard');
  card.addEventListener('click', () => {
    card.classList.toggle('is-flipped');
  });
};

export default flashCardFlipper;
