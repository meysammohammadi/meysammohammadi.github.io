"use strict";

//////////////////////////////////////////////////////////////////
//////////////////////////// variables ///////////////////////////
//////////////////////////////////////////////////////////////////

// range elements
let theControllerInput = document.getElementById("one");
let rangeTwo = document.getElementById("two");
// to show the number we use labels above them
let labelController = document.querySelector(".label.one");
let labelTwo = document.querySelector(".label.two");
// NOTE we need a function (getTheCurrentValues) to store the values each time user sets a new input because the js variables only store the result values at the time they initiated, they not storing the reference :(
let controllerMinVal;
let controllerMaxVal;
let controllerVal;
let controllerD;
let targetMinVal;
let targetMaxVal;
// theme switch
let themeColorModeSwitch = document.getElementById("themeColorModeSwitch");
let themeColorModeLabel = document.getElementById("themeColorModeLabel");
// options dropdown
let selectOptionsButton = document.querySelector(".bottom-button");
// set min max for the ranges
let controllerMinInputElement = document.getElementById(
  "controllerMinInputElement"
);
let controllerMaxInputElement = document.getElementById(
  "controllerMaxInputElement"
);

let rangeTwoMinInputElement = document.getElementById(
  "rangeTwoMinInputElement"
);
let rangeTwoMaxInputElement = document.getElementById(
  "rangeTwoMaxInputElement"
);

// range progress bars
let progressBarOne = document.getElementById("progressBarOne");
let progressBarTwo = document.getElementById("progressBarTwo");

// controller range custom value input
let controllerRangeCustomValueInput = document.getElementById(
  "controllerRangeCustomValueInput"
);

// d input for controller range
let distanceInput = document.getElementById("distanceInput");

// n in range two
let stepsInput = document.getElementById("stepsInput");

//////////////////////////////////////////////////////////////////
//////////////////////////// functions ///////////////////////////
//////////////////////////////////////////////////////////////////

//////////////////// set d for controller range ////////////////////
function setDForControllerRange() {
  if (
    parseFloat(distanceInput.value) < parseFloat(theControllerInput.max) &&
    parseFloat(distanceInput.value) >= 1
  ) {
    theControllerInput.step = parseFloat(distanceInput.value);
  } else {
    // 👇👇👇👇👇👇👇👇👇👇👇👇
    // alert("error");
    errorThrower(
      "caution",
      "The distance between each term can't be bigger than maximum or below 1"
    );
    distanceInput.value = 1;
  }
}

//////////////////// get new values ////////////////////
function getTheCurrentValues() {
  controllerMinVal = parseFloat(theControllerInput.min);
  controllerMaxVal = parseFloat(theControllerInput.max);
  controllerVal = parseFloat(theControllerInput.value);
  controllerD = parseFloat(theControllerInput.step);
}

//////////////////// label ////////////////////
// // // labels values
function settingLabels() {
  labelController.innerHTML = theControllerInput.value;
  labelTwo.innerHTML = rangeTwo.value;
}

// // // place labels
function placeTheLabelsOverTheThumbs(rangeElem, labelElem) {
  let rangeElemX = rangeElem.getBoundingClientRect().x;
  let rangeElemY = rangeElem.getBoundingClientRect().y;
  let rangeElemRight = rangeElem.getBoundingClientRect().right;
  let rangeElemWidth = rangeElem.offsetWidth;
  let rangeElemValue = rangeElem.value;
  let rangeElemMax = rangeElem.max;
  let rangeElemMin = rangeElem.min;
  let scrollTopPosition = document.documentElement.scrollTop;

  let offsetBecauseOfThumbWidth = 15;
  let thumbWidth = 14;

  let labelElemWidth = labelElem.offsetWidth;
  let labelElemHeight = labelElem.offsetHeight;

  let rangeValFractionOfOne =
    (rangeElemValue - rangeElemMin) / (rangeElemMax - rangeElemMin);
  //   // NOTE slider thumb always stays inset in the range, meaning that it starts from left corner of the range and stops at the (right side of the range - thumb width) point
  let locationOfThumbLeft =
    (rangeElemWidth - thumbWidth) * rangeValFractionOfOne - thumbWidth / 2;

  labelElem.style.left =
    locationOfThumbLeft +
    rangeElemX -
    labelElemWidth / 2 +
    offsetBecauseOfThumbWidth -
    1 +
    "px";
  labelElem.style.top =
    rangeElemY - labelElemHeight - 20 + scrollTopPosition + "px";
}

