'use strict';


/* global
sky,
hills,
grass,
flower,
cloud,
cloudsHigh,
sun,
rain,
document,
console,
Audio,
setTimeout */

// ==================== TESTING AREA

var testeConsole = document.querySelector('.teste-console');
var teste01 = document.querySelector('.teste01');
var teste02 = document.querySelector('.teste02');
var teste03 = document.querySelector('.teste03');
var teste04 = document.querySelector('.teste04');
var teste05 = document.querySelector('.teste05');
var teste06 = document.querySelector('.teste06');
var teste07 = document.querySelector('.teste07');
var teste08 = document.querySelector('.teste08');
var teste09 = document.querySelector('.teste09');
var teste10 = document.querySelector('.teste10');
var teste11 = document.querySelector('.teste11');
var teste12 = document.querySelector('.teste12');
var teste13 = document.querySelector('.teste13');

var elementsList = [
  sky,
  hills,
  grass,
  flower,
  cloud,
  cloudsHigh
];

teste01.addEventListener('click',lightNeutral);
teste02.addEventListener('click',lightDay);
teste03.addEventListener('click',lightTwilight);
teste04.addEventListener('click',lightNight);
teste05.addEventListener('click',addClouds);
teste06.addEventListener('click',addMoreClouds);
teste07.addEventListener('click',addRain);
teste08.addEventListener('click',clearSky);
teste09.addEventListener('click',addSun);
teste10.addEventListener('click',addCloudsHigh);
teste11.addEventListener('click',addCloud);
teste12.addEventListener('click',makeItRain);
teste13.addEventListener('click',addFlower);


function lightNeutral() {
  var i;
  for (i = 0; i < elementsList.length; i++) {
    elementsList[i].classList.remove('day', 'twilight', 'night');
    elementsList[i].classList.add('neutral');
  }

}

function lightDay() {
  var j;
  lightNeutral();
  for (j = 0; j < elementsList.length; j++) {
    elementsList[j].classList.remove('neutral');
    elementsList[j].classList.add('day');
  }
}

function lightTwilight() {
  var j;
  lightNeutral();
  for (j = 0; j < elementsList.length; j++) {
    elementsList[j].classList.remove('neutral');
    elementsList[j].classList.add('twilight');
  }
}

function lightNight() {
  var j;
  lightNeutral();
  for (j = 0; j < elementsList.length; j++) {
    elementsList[j].classList.remove('neutral');
    elementsList[j].classList.add('night');
  }
}

function clearSky() {
  var j;
  for (j = 0; j < elementsList.length; j++) {
    elementsList[j].classList.remove('clouds');
    elementsList[j].classList.remove('moreclouds');
    elementsList[j].classList.remove('itrains');
  }
}

function addClouds() {
  var j;
  clearSky();
  for (j = 0; j < elementsList.length; j++) {
    elementsList[j].classList.add('clouds');
  }
}

function addMoreClouds() {
  var j;
  clearSky();
  for (j = 0; j < elementsList.length; j++) {
    elementsList[j].classList.add('moreclouds');
  }
}

function addRain() {
  var j;
  clearSky();
  for (j = 0; j < elementsList.length; j++) {
    elementsList[j].classList.add('itrains');
  }
}

function addSun() {
  sun.classList.toggle('teste');
  if (sun.style.display === 'block') {
    sun.style.display = 'none';
  } else {
    sun.style.display = 'block';
  }
}

function addCloudsHigh() {
  cloudsHigh.classList.toggle('teste');
  if (cloudsHigh.style.display === 'block') {
    cloudsHigh.style.display = 'none';
    testeConsole.style.top = '5px';
  } else {
    cloudsHigh.style.display = 'block';
    testeConsole.style.top = '50px';

  }
}

function addCloud() {
  if (cloud.style.display === 'block') {
    cloud.style.display = 'none';
  } else {
    cloud.style.display = 'block';
  }
}

function makeItRain() {
  if (rain.style.display === 'block') {
    rain.style.display = 'none';
  } else {
    rain.style.display = 'block';
  }
}
function addFlower() {
  flower.classList.toggle('teste');
  if (flower.style.display === 'block') {
    flower.style.display = 'none';
  } else {
    flower.style.display = 'block';
  }
}
