/*
    debug exercise
*/

//debugged: changed var to Let; 'one hundred' must be expressed with a numerical value
let faceSize = 100 * 3;
//debugged: defined x & y
let x = 350
let y = 250

function setup() {
    //debugged: canvas has to be uppercase
    createCanvas(640, 480);
    //debugged: background has to be lowercase
    background(50);
    //debugged: noStoke --> noStroke
    noStroke();
    fill("lightblue");
    ellipse(350, 320, faceSize); // face

    //debugged: missing ,s
    fill(0, 0, 0);
    //debugged: missing ()s
    ellipse (450, 250, 100); // right eye
    //debugged: missing /
    ellipse(x, y, 100); // left eye
    //debugged: missing ,
    ellipse(x, y + 150, 100, 50); // mouth

    //debugged: white was not in ''
    fill('white');
    ellipse(150, 100, 200, 150);
    triangle(200, 200, 150, 175, 175, 150);

    fill("black");
    textSize(28);
    //debugged: monospace was not in ''
    textFont('monospace');
    //debugged: missing ,
    text("Nice work!", 65, 110);
}

