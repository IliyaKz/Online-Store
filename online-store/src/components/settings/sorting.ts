import { ProductCreator } from '../products/productCreator';
import { Product } from '../products/product';
import { TemplateKeeper } from '../products/productTemplate';
import { Reset } from './reset';
import { Message } from './message';

class Sorting {

  creator: ProductCreator;

  message: Message;

  constructor() {
    this.creator = new ProductCreator();
    this.message = new Message;
  }

  sortingProducts(array: Array<Product>): Array<Product> {
    const param = (document.querySelector('.select-current-value') as HTMLElement).innerText;
    const arrayCopy = array;
    let res: number;
    arrayCopy.sort((a, b) => {
      switch (param) {
        case 'От А до Я':
          res = 0;
          if (a.data.name < b.data.name) res = -1;
          if (a.data.name > b.data.name) res = 1;
          return res;
        case 'От Я до А':
          res = 0;
          if (a.data.name < b.data.name) res = 1;
          if (a.data.name > b.data.name) res = -1;
          return res;
        case 'Год вверх':
          return (+a.data.year - +b.data.year) as number;
        case 'Год вниз':
          return (+b.data.year - +a.data.year) as number;
        case 'Количество вверх':
          return (+a.data.amount - +b.data.amount) as number;
        case 'Количество вниз':
          return (+b.data.amount - +a.data.amount) as number;
        default:
          return 0;
      }
    });
    return arrayCopy;
  }

  createSelectItem(text: string, parent: HTMLElement, current: HTMLElement): void {
    const item = document.createElement('div') as HTMLElement;
    item.classList.add('select-item');
    item.innerText = text;
    item.addEventListener('click', () => {
      parent.classList.remove('select-open');
      current.innerText = text;
      let arr: Array<Product> = this.creator.filterProducts(TemplateKeeper.currentTemplate, ProductCreator.productArray);
      arr = this.sortingProducts(arr);
      this.creator.drawProducts(arr);
      this.message.showMessage();
    });
    parent.append(item);
  }

  createSelect(): void {
    const target = document.querySelector('.select') as HTMLElement;
    const header = document.createElement('div') as HTMLElement;
    header.classList.add('select-header');
    const current = document.createElement('div') as HTMLElement;
    current.classList.add('select-current-value');
    current.innerText = 'От А до Я';
    if (localStorage.getItem('currentSorting') !== null) {
      current.innerText = localStorage.getItem('currentSorting') as string;
    }
    const icon = document.createElement('div') as HTMLElement;
    icon.classList.add('select-icon');
    header.append(current);
    header.append(icon);
    const body = document.createElement('div') as HTMLElement;
    body.classList.add('select-body');
    this.createSelectItem('От А до Я', body, current);
    this.createSelectItem('От Я до А', body, current);
    this.createSelectItem('Год вверх', body, current);
    this.createSelectItem('Год вниз', body, current);
    this.createSelectItem('Количество вверх', body, current);
    this.createSelectItem('Количество вниз', body, current);
    header.addEventListener('click', () => {
      body.classList.toggle('select-open');
    });
    target.append(header);
    target.append(body);
    window.addEventListener('beforeunload', () => {
      if (Reset.isSaveAllowed) {
        localStorage.setItem('currentSorting', current.innerText);
      }
    });
  }

}

export { Sorting };