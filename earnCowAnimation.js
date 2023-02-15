createCanvas(800, 800);
background(0, 0, 0);

export class CowHolder {
  constructor(leftLineX, leftLineY, rightLineX, rightLineY) {
    this.leftLineX = 350;
    this.leftLineY = leftLineY;
    this.rightLineX = 350;
    this.rightLineY = rightLineY;
  }

  draw() {
    //left line
    noStroke();
    fill("#ABFF4F");
    rect(this.leftLineX, this.leftLineY, 80, 20, 10);

    // rightLine

    fill("#ABFF4F");
    rect(this.rightLineX + 20, this.rightLineY, 80, 20, 10);

    if (mouseIsPressed) {
      this.leftLineX = this.leftLineX - 3;
      this.rightLineX = this.rightLineX + 3;
    }
  }
}

let cowHolderOne = new CowHolder(200, 200, 200, 200);
// let cowHolderTwo = new CowHolder(200, 300, 200, 300);
// let cowHolderThree = new CowHolder(200, 400, 200, 400);

function draw() {
  clear();
  cowHolderOne.draw();
  //   cowHolderTwo.draw();
  //   cowHolderThree.draw();
}
