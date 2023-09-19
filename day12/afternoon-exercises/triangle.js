const triangle = () => {
  let a = Number(prompt("Specify angle of side A using cm:"));
  let b = Number(prompt("Specify angle of side B using cm:"));
  let c = Number(prompt("Specify angle of side C using cm:"));

  if (a + b + c === 180) {
    document.write("A nice triangle");
  } else {
    alert("You got it wrong mate, remeasure your angles!");
  }

  return;
};

triangle();
