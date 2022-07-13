import { IProductStats } from '../interfacesAndTypes';
import { list } from './productsList';
import { Product } from './product';
import { IFilterStats } from '../interfacesAndTypes';

class ProductCreator {
  data: Array<IProductStats>;

  static productArray: Array<Product> = [];

  constructor() {
    this.data = list;
  }

  createProducts(): void {
    this.data.forEach((item) => {
      const prod = new Product(item);
      ProductCreator.productArray.push(prod);
    });
  }

  drawProducts(arr: Array<Product>): void {
    const products = document.querySelector('.products') as HTMLElement;
    products.innerHTML = '';
    arr.forEach((item) => {
      item.create();
    });
  }

  filterProducts(currentTemplate: IFilterStats, arr: Array<Product>): Array<Product> {
    const result = arr.filter((item) => {
      let nameRes: boolean;
      const reg = new RegExp(`${currentTemplate.name[0]}`, 'i');
      if (item.data.name.match(reg) === null) {
        nameRes = false;
      } else {
        nameRes = true;
      }
      const firmRes: boolean = currentTemplate.firm.includes(item.data.firm);
      const ramRes: boolean = currentTemplate.RAM.includes(item.data.RAM);
      const screenRes: boolean = currentTemplate.screen.includes(item.data.screen);
      const colorRes: boolean = currentTemplate.color.includes(item.data.color);
      const popularityRes: boolean = currentTemplate.popularity.includes(item.data.popularity);
      const amountRes: boolean = (+item.data.amount >= +currentTemplate.amount[0] && +item.data.amount <= +currentTemplate.amount[1]);
      const yearRes: boolean = (+item.data.year >= +currentTemplate.year[0] && +item.data.year <= +currentTemplate.year[1]);
      return (nameRes && firmRes && ramRes && screenRes && colorRes && popularityRes && amountRes && yearRes);
    });
    return result;
  }
}

export { ProductCreator };