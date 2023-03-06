function setup() {
  createCanvas(800, 800);
  game = new Game("Kacenka");
  frameRate(30);
}
window.setup = setup;

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
      if (mouseIsPressed || keyIsDown(32)) {
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
      //13 = enter
      if (keyIsDown(13)) {
        gameRunning.gameOver === true;
        game.restart();
        screen = 1;
      } else {
        lastScreen(score);
      }
  }
}

window.draw = draw;