// // // adjust progressbar
function adjustProgressbar(rangeElem, progressbarElem) {
  let rangeElemLeft = rangeElem.getBoundingClientRect().left;
  let rangeElemRight = rangeElem.getBoundingClientRect().right;
  let rangeElemWidth = rangeElem.offsetWidth;
  let rangeElemValue = rangeElem.value;
  let rangeElemMax = rangeElem.max;
  let rangeElemMin = rangeElem.min;

  let offsetBecauseOfThumbWidth = 15;
  let thumbWidth = 14;

  let rangeValFractionOfOne =
    (rangeElemValue - rangeElemMin) / (rangeElemMax - rangeElemMin);

  let locationOfThumbLeft =
    (rangeElemWidth - thumbWidth) * rangeValFractionOfOne;

  let progressbarWidth = locationOfThumbLeft;

  progressbarElem.style.left = rangeElemLeft + "px";
  progressbarElem.style.width = progressbarWidth + "px";
}

//////////////////// color switch mode ////////////////////
// // // light mode
function colorLightModeSwitching() {
  document.documentElement.style.setProperty("--background", "#e7f0f0");
  document.documentElement.style.setProperty("--fore-ground", "#fff");
  // document.documentElement.style.setProperty("--focus-color", "#2a6ffa");
  document.documentElement.style.setProperty("--focus-color", "#67b424");
  document.documentElement.style.setProperty("--font-color", "#345066");
  document.documentElement.style.setProperty("--white-font", "#fff");
  document.documentElement.style.setProperty("--border-color", "#bccee0");
  document.documentElement.style.setProperty("--dimmed-label", "#5f777f");
  document.documentElement.style.setProperty("--dimmed-thumb", "#bddeff");
}

// // // dark mode
function colorDarkModeSwitching() {
  document.documentElement.style.setProperty("--background", "#4a606b");
  document.documentElement.style.setProperty("--fore-ground", "#394d5b");
  // document.documentElement.style.setProperty("--focus-color", "#2a6ffa");
  document.documentElement.style.setProperty("--focus-color", "#67b424");
  document.documentElement.style.setProperty("--font-color", "#ffffff");
  document.documentElement.style.setProperty("--white-font", "#fff");
  document.documentElement.style.setProperty("--border-color", "#1e313d");
  document.documentElement.style.setProperty("--dimmed-label", "#5c7d9d");
  document.documentElement.style.setProperty("--dimmed-thumb", "#39595c");
}

//////////////////// setting range MIN/MAX ////////////////////
// // // min setting
function setMin(rangeElem, inputMin) {
  if (parseFloat(inputMin.value) > parseFloat(rangeElem.max)) {
    // 👇👇👇👇👇👇👇👇👇👇👇👇
    // alert("error");
    errorThrower(
      "caution",
      "Minimum cant be bigger than the maximum. Set maximum to a bigger number first then try again."
    );
    rangeElem.min = parseFloat(rangeElem.max) - 1;
    // 👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇
    // 👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇
    // 👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇
    // 👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇
    // no matter which min we change, this happens to controller min input
    inputMin.value = parseFloat(rangeElem.min);
    controllerRangeCustomValueInput.value = controllerMinInputElement.value;
  } else {
    rangeElem.min = parseFloat(inputMin.value);
  }
}
// // // max setting
function setMax(rangeElem, inputMax) {
  if (parseFloat(inputMax.value) < parseFloat(rangeElem.min)) {
    // 👇👇👇👇👇👇👇👇👇👇👇👇
    // alert("error");
    errorThrower(
      "caution",
      "Maximum can't be less than the minimum. Set minimum to a lower number first then try again."
    );
    rangeElem.max = parseFloat(rangeElem.min) + 1;
    // 👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇
    // 👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇
    // 👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇
    // 👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇
    // no matter which max we change, this happens to controller max input
    inputMax.value = parseFloat(rangeElem.max);
    controllerRangeCustomValueInput.value = controllerMaxInputElement.value;
  } else {
    rangeElem.max = parseFloat(inputMax.value);
  }
}

