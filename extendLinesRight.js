// createCanvas(800, 800);
// background(0, 0, 0);

export class ExtendLinesRight {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.width = 10;
    this.allowExtend = true;
  }

  Draw(velocity) {
    this.y -= velocity;
    push();
    fill(this.color);
    noStroke();

    //mechanics of extending and going back
    if (this.width <= 200 && this.allowExtend === true) {
      this.width = this.width + 5;
    } else {
      this.allowExtend = false;
      this.width = this.width - 5;
      if (this.width <= 10) {
        this.allowExtend = true;
      }
    }

    //makes it come to screen again and again
    if (this.y <= -300) {
      this.y = 900;
    }

    rect(this.x, this.y, this.width, 20, 10);
    pop();
  }
}

// let rightLineOne = new ExtendLinesRight(300, 100, "#FF007F");
// let leftLineOne = new ExtendLinesLeft(500, 200, "#ABFF4F");
// let rightLineTwo = new ExtendLinesRight(250, 300, "#004FFF");
// let leftLineTwo = new ExtendLinesLeft(550, 400, "#FF007F");
// let rightLineThree = new ExtendLinesRight(300, 500, "#ABFF4F");
// let leftLineThree = new ExtendLinesLeft(500, 600, "#004FFF");

// function draw() {
//   clear();
//   rightLineOne.Draw();
//   leftLineOne.Draw();
//   rightLineTwo.Draw();
//   leftLineTwo.Draw();
//   rightLineThree.Draw();
//   leftLineThree.Draw();
// }

// greenLine();

// if (widthGreenLine <= -200 && allowExtendGreenLine === true) {
//   widthGreenLine = widthGreenLine - 2;
//   // width = width - 130;
// } else {
//   allowExtendGreenLine = false;
//   widthGreenLine += 2;
//   if (widthGreenLine == -10) {
//     allowExtendGreenLine = true;
//   }
// }

// function makeLineBigger(width) {
//   pinkLine(0, 0);
//   width = width + 1;
// }

// function makeLineSmaller(width) {
//   pinkLine(0, 0);
//   width = width - 1;
// }

// function draw() {
//   pinkLine(0, 0);
//   if (width == 0) {
//     width = width + 1;
//   }
//   if (width > 200) {
//     width = width - 1;
//   }

//   if (width <= 200) {
//     width = width + 1;
//   }
// if (width = 200) {
//   width = width - 1;
// }

// clear();
// pinkLine(pinkLineX, 0);

// pinkLineX = pinkLineX + 1;

// if (pinkLineX == 70) {
//   // clear();
//   pinkLineX = 0;
// }

// while (width <= 200) {

// }

// draw() {
//     while (pinkLineX  )
// }

// function blueLine(x, y) {
//   push();
//   fill(0, 79, 255);
//   noStroke();
//   rect(x - 195, y - 10, 360, 20, 10);
//   pop();
// }

// let rotatePinkLine = 0;
// let rotateBlueLine = 0;