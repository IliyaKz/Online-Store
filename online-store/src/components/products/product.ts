import { IProductStats } from '../interfacesAndTypes';
import { Basket } from '../settings/basket';

class Product {
  data: IProductStats;

  constructor(source: IProductStats) {
    this.data = source;
  }

  create(): void {
    const target = document.querySelector('.products') as HTMLElement;
    const prodItem = document.createElement('div') as HTMLElement;
    prodItem.classList.add('product-item');
    if (Basket.basketContent.includes(this.data.name)) { prodItem.classList.add('product-added'); }
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
    if (Basket.basketContent.includes(this.data.name)) {
      prodButton.classList.add('product-btn-remove');
      prodButton.innerHTML = 'Убрать из корзины';
    } else {
      prodButton.classList.add('product-btn-add');
      prodButton.innerHTML = 'В корзину';
    }
    prodButton.addEventListener(('click'), () => {
      const basket = document.querySelector('.basket-counter') as HTMLElement;
      const count: number = +(basket.innerHTML);
      if (!Basket.basketContent.includes(this.data.name)) {
        if (count === 20) {
          const message = document.querySelector('.message-container') as HTMLElement;
          message.classList.remove('message-hidden');
        } else {
          Basket.basketContent.push(this.data.name);
          basket.innerHTML = (count + 1).toString();
          prodButton.innerHTML = 'Убрать из корзины';
        }
      } else {
        Basket.basketContent = Basket.basketContent.filter(item => item !== this.data.name);
        basket.innerHTML = (count - 1).toString();
        prodButton.innerHTML = 'В корзину';
      }
      prodButton.classList.toggle('product-btn-add');
      prodButton.classList.toggle('product-btn-remove');
      prodItem.classList.toggle('product-added');
    });
    addProperty(this.data.country, 'Родина');
    addProperty(this.data.horns, 'Рога');
    addProperty(this.data.color, 'Цвет');
    addProperty(this.data.amount, 'Количество');
    addProperty(this.data.size, 'Длина, см');
    addProperty(this.data.popularity, 'Популярность');
    prodItem.append(prodButton);
  }
}

export { Product };