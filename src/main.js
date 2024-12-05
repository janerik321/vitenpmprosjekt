import "./style.css";
import { Fireworks } from "fireworks-js";
// import soundFx from "/clap.wav";

const combined = document.querySelector("#combined");
const wheel = document.querySelector("#wheel");
const container = document.querySelector(".container");
let angle = 45;
let positionX = 0;

(async () => {
  await loadStarsPreset(tsParticles);

  await tsParticles.load({
    id: "tsparticles",
    options: {
      preset: "stars",
      background: {
        color: "#040414",
      },
      particles: {
        size: {
          value: {
            min: 0.5,
            max: 1.1,
          },
        },
        move: {
          enable: false,
        },
        number: {
          value: 1000,
          limit: 0,
          density: { enable: true, area: 1000 },
        },
      },
      fullScreen: {
        enable: false,
        // zIndex: -1,
      },
    },
  });
})();

combined.style.transform = `rotate(${angle}deg)`;
wheel.style.transform = `rotate(calc(${positionX}deg - ${angle}deg)`;

const fireworks = new Fireworks(container, {
  sound: {
    enabled: true,
    files: [
      "/sounds/explosion0.mp3",
      "/sounds/explosion0.mp3",
      "/sounds/explosion0.mp3",
    ],
    volume: {
      min: 40,
      max: 60,
    },
  },
  gravity: 1,
  // autoresize: true,
});

window.addEventListener("keydown", (e) => {
  if (e.key === " ") {
    fireworks.launch(1);
  }
  if (e.key === "q" || (e.key === "ArrowUp" && angle >= -70)) {
    angle--;
  } else if (e.key === "w" || (e.key === "ArrowDown" && angle <= 70)) {
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
  wheel.style.transform = `rotate(calc(${positionX * 2}deg - ${angle}deg)`;
});
