export class ExtendLinesLeft {
  constructor(x, y, color, maxWidth) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.width = -10;
    this.permitExtend = true;
    this.height = 20;
    this.maxWidth = maxWidth;
  }

  detectIntersection(ufoCoordinates) {
    if (
      ufoCoordinates.y > this.y &&
      ufoCoordinates.y < this.y + this.height &&
      this.x + this.width <= ufoCoordinates.x
    ) {
      return true;
    }
    return false;
  }

  draw(velocity) {
    //making it move up
    this.y -= velocity;

    //mechanics of the extending
    push();
    fill(this.color);
    // -this.maxWidth because I want the line to extend to the left
    // so the value has to decrease to go left on the X axis
    if (this.width >= -this.maxWidth && this.permitExtend === true) {
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
