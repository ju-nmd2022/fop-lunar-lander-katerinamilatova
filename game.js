import { Cow } from "cow.js";
import { ObstacleOne } from "obstacleOne.js";
import { FlowingLine } from "./flowingLines";
import { Ufo } from "./ufo";
import { CowHolder } from "./earnCowAnimation";
import { ExtendLinesRight } from "./extendLinesRight";
import { ExtendLinesLeft } from "./extendLinesLeft";

export class Game {
  // in constructor can be only the things that will change - not ufo (ufo will be in every game the same)
  constructor(playerName) {
    this.playerName = playerName;
    this.ufo = new Ufo(0.8);
    this.cowList = [];
    this.obstacleOneList = [];
    // this.flowingLinesList = [];
    this.cowHolderList = [];
    this.extendLine = new ExtendLinesRight(100, 600, "#004FFF");
    this.xD = new ExtendLinesLeft(500, 600, "#004FFF");

    // set up constants
    this.ufoY = 0;
    this.velocity = 8;
    this.acceleration = 0.2;
    this.obstacleVelocity = 2;

    this.addCow();
    this.addObstacleOne();
    // this.addFlowingLine();
    this.addCowHolder();
  }

  /*
    Returns true if the game is allowed to continue or false when the game should be ended - it is the responsibility
    of the draw function in run.js to return from the function and end the game
  */
  run() {
    // draw ufo and move it

    this.ufo.Draw(this.ufoY);

    this.ufoY = this.ufoY + this.velocity;
    this.velocity = this.velocity + this.acceleration;
    if (mouseIsPressed) {
      this.velocity = this.velocity - 0.8;
      this.ufo.FlyUp();
    }

    //move obstacles up
    this.extendLine.Draw(this.obstacleVelocity);
    this.xD.Draw(this.obstacleVelocity);

    // for (let i = 0; i < this.nejakePole.length; i++) {
    //   // OCITOVAT
    //   if (typeof someObject.Draw == "function") {
    //     this.nejakePole[i].Draw();
    //   }
    // }

    for (let i = 0; i < this.cowList.length; i++) {
      this.cowList[i].draw();
    }

    for (let i = 0; i < this.cowHolderList.length; i++) {
      this.cowHolderList[i].draw();
    }

    for (let i = 0; i < this.obstacleOneList.length; i++) {
      this.obstacleOneList[i].Draw(this.obstacleVelocity);
    }

    // for (let i = 0; i < this.flowingLinesList.length; i++) {
    //   this.flowingLinesList[i].draw();
    // }

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

  addObstacleOne() {
    print("Creating obstacle");
    let newObstacleOne = new ObstacleOne(200, 400);
    this.obstacleOneList.push(newObstacleOne);
  }

  // addFlowingLine() {
  //   let newFlowingLine = new FlowingLine();
  //   this.flowingLinesList.push(newFlowingLine);
  // }
}
