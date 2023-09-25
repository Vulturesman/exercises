import { prepareMessageHTML } from "../functions";

class Conversation {
  constructor(parentElement) {
    this.parentElement = parentElement;
  }

  addMessage(message) {
    this.parentElement.innerHTML += prepareMessageHTML(message);
  }
}

export { Conversation };
