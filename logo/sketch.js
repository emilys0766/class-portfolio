
function preload() {
    var catImage
    var catPic
   catImage = loadImage ('thinking.jpg')
   catPic = loadImage ('smugcat.jpg')
}

function setup() {
    createCanvas(640, 360);
    var p = color ('aqua');
    console.log(p);
    canvas.drawingContext.miterLimit = 2;
}

function draw() {
    background('pink');

    image(catImage, 100,100);
    stroke(0);
    strokeWeight(2)

    textSize(80);
    fill('aqua');
    stroke(255);
    strokeWeight(5);
    textFont('impact');

    textAlign(CENTER);

    text('Cat', width / 2, height / 5);

    if (keyIsPressed === true) {
    image(catImage, 100,100);
    stroke(0);
    strokeWeight(2)

    textSize(80);
    fill('aqua');
    stroke(255);
    strokeWeight(5);
    textFont('impact');

    textAlign(CENTER);

    text('Cat', width / 2, height / 5);
  } else {
  }
}