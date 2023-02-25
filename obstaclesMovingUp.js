import { ExtendLinesLeft } from "./extendLines";
import { ExtendLinesRight } from "./extendLines";
import { ObstacleOne } from "./rotatingLinesObstacle";

function setUp() {
  createCanvas(800, 800);
}

// Obstacle 1: Rotating lines
let rotatingLinesOne = new ObstacleOne();

//obstacle 2: Extending Lines (!two lines are needed (right and left one))
let rightLineOne = new ExtendLinesRight(300, 100, "#FF007F");
let leftLineOne = new ExtendLinesLeft(500, 200, "#ABFF4F");
let rightLineTwo = new ExtendLinesRight(250, 300, "#004FFF");
let leftLineTwo = new ExtendLinesLeft(550, 400, "#FF007F");
let rightLineThree = new ExtendLinesRight(300, 500, "#ABFF4F");
let leftLineThree = new ExtendLinesLeft(500, 600, "#004FFF");

/*conditions for obstacles
1. if you draw rightLineOne, draw leftLineOne, too
2. rightLineTwo.draw() + leftLineTwo.draw() + rightLineThree.draw(),


*/
let allObstacles = [rightLineOne, rightLineTwo, rotatingLinesOne];
let randomNumber = Math.floor(Math.random() * allObstacles.length);

function draw() {
  rotatingLinesOne.draw();
  background(0, 0, 0);
  allObstacles[randomNumber].draw();
}
