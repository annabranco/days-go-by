'use strict';

/* global
document,
console,
Audio,
setTimeout */

// ================= AUDIO
var bgMusic = new Audio('../audio/blueAlpineVillage.mp3');
var sfxMorning = new Audio('../audio/birdsSinging.mp3');
var sfxRain = new Audio('../audio/rain.ogg');
var sfxThunder = new Audio('../audio/thunder.mp3');
var sfxHeavyRain = new Audio('../audio/heavyRain.ogg');

// ================= VARIABLES
var makeDay = document.querySelector('.makeDay');
var makeRain = document.querySelector('.makeRain');
var makeNight = document.querySelector('.makeNight');
var sky = document.querySelector('.sky');
var hills = document.querySelector('.hills');
var grass = document.querySelector('.grass');
var flower = document.querySelector('.flower');
var cloud = document.querySelector('.cloud');
var cloudsHigh = document.querySelector('.clouds-high');
var sun = document.querySelector('.sun');
var rain = document.querySelector('.rain');
var heavyRain = document.querySelector('.heavyRain');
var rainbow = document.querySelector('.rainbow');


var makeRNight = document.querySelector('.makeRNight');


// ================= LIGHTNING EFFECTS




function flash() {
  var tempSkyImg = sky.style.backgroundImage;
  var tempSkyCol = sky.style.backgroundColor;
  alert(sky.style.backgroundImage);
  alert(sky.style.backgroundColor)

  sky.style.backgroundImage = '';
  sky.style.backgroundColor = 'white';

  setTimeout(function() {
    sky.style.backgroundImage = tempSkyImg;
    sky.style.backgroundColor = tempSkyCol;
  }, 500);
}

// ---------------- WEATHER EVENTS

// function rain() {
//   flash();
//   cloudsHigh.style.visibility = 'visible';
//   sfxRain.play();
//   cloud.src = 'https://preview.ibb.co/c4yVH8/cloud2.png';
//   sky.classList.add('rainny');
//   hills.style.opacity -= '0.2';
//   grass.style.opacity -= '0.2';
// }

// ---------------- NATURE SECONDARY EVENTS

// function bloom() {
//   flower.classList.add('flower--animate');
// }


// ================== TIME EVENTS

//---------- Day
// function day() {
//   sfxMorning.play();
//   sun.classList.add('sun--rise');
//
//
//   setTimeout(function() {
//     sky.classList.add('day');
//   }, 1800);
// }

//---------- Night
// function night() {
//   cloud.style.visibility = 'hidden';
//
//   sun.classList.remove('sun--rise');
//   sun.classList.add('sun--set');
//
//   setTimeout(function() {
//     sky.classList.add('twilight');
//
//     setTimeout(function() {
//       sky.classList.add('night');
//
//     }, 1000);
//
//   }, 1600);
// }

//---------- Rainny Night
// function rainnyNight() {
//   rain();
//   // sky.classList.add('rainny');
// }
//
// function makeItRain() {
//   cloud.style.visibility = 'visible';
//
//   setTimeout(function() {
//     rain();
//     bloom();
//
//   }, 1600);
// }



// ================== BUTTONS

// makeDay.addEventListener('click', day);
// makeRain.addEventListener('click', rain);
// makeNight.addEventListener('click', night);
// makeRNight.addEventListener('click', rainnyNight);


// =================== START =========================

function start() {
  bgMusic.volume = 0.2;
  bgMusic.play();
}

//start();