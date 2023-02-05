import { Game } from "./game";

function setUp() {
  createCanvas(1000, 800);
  backgroundcolor(0, 0, 0);
}

let game = new Game("Kacenka");
let gameRunning = true;

// Lines which make ufo go up on click and move it were adapted from flappy ufo game created in the lesson
function draw() {
  if (gameRunning === false) {
    return;
  }

  clear();
  //   drawObstacleOne(180, 0);
  gameRunning = game.run();
}
