const refs = {
  menuToggle: document.querySelector('.menu-toggle'),
  registrationBtn: document.querySelector('.user-btn'),
  navigation: document.querySelector('.navigation'),
  menuContainer: document.querySelector('.menu__container'),
  viewport: document,
};

// refs.viewport.addEventListener("resize", checkWiewport);

// function checkWiewport() {
//     let width = window.innerWidth();
//     if (width > ) {
        
//     }
// }

refs.menuToggle.addEventListener('click', classToggle);

function classToggle() {
  if (refs.navigation.classList.contains('is-hidden')) {
    refs.navigation.classList.remove('is-hidden');
    refs.menuContainer.classList.add('is-open');
    return;
  }
  refs.navigation.classList.add('is-hidden');
  refs.menuContainer.classList.remove('is-open');
}