//////////////////// Make all text boxes digit entries only ////////////////////
function makeTextBoxesDigitsOnly(textboxElem) {
  textboxElem.addEventListener("input", () => {
    // if (textboxElem !== stepsInput && textboxElem.value === "") {
    //   alert("error");
    //   textboxElem.value = 1;
    // }
    // 👇👇👇👇👇👇👇👇👇👇
    // make this error free. I tried code above but it's not efficient
    // stepsInput (n) should be greater than 1 less than howManyTermsInFirstRange()
    // distance (d) can not be less than 1 and greater than howManyTermsInFirstRange()
    // jumpToAValue can not be less than controller.min and greater than controller.max
    // I fixed the min max inputs before but its interfering with the jump input
    textboxElem.value = textboxElem.value.replace(/\D/g, "");
  });

  textboxElem.addEventListener("paste", (e) => {
    e.preventDefault();
    let text = (e.clipboardData || window.clipboardData).getData("text");
    let digitsOnly = text.replace(/\D/g, "");
    document.execCommand("insertText", false, digitsOnly);
  });
}

//////////////////// deactivate li events when options dropdown is closed ////////////////////
// // // deactivate
function deactivateOptionsClickEvent() {
  let OptionOne = selectOptionsButton.querySelector(".option-one");
  let OptionTwo = selectOptionsButton.querySelector(".option-two");
  let OptionThree = selectOptionsButton.querySelector(".option-three");

  OptionOne.style.pointerEvents = "none";
  OptionTwo.style.pointerEvents = "none";
  OptionThree.style.pointerEvents = "none";
}
// // // activate
function activateOptionsClickEvent() {
  let OptionOne = selectOptionsButton.querySelector(".option-one");
  let OptionTwo = selectOptionsButton.querySelector(".option-two");
  let OptionThree = selectOptionsButton.querySelector(".option-three");

  OptionOne.style.pointerEvents = "auto";
  OptionTwo.style.pointerEvents = "auto";
  OptionThree.style.pointerEvents = "auto";
}

// 👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇

//////////////////// return active option ////////////////////
function returnActiveOption() {
  return selectOptionsButton.querySelector(".active").id;
}
//////////////////// execute mapping method ////////////////////
function executeMappingMethod(returnActiveOptionString) {
  switch (returnActiveOptionString) {
    case "linear":
      rangeTwo.value = LinearSequenceTerm();
      // update labels values
      settingLabels();
      // place labels
      placeTheLabelsOverTheThumbs(theControllerInput, labelController);
      placeTheLabelsOverTheThumbs(rangeTwo, labelTwo);
      // adjust progress bars
      adjustProgressbar(theControllerInput, progressBarOne);
      adjustProgressbar(rangeTwo, progressBarTwo);
      break;
    case "quadraticEaseIn":
      rangeTwo.value = quadraticEaseInSequenceTerm();
      // update labels values
      settingLabels();
      // place labels
      placeTheLabelsOverTheThumbs(theControllerInput, labelController);
      placeTheLabelsOverTheThumbs(rangeTwo, labelTwo);
      // adjust progress bars
      adjustProgressbar(theControllerInput, progressBarOne);
      adjustProgressbar(rangeTwo, progressBarTwo);
      break;
    case "quadraticEaseOut":
      rangeTwo.value = quadraticEaseOutSequenceTerm();
      // update labels values
      settingLabels();
      // place labels
      placeTheLabelsOverTheThumbs(theControllerInput, labelController);
      placeTheLabelsOverTheThumbs(rangeTwo, labelTwo);
      // adjust progress bars
      adjustProgressbar(theControllerInput, progressBarOne);
      adjustProgressbar(rangeTwo, progressBarTwo);
      break;
  }
}
// use 👉👉👉👉👉👉 executeMappingMethod(returnActiveOption());

//////////////////// n terms in controller range ////////////////////
function howManyTermsInTheFirstRange() {
  getTheCurrentValues();
  return (controllerMaxVal - controllerMinVal) / controllerD + 1;
}
//////////////////// return i in controller range ////////////////////
function iInController() {
  getTheCurrentValues();
  return (controllerVal - controllerMinVal) / controllerD;
}

