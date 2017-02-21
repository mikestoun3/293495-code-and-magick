'use strict';

var ESCAPE_KEY_CODE = 27;
var ENTER_KEY_CODE = 13;


// Попап
var offInvisible = document.querySelector('.setup-open');
var onInvisible = document.querySelector('.setup-close');
var setup = document.querySelector('.setup');

var setupSubmitDialog = document.querySelector('.setup-submit');


offInvisible.addEventListener('click', function () {
  setup.classList.remove('invisible');
});
onInvisible.addEventListener('click', function () {
  setup.classList.add('invisible');
});

// стилизация пендальфа

var wizard = document.querySelector('#wizard');
var wizardCoat = wizard.querySelector('#wizard-coat');
var wizardEyes = wizard.querySelector('#wizard-eyes');
var fireballColor = document.querySelector('.setup-fireball-wrap');
var wizardCoatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var wizardEyesColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];
var fireballColors = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];


wizardCoat.addEventListener('click', function () {
  var colorNum = Math.floor(Math.random() * wizardCoatColors.length);
  wizardCoat.style.fill = wizardCoatColors [colorNum];
});


wizardEyes.addEventListener('click', function () {
  var colorNum = Math.floor(Math.random() * wizardEyesColors.length);
  wizardEyes.style.fill = wizardCoatColors [colorNum];
});

fireballColor.addEventListener('click', function () {
  var colorNum = Math.floor(Math.random() * fireballColors.length);
  fireballColor.style.background = fireballColors [colorNum];
});


// стилизация окончена

var isActivateEvent = function (event) {
  return event.keyCode && event.keyCode === ENTER_KEY_CODE;
};

var setupKeydownHandler = function (event) {
  if (event.keyCode === ESCAPE_KEY_CODE) {
    closeDialog();
  }
};

var showDialog = function () {
  setup.classList.remove('invisible');
  document.addEventListener('keydown', setupKeydownHandler);
};

var closeDialog = function () {
  setup.classList.add('invisible');
  document.removeEventListener('keydown', setupKeydownHandler);
};

offInvisible.addEventListener('keydown', function (event) {
  if (isActivateEvent(event)) {
    showDialog();
    handleBtnKeyPress(event);
  }
});

onInvisible.addEventListener('keydown', function (event) {
  if (isActivateEvent(event)) {
    closeDialog();
    handleBtnKeyPress(event);
  }
});

setupSubmitDialog.addEventListener('click', function (event) {
  event.preventDefault();
  closeDialog();
  handleBtnClick(event);
});

setupSubmitDialog.addEventListener('keydown', function (event) {
  event.preventDefault();
  if (isActivateEvent(event)) {
    closeDialog();
    handleBtnKeyPress(event);
  }
});

function handleBtnClick(event) {
  toggleButton(event.target);
}

function handleBtnKeyPress(event) {
  if (isActivateEvent(event)) {
    toggleButton(event.target);
  }
}

function toggleButton(element) {
  var pressed = (element.getAttribute('aria-pressed') === 'true');
  element.setAttribute('aria-pressed', !pressed);
}

