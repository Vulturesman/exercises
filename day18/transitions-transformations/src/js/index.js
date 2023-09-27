const box = document.querySelector("div");

box.addEventListener("click", () => {
  box.classList.add("adjusted_box");
});

const boxBig = document.querySelector("div.a");

boxBig.addEventListener("click", () => {
  boxBig.classList.remove("a"), boxBig.classList.add("changed");
});
