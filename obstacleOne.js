function setUp() {
  createCanvas(800, 800);
  background(0, 0, 0);
}

export class ObstacleOne {
  constructor(x, y) {
    this.x = x; //previously 420
    this.y = y;
    this.rotatePinkLine = 0;
    this.rotateBlueLine = 0;
  }

  pinkLine() {
    //pink line
    push();
    fill(255, 0, 127);
    noStroke();
    rect(-100, -10, 200, 20, 10);
    pop();
  }
  blueLine() {
    // blue line
    push();
    fill(0, 79, 255);
    noStroke();
    rect(-180, -10, 360, 20, 10);
    pop();
  }

  Draw(velocity) {
    //moving the lines
    this.y -= velocity;

    //come to the screen again and again
    if (this.y <= -300) {
      this.y = 900;
    }

    // translate(this.x, this.y);
    push();
    translate(this.x + 200, this.y + 300);
    rotate(this.rotatePinkLine);
    this.pinkLine();
    pop();
    this.rotatePinkLine += 0.05;

    push();
    translate(this.x + 515, this.y + 300);
    rotate(this.rotateBlueLine);
    this.blueLine();
    pop();
    this.rotateBlueLine -= 0.085;
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
