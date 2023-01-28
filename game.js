background(0, 0, 0);

// stroke(255, 255, 255);
// strokeWeight(5);

// line(x, 0, x, y + 1000);
// line(x + 500, 0, x + 500, y + 1000);

function ufo(x, y) {
  push();
  scale(0.7);
  // ufo
  stroke(192, 192, 192);
  fill(171, 255, 79);
  ellipse(x + 250, y + 120, 70, 25);

  fill(255, 255, 255);
  beginShape();
  vertex(x + 230, y + 110);
  bezierVertex(x + 230, y + 80, x + 270, y + 80, x + 270, y + 110);
  bezierVertex(x + 270, y + 120, x + 230, y + 120, x + 230, y + 110);
  endShape();

  strokeWeight(1);
  stroke(255, 255, 255);
  line(x + 250, y + 90, x + 250, y + 80);

  // anthene
  fill(0, 255, 255);
  ellipse(x + 250, y + 80, 5, 5);

  // window
  fill(255, 255, 0);
  stroke(192, 192, 192);
  ellipse(x + 250, y + 103, 17, 14);

  pop();
}

// if you press, this is how it changes
function ufoFlyUp(x, y) {
  push();
  scale(0.7);
  fill(171, 255, 79);
  stroke(192, 192, 192);
  strokeWeight(1.5);
  ellipse(x + 250, y + 103, 17, 14);

  line(x + 220, y + 140, x + 222, y + 150);
  line(x + 280, y + 140, x + 278, y + 150);
  line(x + 250, y + 145, x + 250, y + 160);
  pop();
}

// scenery
function obsticleOneTurningLines(x, y) {
  noFill();
  strokeWeight(16);
  //pink smaller line
  stroke(255, 0, 127);
  line(x + 330, y + 250, x + 170, y + 250);

  //   blue longer line
  stroke(0, 79, 255);
  line(x + 380, y + 250, x + 720, y + 250);
}
obsticleOneTurningLines(0, 0);

// Obstacle number 2
