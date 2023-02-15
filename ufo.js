export class Ufo {
  constructor() {
    this.x = 320;
    this.y = 50;
  }

  ufoDrawing(velocity) {
    // this.y = this.y + ufoY;
    this.y += velocity;
    print(this.y);
    push();
    scale(0.7);
    // ufo
    stroke(192, 192, 192);
    noStroke();
    fill(171, 255, 79);
    ellipse(this.x + 250, this.y + 120, 70, 25);

    fill(255, 255, 255);
    beginShape();
    vertex(this.x + 230, this.y + 110);
    bezierVertex(
      this.x + 230,
      this.y + 80,
      this.x + 270,
      this.y + 80,
      this.x + 270,
      this.y + 110
    );
    bezierVertex(
      this.x + 270,
      this.y + 120,
      this.x + 230,
      this.y + 120,
      this.x + 230,
      this.y + 110
    );
    endShape();

    strokeWeight(1);
    stroke(255, 255, 255);
    line(this.x + 250, this.y + 90, this.x + 250, this.y + 80);

    // anthene
    fill(0, 255, 255);
    ellipse(this.x + 250, this.y + 80, 5, 5);

    // window
    fill(255, 255, 0);
    stroke(192, 192, 192);
    ellipse(this.x + 250, this.y + 103, 17, 14);
    pop();
  }

  // if you press the mouse, this is how it changes
  ufoFlyUpDrawing(velocity) {
    this.y -= 8;
    push();
    scale(0.7);
    fill(171, 255, 79);
    stroke(192, 192, 192);
    strokeWeight(1.5);
    ellipse(this.x + 250, this.y + 103, 17, 14);

    line(this.x + 220, this.y + 140, this.x + 222, this.y + 150);
    line(this.x + 280, this.y + 140, this.x + 278, this.y + 150);
    line(this.x + 250, this.y + 145, this.x + 250, this.y + 160);
    pop();
  }
}
