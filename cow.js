function setUp() {
  createCanvas(600, 600);
  backgroundcolor(0, 0, 0);
}

function cow(x, y) {
  // legs
  rect(x + 220, y + 290, 15, 70, 5);
  rect(x + 240, y + 290, 15, 70, 5);
  rect(x + 340, y + 290, 15, 70, 5);
  rect(x + 360, y + 290, 15, 70, 5);

  // vemeno
  fill(255, 192, 203);
  ellipse(x + 300, y + 300, 70, 30);

  // ocas
  stroke(255, 255, 255);
  strokeWeight(3);
  line(x + 390, y + 210, x + 420, y + 280);

  // body
  noStroke();
  fill(255, 255, 255);
  rect(x + 200, y + 200, 200, 100, 25);

  // skvrny
  fill(0, 0, 0);
  ellipse(x + 240, y + 230, 60, 30);
  ellipse(x + 270, y + 270, 40, 30);
  ellipse(x + 320, y + 250, 50, 25);
  ellipse(x + 360, y + 220, 40, 20);
  ellipse(x + 360, y + 280, 30, 20);
  ellipse(x + 230, y + 280, 15, 8);

  // years (left, then right)
  fill(255, 192, 203);
  beginShape();
  vertex(x + 180, y + 180);
  vertex(x + 140, y + 160);
  vertex(x + 150, y + 200);
  endShape();

  beginShape();
  vertex(x + 200, y + 180);
  vertex(x + 240, y + 160);
  vertex(x + 230, y + 200);
  endShape();

  // head
  fill(255, 255, 255);
  ellipse(x + 190, y + 220, 90, 100);

  // eyes
  fill(0, 0, 0);
  ellipse(x + 170, y + 210, 7, 10);
  ellipse(x + 210, y + 210, 7, 10);

  // mouse (čumák)
  fill(255, 192, 203);
  ellipse(x + 190, y + 250, 90, 50);

  // nozdry
  fill(255, 130, 180);
  ellipse(x + 175, y + 250, 7, 13);
  ellipse(x + 205, y + 250, 7, 13);
}
cow(0, 0);
