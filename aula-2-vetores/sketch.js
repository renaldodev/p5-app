globalThis.clicked = false;
const v = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255)
  stroke(0);
  console.log(v);
  strokeWeight(10);
  v.map((vector) => {
	//   vector.mult(random(1))
    point(vector.x, vector.y);
  });
}

function mousePressed(fxn) {
  makePointer();
}

const makePointer = () => {
  v.push(createVector(mouseX, mouseY));
};

const drowLine=(x0,y0,x,y)=>{
	stroke(255,0,255)
	if(x0==undefined){
		x0=0;
		y0=0
	}
	line(x0, y0, x, y)
}