//////////////////// index mapping ////////////////////
// returns mapped i in range two to use in function to make the term
function indexMapping(iInControllerRange, nInRangeTwo = "") {
  let nTermsInControllerRange = howManyTermsInTheFirstRange();
  let nTermInRangeTwo;
  let iInRangeTwo;

  if (nInRangeTwo === "") {
    // as formula says n = ((max - min) / d) + 1
    // in indexes the d is 1 because its a simple linear sequence starting from 0 to n-1
    nTermInRangeTwo =
      (parseFloat(rangeTwo.max) - parseFloat(rangeTwo.min)) / 1 + 1;

    iInRangeTwo =
      Math.round(iInControllerRange * (nTermInRangeTwo - 1)) /
      (nTermsInControllerRange - 1);
  } else {
    nTermInRangeTwo = parseFloat(nInRangeTwo);

    // RESOLVED ERROR 👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇
    // RESOLVED ERROR 👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇

    let iInControllerMappedToNInRangeTwo = Math.round(
      (iInControllerRange / (nTermsInControllerRange - 1)) *
        (nTermInRangeTwo - 1)
    );

    // // test
    // console.log(
    //  "iInControllerMappedToNInRangeTwo:",
    //  iInControllerMappedToNInRangeTwo
    // ); // gives 0 to 4 when nInRangeTwo is 5

    iInRangeTwo =
      (iInControllerMappedToNInRangeTwo / (nTermInRangeTwo - 1)) *
      (parseFloat(rangeTwo.max) - parseFloat(rangeTwo.min)); // APPROVED 😔😅
  }

  return iInRangeTwo;
}

//////////////// linear sequence ////////////////////
function LinearSequenceTerm() {
  let firstTerm = parseFloat(rangeTwo.min);
  let lastTerm = parseFloat(rangeTwo.max);
  // 👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇
  // 👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇
  // 👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇
  // 👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇
  // stepsInput can't be bigger than n terms in range one
  let indexOfTerm = indexMapping(iInController(), stepsInput.value);
  // this range is controlled by the first range so it doesn't matter how much is the distance
  let distanceBetweenEachTerm = 1;

  let iTerm = firstTerm + indexOfTerm * distanceBetweenEachTerm;
  if (iTerm > lastTerm) {
    // alert("error");
    errorThrower(
      "caution",
      "Your last input passed the maximum. I don't know what exactly happened here but please inform the developer when you encounter this error. Thanks"
    );
  } else {
    return iTerm;
  }
}
//////////////////// nonlinear mapping - quadratic ease-in ////////////////////
function quadraticEaseInSequenceTerm() {
  let firstTerm = parseFloat(rangeTwo.min);
  let lastTerm = parseFloat(rangeTwo.max);
  let indexOfTerm = indexMapping(iInController(), stepsInput.value);
  // as formula says n = ((max - min) / d) + 1
  // in indexes the d is 1 because its a simple linear sequence starting from 0 to n-1
  let nTermsInRangeTwo =
    (parseFloat(rangeTwo.max) - parseFloat(rangeTwo.min)) / 1 + 1;

  let iTerm =
    firstTerm +
    (indexOfTerm / (nTermsInRangeTwo - 1)) ** 2 * (lastTerm - firstTerm);
  return iTerm;
}
//////////////////// nonlinear mapping - quadratic ease-out ////////////////////
function quadraticEaseOutSequenceTerm() {
  let firstTerm = parseFloat(rangeTwo.min);
  let lastTerm = parseFloat(rangeTwo.max);
  let indexOfTerm = indexMapping(iInController(), stepsInput.value);
  // as formula says n = ((max - min) / d) + 1
  // in indexes the d is 1 because its a simple linear sequence starting from 0 to n-1
  let nTermsInRangeTwo =
    (parseFloat(rangeTwo.max) - parseFloat(rangeTwo.min)) / 1 + 1;

  let iTerm =
    firstTerm +
    (1 - ((nTermsInRangeTwo - 1 - indexOfTerm) / (nTermsInRangeTwo - 1)) ** 2) *
      (lastTerm - firstTerm);
  return iTerm;
}
// 👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆

//////////////////////////////////////////////////////////////////
/////////////////////// Event Listeners //////////////////////////
//////////////////////////////////////////////////////////////////

