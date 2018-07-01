'use strict';

// audio
var bgMusic = new Audio('../audio/BlueAlpineVillage.mp3');
var sfxMorning = new Audio('../audio/BirdsSinging.mp3');
var sfxRain = new Audio('../audio/Rain.mp3');

// other variables
var makeDay = document.querySelector(".makeDay");
var makeRain = document.querySelector(".makeRain");
var makeNight = document.querySelector(".makeNight");
var sky = document.querySelector(".background");
var cloud = document.querySelector(".cloud");
var sun = document.querySelector(".sun");
var hills = document.querySelector(".hills");
var grass = document.querySelector(".grass");
var flower = document.querySelector(".flower");

function start() {
bgMusic.volume = 0.2;
bgMusic.play();
}

// start();

function rain() {
  sfxRain.play();
  cloud.src = "https://preview.ibb.co/c4yVH8/cloud2.png";
}

function bloom() {
  flower.classList.add('flower--animate');
}

function day() {
  sfxMorning.play();
  sun.classList.add('sun--rise');


  setTimeout(function() {
  sky.classList.add('day');
    hills.style.opacity = '1';
    grass.style.opacity = '1';
  }, 1800);

}

function night() {
  cloud.style.visibility = 'hidden';

  sun.classList.remove('sun--rise');
  sun.classList.add('sun--set');

  setTimeout(function() {
  sky.classList.add('twilight');

  hills.style.opacity = '0.7';
  grass.style.opacity = '0.5';

  setTimeout(function() {
    sky.classList.add('night');

  }, 1000);

}, 1600);
}

function rainnyNight() {
  rain();
  sky.style.backgroundImage = 'linear-gradient(to top, rgba(53, 59, 72,0.7), rgba(53, 59, 72,1))'
  ;
  sky.style.backgroundColor = 'rgba(39, 60, 117, 1)';
  hills.style.opacity = '0.5';
  grass.style.opacity = '0.3';
}

function makeItRain() {
  cloud.style.visibility = 'visible';

    setTimeout(function() {
      rain();
      bloom();

}, 1600);

}

makeDay.addEventListener('click', day);
makeRain.addEventListener('click', makeItRain);
makeNight.addEventListener('click', night);
