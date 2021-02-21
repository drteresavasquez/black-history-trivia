const learnEvents = () => {
  const playBody = document.querySelector('#learn-body');
  playBody.addEventListener('click', (e) => {
    const [eventId/* itemId */] = e.target.id.split('--');
    if (eventId.includes('learn-category-select'));
  });
};

export default learnEvents;
