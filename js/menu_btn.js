
const btn = document.getElementById('menu__btn');
const menu = document.getElementById('menu');

const bg__menu = document.getElementById('bg__menu');

btn.addEventListener('click', () => {
  if (btn.classList.contains('active')) {
    btn.classList.remove('active');
    menu.style.display = 'none';

    bg__menu.classList.remove('active');
    bg__menu.classList.add('inactive');
    i = 0;
    setTimeout(() => {
      if (i==0) {
        bg__menu.style.zIndex = -900
      }
    }, 0.5*1000)
  } else {
    btn.classList.add('active');
    menu.style.display = 'block';

    bg__menu.classList.add('active');
    bg__menu.classList.remove('inactive');

    i = 1;
    //setTimeout(() => {
      bg__menu.style.zIndex = 50
    //}, 0.5*1000)
  }
});
