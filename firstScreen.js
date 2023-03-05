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
    " Just collect as many cows as you can, but avoid all obstacles! Don't forget to control your speed, you don't want to smash the cows!";
  text(rules, 213, 400, 400, 200);
}
