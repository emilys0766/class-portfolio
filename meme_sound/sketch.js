   var catImage
   var catPic
   var s = 500
   var catMeow
function preload() {
  catImage = loadImage ('thinking.jpg')
  catPic = loadImage ('smugcat.JPG')
  catMeow = loadSound('meow.wav')
}

function setup() {
    createCanvas(640, 360);
    var p = color ('aqua');
   // console.log(p);
  //  canvas.drawingContext.miterLimit = 2;
}

function draw() {
    background('pink');
    image(catImage, width-s, height-s);
    s += 2;

    if (catImage.width > canvas.width) {
        s -= 2
    }


    stroke(0);
    strokeWeight(2)

    textSize(20);
    fill(255);
    stroke('black');
    strokeWeight(5);
    textFont('impact');

    textAlign(CENTER, TOP);

    text("When you're thinking about what you should have for dinner...", width / 2, height / 6);
        if (keyIsPressed === true) {
    background('pink');

    image(catPic, 0,0,width,height);
    stroke(0);
    strokeWeight(2)

    textSize(20);
    fill(255);
    stroke('black');
    strokeWeight(5);
    textFont('impact');

    textAlign(CENTER, TOP);

    text("And you see the snack drawer is open...", width / 2, height / 6);
  } else {
  }
}

function keyPressed() {
  catMeow.play();
}