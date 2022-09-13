const iconId = document.querySelector("#hamburger-icon");
const navId = document.querySelector('#nav-items-list-mobile');
const listClass = document.querySelectorAll('.mobile-list-items');
const closeButton = document.querySelector ('.close-button');
const hamburger = document.querySelector('#hamburger');

hamburger.addEventListener ('click', () => {
  navId.classList.toggle('toggle');
  iconId.classList.add('block');
})

closeButton.addEventListener ('click', ()=>{
  iconId.classList.remove('block');
  navId.classList.toggle('toggle');
})

listClass.forEach((element) => element.addEventListener('click',() => {
  iconId.classList.remove('block');
  navId.classList.toggle('toggle');
}))