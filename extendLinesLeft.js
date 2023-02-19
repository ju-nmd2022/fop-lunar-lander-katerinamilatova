export class ExtendLinesLeft {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.width = -10;
    this.permitExtend = true;
  }

  Draw(velocity) {
    //making it move up
    this.y -= velocity;

    //mechanics of the extending
    push();
    fill(this.color);
    if (this.width >= -200 && this.permitExtend === true) {
      this.width = this.width - 5;
    } else {
      this.permitExtend = false;
      this.width = this.width + 5;
    }
    if (this.width >= -10) {
      this.permitExtend = true;
    }

    if (this.y <= -300) {
      this.y = 900;
    }

    noStroke();
    rect(this.x, this.y, this.width, 20, 10);
    pop();
  }
}
