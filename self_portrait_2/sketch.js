 function setup() {
   createCanvas(700,500);
}

let PupilDiameter = 25

 function draw() {
            background('aqua') //background
   //ears
            fill("#ffdfb4");
            stroke("black")
            ellipse(200, 250, 75, 100);
            ellipse(450, 250, 75, 100);
            fill("#ffd3b4")
            ellipse(200, 250, 50, 75);
            ellipse(450, 250, 50, 75);
   //neck
            fill("#ffdfb4");
            rect(285, 325, 80, 100);
   //face
            fill("#ffdfb4");
            stroke("black")
            ellipse(325, 250, 250, 250);
   //eyes
            fill("white");
            stroke("black")
            ellipse(380, 200, 50, 25);
            ellipse(270, 200, 50, 25);
   //eyebrows
           fill ("brown")
           triangle(235, 180, 305, 170, 305, 180);
           triangle(415, 180, 345, 170, 345, 180);
   //pupils
            fill ('brown')
            ellipse(380, 200, PupilDiameter);
            ellipse(270, 200, PupilDiameter);
   //nose
            fill ("#ffd3b4")
            triangle(325, 210, 305, 275, 345, 275);
   //mouth
            stroke("black")
            strokeWeight(1)
            line(325, 320, 285, 300)
            line(325, 320, 365, 300)
   
  //hair
           fill ("brown")
           triangle(225, 160, 75, 425, 275, 425);
           triangle(425, 160, 375, 425, 575, 425);
           triangle(175, 200, 325, 75, 325, 140);
           triangle(475, 200, 325, 75, 325, 140);
   
        }