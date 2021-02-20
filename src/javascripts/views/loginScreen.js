import douglas from '../../assets/douglas.png';
import malcolm from '../../assets/malcolm.png';
import maya from '../../assets/maya.png';
import washington from '../../assets/washington.png';

const loginScreen = () => {
  document.querySelector('#app').innerHTML = `
  <div class="m-4">
  <h1 class="text-white">Black History Trivia</h1>
    <div id="login-screen"></div>
    <div class="image-cards">
      <div class="starter-images"><img src="${douglas}" alt="Douglas"></div>
      <div class="starter-images nexto"><img src="${malcolm}" alt="malcolm"></div>
    </div>
    <div class="image-cards">
      <div class="starter-images nexto"><img src="${maya}" alt="maya"></div>
      <div class="starter-images nexto"><img src="${washington}" alt="washington"></div>
    </div>
    </div>
    </div>
  `;
};

export default loginScreen;
