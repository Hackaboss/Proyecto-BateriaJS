"use strict";

// Crash
// Creamos el nuevo HTMLAudioElement
const audioCrash = new Audio("./sounds/crash.wav");

// Creamos la constante crash y seleccionamos en el DOM el elemento correspondiente a crash
const crash = document.querySelector("div:first-of-type");

// Creamos un evento para que el sonido crash se ejecute cuando clicamos sobre él
crash.addEventListener("click", (event) => {
  play(audioCrash);
});

// HiHat Close
const audioHiHatClose = new Audio("./sounds/hihat-close.wav");
const hhClose = document.querySelector("div:nth-of-type(2)");

hhClose.addEventListener("click", (event) => {
  play(audioHiHatClose);
});

// HiHat Open
const audioHiHatOpen = new Audio("./sounds/hihat-open.wav");
const hhOpen = document.querySelector("div:nth-of-type(3)");

hhOpen.addEventListener("click", (event) => {
  play(audioHiHatOpen);
});

// Kick
const audioKick = new Audio("./sounds/kick.wav");
const kick = document.querySelector("div:nth-of-type(4)");

kick.addEventListener("click", (event) => {
  play(audioKick);
});

// Ride
const audioRide = new Audio("./sounds/ride.wav");
const ride = document.querySelector("div:nth-of-type(5)");

ride.addEventListener("click", (event) => {
  play(audioRide);
});

// Snare
const audioSnare = new Audio("./sounds/snare.wav");
const snare = document.querySelector("div:nth-of-type(6)");

snare.addEventListener("click", (event) => {
  play(audioSnare);
});

// Tom High
const audioTomHigh = new Audio("./sounds/tom-high.wav");
const tomHigh = document.querySelector("div:nth-of-type(7)");

tomHigh.addEventListener("click", (event) => {
  play(audioTomHigh);
});

// Tom Mid
const audioTomMid = new Audio("./sounds/tom-mid.wav");
const tomMid = document.querySelector("div:nth-of-type(8)");

tomMid.addEventListener("click", (event) => {
  play(audioTomMid);
});

// Tom Low
const audioTomLow = new Audio("./sounds/tom-low.wav");
const tomLow = document.querySelector("div:last-of-type");

tomLow.addEventListener("click", (event) => {
  play(audioTomLow);
});

// Eventos de teclado

document.addEventListener("keydown", (event) => {
  // audioCrash.play(event);
  if (event.code === "KeyC") {
    play(audioCrash);
  }
  if (event.code === "KeyG") {
    play(audioHiHatClose);
  }
  if (event.code === "KeyO") {
    play(audioHiHatOpen);
  }
  if (event.code === "KeyK") {
    play(audioKick);
  }
  if (event.code === "KeyR") {
    play(audioRide);
  }
  if (event.code === "KeyS") {
    play(audioSnare);
  }
  if (event.code === "KeyH") {
    play(audioTomHigh);
  }
  if (event.code === "KeyM") {
    play(audioTomMid);
  }
  if (event.code === "KeyL") {
    play(audioTomLow);
  }
});

function play(sound) {
  setTimeout(() => {
    sound.play();
  }, 150);
}
