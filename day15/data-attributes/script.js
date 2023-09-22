const alerts = document.querySelectorAll(".alert");

alerts.forEach((alert) => {
  const dataType = alert.getAttribute("data-type");
  alert.classList.add(`alert--${dataType}`);
});
