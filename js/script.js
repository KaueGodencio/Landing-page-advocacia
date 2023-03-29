// border-bottom header
const header = document.querySelector('header')
window.addEventListener('scroll', function () {
  header.classList.toggle('sticky', window.scrollY > 100)
})

// menubar
let menu = document.querySelector('#menu-icon')
let navlist = document.querySelector('.navlist')

menu.onclick = () => {
  menu.classList.toggle('bx-x')
  navlist.classList.toggle('open')
}

window.onscroll = () => {
  menu.classList.remove('bx-x')
  navlist.classList.remove('open')
}

// MultiText
const typingEffect = new Typed('.multiText', {
  strings: ['Direito Trabalhista','Direito Previdenciário', 'Contencioso Cível'],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 1500
})
