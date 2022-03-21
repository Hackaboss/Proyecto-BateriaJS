"use strict";

// Crash
// Creamos el nuevo HTMLAudioElement
var audioCrash = new Audio("./sounds/crash.wav");

// Creamos la constante crash y seleccionamos en el DOM el elemento correspondiente a crash
const crash = document.querySelector("div:first-of-type");

// Creamos un evento para que el sonido crash se ejecute cuando clicamos sobre él
crash.addEventListener("click", (event) => {
  audioCrash.play();
});

// HiHat Close
var audioHiHatClose = new Audio("./sounds/hihat-close.wav");
const hhClose = document.querySelector("div:nth-of-type(2)");

hhClose.addEventListener("click", (event) => {
  audioHiHatClose.play();
});

// HiHat Open
var audioHiHatOpen = new Audio("./sounds/hihat-open.wav");
const hhOpen = document.querySelector("div:nth-of-type(3)");

hhOpen.addEventListener("click", (event) => {
  audioHiHatOpen.play();
});

// Kick
var audioKick = new Audio("./sounds/kick.wav");
const kick = document.querySelector("div:nth-of-type(4)");

kick.addEventListener("click", (event) => {
  audioKick.play();
});

// Ride
var audioRide = new Audio("./sounds/ride.wav");
const ride = document.querySelector("div:nth-of-type(5)");

ride.addEventListener("click", (event) => {
  audioRide.play();
});

// Snare
var audioSnare = new Audio("./sounds/snare.wav");
const snare = document.querySelector("div:nth-of-type(6)");

snare.addEventListener("click", (event) => {
  audioSnare.play();
});

// Tom High
var audioTomHigh = new Audio("./sounds/tom-high.wav");
const tomHigh = document.querySelector("div:nth-of-type(7)");

tomHigh.addEventListener("click", (event) => {
  audioTomHigh.play();
});

// Tom Mid
var audioTomMid = new Audio("./sounds/tom-mid.wav");
const tomMid = document.querySelector("div:nth-of-type(8)");

tomMid.addEventListener("click", (event) => {
  audioTomMid.play();
});

// Tom Low
var audioTomLow = new Audio("./sounds/tom-low.wav");
const tomLow = document.querySelector("div:last-of-type");

tomLow.addEventListener("click", (event) => {
  audioTomLow.play();
});

// Eventos de teclado

document.addEventListener("keydown", (event) => {
  // audioCrash.play(event);
  if (event.code === "KeyC") {
    audioCrash.play();
  }
  if (event.code === "KeyG") {
    audioHiHatClose.play();
  }
  if (event.code === "KeyO") {
    audioHiHatOpen.play();
  }
  if (event.code === "KeyK") {
    audioKick.play();
  }
  if (event.code === "KeyR") {
    audioRide.play();
  }
  if (event.code === "KeyS") {
    audioSnare.play();
  }
  if (event.code === "KeyH") {
    audioTomHigh.play();
  }
  if (event.code === "KeyM") {
    audioTomMid.play();
  }
  if (event.code === "KeyL") {
    audioTomLow.play();
  }
});
