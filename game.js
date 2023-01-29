// import { ufo } from "ufo.js";
// import { drawObstacleOne } from "obstacleOne";

function setUp() {
  createCanvas(1000, 800);
  backgroundcolor(0, 0, 0);
}

function draw() {
  clear();
  drawObstacleOne(180, 0);
  ufo(465, 0);
  ufoFlyUp(465, 0);
}
