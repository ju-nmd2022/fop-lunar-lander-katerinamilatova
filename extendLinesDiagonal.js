function setup() {
  createCanvas(800, 800);
}

export class ExtendLinesSpecialDiagonal {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.width = 10;
    this.allowExtend = true;
  }

  draw() {
    push();
    fill(this.color);
    noStroke();

    if (this.width <= 200 && this.allowExtend === true) {
      this.width = this.width + 5;
    } else {
      this.allowExtend = false;
      this.width = this.width - 5;
      if (this.width <= 10) {
        this.allowExtend = true;
      }
    }

    rect(this.x, this.y, this.width, 20, 10);
    pop();
  }
}

let rightLineOne = new ExtendLinesRight(300, 100, "#FF007F");

function draw() {
  clear();
  rightLineOne.draw();
}
