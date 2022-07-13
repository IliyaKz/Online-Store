import { ProductCreator } from '../products/productCreator';
import { Controller } from '../settings/controllers';
import { TemplateKeeper } from '../products/productTemplate';

class App {
  creator: ProductCreator;

  controller: Controller;

  constructor() {
    this.creator = new ProductCreator;
    this.controller = new Controller;
  }

  start(): void {
    this.creator.createProducts();
    this.creator.drawProducts(this.creator.filterProducts(TemplateKeeper.defaultTemplate, ProductCreator.productArray));
    this.controller.drawCheckboxes();
    this.controller.drawRangeSliders();
    this.controller.drawSelect();
    this.controller.drawSearch();
    this.controller.drawResetsButton();
  }
}

export { App };