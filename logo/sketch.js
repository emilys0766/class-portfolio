   var catImage
   var catPic
function preload() {
  catImage = loadImage ('thinking.jpg')
  catPic = loadImage ('smugcat.JPG')
}

function setup() {
    createCanvas(640, 360);
    var p = color ('aqua');
   // console.log(p);
  //  canvas.drawingContext.miterLimit = 2;
}

function draw() {
     background('pink');

    image(catImage, 100,100);
    stroke(0);
    strokeWeight(2)

    textSize(20);
    fill(255);
    stroke('black');
    strokeWeight(5);
    textFont('baskerville');

    textAlign(CENTER);

    text("When youre thinking about ways to get your owner's attention...", width / 2, height / 6);
        if (keyIsPressed === true) {
    background('pink');

    image(catPic, 100,100);
    stroke(0);
    strokeWeight(2)

    textSize(20);
    fill(255);
    stroke('black');
    strokeWeight(5);
    textFont('baskerville');

    textAlign(CENTER);

    text("And you see the snack drawer is open...", width / 2, height / 6);
  } else {
  }
}