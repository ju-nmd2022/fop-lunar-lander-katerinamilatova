import { Ufo } from "./ufo.js";
import { CowHolder } from "./cowHolder.js";
import { ExtendLinesRight } from "./extendLinesRight.js";
import { ExtendLinesLeft } from "./extendLinesLeft.js";
import { Cow } from "./cow.js";
import { scenery } from "./background.js";

export class Game {
  // in constructor can be only the things that will change - not ufo (ufo will be in every game the same)
  constructor(playerName) {
    this.playerName = playerName;

    //empty array for all my game obejcts
    this.gameObjects = [];
    this.setUp();
  }

  //here are all my game objects and all the game setting (which i can later call to restart it)
  setUp() {
    //this is here again so that the game can restart
    this.gameObjects = [];
    // set up constants
    this.ufoY = 0;
    this.ufoVelocity = 8;
    this.acceleration = 0.2;
    this.obstacleVelocity = 2;
    this.endGame = false;
    this.score = 0;

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
  restart() {
    if (this.endGame == true) {
      this.setUp();
    }
  }

  run() {
    scenery();

    // Lines which make ufo go up on click and move it were adapted from flappy ufo game created in the lesson (plus all the intersection code in each of the files)
    this.ufoVelocity = this.ufoVelocity + this.acceleration;
    if (mouseIsPressed || keyIsDown(32)) {
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
        //here goes the evaluated true/false from detectIntersection (each of the objects/obstacles has it implemented in their codes)
        let objectCollision = this.gameObjects[i].detectIntersection(
          this.ufo.collisionInfo()
        );
        if (objectCollision === true) {
          this.endGame = true;
        }
      }
    }

    // draw ufo and move it
    this.ufo.draw(this.ufoY);
    this.ufoY = this.ufoY + this.ufoVelocity;

    // contidions to end the game
    if (this.ufoY <= -100 || this.ufoY >= 700 || this.endGame === true) {
      print(this.ufoY);
      print("Game is over. " + this.playerName + " lost");
      // if I want to return 2 and more info, I need to do it by using object
      //this is info I want to return when the game is over
      return {
        gameOver: false,
        score: this.score,
      };
    }

    return true;
  }
}
