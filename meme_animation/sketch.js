
//var catImage;

// function preload() {
//     catImage = loadImage ('thinking.jpg');
// }

function setup() {
    var canvas = createCanvas(640, 360);
    canvas.drawingContext.miterLimit = 2;
}

function draw() {
    background('pink');

    //image(catImage, 100,100);
    stroke(0);
    strokeWeight(2)

    textSize(20);
    fill(255);
    stroke('black');
    strokeWeight(5);
    textFont('impact');

    textAlign(CENTER);

    text("When youre thinking about ways to get your owner's attention...", width / 2, height / 6);
        if (keyIsPressed === true) {
    //image(catImage, 100,100);
 background('pink');

    //image(catImage, 100,100);
    stroke(0);
    strokeWeight(2)

    textSize(20);
    fill(255);
    stroke('black');
    strokeWeight(5);
    textFont('impact');

    textAlign(CENTER);

    text("And you see the snack drawer is openccc", width / 2, height / 6);
  } else {
  }
}