// Declaration of variables 

const iconId = document.querySelector("#hamburger-icon");
const navId = document.querySelector("#nav-items-list-mobile");
const listClass = document.querySelectorAll(".mobile-list-items");
const closeButton = document.querySelector(".close-button");
const hamburger = document.querySelector("#hamburger");
const body = document.querySelector(`#over-all-grid`);

// Hamburger expansion

hamburger.addEventListener("click", () => {
  navId.classList.toggle("toggle");
  iconId.classList.add("block");
});

// Hamburger collapse

closeButton.addEventListener("click", () => {
  iconId.classList.remove("block");
  navId.classList.toggle("toggle");
});

// Hamburger collapse after choosing list items

listClass.forEach((element) =>
  element.addEventListener("click", () => {
    iconId.classList.remove("block");
    navId.classList.toggle("toggle");
  })
);

// Modal Pop Up start

// Create array which has objects and store pop up values into object keys

const proj = [
  {
    id: `card-1`,
    mobileHeading: `Tonic`,
    desktopHeading: `Tonic`,
    mobileSubHead: [`Canopy`, `Front End Dev`, 2022],
    desktopSubHead: [`Canopy`, `Front End Dev`, 2022],
    mobileCardImage: `./images/SnapshootPortfolio.svg`,
    desktopCardImage: `./images/desktop-card-1.svg`,
    mobileBodyText: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it to make a type 
      specimen book.It has survived not only five centuries, but also the leap into 
      electronic typesetting, remaining essent'`,
    desktopBodyText: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it 1960s with the 
      releaLorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it 1960s with the 
      releorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the 
      releawn printer took a galley of type and scrambled it 1960s with the releaLorem 
      Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
    mobileSkills: [`html`, `css`, `javascript`],
    desktopSkills: [
      `html`,
      `css`,
      `javascript`,
      `github`,
      `ruby`,
      `Bootstraps`,
    ],
    liveLink: `https://haywayaheadshot.github.io/`,
    sourceLink: `https://github.com/Haywayaheadshot/my-portoflio`,
  },

  {
    id: `card-2`,
    mobileHeading: `Multi Post Stories`,
    desktopHeading: `Mulit Post Stories`,
    mobileSubHead: [`Canopy`, `Front End Dev`, 2022],
    desktopSubHead: [`Facebook`, `FullStack Dev`, 2022],
    mobileCardImage: `./images/SnapshootPortfoliopage2.svg`,
    desktopCardImage: `./images/desktop-card-2.svg`,
    mobileBodyText: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it to make a type 
      specimen book.It has survived not only five centuries, but also the leap into 
      electronic typesetting, remaining essent'`,
    desktopBodyText: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it 1960s with the 
      releaLorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it 1960s with the 
      releorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the 
      releawn printer took a galley of type and scrambled it 1960s with the releaLorem 
      Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
    mobileSkills: [`html`, `css`, `javascript`],
    desktopSkills: [
      `html`,
      `css`,
      `javascript`,
      `github`,
      `ruby`,
      `Bootstraps`,
    ],
    liveLink: `https://haywayaheadshot.github.io/`,
    sourceLink: `https://github.com/Haywayaheadshot/my-portoflio`,
  },

  {
    id: `card-3`,
    mobileHeading: `Tonic`,
    desktopHeading: `Facebook 360`,
    mobileSubHead: [`Canopy`, `Back End Dev`, 2022],
    desktopSubHead: [`Facebook`, `FullStack Dev`, 2022],
    mobileCardImage: `./images/SnapshootPortfolio3.svg`,
    desktopCardImage: `./images/desktop-card-3.svg`,
    mobileBodyText: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it to make a type 
      specimen book.It has survived not only five centuries, but also the leap into 
      electronic typesetting, remaining essent'`,
    desktopBodyText: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it 1960s with the 
      releaLorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it 1960s with the 
      releorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the 
      releawn printer took a galley of type and scrambled it 1960s with the releaLorem 
      Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
    mobileSkills: [`html`, `css`, `javascript`],
    desktopSkills: [
      `html`,
      `css`,
      `javascript`,
      `github`,
      `ruby`,
      `Bootstraps`,
    ],
    liveLink: `https://haywayaheadshot.github.io/`,
    sourceLink: `https://github.com/Haywayaheadshot/my-portoflio`,
  },

  {
    id: `card-4`,
    mobileHeading: `Multi Post Stories`,
    desktopHeading: `Uber Navigation`,
    mobileSubHead: [`Canopy`, `Back End Dev`, 2022],
    desktopSubHead: [`Uber`, `Lead Developer`, 2022],
    mobileCardImage: `./images/SnapshootPortfolio4.svg`,
    desktopCardImage: `./images/desktop-card-4.svg`,
    mobileBodyText: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it to make a type 
      specimen book.It has survived not only five centuries, but also the leap into 
      electronic typesetting, remaining essent'`,
    desktopBodyText: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it 1960s with the 
      releaLorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it 1960s with the 
      releorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the 
      releawn printer took a galley of type and scrambled it 1960s with the releaLorem 
      Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
    mobileSkills: [`html`, `css`, `javascript`],
    desktopSkills: [
      `html`,
      `css`,
      `javascript`,
      `github`,
      `ruby`,
      `Bootstraps`,
    ],
    liveLink: `https://haywayaheadshot.github.io/`,
    sourceLink: `https://github.com/Haywayaheadshot/my-portoflio`,
  },
];

