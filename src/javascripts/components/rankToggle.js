import firebase from 'firebase/app';
import crown from '../../assets/crown.png';
import { removeLoader } from './loader';

const rankToggle = (scores) => {
  // USER RANK INFO
  const userScore = scores.find((score) => score.uid === firebase.auth().currentUser.uid);
  const userRank = scores.indexOf(userScore);

  const topThreeUsers = scores.slice(0, 3);
  document.querySelector('#leaderboard-body').innerHTML = `<div class="top-three">
    <div class="third-place">
      <div class="number">3</div>
      <img src="${topThreeUsers[2].image}" alt="${topThreeUsers[2].displayName}">${userScore.uid === topThreeUsers[2].uid ? '<span class="you-in-top-three">YOU</span>' : topThreeUsers[2].displayName.split(' ')[0]}
      <span class="score"> ${topThreeUsers[2].score}</span>
    </div>
    <div class="first-place">
    <div class="number">1</div>
      <img class="crown" src="${crown}" alt="crown">
      <img src="${topThreeUsers[0].image}" alt="${topThreeUsers[0].displayName}">
      ${userScore.uid === topThreeUsers[0].uid ? '<span class="you-in-top-three">YOU</span>' : topThreeUsers[0].displayName.split(' ')[0]}
      <span class="score"> ${topThreeUsers[0].score}</span>
    </div>
    <div class="second-place">
    <div class="number">2</div>
      <img src="${topThreeUsers[1].image}" alt="${topThreeUsers[1].displayName}">
      ${userScore.uid === topThreeUsers[1].uid ? '<span class="you-in-top-three">YOU</span>' : topThreeUsers[1].displayName.split(' ')[0]}
      <span class="score"> ${topThreeUsers[1].score}</span>
    </div>
  </div>`;

  document.querySelector('#leaderboard-body').innerHTML += `<table class="mt-5 mb-5 table table-hover table-dark">
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

  const removeZeros = scores.filter((user) => user.score > 0);
  // Show top 10 scores
  removeZeros.splice(3, 7).forEach((user, index) => {
    $('tbody').append(`<tr class="${userScore.uid === user.uid ? 'user-row-score' : ''}">
      <th scope="row">${index + 4}</th>
      <td><img class="table-image" src="${user.image}" alt="${user.displayName}"></td>
      <td>${userScore.uid === user.uid ? '<b>YOU</b>' : user.displayName.split(' ')[0]}</td>
      <td>${user.score}</td>
    </tr>`);
  });

  if (userRank + 1 > 10) {
    $('tbody').append(`<tr class="user-row-score">
      <th scope="row">${userRank + 1}</th>
      <td><img class="table-image" src="${userScore.image}" alt="${userScore.displayName}"></td>
      <td><b>YOU</b></td>
      <td>${userScore.score}</td>
    </tr>`);
  }

  removeLoader();
};

export default rankToggle;
