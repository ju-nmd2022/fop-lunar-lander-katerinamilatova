// scenery
function pinkLine(x, y) {
  push();
  fill(255, 0, 127);
  noStroke();
  rect(x - 100, y - 10, 200, 20, 10);
  pop();
}

function blueLine(x, y) {
  push();
  fill(0, 79, 255);
  noStroke();
  rect(x - 175, y - 10, 350, 20, 10);
  pop();
}

let rotatePinkLine = 0;
let rotateBlueLine = 0;

function drawObstacleOne(x, y) {
  push();
  translate(x + 200, y + 300);
  rotate(rotatePinkLine);
  pinkLine(0, 0);
  pop();
  rotatePinkLine = rotatePinkLine + 0.05;

  push();
  translate(x + 525, y + 300);
  rotate(rotateBlueLine);
  blueLine(0, 0);
  pop();
  rotateBlueLine = rotateBlueLine - 0.075;
}

drawObstacleOne(0, 0);

// function draw() {
//   // Obstacle 1: moving the pink line
//   push();
//   clear();
//   translate(x + 200, y + 300);
//   rotate(a);
//   pinkLine(0, 0);
//   pop();
//   a = a + 0.05;

//   push();
//   translate(x + 525, y + 300);
//   rotate(rotateBlueLine);
//   blueLine(0, 0);
//   pop();
//   rotateBlueLine = rotateBlueLine - 0.08;
// }

// let rotateBlueLine = 0;
// function draw() {
//   push();
//   clear();
//   translate(x + 525, y + 300);
//   rotate(rotateBlueLine);
//   blueLine(0, 0);
//   pop();
//   rotateBlueLine = rotateBlueLine - 0.1;
// }
