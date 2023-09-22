// Crosswalk lights (stage 1)
// Download the following pictures of crosswalk lights. Create a webpage where the stoplight is on and the walk light is off. Imagine a pedestrian trying to cross the street. There should be a button they can push which switches the green light on and the red on-off. After five seconds, the walk light will automatically return back to off and the stoplight turns on again. Use setTimeout to implement this behavior.

// -----------------

const stopLight = document.querySelector(".stop");
const walk = document.querySelector(".walk");
const srcStopLight = stopLight.getAttribute("src");
const srcWalk = walk.getAttribute("src");

const lightsToggle = () => {
  if (
    srcStopLight === "./img/stop-on.svg" &&
    srcWalk === "./img/walk-off.svg"
  ) {
    stopLight.setAttribute("src", "./img/stop-off.svg");
    walk.setAttribute("src", "./img/walk-on.svg");
  }

  setTimeout(() => {
    stopLight.setAttribute("src", "./img/stop-on.svg");
    walk.setAttribute("src", "./img/walk-off.svg");
  }, 5000);
};

// --------------------

// const btnElm = document.querySelector(".btn");

// btnElm.addEventListener("click", () => {
//   const stopElm = document.querySelector("#stop");
//   const walkElm = document.querySelector("#walk");

//   stopElm.className = "light-stop-off light";
//   walkElm.className = "light-walk-on light";

//   setTimeout(() => {
//     stopElm.className = "light-stop-on light";
//     walkElm.className = "light-walk-off light";
//   }, 5000);
// });
