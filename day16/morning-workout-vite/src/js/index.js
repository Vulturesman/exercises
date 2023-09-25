import { conversation } from "./data";
import { Conversation } from "./classes/Conversation";

const conversationElem = document.querySelector(".conversation");
const conversationObject = new Conversation(conversationElem);

conversation.forEach((message, index) => {
  setTimeout(() => {
    conversationObject.addMessage(message);
  }, 2000 * index);
});
