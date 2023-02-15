export class FlowingLine {
  constructor(x, y, width, velocity) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.color = ["#FF007F", "#ABFF4F", "#004FFF"];
    this.velocity = velocity;
  }

  draw(velocity) {
    // upper lines
    this.x = 0;
    this.y = 0;
    let movingLinesX = 0;
  }
  randomRectangle() {
    noStroke();
    fill(this.color[Math.floor(Math.random() * this.color.length)]);
    rect(movingLinesX, 650, Math.random() * (200 - 50) + 50, 20, 10);
  }
}

// let lines = [];

// randomRectangle();

// let firstRun = true;
// // let pomocna = 0;

// function draw() {
//   clear();

//   if (movingLinesX === 150 || firstRun) {
//     randomRectangle();
//     firstRun = false;
//   }

//   movingLinesX = movingLinesX + 1;
// }

// }; //1. pokud je na souřadnicích x0-150, y650 a RandomRectangle, přestaň tvořit

// 2. pokud jsou tyto souřadnice volné, vytvoř randomRectangle
//3.  = movingLinesmovingLinesXX + 1;

// if (pomocna % 150 === 0 || firstRun) {
//   firstRun = false;

// vytvor novou caru
// - nahodna delka
// - nahodna barva
// let cara <- objekt
// pridame to lines
//

// for - prochazi lines array
// na kazde lines zavola vykresli(x)

// x = x + 5;

// fill(255, 0, 127);
// rect(x + 0, y + 600, 50, 20, 10);

// fill(171, 255, 79);
// rect(x + 0, y + 600, 200, 20, 10);

// fill(0, 79, 255);
// rect(x + 0, y + 600, 100, 20, 10);

// fill(255, 0, 127);
// rect(x + 0, y + 600, 200, 20, 10);

// // pink
// function upperLines1(x, y) {
//   //upper lines to the right
//   strokeWeight(16);
//   stroke(255, 0, 127);
//   line(x + 0, y + 650, x + 50, y + 650);
// }

// // green
// function upperLines2(a, y) {
//   stroke(171, 255, 79);
//   line(a + 190, y + 650, a + 330, y + 650);
// }

// // blue
// function upperLines3(b, y) {
//   stroke(0, 79, 255);
//   line(b + 500, y + 650, b + 800, y + 650);
// }

// function lowerLines(x, y) {
//   stroke(131, 56, 236);
//   line(x + 40, y + 700, x + 180, y + 700);
//   stroke(255, 0, 127);
//   line(x + 460, y + 700, x + 660, y + 700);
//   stroke(171, 255, 79);
//   line(x + 870, y + 700, x + 920, y + 700);
// }

// Animating obstacles
// Obstacle number 2, upper line

// let x = 0;
// let a = 0;
// let b = 0;
// let c = 0;

// function draw() {
//   clear();
//   upperLines3(b, 0);
//   b = b + 6;

//   upperLines2(a, 0);
//   a = a + 6;

//   upperLines1(x, 0);
//   x = x + 6;

//   if (b > 600) {
//     b = -1300;
//   }

//   if (a > 600) {
//     a = -500;
//   }

//   if (x > 600) {
//     x = 0;
//   }

//   lowerLines(a, 0);
//   a = a - 2;
// }
