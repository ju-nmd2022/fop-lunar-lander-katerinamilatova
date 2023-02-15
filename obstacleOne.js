function setUp() {
  createCanvas(800, 800);
  background(0, 0, 0);
}

export class ObstacleOne {
  constructor() {
    this.x = 420;
    this.y = 200;
  }

  pinkLine() {
    //pink line
    push();
    fill(255, 0, 127);
    noStroke();
    rect(this.x - 100, this.y - 10, 200, 20, 10);
    pop();
  }
  blueLine() {
    // blue line
    push();
    fill(0, 79, 255);
    noStroke();
    rect(this.x - 195, this.y - 10, 360, 20, 10);
    pop();
  }

  draw(velocity) {
    // this.y -= velocity;

    //moving the lines
    let rotatePinkLine = 0;
    let rotateBlueLine = 0;

    push();
    translate(this.x + 200, this.y + 300);
    rotate(rotatePinkLine);
    this.pinkLine(0, 0);
    pop();
    rotatePinkLine = rotatePinkLine + 0.05;

    push();
    translate(this.x + 515, this.y + 300);
    rotate(rotateBlueLine);
    this.blueLine(0, 0);
    pop();
    rotateBlueLine = rotateBlueLine - 0.085;
  }
}

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
