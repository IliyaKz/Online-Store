import { ProductCreator } from '../products/productCreator';
import { Product } from '../products/product';
import { TemplateKeeper } from '../products/productTemplate';
import { Sorting } from './sorting';

class Search {
  creator: ProductCreator;

  sorting: Sorting;

  constructor() {
    this.creator = new ProductCreator();
    this.sorting = new Sorting();
  }

  createSearch(): void {
    const target = document.querySelector('.search') as HTMLElement;
    const form = document.createElement('form') as HTMLFormElement;
    form.classList.add('search-form');
    const input = document.createElement('input') as HTMLInputElement;
    input.classList.add('search-input');
    input.type = 'search';
    input.placeholder = 'Введите запрос';
    input.autocomplete = 'off';
    input.autofocus = true;
    input.addEventListener('input', () => {
      TemplateKeeper.currentTemplate.name[0] = input.value;
      let result: Array<Product> = this.creator.filterProducts(TemplateKeeper.currentTemplate, ProductCreator.productArray);
      result = this.sorting.sortingProducts(result);
      this.creator.drawProducts(result);
    });
    document.addEventListener(('resetEvent'), () => {
      input.value = '';
    });
    target.append(form);
    form.append(input);
  }

}

export { Search };