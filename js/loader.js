window.onload = () => {
  setTimeout(() => {
    const loader = document.getElementById('loader');
    const cube = document.getElementsByClassName('sk-cube-grid');
    // loader.style = 'display: none;';
    loader.classList.add('fadeout__1');
    cube[0].classList.add('fadeout__2');

    const bg__imageSet_1 = document.getElementsByClassName('bg__imageSet_1');
    const title = document.getElementsByClassName('title');
    bg__imageSet_1[0].classList.add('blur__1');
    title[0].classList.add('blur__2');

    const header = document.querySelector('header');
    header.classList.add('blur__2');
  }, 3.85*1000); // 5000ms
};

