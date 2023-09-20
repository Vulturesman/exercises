const tryLogin = () => {
  const email = document.querySelector('input[name="email"]').value;

  const password = document.querySelector('input[name="password"]').value;

  if (email === "bruce@wayne.com" && password === "ILoveCats") {
    displaySuccess("Login approved");
  } else if (email === "jakub@borec.cz" && password === "ILoveBoobies") {
    jakub("You are pervert and uchylo!!!");
  } else {
    displayError("Unknown user or incorrect password");
  }
};

const displayError = (message) => {
  const messagesContainer = document.querySelector(".login-form__messages");

  messagesContainer.innerHTML =
    '<div class="login-form__message login-form__message_error">' +
    message +
    "</div>";
};

const displaySuccess = (message) => {
  const messagesContainer = document.querySelector(".login-form__messages");

  messagesContainer.innerHTML =
    '<div class="login-form__message login-form__message_success">' +
    message +
    "</div>";
};

const jakub = (message) => {
  const messageContainer = document.querySelector(".login-form__messages");

  messageContainer.innerHTML =
    '<div class="login-form__message login-form__message_success">' +
    message +
    "</div>";
};
