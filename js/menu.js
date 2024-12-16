const menu_li = document.getElementsByClassName('menu_li');

const info  = document.getElementById('info');
const disc  = document.getElementById('disc');
const score = document.getElementById('score');
const drive = document.getElementById('drive');
const lic   = document.getElementById('lic');
const sprt  = document.getElementById('sprt');

info.addEventListener('click', () => {
  window.location.href = '/infomation'
});

disc.addEventListener('click', () => {
  window.location.href = '/discription'
});

score.addEventListener('click', () => {
  window.location.href = '/score'
});

drive.addEventListener('click', () => {
  window.location.href = 'https://drive.google.com/'
});

lic.addEventListener('click', () => {
  window.location.href = '/license'
});

sprt.addEventListener('click', () => {
  window.location.href = '/support'
});
