import { scenery } from "./background.js";

export function firstScreen() {
  scenery();
  textAlign(CENTER);
  textFont("Futura");
  fill(255, 255, 255);
  textSize(54);
  text("PLAY THE UFO GAME!", 400, 350);

  textFont("Avenir");
  textSize(20);

  let rules =
    "The rules are easy." +
    " Just collect as many cows as you can, but avoid all obstacles! Don't forget to control your speed.";
  text(rules, 213, 400, 400, 200);

  // let button = createButton("START");
  // button.position(325, 550);
  // button.size(200, 100);
  // button.style("font-family", "Futura");
  // button.style("font-size", "40px");
  // button.style("background-color", "#ABFF4F");
}

// firstScreen();
