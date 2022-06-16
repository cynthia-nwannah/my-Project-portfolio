const projects = [
  {
    name: 'My project Portfolio goes here',
    description: 'Hi and welcome to my profile! I am a Web Developer with 6 years of experience. I specialize in developing modern websites and also love designing apps, games, graphics and other interactive elements. If you hire me, I will make a website that meets your needs and look great. I know how important it is for customers to be able to use the site conveniently and easily. I will give your business or organization an online presence at an affordable price.',
    languages: ['HTML/CSS', 'Ruby on Rails', 'javascript'],
    image: 'asset/Rectangle34.png',
    imagetwo: 'asset/macbook_image.png',
    liveVersion: 'See Live',
    sourceLink: 'See Source',
  },
  {
    name: 'My project Portfolio goes here',
    description: 'Hi and welcome to my profile! I am a Web Developer with 6 years of experience. I specialize in developing modern websites and also love designing apps, games, graphics and other interactive elements. If you hire me, I will make a website that meets your needs and look great. I know how important it is for customers to be able to use the site conveniently and easily. I will give your business or organization an online presence at an affordable price.',
    languages: ['HTML/CSS', 'Ruby on Rails', 'javascript'],
    image: 'asset/Rectangle34.png',
    imagetwo: 'asset/macbook_image.png',
    liveVersion: 'See Live',
    sourceLink: 'See Source',
  },
  {
    name: 'My project Portfolio goes here',
    description: 'Hi and welcome to my profile! I am a Web Developer with 6 years of experience. I specialize in developing modern websites and also love designing apps, games, graphics and other interactive elements. If you hire me, I will make a website that meets your needs and look great. I know how important it is for customers to be able to use the site conveniently and easily. I will give your business or organization an online presence at an affordable price.',
    languages: ['HTML/CSS', 'Ruby on Rails', 'javascript'],
    image: 'assset/Rectangle34.png',
    imagetwo: 'asset/macbook_image.png',
    liveVersion: 'See Live',
    sourceLink: 'See Source',
  },
  {
    name: 'My project Portfolio goes here',
    description: 'Hi and welcome to my profile! I am a Web Developer with 6 years of experience. I specialize in developing modern websites and also love designing apps, games, graphics and other interactive elements. If you hire me, I will make a website that meets your needs and look great. I know how important it is for customers to be able to use the site conveniently and easily. I will give your business or organization an online presence at an affordable price.',
    languages: ['HTML/CSS', 'Ruby on Rails', 'javascript'],
    image: 'asset/Rectangle34.png',
    imagetwo: 'asset/macbook_image.png',
    liveVersion: 'See Live',
    sourceLink: 'See Source',
  }];
const seeProjectBtn1 = document.querySelector('#project1-link');// get-project btns
const seeProjectBtn2 = document.querySelector('#project2-link');// get-project btns
const seeProjectBtn3 = document.querySelector('#project3-link');// get-project btns
const seeProjectBtn4 = document.querySelector('#project4-link');// get-project btns
const seeProjectBtn5 = document.querySelector('#project5-link');// get-project btns
const seeProjectBtn6 = document.querySelector('#project6-link');// get-project btns
const body = document.querySelector('body');
const container = document.querySelector('#main-modal');
const overlay = document.querySelector('#overlay');// get overlay
function openPopup(index) { // index for getting the project number
  const {
    name,
    description,
    languages,
    image,
    imagetwo,
    liveVersion,
    sourceLink,
  } = projects[index];// array for convienience in picking keys from object
    // fill the popup container with html
  container.innerHTML = `
   <div class="modal">
   <div class="modal-top">
    <h3 class="project-name">
      ${name}
    </h3>
  </div>
  <ul class="languages-used">
  <li class="language">${languages[0]}</li>
  <li class="language">${languages[1]}</li>
  <li class="language">${languages[2]}</li>
</ul>
    <div class="about-project left">
    <a class="popup-close-btn">&times;</a>
    <div class="imgg">
    <img src=${image} alt="Screenshot-of-" >
    </div>
    <div id ="img-download">
    <img src=${imagetwo} alt="Screenshot-of-">
    <img src=${imagetwo} alt="Screenshot-of-">
    <img src=${imagetwo} alt="Screenshot-of-">
    <img src=${imagetwo} alt="Screenshot-of-">
    </div>
    <p id="project-description">
     ${description}
    </p>
    <p class="project-description">
    ${description}
   </p>
    <div class="down">
    <div class="pop-up-btns">
    <button  type="button" class="pop-up-btn live-btn" >
        ${liveVersion}
        <img src="asset/union32.png" alt="">
    </button>
    <button  type="button" class="pop-up-btn source-btn" >
        ${sourceLink}
        <img src="asset/github.png" alt="">
        <img src="asset/image-5.png" alt="" class="hand">
    </button>
    </div>
    <div class="modal-prev">
            <div class="left-arrow">
            <img src="asset/Union12.png" alt=""><a href="#">Previous Project</a>
        </div>
        <div class="right-arrow">
            <a href="#">Next Project</a>
            <img src="asset/Union23.png" alt="">
        </div>
    </div>
    </div?
  </div>`;
  // then add class of active to them
  container.classList.add('active');
  overlay.classList.add('active');
  body.style.overflowY = 'hidden';

  // close-popup function
  const popupCloseBtn = document.querySelector('.popup-close-btn');// get the close btn
  popupCloseBtn.addEventListener('click', () => {
    // remove active from class
    container.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflowY = 'auto';// for turning the background scrolling effect off
  });
  // remove class active if user click outside the popup-window
  overlay.addEventListener('click', () => {
    container.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflowY = 'auto';// for turning the background scrolling effect off
  });
}
seeProjectBtn1.addEventListener('click', () => {
  openPopup(0);
});
seeProjectBtn2.addEventListener('click', () => {
  openPopup(1);
});
seeProjectBtn3.addEventListener('click', () => {
  openPopup(2);
});
seeProjectBtn4.addEventListener('click', () => {
  openPopup(3);
});
seeProjectBtn5.addEventListener('click', () => {
  openPopup(3);
});
seeProjectBtn6.addEventListener('click', () => {
  openPopup(3);
});
