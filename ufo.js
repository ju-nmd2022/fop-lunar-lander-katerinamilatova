export class Ufo {
  constructor(scaleFactor) {
    this.x = 0;
    this.y = 0;
    this.scaleFactor = scaleFactor;
  }

  draw(currentY) {
    //this is how the ufo remembers its Y position
    this.y = currentY;

    push();
    translate(this.x, this.y);
    scale(this.scaleFactor);

    // ufo
    stroke(192, 192, 192);
    noStroke();
    fill(171, 255, 79);
    ellipse(250 / this.scaleFactor, 120 / this.scaleFactor, 70, 25);

    fill(255, 255, 255);
    beginShape();
    vertex(235 / this.scaleFactor, 110 / this.scaleFactor);
    bezierVertex(
      235 / this.scaleFactor,
      90 / this.scaleFactor,
      265 / this.scaleFactor,
      90 / this.scaleFactor,
      265 / this.scaleFactor,
      110 / this.scaleFactor
    );
    bezierVertex(
      265 / this.scaleFactor,
      120 / this.scaleFactor,
      235 / this.scaleFactor,
      120 / this.scaleFactor,
      235 / this.scaleFactor,
      110 / this.scaleFactor
    );
    endShape();

    strokeWeight(1);
    stroke(255, 255, 255);
    line(
      250 / this.scaleFactor,
      95 / this.scaleFactor,
      250 / this.scaleFactor,
      85 / this.scaleFactor
    );

    // anthene
    fill(0, 255, 255);
    ellipse(250 / this.scaleFactor, 85 / this.scaleFactor, 5, 5);

    // window
    fill(255, 255, 0);
    stroke(192, 192, 192);
    ellipse(250 / this.scaleFactor, 106 / this.scaleFactor, 15, 12);
    pop();

    return this.y;
  }

  // if you press the mouse, this is how it changes
  FlyUp() {
    push();
    translate(this.x, this.y);
    scale(this.scaleFactor);
    // scale(0.7);
    fill(171, 255, 79);
    stroke(192, 192, 192);
    strokeWeight(1.5);
    ellipse(250 / this.scaleFactor, 106 / this.scaleFactor, 15, 12);

    line(
      225 / this.scaleFactor,
      135 / this.scaleFactor,
      227 / this.scaleFactor,
      145 / this.scaleFactor
    );
    line(
      275 / this.scaleFactor,
      135 / this.scaleFactor,
      273 / this.scaleFactor,
      145 / this.scaleFactor
    );
    line(
      250 / this.scaleFactor,
      140 / this.scaleFactor,
      250 / this.scaleFactor,
      155 / this.scaleFactor
    );
    pop();
  }
}

let ufo = new Ufo();

function draw() {
  clear();
  ufo.draw(0);
  ufo.FlyUp();
}