//////////////////// window load ////////////////////
window.onload = function () {
  // update labels values
  settingLabels();
  // theme color mode
  // if (!themeColorModeSwitch.checked) {
  //   // light mode
  //   colorLightModeSwitching();
  //   themeColorModeLabel.innerText = "Dark Mode";
  // } else {
  //   // dark mode
  //   colorDarkModeSwitching();
  //   themeColorModeLabel.innerText = "Light Mode";
  // }
  // NOTEthis code is better as it automatically recognizes the system color mode
  if (window.matchMedia("(prefers-color-scheme : light)").matches) {
    themeColorModeSwitch.checked = false;
    colorLightModeSwitching();
    themeColorModeLabel.innerText = "Dark Mode";
  } else {
    themeColorModeSwitch.checked = true;
    colorDarkModeSwitching();
    themeColorModeLabel.innerText = "Light Mode";
  }

  // make textbox entries digits only
  makeTextBoxesDigitsOnly(controllerMinInputElement);
  makeTextBoxesDigitsOnly(controllerMaxInputElement);
  makeTextBoxesDigitsOnly(controllerRangeCustomValueInput);
  makeTextBoxesDigitsOnly(distanceInput);
  makeTextBoxesDigitsOnly(rangeTwoMinInputElement);
  makeTextBoxesDigitsOnly(rangeTwoMaxInputElement);
  makeTextBoxesDigitsOnly(stepsInput);

  // set min max
  setMin(theControllerInput, controllerMinInputElement);
  setMax(theControllerInput, controllerMaxInputElement);

  // place labels
  placeTheLabelsOverTheThumbs(theControllerInput, labelController);
  placeTheLabelsOverTheThumbs(rangeTwo, labelTwo);

  // adjust progress bars
  adjustProgressbar(theControllerInput, progressBarOne);
  adjustProgressbar(rangeTwo, progressBarTwo);

  // deactivate click events of options in the dropdown when its closed
  deactivateOptionsClickEvent();

  // setting custom input value for the controller range
  controllerRangeCustomValueInput.value = theControllerInput.value;

  // set d for controller range
  setDForControllerRange();

  // range two mapping
  executeMappingMethod(returnActiveOption());
};

//////////////////// window resize ////////////////////
window.onresize = function () {
  // placeTheCustomThumb(theControllerInput, controllerRangeSliderThumb);
  placeTheLabelsOverTheThumbs(theControllerInput, labelController);
  placeTheLabelsOverTheThumbs(rangeTwo, labelTwo);

  // adjust progress bars
  adjustProgressbar(theControllerInput, progressBarOne);
  adjustProgressbar(rangeTwo, progressBarTwo);
};

//////////////////// controller range input ////////////////////
theControllerInput.addEventListener("input", function () {
  placeTheLabelsOverTheThumbs(theControllerInput, labelController);
  placeTheLabelsOverTheThumbs(rangeTwo, labelTwo);
  settingLabels();
  // adjust progress bars
  adjustProgressbar(theControllerInput, progressBarOne);
  adjustProgressbar(rangeTwo, progressBarTwo);
  // setting custom input value for the controller range
  controllerRangeCustomValueInput.value = theControllerInput.value;

  // range two mapping
  executeMappingMethod(returnActiveOption());
});

// // controller range on keydown and keyup cursor icon
theControllerInput.onmousedown = function () {
  theControllerInput.style.cursor = "grabbing";
};

theControllerInput.onmouseup = function () {
  theControllerInput.style.cursor = "grab";
};

//////////////////// theme color switch ////////////////////
themeColorModeSwitch.onchange = function () {
  if (!themeColorModeSwitch.checked) {
    // light mode
    colorLightModeSwitching();
    themeColorModeLabel.innerText = "Dark Mode";
  } else {
    // dark mode
    colorDarkModeSwitching();
    themeColorModeLabel.innerText = "Light Mode";
  }
};

//////////////////// options dropdown ////////////////////
// open and closing of the menu
selectOptionsButton.onclick = function (event) {
  if (!selectOptionsButton.classList.contains("open")) {
    selectOptionsButton.classList.add("open");
    activateOptionsClickEvent();
  } else {
    // selected option
    let li = event.target.closest("li");
    if (li && !li.classList.contains("active")) {
      selectOptionsButton
        .querySelector(".select-options-item.active")
        .classList.remove("active");
      li.classList.add("active");
      selectOptionsButton.prepend(li);
    }
    selectOptionsButton.classList.remove("open");
    deactivateOptionsClickEvent();
  }
  // place labels
  placeTheLabelsOverTheThumbs(theControllerInput, labelController);
  placeTheLabelsOverTheThumbs(rangeTwo, labelTwo);
  // update labels
  settingLabels();
  // adjust progress bars
  adjustProgressbar(theControllerInput, progressBarOne);
  adjustProgressbar(rangeTwo, progressBarTwo);
  // range two mapping
  executeMappingMethod(returnActiveOption());
};

