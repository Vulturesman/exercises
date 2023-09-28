const textRating = document.querySelector(".rating__value");
const stars = document.querySelectorAll(".rating__star");

stars.forEach((star, index) => {
  star.addEventListener("click", (e) => {
    textRating.textContent = index + 1;
    stars.forEach((starInside, indexInside) => {
      starInside.classList.remove("rating__star--on");
      if (indexInside <= index) {
        starInside.classList.add("rating__star--on");
      }
    });
  });
});
