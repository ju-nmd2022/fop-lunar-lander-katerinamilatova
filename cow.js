function setup() {
  createCanvas(800, 800);
  background(0, 0, 0);
}

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

let numberOfCow = 0;

// Class of cows
export class Cow {
  constructor(x, y) {
    let randomName = names[Math.floor(Math.random() * 9)];
    this.name = randomName;
    this.number = numberOfCow += 1;
    this.points = 1;
    this.phrase = "You earned " + randomName + "!";
    this.x = 1300;
    this.y = 400;
  }

  draw(velocity) {
    // this.y -= velocity;

    push();
    scale(0.25);
    // legs
    rect(this.x + 220, this.y + 290, 15, 70, 5);
    rect(this.x + 240, this.y + 290, 15, 70, 5);
    rect(this.x + 340, this.y + 290, 15, 70, 5);
    rect(this.x + 360, this.y + 290, 15, 70, 5);

    // vemeno
    fill(255, 192, 203);
    ellipse(this.x + 300, this.y + 300, 70, 30);

    // ocas
    stroke(255, 255, 255);
    strokeWeight(3);
    line(this.x + 390, this.y + 210, this.x + 420, this.y + 280);

    // body
    noStroke();
    fill(255, 255, 255);
    rect(this.x + 200, this.y + 200, 200, 100, 25);

    // skvrny
    fill(0, 0, 0);
    ellipse(this.x + 240, this.y + 230, 60, 30);
    ellipse(this.x + 270, this.y + 270, 40, 30);
    ellipse(this.x + 320, this.y + 250, 50, 25);
    ellipse(this.x + 360, this.y + 220, 40, 20);
    ellipse(this.x + 360, this.y + 280, 30, 20);
    ellipse(this.x + 230, this.y + 280, 15, 8);

    // years (left, then right)
    fill(255, 192, 203);
    beginShape();
    vertex(this.x + 180, this.y + 180);
    vertex(this.x + 140, this.y + 160);
    vertex(this.x + 150, this.y + 200);
    endShape();

    beginShape();
    vertex(this.x + 200, this.y + 180);
    vertex(this.x + 240, this.y + 160);
    vertex(this.x + 230, this.y + 200);
    endShape();

    // head
    fill(255, 255, 255);
    ellipse(this.x + 190, this.y + 220, 90, 100);

    // eyes
    fill(0, 0, 0);
    ellipse(this.x + 170, this.y + 210, 7, 10);
    ellipse(this.x + 210, this.y + 210, 7, 10);

    // mouse (čumák)
    fill(255, 192, 203);
    ellipse(this.x + 190, this.y + 250, 90, 50);

    // nozdry
    fill(255, 130, 180);
    ellipse(this.x + 175, this.y + 250, 7, 13);
    ellipse(this.x + 205, this.y + 250, 7, 13);
    pop();
  }
}

let cow = new Cow(0, 0);
function draw() {
  cow.draw();
}

// let cow1 = new Cow();
// let cow2 = new Cow();

// cow1.cowDrawing();

// function draw() {
//   cow1.cowDrawing();
// }

// print(cow1);
// print(cow2);
