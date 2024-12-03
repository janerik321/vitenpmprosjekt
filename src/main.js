import "./style.css";
import { Fireworks } from "fireworks-js";

const combined = document.querySelector("#combined");
const wheel = document.querySelector("#wheel");
const container = document.querySelector(".container");
let angle = 45;
let positionX = 0;

combined.style.transform = `rotate(${angle}deg)`;
wheel.style.transform = `rotate(calc(${positionX}deg - ${angle}deg)`;

const fireworks = new Fireworks(container, {});
window.addEventListener("keydown", (e) => {
  if (e.key === " ") {
    fireworks.launch(1);
  }
  if (e.key === "q" && angle >= -70) {
    angle--;
  } else if (e.key === "w" && angle <= 70) {
    angle++;
  }

  if (e.key === "ArrowLeft" && positionX >= -70) {
    positionX -= 2;
  } else if (e.key === "ArrowRight" && positionX <= innerWidth - 130) {
    positionX += 2;
  }

  if (positionX > innerWidth - 130) {
    positionX = innerWidth - 130;
  }
  combined.style.transform = `rotate(${angle}deg)`;
  combined.style.left = `${positionX}px`;
  wheel.style.transform = `rotate(calc(${positionX}deg - ${angle}deg)`;
});
