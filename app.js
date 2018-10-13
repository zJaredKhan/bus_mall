'use strict';

//global vars
var goatImageLeft = document.getElementById('left');
var goatImageRight = document.getElementById('right');
var imageSection = document.getElementById('click-me');
var goatImageLeftArrayIndex = 0;
var goatImageRightArrayIndex = 0;

//track what they will be clicking on / what will have events tied to it


////////////////////////////////////////////////////////////////////////////////////
var allGoatImages = [];

//Constructor : Goat Images

var GoatImage = function(src, name) {
  this.name = name;
  this.src = src;
  this.appeared = 0;
  this.likes = 0;

  allGoatImages.push(this);
};

//prototypes
allGoatImages.prototype.renderGoat = function () {
  goatImageLeft.src = this.src;
  goatImageRight.src = this.src;
};

//event listeners and handlers
var goatClickHandler = function (eventObject){
  do {
    var randomNumber = Math.floor(Math.random() * allGoatImages.length);
  } while(randomNumber === goatImageLeftArrayIndex);

  allGoatImages[goatImageLeftArrayIndex].likes++;
  allGoatImages[goatImageLeftArrayIndex].appeared++;

  goatImageLeftArrayIndex = randomNumber;
  event.target.src = allGoatImages[randomNumber].src;
};


goatImageLeft.addEventListener('click', goatClickHandler);

new GoatImage('./images/sassy-goat.jpg', 'Sassy');
new GoatImage('./images/sweater-goat.jpg', 'Sweater Goat');
//store images: GoatImageArray

// GoatImage constructor

// Tracking likes: start at 0 and increment when clicked
// Images themselves (src)
// size
// how many times it appeared

//user wants to click
// event listener
// tie the listener to the section

// page needs to change
// picture needs to change, name needs to change with it
// prevent pictures from repeating



////////////////////////////////////////////////////////////////////////////////////

// new GoatImage('./images/cruisin-goat.jpg', 'cruising goat', '400px');
// new GoatImage('./images/float-your-goat.jpg', 'float goat');
// new GoatImage('./images/kissing-goat.jpg', 'kissing goat');
// new GoatImage('./images/sassy-goat.jpg', 'sassy goat');
// new GoatImage('./images/sweater-goat.jpg', 'sweater goat');

// GoatImage.renderTwoRandomly();




// event listener
imageSection.addEventListener('click', imageClickHandler);

function imageClickHandler(event) {
  console.log(event.target.dataset.index);
  GoatImage.goatArray[event.target.dataset];
}


