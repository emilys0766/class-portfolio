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
    image(catImage, 0,0,width,height);

    stroke(0);
    strokeWeight(2)

    textSize(20);
    fill(255);
    stroke('black');
    strokeWeight(5);
    textFont('impact');

    textAlign(CENTER, TOP);

    text("When you're thinking about what you should have for dinner...", width / 2, height / 6);
}