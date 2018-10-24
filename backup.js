'use strict';

//global Variables

var itemLabels = []; //for the chart.
var voteLabels = []; //also for chart
var results = document.getElementById('update');
var refresh = document.getElementById('refreshPage');

//array for all products
var productImages = [];

//total votes (for counting to 25)
var totalClicks = 0;
console.log(totalClicks);

//constructor function for products
function Products (productName,src){
  this.productName = productName;
  this.src = src;
  this.productClickCount = 0;
  this.timesDisplayed = 0;
  productImages.push(this);
}
//image place holders for diplaying on html

var imageLeft = document.getElementById('left');
//imageLeft.src = productImages[imageRandom1].src;
//imageLeft.alt = productImages[imageRandom1].productName;

var imageMiddle = document.getElementById('middle');
//imageMiddle.src = productImages[imageRandom2].src;
//imageMiddle.alt = productImages[imageRandom2].productName;

var imageRight = document.getElementById('right');
//imageRight.src = productImages[imageRandom3].src;
//imageRight.alt = productImages [imageRandom3].productName;


//constructing the product objects
var bag = new Products('Super cool bag', './img/bag.jpg');
var banana = new Products('Banana slicer', './img/banana.jpg');
var boots = new Products('Rain boots', './img/boots.jpg');
var bubblegum = new Products('Meatball gum', './img/bubblegum.jpg');
var chair = new Products('Red chair', './img/chair.jpg');
var cthulhu = new Products('Cthulhu figurine', './img/cthulhu.jpg');
var dragon = new Products('Dragon meat', './img/dragon.jpg');
var pen = new Products('Utensil pen', './img/pen.jpg');
var petSweet = new Products('Pet Sweeper', './img/pet-sweep.jpg');
var shark = new Products('Shark sleeping bag', './img/shark.jpg');
var sweep = new Products('Crawler sweeper', './img/sweep.png');
var unicorn = new Products('Unicorn meat', './img/unicorn.jpg');
var usb = new Products('USB tentacle', './img/usb.gif');
var waterCan = new Products('Watering can', './img/water-can.jpg');


//Image number variable needed for Render function
var imageRandom1 = 0;
var imageRandom2 = 0;
var imageRandom3 = 0;

//create random function
var randomProduct = function() {
  return Math.floor(Math.random() * productImages.length);
};

//Render function, might need to reorder function
var renderProducts = function() {
  imageRandom1 = randomProduct();
  //line below is to pull the randomly selected image out of the array
  console.log(productImages[imageRandom1].src);
  imageLeft.src = productImages[imageRandom1].src;
  //incrememnt the counter!
  productImages[imageRandom1].timesDisplayed ++;
  imageRandom2 = randomProduct();
  //need a while loop so that imageRandom2 != imageRandom1 (no dupe images inline, that'd be lame)
  while (imageRandom2 === imageRandom1){
    imageRandom2 = randomProduct();
  }
  imageMiddle.src = productImages[imageRandom2].src;
  productImages[imageRandom2].timesDisplayed ++;
  imageRandom3 = randomProduct();
  while (imageRandom3 === imageRandom2 || imageRandom3 === imageRandom1){
    imageRandom3 = randomProduct();
  }
  imageRight.src = productImages[imageRandom3].src;
  productImages[imageRandom3].timesDisplayed ++;
};

//click handler function
function handleClick(image){
  image.productClickCount += 1;
  totalClicks += 1;
  renderProducts();
}

// //event handlers - use ids from html DOM

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

// section below is for the chart

function updateChart() {
  for (var i = 0; i < productImages.length; i++) {
    itemLabels.push(productImages[i].productName);
    voteLabels.push(productImages[i].productClickCount);
  }
}

function makeChart() {
  updateChart();
  var ctx = document.getElementById('myChart');

  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: itemLabels,
      datasets: [{
        label: 'BusMall Survey Results',
        data: voteLabels,
        backgroundColor:'#00BCD4',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Item Types'
          }
        }],
        yAxes: [{
          ticks: {
            max: 4,
            min: 0,
            stepSize: 1,
          }
        }]
      }
    }
  });
  var refresh = document.createElement('button');
  refresh.setAttribute('id', 'refreshPage');
  refresh.textContent = 'Refresh Page';
  document.getElementById('buttons').appendChild(refresh);
  refresh.addEventListener('click', refreshPage);
}

function refreshPage() {
  window.location.reload();
}

results.addEventListener('click', makeChart);
refresh.addEventListener('click', refreshPage);