// Declare variable for class of buttons to be clicked

const showCards = document.querySelectorAll(`.show-card`);

// Write a function that creates html containing what to be shown and append it
// Pass an argument through it and call the object keys written above at required points

function openCards(lit) {
  let sect = document.createElement("section");
  sect.innerHTML = `<div class='proj-display-container' id='modal-pop'>
  <section class='proj-display'>
   <header class='modal-pop-header'>
   <h2 class="grid-item-two-body-title font pop-mobile-heading-text phone-card" role="heading">${proj[lit].mobileHeading}</h2>
   <h2 class="grid-item-two-body-title font desktop-card" role="heading">${proj[lit].desktopHeading}</h2>
   <i class="close-modal-pop" onclick="closeModalPop()">❌</i>
   </header>

    <ul class="subhead-title-year">
      <li>
        <h4 role="presentation" class="grid-item-two-body-subhead font phone-card">${proj[lit].mobileSubHead[0]}</h4>
      </li>
      <li>
        <h4 role="presentation" class="grid-item-two-body-subhead font desktop-card">${proj[lit].desktopSubHead[0]}</h4>
      </li>
      <li>
        <img role="img" class="counter-image dots" src="images/Counter.svg" alt="counter shape" />
      </li>
      <li>
        <h6 role='presentation' class='title-year font phone-card'>${proj[lit].mobileSubHead[1]}</h6>
      </li>
      <li>
        <h6 role='presentation' class='title-year font desktop-card'>${proj[lit].desktopSubHead[1]}</h6>
      </li>
      <li>
        <img role="img" class="counter-image dots" src="images/Counter.svg" alt="counter shape" />
      </li>
      <li>
        <h6 class="title-year font phone-card">${proj[lit].mobileSubHead[2]} </h6>
      </li>
      <li>
        <h6 class="title-year font desktop-card">${proj[lit].desktopSubHead[2]} </h6>
      </li>
    </ul>
    <div class='pop-image-container'>
      <img role='presentation' class='pop-image-phone phone-card' src='${proj[lit].mobileCardImage}' />
      <img role='presentation' class='pop-image-desktop desktop-card' src='${proj[lit].desktopCardImage}' />
    </div>

    <!--Mobile Pop Up Body Text, Skills and footer -->
    <p class='grid-item-two-body-text font phone-card'>${proj[lit].mobileBodyText}</p>
    <ul class="js-css-html-button-ul mobile-pop-skill-border phone-card" role="tree">
      <li class="js-css-html-button-li phone-card" role="treeitem">
        <button type="button" class="html-css-js-button font" role="button">${proj[lit].mobileSkills[0]}</button>
      </li>
      <li class="js-css-html-button-li phone-card" role="treeitem">
        <button type="button" class="html-css-js-button font" role="button">${proj[lit].mobileSkills[1]}</button>
      </li>
      <li class="js-css-html-button-li phone-card" role="treeitem">
        <button type="button" class="html-css-js-button font" role="button">${proj[lit].mobileSkills[2]}</button>
      </li>
    </ul>
    <div class="mobile-pop-footer phone-card">
      <button class='phone-card font pop-footer-see-project-text' role='button'>
        <a role='link' href="${proj[lit].liveLink}" target="_blank" rel="noopener noreferrer" >See Live<img class='see-live' src='images/Icons/seelive.svg' alt='See Live Icon'></a>
      </button>
      <button class='phone-card font pop-footer-see-project-text' role='button'>
        <a role='link' href="${proj[lit].sourceLink}" target="_blank" rel="noopener noreferrer">See Source<img class='see-live' src='images/Icons/GitHub-button-icon.svg' alt="Github Icon"</a>
      </button>
    </div>

    <!--Desktop Pop Up Body Text and Skills -->
    <div class='desktop-card pop-up-text-skills-footer-container'>
    <div class='desktop-card pop-up-text-skills-footer-item'>
      <p class='grid-item-two-body-text font pop-description desktop-card'>${proj[lit].desktopBodyText}</p>
    </div>
    <div class='desktop-card pop-up-text-skills-footer-item'>
      <div class='pop-up-text-skills-list'>
      <ul class="js-css-html-button-ul desktop-card">
        <li class="js-css-html-button-li desktop-card" role="treeitem">
          <button type="button" class="html-css-js-button font" role="button">${proj[lit].desktopSkills[0]}</button>
        </li>
        <li class="js-css-html-button-li desktop-card" role="treeitem">
          <button type="button" class="html-css-js-button font" role="button">${proj[lit].desktopSkills[1]}</button>
        </li>
        <li class="js-css-html-button-li desktop-card" role="treeitem">
          <button type="button" class="html-css-js-button font" role="button">${proj[lit].desktopSkills[2]}</button>
        </li>
        </ul>
        <ul class="js-css-html-button-ul pop-up-desktop-skill-ul desktop-card">
        <li class="js-css-html-button-li desktop-card" role="treeitem">
          <button type="button" class="html-css-js-button font" role="button">${proj[lit].desktopSkills[3]}</button>
        </li>
        <li class="js-css-html-button-li desktop-card" role="treeitem">
          <button type="button" class="html-css-js-button font" role="button">${proj[lit].desktopSkills[4]}</button>
        </li>
        <li class="js-css-html-button-li desktop-card" role="treeitem">
          <button type="button" class="html-css-js-button font" role="button">${proj[lit].desktopSkills[5]}</button>
        </li>
     </ul>
      </div>
     <div class="desktop-pop-footer desktop-card">
       <button class='desktop-card font pop-footer-see-project-text' role='button'>
          <a role='link' href="${proj[lit].liveLink}" target="_blank" rel="noopener noreferrer" >See Live<img class='see-live' src='images/Icons/seelive.svg' alt='See Live Icon'></a>
       </button>
       <button class='desktop-card font pop-footer-see-project-text' role='button'>
          <a role='link' href="${proj[lit].sourceLink}" target="_blank" rel="noopener noreferrer">See Source<img class='see-live' src='images/Icons/GitHub-button-icon.svg' alt="Github Icon"</a>
       </button>
     </div>
    </div>
   </div>
   
   </section>
</div>`;
  body.appendChild(sect);
}

