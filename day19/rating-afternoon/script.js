class Rating {
  constructor(headline) {
    this.headline = headline;
    this.element = document.createElement("div");
    this.textRating = undefined;
    this.stars = null;
    this.render();
  }

  render() {
    this.element.innerHTML = ` <div class="rating">
      <div class="rating__value">3</div>
      <div class="rating__stars">
        <div class="rating__star rating__star--on"></div>
        <div class="rating__star rating__star--on"></div>
        <div class="rating__star rating__star--on"></div>
        <div class="rating__star"></div>
        <div class="rating__star"></div>
      </div>
    </div>`;

    this.textRating = this.element.querySelector(".rating__value");
    this.stars = this.element.querySelectorAll(".rating__star");

    this.stars.forEach((star, index) => {
      star.addEventListener("click", (e) => {
        this.textRating.textContent = index + 1;
        stars.forEach((starInside, indexInside) => {
          starInside.classList.remove("rating__star--on");
          if (indexInside <= index) {
            starInside.classList.add("rating__star--on");
          }
        });
      });
    });
  }
}

const rating1 = new Rating("Harry Potter");
document.body.appendChild(rating1.element);
