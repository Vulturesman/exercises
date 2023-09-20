const switchBulb = () => {
  const classChange = document.querySelector("div");
  const testClass = classChange.className;

  if (testClass === "bulb__off") {
    classChange.className = "bulb__on";
  } else {
    classChange.className = "bulb__off";
  }

  console.log(classChange);
};
