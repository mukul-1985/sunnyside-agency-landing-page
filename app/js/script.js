const btnHamburger = document.querySelector("#btnHamburger")
const navBar = document.querySelector("#navBar")

btnHamburger.addEventListener('click', () => {
  console.log('click hamburger')
  if(navBar.classList.contains('header__open')) {
    navBar.classList.add('header__menue')
    navBar.classList.add('hide__for__mobile')
    navBar.classList.remove('header__open')
  } else {
    navBar.classList.remove('header__menue')
    navBar.classList.remove('hide__for__mobile')
    navBar.classList.add('header__open')
  }
  
})