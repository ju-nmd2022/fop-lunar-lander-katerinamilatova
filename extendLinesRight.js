// createCanvas(800, 800);
// background(0, 0, 0);

export class ExtendLinesRight {
  constructor(x, y, color, maxWidth) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.width = 10;
    this.height = 20;
    this.allowExtend = true;
    this.maxWidth = maxWidth;
  }

  detectIntersection(ufoCoordinates) {
    if (
      ufoCoordinates.y > this.y &&
      ufoCoordinates.y < this.y + this.height &&
      this.x + this.width >= ufoCoordinates.x
    ) {
      return true;
    }
    return false;
  }

  draw(velocity) {
    this.y -= velocity;
    push();
    fill(this.color);
    noStroke();

    //mechanics of extending and going back
    if (this.width <= this.maxWidth && this.allowExtend === true) {
      this.width = this.width + 5;
    } else {
      this.allowExtend = false;
      this.width = this.width - 5;
      if (this.width <= 10) {
        this.allowExtend = true;
      }
    }

    //makes it come to screen again and again
    if (this.y <= -300) {
      this.y = 900;
    }

    rect(this.x, this.y, this.width, 20, 10);
    pop();
  }
}
