var slides = 1;
var slidesTotal = 3;

var w = 100;
var h = 60;

var buttonx = 1000 - 160;
var buttony = 700 - 110;

var a = 20;
var b = buttony;

var platformStill;


function preload() {
    platformStill = loadImage('project_idea.png');
}

function setup() {
  createCanvas(1000, 700);
}

function draw() {
  background('grey');

  if (slides == 1) {
    textAlign(CENTER, CENTER);
    textSize(100);
    fill('blue')
    text('Platformer Project', width/2, height/2);
    textSize(50);
    text('By Emily Saloma', width/2, (height/2) + 100);

  } else if (slides == 2) {
    textAlign(LEFT);
    fill('blue');
    textSize(30);

    text('For my project, I have decided that I wanted to debug a project I made in my first years of highschool.', 50 , 100, width - 200);
    text('Since our teacher in high school would often encourage us to make our projects better,', 50 , 100, width - 250);
    text('I thought fixing this project could be a good way towards achieving that goal.,', 50 , 100, width - 300);


  } else if (slides == 3) {
    textAlign(LEFT);
    fill('blue');
    textSize(30);

    text('The user can jump with the use of the W key button, and move with the left and right arrow keys.', 50, 100, width - 200);
    text('The goal of the plaformer would be to reach the red flag before your lives run out.', 50, 100, width - 250);
    
    image(platformStill, 160, 190, platformStill.width / 2, platformStill.height / 2);
}

    if (slides < slidesTotal) {
        button(buttonx, buttony, "Next Slide");
    }

    if (slides > 1) {
        button(a, b, "Back Slide");
    }


function button(x, y, displayText) {
  
    fill('white');
    if (mouseX > buttonx && mouseX < buttonx + w &&
      mouseY > buttony && mouseY < buttony + h) {
      fill(45);

        if (mouseIsPressed) {
          stroke(45);
        }
    }

  strokeWeight(4);
  rect(x, y, w, h, 15);

    textAlign(CENTER,CENTER);
    fill('black');
    textSize(25);
    text(displayText, buttonx, buttony, w, h);
}

function mousePressed() {
  if (mouseX > buttonx && mouseX < buttonx + w &&
      mouseY > buttony && mouseY < buttony + h) {
    if (slides < slidesTotal) {
      slides++;
    }
  }

  if (mouseX > a && mouseX < a + w &&
      mouseY > b && mouseY < b + h) {
    if (slides > 1) {
          slides--;
    }
  }

}
