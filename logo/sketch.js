
function preload() {
    var catImage
    catImage = loadImage ('thinking.jpg')
}

function setup() {
    createCanvas(640, 360);
    var p = color ('aqua');
    console.log(p);
    canvas.drawingContext.miterLimit = 2;
}

function draw() {
    background(220);

    image(catImage, 100,100);


    textSize(100);
    fill('aqua');
    stroke(255);
    strokeWeight(10);
    textFont('baskerville');

    textAlign(CENTER);

    text('Cat', width / 2, height / 2);
}