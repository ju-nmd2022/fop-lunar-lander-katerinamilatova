function setup() {
  createCanvas(800, 800);
  game = new Game("Kacenka");
  frameRate(30);
}
window.setup = setup;

// import { Game } from "./game";
// import { firstScreen } from "./firstScreen";
// import { lastScreen } from "./lastScreen";
import { firstScreen } from "./firstScreen.js";
import { Game } from "./game.js";
import { lastScreen } from "./lastScreen.js";

let game;
let gameRunning = true;
let screen = 0;
let score = 0;

function draw() {
  background(0, 0, 0);
  clear();
  switch (screen) {
    case 0:
      firstScreen();
      if (mouseIsPressed) {
        screen = 1;
      }
      break;
    case 1:
      gameRunning = game.run();
      if (gameRunning.gameOver === false) {
        screen = 2;
        score = gameRunning.score;
      }
      break;
    case 2:
      lastScreen(score);
      return;
  }

  // if (screen == 0 && screenSwitch) {
  //   print(screen);
  //   firstScreen();
  //   if (mouseIsPressed) {
  //     screen += 1;
  //     screenSwitch = false;
  //     screenTwoSwitch = true;
  //   }
  // } else if (screen == 1 && screenTwoSwitch) {
  //   //   drawObstacleOne(180, 0);
  //   gameRunning = game.run();
  // }

  // if (gameRunning === false) {
  //   lastScreen();
  //   return;
  // }
  // clear();
}

window.draw = draw;
