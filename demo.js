'use strict';

var allImages = [];

var BusmallImage = function (name, src, likes, appeared, size){
  this.name = name;
  this.src = src;
  this.appeared = appeared;
  this.size = size;

  allImages.push(this);
};

BusmallImage.prototype.renderSingleImage = function() {
  //take the necessary details and put it on the page
  //container element to reference
  //new element
  var newImageEl = document.createElement('img');
  //give content
  newImageEl.src = this.src;
  //append it
  imageContainer.appendChild(newImageEl);
};

var renderImages = function (numerOfImagesToShow) {
  //display images to the page
  //add the images to the page
  for (var i = 0; i < numerOfImagesToShow; i++){
    allImages[i].renderSingleImage();
  }
};



var handleClick = function(){
    //check to make sure we're clickong on an image
  if(totalClicks > 25){
    renderChart();
  }
};
var initialize = function() {
  makeAllImageObjects();
  renderImages(3);
  imageContainer.addEventListener('click', handleClick);

  //start anything that needs starting in order
};

var allImageSrcs =
['./img/bag.jpg',
  ['./img/banana.jpg'],
  './img/bathroom.jpg'];

initialize();



var makeAllImageObjects = function(){
  for (var i in allImageSrcs) {
    var nameString = allImageSrcs[i].slice(9);
    new BusmallImage(nameString, allImageSrcs[i], 0, 0, '300px');
  }
};


//////////////
//stretch goal code//

let originalArr = ['stuff', 'stuff2','stuff3'];

let randosGrabbed = [];

let GoingToBeSplicedArr = originalArr.map(ele => ele); //copies each element

var randomGrabber = fucntion() {
    
}