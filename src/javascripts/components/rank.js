import { getUserRank } from '../helpers/data/scoreData';
import crown from '../../assets/crown.png';
import { removeLoader } from './loader';

const rank = () => getUserRank().then((scores) => {
  const topThreeUsers = scores.splice(0, 3);
  document.querySelector('#app').innerHTML += `<div class="top-three">
    <div class="third-place">
      <div class="number">3</div>
      <img src="${topThreeUsers[2].image}" alt="${topThreeUsers[2].displayName}">
      ${topThreeUsers[2].displayName.split(' ')[0]}
      <span class="score"> ${topThreeUsers[2].score}</span>
    </div>
    <div class="first-place">
    <div class="number">1</div>
      <img class="crown" src="${crown}" alt="crown">
      <img src="${topThreeUsers[0].image}" alt="${topThreeUsers[0].displayName}">
      ${topThreeUsers[0].displayName.split(' ')[0]}
      <span class="score"> ${topThreeUsers[0].score}</span>
    </div>
    <div class="second-place">
    <div class="number">2</div>
      <img src="${topThreeUsers[1].image}" alt="${topThreeUsers[1].displayName}">
      ${topThreeUsers[1].displayName.split(' ')[0]}
      <span class="score"> ${topThreeUsers[1].score}</span>
    </div>
  </div>`;

  document.querySelector('#app').innerHTML += `<table class="mt-5 table table-hover table-dark">
  <thead>
    <tr>
      <th scope="col">Rank</th>
      <th scope="col"></th>
      <th scope="col">Name</th>
      <th scope="col">Score</th>
    </tr>
  </thead>
  <tbody>

  </tbody>
</table>`;

  scores.forEach((user, index) => {
    $('tbody').append(`<tr>
      <th scope="row">${index + 4}</th>
      <td><img class="table-image" src="${user.image}" alt="${user.displayName}"></td>
      <td>${user.displayName.split(' ')[0]}</td>
      <td>${user.score}</td>
    </tr>`);
  });

  removeLoader();
});

export default rank;
