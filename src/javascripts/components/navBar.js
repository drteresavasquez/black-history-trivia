import bcLogo from '../../assets/blackcodeslogo.png';

const navBar = () => {
  document.querySelector('#nav-bar').innerHTML = `
  <nav class="navbar navbar-expand-md fixed-top navbar-dark">
    <a class="navbar-brand" id="nav-home" href="#"><img src="${bcLogo}" width="50" class="d-inline-block" alt="">
    BH Trivia</a>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link" id="nav-learn" href="#">Learn</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="nav-play" href="#">Play</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="nav-leaderboard" href="#">Leaderboard</a>
        </li>
      </ul>
      <div id="logout-button"></div>
    </div>
  </nav>
  `;
};

export default navBar;
