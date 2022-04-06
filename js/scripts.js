//allllll the variables
const arrow = document.querySelectorAll(".arrow")[0];
const allBow = Array.from(document.querySelectorAll(".bow"));
const bothDroppers = Array.from(document.querySelectorAll(".bothDroppers"));
const rightPotion = Array.from(document.querySelectorAll(".rightPotion"));
const rightPotionFill = document.querySelector(".rightPotionFill");
const rightDropper = Array.from(document.querySelectorAll(".rightDropper"));
const rightDroplet = Array.from(document.querySelectorAll(".rightDroplet"));
const leftPotion = Array.from(document.querySelectorAll(".leftPotion"));
const leftDropper = Array.from(document.querySelectorAll(".leftDropper"));
const leftDroplet = Array.from(document.querySelectorAll(".leftDroplet"));
const g = Array.from(document.querySelectorAll(".g"));
const sword = Array.from(document.querySelectorAll(".sword"));
const shield = Array.from(document.querySelectorAll(".shield"));

//Fixing svg position
gsap.to(bothDroppers, {
  duration: 0,
  y: -50
});
//Fixing svg position
gsap.to(".allSVG", {
  duration: 0,
  y: 70
});
allBow.forEach((allBow) => {
  allBow.addEventListener("mousedown", () => {
    playPullBack();
  });
});
g.forEach((g) => {
  g.addEventListener("click", () => {
    playChain();
  });
});
sword.forEach((sword) => {
  sword.addEventListener("click", () => {
    playSword();
  });
});
shield.forEach((shield) => {
  shield.addEventListener("click", () => {
    playShield();
  });
});
//Arrow firing
allBow.forEach((allBow) => {
  allBow.addEventListener("mouseup", () => {
    var bow = gsap.timeline({});
    bow.call(playArrowHitting);
    bow.to(".arrow", { x: 75, duration: 1 });
    bow.to(".arrow", { x: 0, delay: 2, duration: 0 });
  });
});
rightPotion.forEach((rightPotion) => {
  rightPotion.addEventListener("click", () => {
    var potionColor = Math.floor(Math.random() * 16777215).toString(16);
    var rPotion = gsap.timeline({});
    rPotion.set(".rightDropperFill", {
      fill: "#" + potionColor,
      stroke: "#" + potionColor
    });
    rPotion.call(playGlassClink);
    rPotion.fromTo(
      ".rightDropper",
      { opacity: 1, x: 700, ease: "expo.in" },
      { x: 0, duration: 2 }
    );
    rPotion.set(".rightDropletFill", { fill: "#" + potionColor });
    rPotion.call(playDroplet);
    rPotion.fromTo(
      ".rightDroplet",
      { y: 0 },
      { opacity: 1, y: 75, duration: 0.5 }
    );
    rPotion.to(".rightDroplet", { opacity: 0 });
    rPotion.set(".rightPotionFill", { fill: "#" + potionColor });
    rPotion.fromTo(".rightDropper", { x: 0 }, { x: -700, duration: 2 });
  });
});
leftPotion.forEach((leftPotion) => {
  leftPotion.addEventListener("click", () => {
    var potionColor = Math.floor(Math.random() * 16777215).toString(16);
    var lPotion = gsap.timeline({});
    lPotion.set(".leftDropperFill", {
      fill: "#" + potionColor,
      stroke: "#" + potionColor
    });
    lPotion.call(playGlassClink);
    lPotion.fromTo(
      ".leftDropper",
      { opacity: 1, x: 700 },
      { x: 0, duration: 2 }
    );
    lPotion.set(".leftDropletFill", { fill: "#" + potionColor });
    lPotion.call(playDroplet);
    lPotion.fromTo(
      ".leftDroplet",
      { y: 0 },
      { opacity: 1, y: 75, duration: 0.5 }
    );
    lPotion.to(".leftDroplet", { opacity: 0 });
    lPotion.set(".leftPotionFill", { fill: "#" + potionColor });
    lPotion.fromTo(".leftDropper", { x: 0 }, { x: -700, duration: 2 });
  });
});
function playPullBack() {
  var audio = document.getElementById("pullBack");
  audio.play();
}
function playArrowHitting() {
  var audio = document.getElementById("arrowHitting");
  audio.play();
}
function playGlassClink() {
  var audio = document.getElementById("glassClink");
  audio.play();
}
function playDroplet() {
  var audio = document.getElementById("droplet");
  audio.play();
}
function playShield() {
  var audio = document.getElementById("shield");
  audio.play();
}
function playChain() {
  var audio = document.getElementById("chain");
  audio.play();
}
function playSword() {
  var audio = document.getElementById("sword");
  audio.play();
  console.log(audio);
}
