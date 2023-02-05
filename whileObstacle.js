let pinkLineX = 0;
let pinkLineY = 0;

function pinkLine(pinkLineX, pinkLineY) {
  push();
  fill(255, 0, 127);
  noStroke();
  rect(pinkLineX + 300, pinkLineY + 200, 200, 20, 10);
  pop();
}

pinkLine(0, 0);

// draw() {
//     while (pinkLineX  )
// }

// function blueLine(x, y) {
//   push();
//   fill(0, 79, 255);
//   noStroke();
//   rect(x - 195, y - 10, 360, 20, 10);
//   pop();
// }

// let rotatePinkLine = 0;
// let rotateBlueLine = 0;
