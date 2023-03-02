import { Ufo } from "./ufo.js";
import { CowHolder } from "./cowHolder.js";
import { ExtendLinesRight } from "./extendLinesRight.js";
import { ExtendLinesLeft } from "./extendLinesLeft.js";
import { Cow } from "./cow.js";
import { scenery } from "./background.js";

export class Game {
  // in constructor can be only the things that will change - not ufo (ufo will be in every game the same)
  constructor(playerName) {
    // set up constants
    this.ufoY = 0;
    this.ufoVelocity = 8;
    this.acceleration = 0.2;
    this.obstacleVelocity = 2;
    this.endGame = false;
    this.score = 0;

    this.playerName = playerName;

    //empty array for all my game obejcts
    this.gameObjects = [];
    this.setUp();
  }

  //here are all my game objects
  setUp() {
    let cowHolder = new CowHolder(this, 0, 750, 0, 750);
    let cow = new Cow(this, 330, 660, cowHolder);
    this.ufo = new Ufo(0.8);

    //this is how I push all my game objects to the array above
    this.gameObjects.push(
      new ExtendLinesRight(200, 500, "#FFFFFF", 200),
      new ExtendLinesLeft(600, 500, "#FFFFFF", 200),
      cow,
      cowHolder,
      new ExtendLinesRight(200, 900, "#FFFFFF", 200),
      new ExtendLinesLeft(600, 900, "#FFFFFF", 200),
      new ExtendLinesRight(200, 1200, "#FFFFFF", 400),
      new ExtendLinesLeft(600, 1300, "#FFFFFF", 400),
      new ExtendLinesRight(200, 1500, "#FFFFFF", 400),
      new ExtendLinesLeft(600, 1600, "#FFFFFF", 400)
    );
  }

  /*
    Returns true if the game is allowed to continue or false when the game should be ended - it is the responsibility
    of the draw function in run.js to return from the function and end the game
  */

  //The following lines were created in collaboration with Lukáš Toral
  run() {
    scenery();

    // Lines which make ufo go up on click and move it were adapted from flappy ufo game created in the lesson (plus all the intersection code in each of the files)
    this.ufoVelocity = this.ufoVelocity + this.acceleration;
    if (mouseIsPressed) {
      this.ufoVelocity = this.ufoVelocity - 0.8;
      this.ufo.FlyUp();
    }

    for (let i = 0; i < this.gameObjects.length; i++) {
      /* 
      this is just safety check that the object has a defined method draw
      I am going through all children in a class and I am telling them to do HW 
      which is specified in the work book (everyone knows what to do - this is the method Draw) - 
      this is how I am telling all my objects to be drawn */

      //if the object has the function draw (js can tell that "function" is a function)
      //typeof tells me what type (number, function, etc.) an information is
      if (typeof this.gameObjects[i].draw == "function") {
        //and if it has the draw function, this line will move it
        this.gameObjects[i].draw(this.obstacleVelocity);
      }
      //detecting collisions
      if (typeof this.gameObjects[i].detectIntersection == "function") {
        if (this.gameObjects[i].detectIntersection(this.ufo.collisionInfo())) {
          // dotykaji se
          this.endGame = true;
        }
      }
    }

    // draw ufo and move it
    this.ufo.draw(this.ufoY);
    this.ufoY = this.ufoY + this.ufoVelocity;

    // TADY VYKRESLIT HVĚZDYYYYY!!!

    // contidions to end the game
    if (this.ufoY <= -100 || this.ufoY >= 700 || this.endGame === true) {
      if (this.score > 5 && this.score < 11) {
        //One star
      }
      if (this.score > 10 && this.score < 16) {
      }
      if (this.score > 15) {
      }
      print(this.ufoY);
      print("Game is over. " + this.playerName + " lost");
      return false;
    }

    return true;
  }
}
