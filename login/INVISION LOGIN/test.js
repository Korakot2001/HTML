var img = new Image()
img.src = 'trees.jpg';

var bg;
var bg2;
var topc;
var calendar;
var content;
var controls;
var circle;
var bc;
var button;
var signIn;
var loader;
var x;
var y;

function materialClick(event) {
  bg = document.querySelector('.bg');
  bg2 = document.querySelector('.bg2');
  topc = document.querySelector('.top');
  calendar = document.querySelector('.calendar');
  content = document.querySelector('.content');
  controls = document.querySelector('.controls');
  circle = document.querySelector('.circle');
  bc = document.querySelector('.button-container');
  button = document.querySelector('.button');
  signIn = document.querySelector('.sign-in');
  loader = document.querySelector('.loader');
  x = event.offsetX - circle.offsetWidth / 2;
  y = event.offsetY - circle.offsetHeight / 2;
  
  circle.classList.remove('animate');
  circle.style.left = x + 'px';
  circle.style.top = y + 'px';
  bc.style.zIndex = 1;
  setTimeout(function() {
    circle.classList.add('animate');
    button.classList.add('animate');
    signIn.classList.add('animate');
    loader.classList.add('animate');
    setTimeout(function() {
      loader.classList.add('animateOut');
    }, 1000);
    setTimeout(function() {
      controls.classList.add('hidden');
      bg.classList.add('no-image');
      bg2.classList.add('visible');
      topc.classList.add('visible'); 
      calendar.classList.add('visible');
    }, 1460);
    setTimeout(function() {
      content.classList.add('removed')
    }, 2000);
  }, 50);
}

function restart() {
  bc.style.zIndex = 0;
  button.classList.remove('animate');
  signIn.classList.remove('animate');
  loader.classList.remove('animate');
  loader.classList.remove('animateOut');
  controls.classList.remove('hidden');
  bg.classList.remove('no-image');
  bg2.classList.remove('visible');
  topc.classList.remove('visible');
  calendar.classList.remove('visible');
  content.classList.remove('removed');
  document.querySelectorAll('.input').forEach(input => input.value = '');
}
