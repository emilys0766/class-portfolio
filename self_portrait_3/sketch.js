 function setup() {
   createCanvas(700,500);
}

let PupilDiameter = 25;
let y = 250;

 function draw() {
            background('aqua') //background
   //ears
            fill("#ffdfb4");
            stroke("black")
            ellipse(200, y, 75, 100);
            ellipse(450, y, 75, 100);
            fill("#ffd3b4")
            ellipse(200, y, 50, 75);
            ellipse(450, y, 50, 75);
   //neck
            fill("#ffdfb4");
            rect(285, y + 75, 80, 100);
   //face
            fill("#ffdfb4");
            stroke("black")
            ellipse(325, y, 250, 250);
   //eyes
            fill("white");
            stroke("black")
            ellipse(380, y - 50, 50, 25);
            ellipse(270, y -50, 50, 25);
   //eyebrows
           fill ("brown")
           triangle(235, y -70, 305, y-80, 305, y-70);
           triangle(415, y -70, 345, y-80, 345, y-70);
   //pupils
            fill ('brown')
            ellipse(380, y - 50, PupilDiameter);
            ellipse(270, y - 50, PupilDiameter);
   //nose
            fill ("#ffd3b4")
            triangle(325, y - 40, 305, y + 25, 345, y + 25);
   //mouth
            stroke("black")
            strokeWeight(1)
            line(325, y + 70, 285, y + 50)
            line(325, y + 70, 365, y + 50)
   
  //hair
           fill ("brown")
           triangle(225, y - 90, 75, y + 175, 275, y + 175);
           triangle(425, y - 90, 375, y + 175, 575, y + 175);
           triangle(175, y - 50, 325, y - 175, 325, y - 110);
           triangle(475, y - 50, 325, y - 175, 325, y - 110);
   
        }

     