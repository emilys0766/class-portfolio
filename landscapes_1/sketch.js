function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(225);

  for (let x = 0; x < width; x += 120) {
    noStroke();
    fill(80, 80, x);
    rect(x, height - 300, 100, 400);
  }

  for (let x2 = 0; x2 < width; x2 += 120) {
     fill('yellow')
     rect(x2 + 15, height - 275, 25, 25)
     rect(x2 - 60, height - 275, 25, 25)
     rect(x2 + 15, height - 225, 25, 25)
     rect(x2 - 60, height - 225, 25, 25)
     rect(x2 + 15, height - 175, 25, 25)
     rect(x2 - 60, height - 175, 25, 25)
     rect(x2 + 15, height - 125, 25, 25)
     rect(x2 - 60, height - 125, 25, 25)
     rect(x2 + 15, height - 75, 25, 25)
     rect(x2 - 60, height - 75, 25, 25)
     rect(x2 + 15, height - 25, 25, 25)
     rect(x2 - 60, height - 25, 25, 25)
  }

 for (let w2 = 0; w2 < width; w2 += 120) {
     fill("white")
     stroke("white")
     ellipse(w2, 30, 50, 50)
     ellipse(w2+20, 40, 50, 50)
     ellipse(w2+40, 30, 50, 50)
            
     ellipse(w2+100, 40, 50, 50)
     ellipse(w2+120, 30, 50, 50)
     ellipse(w2+140, 40, 50, 50)
          }
}