// import { ufo } from "ufo.js";
// import { drawObstacleOne } from "obstacleOne";

function setUp() {
  createCanvas(1000, 800);
  backgroundcolor(0, 0, 0);
}

let ufoY = 10;
let velocity = 8;
let acceleration = 0.2;
let isGameActive = true;

// Lines which make ufo go up on click and move it were adapted from flappy ufo game created in the lesson
function draw() {
  clear();
  drawObstacleOne(180, 0);
  ufo(465, ufoY);

  if (isGameActive) {
    ufoY = ufoY + velocity;
    velocity = velocity + acceleration;
  }

  if (mouseIsPressed) {
    velocity = velocity - 0.8;

    ufoFlyUp(465, ufoY);
  }

  if (isGameActive == false || ufoY <= 0) {
    print("Game is over.");
  }
}
