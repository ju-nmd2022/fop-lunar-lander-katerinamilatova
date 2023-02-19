import { Ufo } from "./ufo";
import { Cow } from "./cow";
function setup() {
  createCanvas(800, 800);
}

let colors = ["#FF007F", "#ABFF4F", "#004FFF"];
let randomLength = Math.random() * (149 - 50) + 50; //změnila jsem z 200, na 150

function draw() {
  background(0, 0, 0);
}

// function leftRectangle1(x, y) {
//   fill(255, 255, 255);
//   rect(x + 5, y + 0, 20, randomLength, 20);
// }

// function leftRectangle2(x, y) {
//   fill(255, 255, 255);
//   rect(x + 5, y + 150, 20, randomLength, 20);
// }

// function leftRectangle3(x, y) {
//   fill(255, 255, 255);
//   rect(x + 5, y + 300, 20, randomLength, 20);
// }

// function leftRectangle3(x, y) {
//   fill(255, 255, 255);
//   rect(x + 5, y + 450, 20, randomLength, 20);
// }

// function leftRectangle4(x, y) {
//   fill(255, 255, 255);
//   rect(x + 5, y + 600, 20, randomLength, 20);
// }

// function leftRectangle5(x, y) {
//   fill(255, 255, 255);
//   rect(x + 5, y + 750, 20, randomLength, 20);
// }

// function leftRectangle6(x, y) {
//   fill(255, 255, 255);
//   rect(x + 5, y + 900, 20, randomLength, 20);
// }

// let y = 0;
// function draw() {
//   clear();

//   y = y + 3;
//   leftRectangle1(0, y);
//   leftRectangle2(0, y);
//   leftRectangle3(0, y);
//   leftRectangle4(0, y);
//   leftRectangle5(0, y);
//   leftRectangle6(0, y);

//   if (y >= 800) {
//     y = 0;
//   }
// }

// draw();

let firstScreenUfo = new Ufo(0.8);
firstScreenUfo.ufoDrawing(0);

let firstScreenCow = new Cow(520, 90);
firstScreenCow.draw(0);

textFont("Futura");
fill(255, 255, 255);
textSize(54);
text("PLAY THE UFO GAME!", 120, 350);

textFont("Avenir");
textSize(20);
textAlign(CENTER);

let rules =
  "The rules are easy." +
  " Just collect as many cows as you can, but avoid all obstacles! Don't forget to control your speed.";
text(rules, 213, 400, 400, 200);

let button = createButton("START");
button.position(325, 500);
button.size(200, 100);
button.style("font-family", "Futura");
button.style("font-size", "40px");
button.style("background-color", "#ABFF4F");
