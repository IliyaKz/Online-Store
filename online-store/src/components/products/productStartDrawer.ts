import { ProductCreator } from './productCreator';
import { Product } from './product';
import { Sorting } from '../settings/sorting';
import { TemplateKeeper } from '../products/productTemplate';

class ProductStartDrawer {
  creator: ProductCreator;

  sorting: Sorting;

  constructor() {
    this.creator = new ProductCreator;
    this.sorting = new Sorting;
  }

  drawProducts(): void {
    let result: Array<Product> = this.creator.filterProducts(TemplateKeeper.currentTemplate, ProductCreator.productArray);
    result = this.sorting.sortingProducts(result);
    this.creator.drawProducts(result);
  }

}

export { ProductStartDrawer };