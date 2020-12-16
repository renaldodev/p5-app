function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  rect((windowWidth / 20) * 2 - 30, (windowHeight / 17) * 2, 30, 100, 10);
  rect((windowWidth / 20) * 4 - 80, (windowHeight / 17) * 3, 50, 200, 5);
  strokeWeight(5);
  stroke(255);
  line(0, 0, windowWidth / 2, windowHeight / 2);
  stroke(255, 255, 0);
  line(windowWidth / 2, windowHeight / 2, windowWidth, windowHeight);
  ellipse(windowWidth / 2, windowHeight / 2, 100);
  rectMode(CORNER);
  fill(255);
  rect(25, 25, 50, 50); // Draw white rectangle using CORNER mode

  rectMode(CORNERS);
  fill(100);
  rect(25, 25, 50, 50); // Draw gray rectanle using CORNERS mode

  rectMode(RADIUS);
  fill(255);
  rect(50, 50, 30, 30); // Draw white rectangle using RADIUS mode

  rectMode(CENTER);
  fill(100);
  rect(50, 50, 30, 30); // Draw gray rectangle using CENTER mode

  triangle(-(windowWidth / 20) * 13 ,-(windowHeight / 17) * 9, 58, 20, 86,- (windowHeight / 17) * 9)
  arc((windowWidth / 20) * 13 ,(windowHeight / 17) * 9, 80, 80, 0, PI + QUARTER_PI, CHORD);
  circle((windowWidth / 20) * 18 ,(windowHeight / 17) * 15, 20);
}
