import generateJoke from './bar.js';
import '../src/main.scss';
import img  from './assets/hed.png'
const hed = document.getElementById('main');
hed.style.backgroundImage = `url(${img})`;

const btn = document.getElementById('getJoke');
btn.addEventListener('click',generateJoke)
