import { IProductStats, IProduct } from '../interfacesAndTypes';
import { Basket } from '../settings/basket';
import '../../styles/product.css';

class Product implements IProduct {
  data: IProductStats;

  constructor(source: IProductStats) {
    this.data = source;
  }

  addProperty<T>(prop: T, target: HTMLElement, propName?: string): void {
    const el =  document.createElement('p') as HTMLElement;
    el.classList.add('product-property');
    el.innerHTML = (propName !== undefined) ? `${propName}: ${prop}` : `${prop}`;
    target.append(el);
  }

  create(): void {
    const target = document.querySelector('.products') as HTMLElement;
    if (target === undefined) return;
    const prodItem = document.createElement('div') as HTMLElement;
    prodItem.classList.add('product-item');
    if (Basket.basketContent.includes(this.data.name)) { prodItem.classList.add('product-added'); }
    target.append(prodItem);
    const prodHeader = document.createElement('h3') as HTMLElement;
    prodHeader.classList.add('product-header');
    prodHeader.innerHTML = this.data.name;
    const prodContent =  document.createElement('div') as HTMLElement;
    prodContent.classList.add('product-content');
    const prodProperties = document.createElement('div') as HTMLElement;
    prodProperties.classList.add('product-props-container');
    const prodImg =  document.createElement('img') as HTMLImageElement;
    prodImg.classList.add('product-img');
    prodImg.src = this.data.img;
    prodImg.alt = this.data.name;
    prodItem.append(prodHeader);
    prodItem.append(prodContent);
    prodContent.append(prodImg);
    prodContent.append(prodProperties);
    const prodButton = document.createElement('button') as HTMLButtonElement;
    prodButton.classList.add('product-btn');
    if (Basket.basketContent.includes(this.data.name)) {
      prodButton.classList.add('product-btn-remove');
      prodButton.innerHTML = 'Из корзины';
    } else {
      prodButton.classList.add('product-btn-add');
      prodButton.innerHTML = 'В корзину';
    }
    prodButton.addEventListener(('click'), () => {
      const basket = document.querySelector('.basket-counter') as HTMLElement;
      if (basket === undefined) return;
      const count: number = +(basket.innerHTML);
      if (!Basket.basketContent.includes(this.data.name)) {
        if (count === 20) {
          const message = document.querySelector('.basket-message-container') as HTMLElement;
          if (message === undefined) return;
          message.classList.add('message-shown');
          return;
        } else {
          Basket.basketContent.push(this.data.name);
          basket.innerHTML = (count + 1).toString();
          prodButton.innerHTML = 'Из корзины';
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
    this.addProperty<string>(this.data.country, prodProperties, 'Родина');
    this.addProperty<string>(this.data.horns, prodProperties, 'Рога');
    this.addProperty<string>(this.data.color, prodProperties, 'Цвет');
    this.addProperty<string>(this.data.amount, prodProperties, 'Количество');
    this.addProperty<string>(this.data.size, prodProperties, 'Длина, см');
    this.addProperty<string>(this.data.popularity, prodProperties, 'Популярность');
    prodProperties.append(prodButton);
  }
}

export { Product };