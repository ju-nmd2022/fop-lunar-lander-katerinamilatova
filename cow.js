function setup() {
  createCanvas(800, 800);
  background(0, 0, 0);
}

// Class of cows
export class Cow {
  constructor(game, x, y, cowHolder) {
    this.game = game;
    this.name = this.generateName();
    this.points = 1;
    this.phrase = "You earned " + this.name + "!";
    this.x = x;
    this.y = y;
    this.width = 70;
    this.height = 50;
    this.cowHolder = cowHolder;
    this.visible = true;
  }

  generateName() {
    // Random names for the cows
    let names = [
      "Niko",
      "Dolores",
      "Tina",
      "Ilina",
      "Tasia",
      "Safa",
      "Gloria",
      "Glinda",
      "Matylda",
    ];

    let randomName = names[Math.floor(Math.random() * 9)];
    return randomName;
  }

  detectIntersection(ufoCoordinates) {
    if (ufoCoordinates.y > this.y && ufoCoordinates.y < this.y + this.height) {
      // check the ufo velicity
      if (this.game.ufoVelocity > 3 && this.visible) {
        print("Game over");
        return true;
      }

      this.game.score++;
      print(this.game.score);
      this.cowHolder.unlock();
      this.visible = false;
      return false;
    }

    // return false every time because cow does not stop the game
    // it is not an obstacle I simply increase score
    return false;
  }

  draw(currentY) {
    this.y -= currentY;
    if (this.visible) {
      push();

      translate(this.x, this.y);
      scale(0.25);
      // legs
      rect(220, 290, 15, 70, 5);
      rect(240, 290, 15, 70, 5);
      rect(340, 290, 15, 70, 5);
      rect(360, 290, 15, 70, 5);

      // vemeno
      fill(255, 192, 203);
      ellipse(300, 300, 70, 30);

      // tail
      stroke(255, 255, 255);
      strokeWeight(3);
      line(390, 210, 420, 280);

      // body
      noStroke();
      fill(255, 255, 255);
      rect(200, 200, 200, 100, 25);

      // spots on the cow's skin
      fill(0, 0, 0);
      ellipse(240, 230, 60, 30);
      ellipse(270, 270, 40, 30);
      ellipse(320, 250, 50, 25);
      ellipse(360, 220, 40, 20);
      ellipse(360, 280, 30, 20);
      ellipse(230, 280, 15, 8);

      // years (left, then right)
      fill(255, 192, 203);
      beginShape();
      vertex(180, 180);
      vertex(140, 160);
      vertex(150, 200);
      endShape();

      beginShape();
      vertex(200, 180);
      vertex(240, 160);
      vertex(230, 200);
      endShape();

      // head
      fill(255, 255, 255);
      ellipse(190, 220, 90, 100);

      // eyes
      fill(0, 0, 0);
      ellipse(170, 210, 7, 10);
      ellipse(210, 210, 7, 10);

      // mouse (čumák)
      fill(255, 192, 203);
      ellipse(190, 250, 90, 50);

      // nozdry
      fill(255, 130, 180);
      ellipse(175, 250, 7, 13);
      ellipse(205, 250, 7, 13);
      pop();
    }
    if (this.y <= -300) {
      this.y = 900;
      this.visible = true;
      this.name = this.generateName();
    }
  }
}