// deselection of the menu
selectOptionsButton.onblur = function () {
  if (!selectOptionsButton.classList.contains("open")) {
    return;
  } else {
    selectOptionsButton.classList.remove("open");
    deactivateOptionsClickEvent();
  }
};

//////////////////// MIN/MAX inputs ////////////////////
// // // controller min input
controllerMinInputElement.onblur = function () {
  setMin(theControllerInput, controllerMinInputElement);
  // place labels
  placeTheLabelsOverTheThumbs(theControllerInput, labelController);
  placeTheLabelsOverTheThumbs(rangeTwo, labelTwo);
  // update labels
  settingLabels();
  // adjust progress bars
  adjustProgressbar(theControllerInput, progressBarOne);
  adjustProgressbar(rangeTwo, progressBarTwo);
};

// // // controller max input
controllerMaxInputElement.onblur = function () {
  setMax(theControllerInput, controllerMaxInputElement);
  // place labels
  placeTheLabelsOverTheThumbs(theControllerInput, labelController);
  placeTheLabelsOverTheThumbs(rangeTwo, labelTwo);
  // update labels
  settingLabels();
  // adjust progress bars
  adjustProgressbar(theControllerInput, progressBarOne);
  adjustProgressbar(rangeTwo, progressBarTwo);
};

// // // range two min input
rangeTwoMinInputElement.onblur = function () {
  setMin(rangeTwo, rangeTwoMinInputElement);
  // place labels
  placeTheLabelsOverTheThumbs(theControllerInput, labelController);
  placeTheLabelsOverTheThumbs(rangeTwo, labelTwo);
  // update labels
  settingLabels();
  // adjust progress bars
  adjustProgressbar(theControllerInput, progressBarOne);
  adjustProgressbar(rangeTwo, progressBarTwo);
};

// range two max input
rangeTwoMaxInputElement.onblur = function () {
  setMax(rangeTwo, rangeTwoMaxInputElement);
  // place labels
  placeTheLabelsOverTheThumbs(theControllerInput, labelController);
  placeTheLabelsOverTheThumbs(rangeTwo, labelTwo);
  // update labels
  settingLabels();
  // adjust progress bars
  adjustProgressbar(theControllerInput, progressBarOne);
  adjustProgressbar(rangeTwo, progressBarTwo);
};

//////////////////// set d for controller range ////////////////////
distanceInput.onblur = function () {
  setDForControllerRange();

  // update labels values
  settingLabels;
  // place labels
  placeTheLabelsOverTheThumbs(theControllerInput, labelController);
  placeTheLabelsOverTheThumbs(rangeTwo, labelTwo);

  // adjust progress bars
  adjustProgressbar(theControllerInput, progressBarOne);
  adjustProgressbar(rangeTwo, progressBarTwo);
};

//////////////////// controller go to custom value ////////////////////
controllerRangeCustomValueInput.onblur = function () {
  if (
    parseFloat(controllerRangeCustomValueInput.value) >=
      parseFloat(theControllerInput.min) &&
    parseFloat(controllerRangeCustomValueInput.value) <=
      parseFloat(theControllerInput.max)
  ) {
    theControllerInput.value = parseFloat(
      controllerRangeCustomValueInput.value
    );

    // place labels
    placeTheLabelsOverTheThumbs(theControllerInput, labelController);
    placeTheLabelsOverTheThumbs(rangeTwo, labelTwo);
    // update labels
    settingLabels();
    // adjust progress bars
    adjustProgressbar(theControllerInput, progressBarOne);
    adjustProgressbar(rangeTwo, progressBarTwo);
    // range two mapping
    executeMappingMethod(returnActiveOption());
  } else {
    // 👇👇👇👇👇👇👇👇👇👇
    // alert("error");
    errorThrower(
      "caution",
      "Your input must be something between the specified minimum and the maximum numbers."
    );
  }
};

///////////////////////////////////////////////////
// old code
///////////////////////////////////////////////////

// // slider thumbs
// let controllerRangeSliderThumb = document.querySelector(
//   ".controller.slider-thumb"
// );

