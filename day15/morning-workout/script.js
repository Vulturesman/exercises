const mouseText = document.querySelector(".padlock");
const classText = document.querySelector(".text");

let isClicked = false;

mouseText.addEventListener("mouseenter", () => {
  classText.className = "text text_visible";
});

mouseText.addEventListener("mouseleave", () => {
  if (!isClicked) {
    classText.className = "text";
  }
});

mouseText.addEventListener("click", () => {
  mouseText.className = "padlock padlock_clicked";
  classText.className = "text text_visible";
  isClicked = true;
});
