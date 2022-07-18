import { ProductCreator } from "../products/productCreator";
import { Product } from "../products/product";
import { TemplateKeeper } from "../products/productTemplate";
import { Reset } from "./reset";
import { Message } from "./message";
import { ISorting } from "../interfacesAndTypes";
import "../../styles/sorting.css";

class Sorting implements ISorting {
  creator: ProductCreator;

  message: Message;

  constructor() {
    this.creator = new ProductCreator();
    this.message = new Message();
  }

  sortingProducts(array: Array<Product>): Array<Product> | void {
    if (document.querySelector(".select-current-value") === undefined) return;
    const param = (
      document.querySelector(".select-current-value") as HTMLElement
    ).innerText;
    const arrayCopy = array;
    let res: number;
    arrayCopy.sort((a, b) => {
      switch (param) {
        case "По названию, от А до Я":
          res = 0;
          if (a.data.name < b.data.name) res = -1;
          if (a.data.name > b.data.name) res = 1;
          return res;
        case "По названию, от Я до А":
          res = 0;
          if (a.data.name < b.data.name) res = 1;
          if (a.data.name > b.data.name) res = -1;
          return res;
        case "По размеру, по возрастанию":
          return (+a.data.size - +b.data.size) as number;
        case "По размеру, по убыванию":
          return (+b.data.size - +a.data.size) as number;
        case "По количеству, по возрастанию":
          return (+a.data.amount - +b.data.amount) as number;
        case "По количеству, по убыванию":
          return (+b.data.amount - +a.data.amount) as number;
        default:
          return 0;
      }
    });
    return arrayCopy;
  }

  createSelectItem(
    text: string,
    parent: HTMLElement,
    current: HTMLElement
  ): void {
    const item = document.createElement("div") as HTMLElement;
    item.classList.add("select-item");
    item.innerText = text;
    item.addEventListener("click", () => {
      parent.classList.remove("select-open");
      current.innerText = text;
      let arr: Array<Product> = this.creator.filterProducts(
        TemplateKeeper.currentTemplate,
        ProductCreator.productArray
      );
      arr = this.sortingProducts(arr) as Array<Product>;
      this.creator.drawProducts(arr);
      this.message.showMessage();
    });
    parent.append(item);
  }

  createSelect(): void {
    const target = document.querySelector(".select") as HTMLElement;
    if (target === undefined) return;
    const header = document.createElement("div") as HTMLElement;
    header.classList.add("select-header");
    const current = document.createElement("div") as HTMLElement;
    current.classList.add("select-current-value");
    current.innerText = "По названию, от А до Я";
    if (localStorage.getItem("currentSorting") !== null) {
      current.innerText = localStorage.getItem("currentSorting") as string;
    }
    const icon = document.createElement("div") as HTMLElement;
    icon.classList.add("select-icon");
    header.append(current);
    header.append(icon);
    const body = document.createElement("div") as HTMLElement;
    body.classList.add("select-body");
    this.createSelectItem("По названию, от А до Я", body, current);
    this.createSelectItem("По названию, от Я до А", body, current);
    this.createSelectItem("По размеру, по возрастанию", body, current);
    this.createSelectItem("По размеру, по убыванию", body, current);
    this.createSelectItem("По количеству, по возрастанию", body, current);
    this.createSelectItem("По количеству, по убыванию", body, current);
    header.addEventListener("click", () => {
      body.classList.toggle("select-open");
    });
    target.append(header);
    target.append(body);
    window.addEventListener("beforeunload", () => {
      if (Reset.isSaveAllowed) {
        localStorage.setItem("currentSorting", current.innerText);
      }
    });
  }
}

export { Sorting };
