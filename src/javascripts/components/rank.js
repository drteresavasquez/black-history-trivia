import { getUserRank } from '../helpers/data/scoreData';

const rank = () => getUserRank().then((topThreeUsers) => {
  document.querySelector('#app').innerHTML += `<div class="top-three">
    <div class="third-place">
      <div class="number">3</div>
      <img src="${topThreeUsers[2].image}" alt="${topThreeUsers[2].displayName}">
      ${topThreeUsers[2].displayName.split(' ')[0]}
      <span class="badge badge-secondary"> ${topThreeUsers[2].score}</span>
    </div>
    <div class="first-place">
    <div class="number">1</div>
      <img src="${topThreeUsers[0].image}" alt="${topThreeUsers[0].displayName}">
      ${topThreeUsers[0].displayName.split(' ')[0]}
      <span class="badge badge-primary"> ${topThreeUsers[0].score}</span>
    </div>
    <div class="second-place">
    <div class="number">2</div>
      <img src="${topThreeUsers[1].image}" alt="${topThreeUsers[1].displayName}">
      ${topThreeUsers[1].displayName.split(' ')[0]}
      <span class="badge badge-danger"> ${topThreeUsers[1].score}</span>
    </div>
  </div>`;
});

export default rank;
