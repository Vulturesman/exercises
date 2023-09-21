const data = [
  [
    "https://classes.codingbootcamp.cz/assets/classes/1428/london.jpg",
    "London",
  ],
  ["https://classes.codingbootcamp.cz/assets/classes/1428/paris.jpg", "Paris"],
  [
    "https://classes.codingbootcamp.cz/assets/classes/1428/new-york.jpg",
    "New York",
  ],
  [
    "https://classes.codingbootcamp.cz/assets/classes/1428/nova-scotia.jpg",
    "Nova Scotia",
  ],
  ["https://classes.codingbootcamp.cz/assets/classes/1428/tokyo.jpeg", "Tokyo"],
  [
    "https://classes.codingbootcamp.cz/assets/classes/1428/venice.jpg",
    "Venice",
  ],
];

const urls = data.map((url) => url[0]);

const names = data.map((name) => name[1]);

const gallery = document.querySelector(".gallery");

for (let i = 0; i < urls.length; i++) {
  gallery.innerHTML += `<div class="image">
         <img src=${urls[i]} alt=${names[i]}>
       <div class="image__description">${names[i]}</div>
    </div>`;
}

// --------------------------------------------
// or

data.forEach((image) => {
  gallery.innerHTML += `<div class="image">
<img src=${image[0]} alt=${image[1]}>
<div class="image__description">${image[1]}</div>
</div>`;
});