// // a function to put the custom thumb in the right place
// function placeTheCustomThumb(rangeElement, customSlider) {
//   // when page size updates we should have the .offsets to calculate the start of the range - then we should do a ((.clientWidth/(.max - .min))*.value) + .offsetLeft to see where we should put the custom thumb
//   let rangeElementOffsetLeft = parseFloat(rangeElement.offsetLeft);
//   let rangeElementClientWidth = parseFloat(rangeElement.clientWidth);
//   let rangeElementMax = parseFloat(rangeElement.max);
//   let rangeElementMin = parseFloat(rangeElement.min);
//   let rangeElementValue = parseFloat(rangeElement.value);

//   // NOTE this -7px is half width of the custom slider thumb
//   customSlider.style.left =
//     (rangeElementClientWidth / (rangeElementMax - rangeElementMin)) *
//       rangeElementValue +
//     rangeElementOffsetLeft -
//     7 +
//     "px";

//   settingLabels();
//   labelController.style.left =
//     (rangeElementClientWidth / (rangeElementMax - rangeElementMin)) *
//       rangeElementValue +
//     rangeElementOffsetLeft -
//     22 +
//     "px";
//   labelController.style.top = customSlider.offsetTop - 35 + "px";

//   rangeElement.addEventListener("input", function () {
//     rangeElementValue = parseFloat(rangeElement.value);
//     customSlider.style.left =
//       (rangeElementClientWidth / (rangeElementMax - rangeElementMin)) *
//         rangeElementValue +
//       rangeElementOffsetLeft -
//       7 +
//       "px";
//     settingLabels();
//     labelController.style.left =
//       (rangeElementClientWidth / (rangeElementMax - rangeElementMin)) *
//         rangeElementValue +
//       rangeElementOffsetLeft -
//       22 +
//       "px";
//   });
//   rangeElement.addEventListener("mousedown", function (event) {
//     testing.innerText = event.clientX + "px";
//   });
// }
// placeTheCustomThumb(theControllerInput, controllerRangeSliderThumb);

// to map any sequence to any other sequence, we can do this:
// 1 - any sequence has a function to make the terms from i=0 to i=n-1
// 2 - these indexes are linear sequences themselves (with d = 1)
// 3 - we can retrieve the index and use it to build the equivalent term in the other sequence
// function to make the equivalent index
// function mappedIndexForRangeTwo(controllerMin, controllerMax, controllerIndex, rangeTwoMin, rangeTwoMax) {
//   return Math.round((controllerIndex - controllerMin) / (controllerMax - controllerMin)) * (rangeTwoMax - rangeTwoMin);
// }
// // calculate and retrieve the equivalent i term in result sequence
// // for linear sequence
// function iTermOfLinearSequence(
//   firstTerm,
//   lastTerm,
//   index,
//   distanceBetweenEachTerm
// ) {
//   let iTerm = firstTerm + index * distanceBetweenEachTerm;
//   if (iTerm > lastTerm) {
//     alert("error");
//   } else {
//     return iTerm;
//   }
// }

// // for nonlinear (quadratic - ease-in) sequence
// function iTermOfNonlinearQuadraticEaseInSequence() {
//   // **CODE LATER
// }

// // a variable for calculations
// let mapped;

// // event handler function declaration
// function mappingFirstRangeToOtherRanges(targetRangeElement) {
//   // update values
//   getTheCurrentValues();
//   // //  controllerMinVal
//   // //  controllerMaxVal
//   // //  controllerVal
//   // but these two we need to do manually here
//   let targetMinVal = parseFloat(targetRangeElement.min);
//   let targetMaxVal = parseFloat(targetRangeElement.max);

//   // calculation
//   mapped =
//     targetMinVal +
//     Math.round(
//       ((controllerVal - controllerMinVal) *
//         (targetMaxVal - targetMinVal)) /
//         (controllerMaxVal - controllerMinVal)
//     );

//   targetRangeElement.value = mapped;
// }

//
//

// ///////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////

let errorBoxClassNameNumber = 1;
let errorWrapper;

///////////////////////////////////////////////////
////////////////////////////////////// errorWrapper
///////////////////////////////////////////////////
function createErrorWrapper() {
  errorWrapper = document.createElement("div");
  errorWrapper.classList.add("error-wrapper");
  errorWrapper.setAttribute("id", "errorWrapper");

  document.body.prepend(errorWrapper);
}

