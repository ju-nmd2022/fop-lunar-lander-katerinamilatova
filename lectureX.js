let colours = [color(155, 230, 176), color(143, 39, 192), color(89, 127, 250)];
const rectWidth = 20;

frameRate(1);
function draw() {
  noStroke();

  function generateColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return color(r, g, b);
  }

  const newColor = generateColor();
  colours.push(newColor);
  //   colours.unshift(newColor);

  if (colours.lenght > 30) {
    colours.pop(); //removes and push the last element - stop the rectangles from generating
  }

  for (let i = 0; i < colours.length; i++) {
    fill(colours[i]);
    rect(i * rectWidth, 0, rectWidth, height);
  }
}
// draw a gradient for fun , same system as this?
