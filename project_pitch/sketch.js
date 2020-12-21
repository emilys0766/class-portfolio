function setup() {
  createCanvas(800, 755);
}

function draw() {
  background('white');

  for (let x = 50; x < width; x += 160) {
    for (let y = 55; y < height; y += 150) {
  fill (241, 156, 187)
  triangle(x, y, x + 28, y - 50, x + 56, y);
  triangle(x, y + 50, x + 28, y + 100, x + 56, y + 50);
  triangle(x + 110, y + 35, x + 55, y + 50, x + 56, y);
  triangle(x - 50, y + 35, x, y + 50, x + 1, y);
  fill('white')
  rect (x, y, 56, 50)
  fill(4,217,255)
  rect (x + 17, y + 8, 20, 35)
}
}
}