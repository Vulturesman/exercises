const alerts = [
  "Unable to access resource. User is not authorized.",
  "You are missing proper user permissions.",
  "Administrators have been notified of this action.",
  "Please remain where you are, police is on the way.",
];

const alertsContainer = document.querySelector(".alerts");
alertsContainer.style.flexDirection = "column";
alertsContainer.style.gap = "2rem";
alertsContainer.style.textAlign = "center";

alerts.forEach((alert) => {
  const alertElement = document.createElement("div");
  alertElement.classList.add("alert");

  const alertTextElement = document.createElement("div");
  alertTextElement.classList.add("alert__text");
  alertTextElement.textContent = alert;

  const alertCloseElement = document.createElement("div");
  alertCloseElement.classList.add("alert__close");
  alertCloseElement.textContent = "×";

  alertElement.appendChild(alertTextElement);
  alertElement.appendChild(alertCloseElement);

  alertsContainer.appendChild(alertElement);

  alertElement.addEventListener("click", () => {
    alertElement.classList.add("clicked");
  });

  alertCloseElement.addEventListener("click", () => {
    alertElement.classList.add("hidden");
  });
});
