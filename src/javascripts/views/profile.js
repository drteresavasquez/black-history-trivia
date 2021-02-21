import firebase from 'firebase/app';
import 'firebase/auth';

const profile = () => {
  document.querySelector('#app').innerHTML = '<div class="d-flex button-row"><div id="back-btn"><i class="fas fa-chevron-left"></i> BACK</div><div id="logout-button"></div></div>';
  document.querySelector('#app').innerHTML += '<h3>Profile</h3>';
  const user = firebase.auth().currentUser;
  document.querySelector('#app').innerHTML += `
    <div class="user-card" style="width: 18rem;">
    <img src="${user.photoURL}" class="user-img" alt="user image">
    <div class="user-body">
      <p class="name">${user.displayName}</p>
      <p class="email">${user.email}</p>
      <p class="score-title">High Score:</p>
    </div>
  </div>`;
};

export default profile;