///////////////////////////////////////////////////
///////////////////////////////////// errorInstance
///////////////////////////////////////////////////
function createErrorInstance(errorIcon, errorMessage) {
  ////////////////////// error-message section
  // Icon
  let newErrorIcon = document.createElement("div");
  newErrorIcon.classList.add("icon");
  let newImg = document.createElement("img");
  if (errorIcon === "caution") {
    newImg.setAttribute("src", "caution.svg");
    newImg.setAttribute("alt", "caution");
  } else {
    alert("error");
  }
  newErrorIcon.append(newImg);

  // message
  let newMessage = document.createElement("div");
  newMessage.classList.add("message");
  newMessage.innerText = errorMessage;
  // container
  let newErrorMessage = document.createElement("div");
  newErrorMessage.classList.add("error-message");
  newErrorMessage.append(newErrorIcon, newMessage);
  ////////////////////// close-button
  let newCloseButton = document.createElement("div");
  newCloseButton.classList.add("error-close-button");
  newCloseButton.setAttribute("title", "close");
  let newLine1 = document.createElement("div");
  newLine1.classList.add("line1");
  let newLine2 = document.createElement("div");
  newLine2.classList.add("line2");
  newCloseButton.append(newLine1, newLine2);

  let errorBoxClassName = `error-box-number${errorBoxClassNameNumber}`;
  console.log(errorBoxClassName);

  ////////////////////// whole error box
  let newErrorBox = document.createElement("div");
  newErrorBox.classList.add("error-box", errorBoxClassName);

  // close button event listener
  newCloseButton.onclick = function (e) {
    // console.log(e.target.parentElement);
    fadingErrorInstance(e.target.parentElement);
    if (e.target.parentElement.style.opacity < 0.5) {
      setTimeout(() => {
        errorWrapper.removeChild(e.target.parentElement);
        removeErrorWrapperIfEmpty();
      }, 200);
    }
  };

  errorBoxClassNameNumber++;
  newErrorBox.append(newErrorMessage, newCloseButton);

  document.getElementById("errorWrapper").prepend(newErrorBox);
  setTimeout(() => {
    let thisErrorInstance = document.querySelector(
      `.error-box.${errorBoxClassName}`
    );

    fadingErrorInstance(thisErrorInstance);
    if (thisErrorInstance.style.opacity < 0.5) {
      setTimeout(() => {
        errorWrapper.removeChild(thisErrorInstance);
        removeErrorWrapperIfEmpty();
      }, 200);
    }
  }, 5000);
}

///////////////////////////////////////////////////
////////////////////////////////////// errorThrower
///////////////////////////////////////////////////
function errorThrower(
  errorIcon = "caution",
  errorMessage = "Sorry, something is missing!"
) {
  // check if body has errorWrapper
  if (document.getElementById("errorWrapper") === null) {
    createErrorWrapper();
    createErrorInstance(errorIcon, errorMessage);
  } else {
    createErrorInstance(errorIcon, errorMessage);
  }
}
///////////////////////////////////////////////////
////////////////////// remove errorWrapper if empty
///////////////////////////////////////////////////
function removeErrorWrapperIfEmpty() {
  let errorWrapperExist = document.getElementById("errorWrapper");
  if (errorWrapperExist !== null) {
    if (errorWrapperExist.children.length === 0) {
      document.body.removeChild(errorWrapperExist);
    } else {
      return;
    }
  }
}

///////////////////////////////////////////////////
////////////////////////////////////// 👇👇👇👇👇👇👇
///////////////////////////////////////////////////
function removeErrorWrapperAfter5seconds() {
  let errorWrapperExist = document.getElementById("errorWrapper");
  let counter = 0;

  setTimeout(function fadingAndRemovingTimeOut() {
    document.body.removeChild(errorWrapperExist);
  }, 5000);
}
// NOTE: error event handlers and intervals (it's better to use setTimeOut because we have more control over it)

function fadingErrorInstance(element1) {
  let opacityCounter = 1;
  setTimeout(function opacityTimeOut() {
    element1.style.opacity = opacityCounter;
    opacityCounter -= 0.1;
    if (opacityCounter >= 0) {
      setTimeout(opacityTimeOut, 20);
    }
  }, 20);
}
