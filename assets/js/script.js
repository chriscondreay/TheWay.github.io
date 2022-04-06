const toggle = document.querySelector('.toggle');
const nav = document.querySelector('.nav');
const btn = document.querySelector('button')

const toggleNav = () => {
  if (nav.classList.contains('active')) {
    nav.classList.remove('active');
    toggle.querySelector('a').innerHTML = '<i class="fa-solid fa-bars"></i>'
  } else {
    nav.classList.add('active');
    toggle.querySelector('a').innerHTML = '<i class="fa-solid fa-xmark"></i>'
  }
}

const handleBtn = () => {
  
}

toggle.addEventListener('click', toggleNav, false);

button.addEventListener('click', handleBtn, false);