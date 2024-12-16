document.onselectstart = () => false;
document.onmousedown = () => false;
document.body.onselectstart = () => false;
document.body.onmousedown = () => false;

document.oncontextmenu = function () {return false;}
document.getElementsByTagName('html')[0].oncontextmenu = function () {return false;}
document.body.oncontextmenu = function () {return false;}
