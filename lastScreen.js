import { Cow } from "./cow";
createCanvas(800, 800);
background(0, 0, 0);
textAlign(CENTER);

textFont("Futura");
fill(255, 255, 255);
textSize(54);
text("GAME OVER", 400, 250);

textFont("Avenir");
textSize(20);

function cow(x, y) {
  push();
  scale(0.3);
  let firstScreenCow = new Cow(x, y);
  firstScreenCow.cowDrawing(0);
  pop();
}

cow(2540, 2630);

let rules = "You earned" + " X " + "        ." + " Good job!";
text(rules, 213, 430, 400, 200);

let button = createButton("PLAY AGAIN");
button.position(290, 570);
button.size(280, 80);
button.style("font-family", "Futura");
button.style("font-size", "30px");
button.style("background-color", "#ABFF4F");

let x = 250;
let y = 330;

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

star(280, 340);
star(400, 340);
star(520, 340);
