function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  rect((windowWidth/20)*2 - 30,(windowHeight/17)*2, 30, 100,10);
  rect((windowWidth/20)*4 - 80,(windowHeight/17)*3,50,200,5)
  strokeWeight(5)
  stroke(255)
  line(0,0,windowWidth/2,windowHeight/2)
  stroke(255,255,0)
  line(windowWidth/2,windowHeight/2,windowWidth,windowHeight)
  ellipse(windowWidth/2,windowHeight/2,100)

}
