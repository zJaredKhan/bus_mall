'use strict';

//global Variables

//place holders for images, not sure if will be used
var left;
var middle;
var right;

//array for all products
var productImages = [];

//total votes (for counting to 25)
var totalClicks = 0;

//image place holders for diplaying on html
var imageLeft = document.getElementById('left');
var imageMiddle = document.getElementById('middle');
var imageRight = document.getElementById('right');

//constructor function for products
function Products (productName,imgLocation){
  this.productName = productName;
  this.imgLocation = imgLocation;
  this.productClickCount = 0;
  this.timesDisplayed = 0;
  productImages.push(this);
}

//constructing the product objects
var bag = new Products('Super cool bag', 'img/bag.jpg');
var banana = new Products('Banana slicer', 'img/banana.jpg');
var boots = new Products('Rain boots', 'img/boots.jpg');
var bubblegum = new Products('Meatball gum', 'img/bubblegum.jpg');
var chair = new Products('Red chair', 'img/chair.jpg');
var cthulhu = new Products('Cthulhu figurine', 'img/cthulhu.jpg');
var dragon = new Products('Dragon meat', 'img/dragon.jpg');
var pen = new Products('Utensil pen', 'img/pen.jpg');
var petSweet = new Products('Pet Sweeper', 'img/pet-sweep.jpg');
var shark = new Products('Shark sleeping bag', 'img/shark.jpg');
var sweep = new Products('Crawler sweeper', 'img/sweep.png');
var unicorn = new Products('Unicorn meat', 'img/unicorn.jpg');
var usb = new Products('USB tentacle', 'img/usb.gif');
var waterCan = new Products('Watering can', 'img/water-can.jpg');

//Image number variable needed for Render function (hope I'm doing this right!)
var imageRandom1;
var imageRandom2;
var imageRandom3;

//create random function
var randomProduct = function() {
  return Math.floor(Math.random() * productImages.length);
};

//Render function, might need to reorder function
var renderProducts = function() {
  
  imageRandom1 = randomProduct();
  //line below is to pull the randomly selected image out of the array
  imageLeft = productImages[imageRandom1].imgLocation;
  //incrememnt the counter!
  productImages[imageRandom1].timesDisplayed ++;
  imageRandom2 = randomProduct();
  //need a while loop so that imageRandom2 != imageRandom1 (no dupe images inline, that'd be lame)
  while (imageRandom2 === imageRandom1){
    imageRandom2 = randomProduct();
  }
  imageMiddle = productImages[imageRandom2].imgLocation;
  productImages[imageRandom2].timesDisplayed ++;
  imageRandom3 = randomProduct();
  while (imageRandom3 === imageRandom2 || imageRandom3 === imageRandom1){
    imageRandom3 = randomProduct();
  }
  imageRight = productImages[imageRandom3].imgLocation;
  productImages[imageRandom3].timesDisplayed ++;
  var imageLeft = document.getElementById('left');
  var imageMiddle = document.getElementById('middle');
  var imageRight = document.getElementById('right');
};
console.log(imageLeft);

//click handler function
function handleClick(image){
  image.productClickCount += 1;
  totalClicks += 1;
  renderProducts();
}

//event handlers - use ids from html DOM

imageLeft.addEventListener('click', function(){
  handleClick(productImages[imageRandom1]);
});

imageMiddle.addEventListener('click', function(){
  handleClick(productImages[imageRandom2]);
});

imageRight.addEventListener('click', function(){
  handleClick(productImages[imageRandom3]);
});

renderProducts();
//Stuff below is from original goat demo

// //global vars
// var goatImageLeft = document.getElementById('left');
// var goatImageRight = document.getElementById('right');
// var imageSection = document.getElementById('click-me');
// var goatImageLeftArrayIndex = 0;
// var goatImageRightArrayIndex = 0;

// //track what they will be clicking on / what will have events tied to it


// ////////////////////////////////////////////////////////////////////////////////////
// var allGoatImages = [];

// //Constructor : Goat Images

// var GoatImage = function(src, name) {
//   this.name = name;
//   this.src = src;
//   this.appeared = 0;
//   this.likes = 0;

//   allGoatImages.push(this);
// };

// //prototypes
// allGoatImages.prototype.renderGoat = function () {
//   goatImageLeft.src = this.src;
//   goatImageRight.src = this.src;
// };

// //event listeners and handlers
// var goatClickHandler = function (eventObject){
//   do {
//     var randomNumber = Math.floor(Math.random() * allGoatImages.length);
//   } while(randomNumber === goatImageLeftArrayIndex);

//   allGoatImages[goatImageLeftArrayIndex].likes++;
//   allGoatImages[goatImageLeftArrayIndex].appeared++;

//   goatImageLeftArrayIndex = randomNumber;
//   event.target.src = allGoatImages[randomNumber].src;
// };


// goatImageLeft.addEventListener('click', goatClickHandler);

// new GoatImage('./images/sassy-goat.jpg', 'Sassy');
// new GoatImage('./images/sweater-goat.jpg', 'Sweater Goat');
// //store images: GoatImageArray

// // GoatImage constructor

// // Tracking likes: start at 0 and increment when clicked
// // Images themselves (src)
// // size
// // how many times it appeared

// //user wants to click
// // event listener
// // tie the listener to the section

// // page needs to change
// // picture needs to change, name needs to change with it
// // prevent pictures from repeating



// ////////////////////////////////////////////////////////////////////////////////////

// // new GoatImage('./images/cruisin-goat.jpg', 'cruising goat', '400px');
// // new GoatImage('./images/float-your-goat.jpg', 'float goat');
// // new GoatImage('./images/kissing-goat.jpg', 'kissing goat');
// // new GoatImage('./images/sassy-goat.jpg', 'sassy goat');
// // new GoatImage('./images/sweater-goat.jpg', 'sweater goat');

// // GoatImage.renderTwoRandomly();




// // event listener
// imageSection.addEventListener('click', imageClickHandler);

// function imageClickHandler(event) {
//   console.log(event.target.dataset.index);
//   GoatImage.goatArray[event.target.dataset];
// }


