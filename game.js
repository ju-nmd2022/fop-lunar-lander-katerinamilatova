import { Cow } from "cow.js";
import { Ufo } from "./ufo";
import { CowHolder } from "./earnCowAnimation";
import { ExtendLinesRight } from "./extendLinesRight";
import { ExtendLinesLeft } from "./extendLinesLeft";
import { ObstacleOne } from "./obstacleOne";

export class Game {
  // in constructor can be only the things that will change - not ufo (ufo will be in every game the same)
  constructor(playerName) {
    // set up constants
    this.ufoY = 0;
    this.velocity = 8;
    this.acceleration = 0.2;
    this.obstacleVelocity = 2;

    this.playerName = playerName;
    this.ufo = new Ufo(0.8);
    this.cowList = [];
    this.cowHolderList = [];
    this.obstacleList = [];
    this.setUp();

    this.addCow();
    this.addCowHolder();
  }

  setUp() {
    let extendLineRight = new ExtendLinesRight(100, 600, "#004FFF");
    let extendLineLeft = new ExtendLinesLeft(500, 600, "#004FFF");
    let obstacleOne = new ObstacleOne(200, 800);

    this.obstacleList.push(extendLineRight, extendLineLeft, obstacleOne);
  }

  /*
    Returns true if the game is allowed to continue or false when the game should be ended - it is the responsibility
    of the draw function in run.js to return from the function and end the game
  */
  run() {
    //ocitovat - myslím že to je od Garrita
    this.velocity = this.velocity + this.acceleration;
    if (mouseIsPressed) {
      this.velocity = this.velocity - 0.8;
      this.ufo.FlyUp();
    }

    // draw ufo and move it
    this.ufo.Draw(this.ufoY);
    this.ufoY = this.ufoY + this.velocity;

    for (let i = 0; i < this.obstacleList.length; i++) {
      /* OCITOVAT
      this is just safety check that the object has a defined method draw
      I am going through all children in a class and I am telling them to do HW 
      which is specified in the work book (everyone knows what to do - this is the method Draw) - 
      this is how I am telling all my objects to be drawn */
      if (typeof this.obstacleList[i].Draw == "function") {
        this.obstacleList[i].Draw(this.obstacleVelocity);
      }
    }

    for (let i = 0; i < this.cowList.length; i++) {
      this.cowList[i].draw();
    }

    for (let i = 0; i < this.cowHolderList.length; i++) {
      this.cowHolderList[i].draw();
    }

    // contidions to end the game
    if (this.ufoY <= -100 || this.ufoY >= 700) {
      print(this.ufoY);
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

  addCowHolder() {
    let newCowHolder = new CowHolder(200, 200, 200, 200);
    this.cowHolderList.push(newCowHolder);
  }
}
