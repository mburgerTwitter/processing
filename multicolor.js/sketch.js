function setup() {
  createCanvas(640, 480);
  noStroke();
}



function draw() {
  
  if (mouseIsPressed) {
    fill(87,203,242);
  } else {
    fill(random(0,254), random(0,254), random(0,254));
  }
  ellipse(random(550), random(550), 20, 20);
}