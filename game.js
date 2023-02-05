import { Ufo } from "ufo.js";
import { Cow } from "cow.js";
import { ObstacleOne } from "obstacleOne.js";

export class Game {
  // in constructor can be only the things that will change - not ufo (ufo will be in every game the same)
  constructor(playerName) {
    this.playerName = playerName;
    this.ufo = new Ufo();
    this.cowList = [];
    this.obstacleOneList = [];

    // set up constants
    this.ufoY = 10;
    this.velocity = 8;
    this.acceleration = 0.2;

    this.addCow();
    this.addObstacleOne();
  }

  /*
    Returns true if the game is allowed to continue or false when the game should be ended - it is the responsibility
    of the draw function in run.js to return from the function and end the game
  */
  run() {
    this.velocity = this.velocity + this.acceleration;

    for (let i = 0; i < this.cowList.length; i++) {
      this.cowList[i].cowDrawing();
    }

    for (let i = 0; i < this.obstacleOneList.length; i++) {
      this.obstacleOneList[i].draw();
    }

    // setting up ufo
    this.ufo.ufoDrawing(this.velocity);
    this.ufoY = this.ufoY + this.velocity;

    if (mouseIsPressed) {
      this.velocity = this.velocity - 0.8;
      this.ufo.ufoFlyUpDrawing();
    }

    // contidions to end the game
    if (this.ufoY <= 0) {
      print("Game is over. " + this.playerName + " lost");
      return false;
    }

    return true;
  }

  addCow() {
    print("Creating cow");
    let newCow = new Cow();
    this.cowList.push(newCow);
  }

  addObstacleOne() {
    let newObstacleOne = new ObstacleOne();
    this.obstacleOneList.push(newObstacleOne);
  }
}
