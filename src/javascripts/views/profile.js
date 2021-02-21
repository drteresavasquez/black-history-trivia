import firebase from 'firebase/app';
import 'firebase/auth';
import { loader, removeLoader } from '../components/loader';
import { getUserScore } from '../helpers/data/userData';
import iconUrl from '../helpers/iconUrl';

const profile = () => {
  document.querySelector('#app').innerHTML = `<div class="d-flex button-row">
  <div id="back-btn">
  <i class="fas fa-chevron-left"></i> BACK
  </div>
  <div id="logout-button">
  </div>
  </div>`;
  loader('#app', true);

  const user = firebase.auth().currentUser;
  document.querySelector('#app').innerHTML += `
    <div class="user-card" style="width: 18rem;">
      <img src="${user.photoURL}" class="user-img" alt="user image">
      <div class="user-body">
        <p class="name">${user.displayName}</p>
        <p class="email">${user.email}</p>
        <p class="score-title"></p>
      </div>
    </div>`;

  document.querySelector('#app').innerHTML += '<div class="profile-icon-container"></div>';

  getUserScore(user.uid).then((array) => {
    const [totalScore, catArray] = array;
    $('.score-title').append(`${totalScore} PTS`);

    catArray.forEach((item) => {
      const url = iconUrl(item.id);
      $('.profile-icon-container').append(`
      <div class="profile-icon-set">
        <img class="profile-icon" src="${url}" alt="icon">
        <p>${item.score} PTS</p>
      </div>`);
    });
    removeLoader();
  });
};

export default profile;
