import { Ufo } from "./ufo";
import { CowHolder } from "./cowHolder";
import { ExtendLinesRight } from "./extendLinesRight";
import { ExtendLinesLeft } from "./extendLinesLeft";
import { ObstacleOne } from "./rotatingLinesObstacle";
import { Cow } from "./cow";

export class Game {
  // in constructor can be only the things that will change - not ufo (ufo will be in every game the same)
  constructor(playerName) {
    // set up constants
    this.ufoY = 0;
    this.velocity = 8;
    this.acceleration = 0.2;
    this.obstacleVelocity = 2;
    this.endGame = false;

    this.playerName = playerName;

    //empty array for all my game obejcts
    this.gameObjects = [];
    this.setUp();
  }

  //here are all my game objects
  setUp() {
    let extendLineRight = new ExtendLinesRight(200, 600, "#004FFF");
    let extendLineLeft = new ExtendLinesLeft(600, 600, "#004FFF");
    let obstacleOne = new ObstacleOne(100, 900);
    let cowHolder = new CowHolder(0, 490, 0, 490);
    let cow = new Cow(330, 400, cowHolder);
    this.ufo = new Ufo(0.8);

    //this is how I push all my game objects to the array above
    this.gameObjects.push(
      extendLineRight,
      extendLineLeft,
      obstacleOne,
      cow,
      cowHolder
    );
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

    for (let i = 0; i < this.gameObjects.length; i++) {
      /* OCITOVAT
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
    this.ufoY = this.ufoY + this.velocity;

    // contidions to end the game
    if (this.ufoY <= -100 || this.ufoY >= 700 || this.endGame === true) {
      print(this.ufoY);
      print("Game is over. " + this.playerName + " lost");
      return false;
    }

    return true;
  }
}
