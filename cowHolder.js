createCanvas(800, 800);
background(0, 0, 0);

export class CowHolder {
  constructor(game, leftLineX, leftLineY, rightLineX, rightLineY) {
    this.leftLineX = leftLineX; //before 350
    this.leftLineY = leftLineY;
    this.rightLineX = rightLineX; //before 350
    this.rightLineY = rightLineY;
    // locked locks the movement of cow holder
    this.locked = true;
    this.height = 20;
    this.game = game;
  }

  unlock() {
    if (this.locked) {
      this.locked = false;
      this.game.score++;
    }
  }

  detectIntersection(ufoCoordinates) {
    let lineDistance = this.rightLineX - this.leftLineX;
    if (
      ufoCoordinates.y > this.rightLineY &&
      ufoCoordinates.y < this.rightLineY + this.height &&
      lineDistance < ufoCoordinates.width
    ) {
      return true;
    }
    return false;
  }

  draw(velocity) {
    this.leftLineY -= velocity;
    this.rightLineY -= velocity;
    //left line
    noStroke();
    fill("#ABFF4F");
    rect(this.leftLineX + 350, this.leftLineY, 80, 20, 10);

    // rightLine

    fill("#ABFF4F");
    rect(this.rightLineX + 350 + 20, this.rightLineY, 80, 20, 10);

    if (mouseIsPressed) {
      if (this.locked === false) {
        this.leftLineX -= 3;
        this.rightLineX += 3;
      }
    }

    if (this.leftLineY <= -300 && this.rightLineY <= -300) {
      this.leftLineY = 900;
      this.rightLineY = 900;
      this.leftLineX = 0;
      this.rightLineX = 0;
      this.locked = true;
    }
  }
}
