import { ProductStartDrawer } from '../products/productStartDrawer';
import { TemplateKeeper } from '../products/productTemplate';
import { Reset } from './reset';
import { Message } from './message';
import { ISearch } from '../interfacesAndTypes';
import '../../styles/search.css';

class Search implements ISearch {
  productDrawer: ProductStartDrawer;

  message: Message;

  constructor() {
    this.productDrawer = new ProductStartDrawer;
    this.message = new Message;
  }

  createSearch(): void {
    const target = document.querySelector('.search') as HTMLElement;
    if (target === undefined) return;
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
      this.productDrawer.drawProducts();
      this.message.showMessage();
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