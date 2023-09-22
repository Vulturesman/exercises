const departures = [
  494, 499, 500, 517, 520, 523, 530, 556, 563, 576, 586, 613, 625,
];

const ul = document.createElement("ul");
document.body.appendChild(ul);

for (let i = 0; i < departures.length; i++) {
  const departureHours = Math.floor(departures[i] / 60);
  const departureMinutes = departures[i] % 60;

  ul.innerHTML += `<li>${departureHours}:${departureMinutes}</li>`;

  //   div solution
  //   const div = document.createElement("div");
  //   document.body.appendChild(div);
  //   div.textContent = `${departureHours}:${departureMinutes}`;
}

// -----------
/* solution CBP  difference in UL (alredy created in HTML) $ forEach method

const departures = [494, 499, 500, 517, 520, 523, 530, 556, 563, 576, 586, 613, 625];

const listElm = document.querySelector('ul');
departures.forEach((time) => {
  const hours = Math.floor(time / 60);
  const minutes = String(time % 60).padStart(2, '0');

  listElm.innerHTML += `<li>${hours}:${minutes}</li>`;
}); */
