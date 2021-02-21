/* eslint import/no-cycle: [0, { ignoreExternal: true }] */
import domClickEvents from './domClickEvents';

const domEvents = () => {
  const domBody = document.querySelector('body');
  domBody.addEventListener('click', domClickEvents);
};

export default domEvents;
