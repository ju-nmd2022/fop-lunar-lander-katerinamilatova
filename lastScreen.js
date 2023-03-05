import { scenery } from "./background.js";

function star(x, y) {
  //following 14 lines were adapted from https://p5.readthedocs.io/en/latest/tutorials/pshape.html
  fill(255, 255, 255);
  stroke("#ABFF4F");
  strokeWeight(4);
  beginShape();
  vertex(x + 0, y - 50);
  vertex(x + 14, y - 20);
  vertex(x + 47, y - 15);
  vertex(x + 23, y + 7);
  vertex(x + 29, y + 40);
  vertex(x + 0, y + 25);
  vertex(x + -29, y + 40);
  vertex(x + -23, y + 7);
  vertex(x + -47, y - 15);
  vertex(x + -14, y - 20);
  vertex(x + 0, y - 50);
  endShape();
}

export function lastScreen(score) {
  scenery();
  textAlign(CENTER);

  noStroke();
  textFont("Futura");
  fill(255, 255, 255);
  textSize(54);
  text("GAME OVER", 400, 275);

  textFont("Avenir");
  textSize(20);

  let rules = `You earned ${score} cows. Good job!`;
  text(rules, 213, 450, 400, 200);

  if (score > 0 && score <= 3) {
    star(280, 360);
  }
  if (score >= 4 && score <= 7) {
    star(280, 360);
    star(400, 360);
  }
  if (score > 7) {
    star(280, 360);
    star(400, 360);
    star(520, 360);
  }
}
