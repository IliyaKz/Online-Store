import { IProductStats } from '../interfacesAndTypes';

class Product {
  data: IProductStats;

  constructor(source: IProductStats) {
    this.data = source;
  }

  create(): void {
    const target = document.querySelector('.products') as HTMLElement;
    const prodItem = document.createElement('div') as HTMLElement;
    prodItem.classList.add('product-item');
    target.append(prodItem);
    function addProperty(prop: string | number, propName?: string) {
      const el =  document.createElement('p') as HTMLElement;
      el.classList.add('product-property');
      el.innerHTML = (propName !== undefined) ? `${propName}: ${prop}` : `${prop}`;
      prodItem.append(el);
    }
    addProperty(this.data.name);
    const prodImg =  document.createElement('img') as HTMLImageElement;
    prodImg.classList.add('product-img');
    prodImg.src = this.data.img;
    prodImg.alt = this.data.name;
    prodImg.width = 200;
    prodImg.width = 150;
    prodItem.append(prodImg);
    const prodButton = document.createElement('button') as HTMLButtonElement;
    prodButton.classList.add('product-btn');
    prodButton.classList.add('product-btn-add');
    prodButton.innerHTML = 'В корзину';
    prodButton.addEventListener(('click'), () => {
      const basket = document.querySelector('.basket-counter') as HTMLElement;
      if (prodButton.classList.contains('product-btn-add')) {
        const count: number = +(basket.innerHTML);
        if (count === 20) {
          const message = document.querySelector('.message-container') as HTMLElement;
          message.classList.remove('message-hidden');
        } else {
          prodButton.classList.remove('product-btn-add');
          prodButton.classList.add('product-btn-remove');
          basket.innerHTML = (count + 1).toString();
          prodButton.innerHTML = 'Убрать из корзины';
        }
      } else {
        const count: number = +(basket.innerHTML);
        prodButton.classList.remove('product-btn-remove');
        prodButton.classList.add('product-btn-add');
        basket.innerHTML = (count - 1).toString();
        prodButton.innerHTML = 'В корзину';
      }
    });
    addProperty(this.data.firm, 'Производитель');
    addProperty(this.data.RAM, 'RAM');
    addProperty(this.data.screen, 'Экран');
    addProperty(this.data.color, 'Цвет');
    addProperty(this.data.amount, 'Количество');
    addProperty(this.data.year, 'Год выпуска');
    addProperty(this.data.popularity, 'Популярность');
    prodItem.append(prodButton);
  }
}

export { Product };