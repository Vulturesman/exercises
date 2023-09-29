import { ProgressBar } from "./ProgressBar";

const progressObject = new ProgressBar(0, 1, 17, 0, "red");
document.body.appendChild(progressObject.element);

const progressObject2 = new ProgressBar(0, 1, 17, 0, "green");
document.body.appendChild(progressObject2.element);

const progressObject3 = new ProgressBar(0, 1, 17, 0, "blue");
document.body.appendChild(progressObject3.element);

const colorBtn = document.querySelector(".colorBtn");

colorBtn.addEventListener("click", () => {
  const bar1 = progressObject.value;
  const bar2 = progressObject2.value;
  const bar3 = progressObject3.value;

  const btnMix = `rgb(${bar1 * 15}, ${bar2 * 15}, ${bar3 * 15})`;
  document.querySelector(".colorBtn").style.backgroundColor = `${btnMix}`;
  if (bar1 + bar2 + bar3 > 30) {
    document.querySelector(".colorBtn").style.color = `black`;
  }
});
