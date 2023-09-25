import { conversation } from "./data";
import { prepareMessageHTML } from "./functions";

const conversationElem = document.querySelector(".conversation");

conversation.forEach((message, index) => {
  setTimeout(() => {
    conversationElem.innerHTML += prepareMessageHTML(message);
  }, 2000 * index);
});