// Call function in a loop of the proj array

for (let i = 0; i < proj.length; i++) {
  showCards[i].addEventListener(`click`, () => {
    openCards(i);
  });
}

// Write function to replace class of new created section with another class that has display set to none

function closeModalPop() {
  document.getElementById("modal-pop").classList.replace("proj-display-container", "remove");

  // When this function is called you need to reload page to remove the error on the modal not popping up again
  window.location.reload();
}

// Modal Pop Up end

// Form Validation start

// Declare form variables
const contactForm = document.querySelector('.contact-me-form');
const email = document.querySelector('#input-email');
const submitForm = document.querySelector('#form-submit');
const textArea = document.querySelector('#text-area-input');
const fullName = document.querySelector('#full-name-input')
const regEx = /^[a-z0-9]+@[a-z0-9-]+\.[a-z0-9-.]+$/;

submitForm.addEventListener ('click', (bad) => {
  let emailAddress = email.value;
  const displayError = document.querySelector('.display-error');
  //  if emailAd does not match regex
  if (!regEx.test(emailAddress)){
    // stop event from happening
    bad.preventDefault();
    // display an error message
    displayError.style.display = 'block';
  } else if (regEx.test(emailAddress)){
    // remove error message
    displayError.style.display = 'none';
  }
});

// Form validation ends

// local storage starts 

contactForm.addEventListener('input',() => {
  const formInputKeysAndValues = {
    nameValue: fullName.value,
    emailValue: email.value,
    textAreaValue: textArea.value,
  }
  localStorage.setItem('userFormDataCollected', JSON.stringify(formInputKeysAndValues));
});

let getData = localStorage.getItem('userFormDataCollected');
getData = JSON.parse(getData);

if (getData != null){
  fullName.value = getData.nameValue;
  email.value = getData.emailValue;
  textArea.value = getData.textAreaValue;
}