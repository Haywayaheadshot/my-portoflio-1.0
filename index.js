// Hamburger menu display
// const hamburger = document.querySelector("#hamburger");


const iconId = document.querySelector("#hamburger-icon");
const fullGridContainer = document.querySelector("#over-all-grid");

hamburger.addEventListener("click", function () {
  //Create a class for hamburgerIcon and block hamburger
  iconId.classList.add("block");

  // Create a ul element
  let ul = document.createElement("ul");
  // Create id for ul
  ul.id = "show-menu";
  // Create class for ul
  ul.className = "show-menu-container";
  // Append ul element to over container id
  fullGridContainer.appendChild(ul);
  let showMenu = document.querySelector("#show-menu");


  // Create close div
  let closeIt = document.createElement("a");
  //   Create close content
  closeIt.textContent = "❌";
  // Create close id
  closeIt.className = "close-button";
  //  Append close to ul
  showMenu.appendChild(closeIt);


  // Create li
  let liOne = document.createElement("li");
  //   Create class for li
  liOne.className = "show-menu-list-item";
  liOne.id = "menu-li-one";
  // Create li text content
  liOne.innerHTML =
    "<a href='#link-portoflio' class='show-menu-item-link'>Portfolio</a>";
  // Append li to ul id
  showMenu.appendChild(liOne);


  // Create li
  let liTwo = document.createElement("li");
  //   Create id for li
  liTwo.className = "show-menu-list-item";
  liTwo.id = "menu-li-two";
  // Create li text content
  liTwo.innerHTML =
    "<a href='#link-about-me' class='show-menu-item-link'>About</a>";
  // Append li to ul id
  showMenu.appendChild(liTwo);


  // Create li
  let liThree = document.createElement("li");
  //   Create class for li
  liThree.className = "show-menu-list-item";
  liThree.id = "menu-li-three";
  // Create li text content
  liThree.innerHTML =
    "<a href='#link-contact-form' class='show-menu-item-link'>Contact</a>";
  // Append li to ul id
  showMenu.appendChild(liThree);

  closeIt.addEventListener('click',() => {
    iconId.classList.remove('block');
    showMenu.classList.remove('show-menu-container');
    showMenu.removeAttribute('show-menu');
    closeIt.classList.remove('close-button');
    liOne.removeAttribute('menu-li-one');
    liTwo.removeAttribute('menu-li-two');
    window.location.reload()
  })
});



// add event listener for close
// closeIt.addEventListener("click", function () {
//   // Undo hamburger block
//   iconId.classList.remove('block');
//   // replace class for ul
//   showMenu.classList.replace('show-menu-container','block');
//   //
// });

window.onscroll = () => {
  window.location.reload();
};

