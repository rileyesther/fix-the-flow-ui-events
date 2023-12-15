let frontend = document.querySelector("a:nth-of-type(1)");
let design = document.querySelector("a:nth-of-type(2)");
let and = document.querySelector("a:nth-of-type(3)");
let dev = document.querySelector("a:nth-of-type(4)");
let s5 = document.querySelector("a:nth-of-type(5)");
let fix = document.querySelector("a:nth-of-type(6)");
let the = document.querySelector("a:nth-of-type(7)");
let flow = document.querySelector("a:nth-of-type(8)");
let user = document.querySelector("a:nth-of-type(9)");
let interface = document.querySelector("a:nth-of-type(10)");

let interaction = document.querySelector("a:nth-of-type(12)");

interaction.addEventListener("click", jumpHandler);
interaction.addEventListener("animationend", jumpHandler);

function jumpHandler() {
  interaction.classList.toggle("jump");
}

fix.addEventListener("click", fixHandler);
the.addEventListener("dblclick", theHandler);
flow.addEventListener("mouseover", flowHandler);
user.addEventListener("mouseout", userHandler);
interface.addEventListener("mousein", interfaceHandler);

function fixHandler() {
  fix.classList.toggle("swing");
}

function theHandler() {
  the.classList.toggle("flash");
}

function flowHandler() {
  flow.classList.toggle("zoom");
}

function userHandler() {
  user.classList.toggle("jiggle");
}

function interfaceHandler() {
  interface.classList.toggle("wobble");
}

document.addEventListener("keydown", checkKeyPressed, false);

function checkKeyPressed(e) {
  if (e.key === "1") {
    frontend.classList.toggle("bounce");
  }
  if (e.key === "2") {
    design.classList.toggle("pulse");
  }
  if (e.key === "3") {
    and.classList.toggle("shake");
  }
  if (e.key === "4") {
    dev.classList.toggle("flip");
  }
  if (e.key === "5") {
    s5.classList.toggle("swing");
  }
}
