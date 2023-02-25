createCanvas(800, 800);

export function scenery() {
  background("#000026");

  //lowerCurve
  noStroke();
  function lowerCurve(x, y) {
    beginShape();
    vertex(x + 850, y + 550);
    bezierVertex(x + 790, y + 410, x + 700, y + 600, x + 700, y + 570);
    bezierVertex(x + 700, y + 540, x + 650, y + 700, x + 500, y + 730);
    bezierVertex(x + 340, y + 760, x + 200, y + 730, x + 200, y + 900);
    vertex(x + 900, y + 900);
    endShape();
  }

  fill("#004FFF"); //blue
  lowerCurve(0, 0);
  fill("#FF007F"); //pink
  lowerCurve(0, 20);
  fill("#004FFF");
  lowerCurve(0, 30);
  fill("#ABFF4F"); //green
  lowerCurve(0, 40);
  fill("#FF007F");
  lowerCurve(0, 80);
  fill("#004FFF");
  lowerCurve(0, 100);
  fill("#000026");
  lowerCurve(0, 100);

  //upper curve
  fill("#FF007F");
  function upperCurve(x, y) {
    push();
    ellipse(x - 200, y + 40, 700);
    beginShape();
    vertex(x + 220, y - 100);
    bezierVertex(x + 160, y - 120, x + 400, y - 120, x + 330, y + 140);
    bezierVertex(x + 250, y + 350, x + 550, y + 420, x + 570, y + 350);
    bezierVertex(x + 460, y + 240, x + 650, y + 120, x + 900, y + 500);
    vertex(x + 850, y + 300);
    endShape();
    pop();
  }

  upperCurve(0, 0);
  fill("#ABFF4F"); //green
  upperCurve(-15, -10);
  fill("#004FFF"); //blue
  upperCurve(-25, -15);
  fill("#FF007F"); //pink
  upperCurve(-40, -30);

  fill("#000026");
  push();
  rotate(0.4);
  ellipse(470, -150, 350, 170);
  pop();
  // push();
  // scale(0.7);
  // rotate(0.2);
  // upperCurve(170, -250);
  // pop();

  noStroke();

  //small blue planet
  push();
  translate(-30, 150);
  fill("#004FFF");
  // fill("#008fff");
  ellipse(200, 200, 100);
  push();
  translate(40, -30);
  rotate(0.2);
  fill(255, 255, 255);
  ellipse(200, 200, 160, 10);
  fill("#00FEEF");

  ellipse(200, 200, 150, 10);

  pop();
  pop();

  //big green planet (left corner)
  fill("#ABFF4F"); //green
  ellipse(-200, 40, 700);

  //  "#004FFF"

  //green balls
  fill("#ABFF4F"); //green
  ellipse(570, 540, 20);

  //pink balls

  //turqois balls
  fill("#00FEEF");
  ellipse(610, 150, 25);

  //stars
  function star(x, y, scaleFactor) {
    push();
    scale(scaleFactor);
    fill(255, 255, 255);
    beginShape();
    vertex(x + 200, y + 20);
    vertex(x + 190, y + 40);
    vertex(x + 200, y + 60);
    vertex(x + 210, y + 40);
    vertex(x + 200, y + 20);
    endShape();

    stroke(255, 255, 255);
    strokeWeight(1.5);
    line(x + 200, y + 15, x + 200, y + 65);
    line(x + 185, y + 40, x + 215, y + 40);
    pop();
  }

  star(200, 150, 0.5);
  star(1300, 480, 0.3);
  star(440, 800, 0.8);
}
