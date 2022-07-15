import { ProductCreator } from '../products/productCreator';
import { Controller } from '../settings/controllers';
import { Basket } from '../settings/basket';
import { ProductStartDrawer } from '../products/productStartDrawer';
import { IApp } from '../interfacesAndTypes';

class App implements IApp {
  creator: ProductCreator;

  controller: Controller;

  basket: Basket;

  startDrawer: ProductStartDrawer;

  constructor() {
    this.creator = new ProductCreator;
    this.controller = new Controller;
    this.basket = new Basket;
    this.startDrawer = new ProductStartDrawer;
  }

  start(): void {
    this.controller.addSetterGetter();
    this.controller.drawBasket();
    this.creator.createProducts();
    this.controller.drawCheckboxes();
    this.controller.drawRangeSliders();
    this.controller.drawSelect();
    this.controller.drawSearch();
    this.controller.drawResetsButton();
    this.startDrawer.drawProducts();
    this.controller.showMessage();
  }
}

export { App };