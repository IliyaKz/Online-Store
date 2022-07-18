import { Reset } from "./reset";
import { IBasket } from "../interfacesAndTypes";
import "../../styles/basket.css";

class Basket implements IBasket {
  static basketContent: Array<string> = [];

  getContent(): void {
    if (localStorage.getItem("currentBasket") !== null) {
      Basket.basketContent = JSON.parse(
        localStorage.getItem("currentBasket") as string
      );
    }
  }

  setContent(): void {
    window.addEventListener("beforeunload", () => {
      if (Reset.isSaveAllowed) {
        localStorage.setItem(
          "currentBasket",
          JSON.stringify(Basket.basketContent)
        );
      }
    });
  }

  createBasket(): void {
    const target = document.querySelector(".basket") as HTMLElement;
    if (target === undefined) return;
    const background = document.createElement("div") as HTMLElement;
    background.classList.add("basket-background");
    const counter = document.createElement("div") as HTMLElement;
    counter.classList.add("basket-counter");
    counter.innerText = "0";
    if (localStorage.getItem("basketValue") !== null) {
      counter.innerText = localStorage.getItem("basketValue") as string;
    }
    const messageContainer = document.createElement("div") as HTMLElement;
    messageContainer.classList.add("basket-message-container");
    messageContainer.addEventListener("click", () => {
      messageContainer.classList.remove("message-shown");
    });
    const message = document.createElement("div") as HTMLElement;
    message.classList.add("basket-message");
    message.innerText = "Извините, все слоты корзины заполнены";
    target.append(counter);
    target.append(background);
    target.append(messageContainer);
    messageContainer.append(message);
    this.getContent();
    window.addEventListener("beforeunload", () => {
      if (Reset.isSaveAllowed) {
        localStorage.setItem("basketValue", counter.innerText);
      }
    });
  }
}

export { Basket };
