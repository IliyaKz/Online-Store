import { ProductCreator } from '../products/productCreator';
import { Product } from '../products/product';
import { TemplateKeeper } from '../products/productTemplate';
import { Sorting } from './sorting';
import { Reset } from './reset';

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
    input.value = '';
    if (localStorage.getItem('searchValue') !== null) {
      input.value = localStorage.getItem('searchValue') as string;
    }
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
    window.addEventListener('beforeunload', () => {
      if (Reset.isSaveAllowed) {
        localStorage.setItem('searchValue', input.value);
      }
    });
  }

}

export { Search };