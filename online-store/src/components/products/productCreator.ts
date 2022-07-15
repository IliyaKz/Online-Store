import { IProductStats, IProdCreator } from '../interfacesAndTypes';
import { list } from './productsList';
import { Product } from './product';
import { IFilterStats } from '../interfacesAndTypes';

class ProductCreator implements IProdCreator {
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
      const countryRes: boolean = currentTemplate.country.includes(item.data.country);
      const hornsRes: boolean = currentTemplate.horns.includes(item.data.horns);
      const colorRes: boolean = currentTemplate.color.includes(item.data.color);
      const popularityRes: boolean = currentTemplate.popularity.includes(item.data.popularity);
      const amountRes: boolean = (+item.data.amount >= +currentTemplate.amount[0] && +item.data.amount <= +currentTemplate.amount[1]);
      const sizeRes: boolean = (+item.data.size >= +currentTemplate.size[0] && +item.data.size <= +currentTemplate.size[1]);
      return (nameRes && countryRes && hornsRes && colorRes && popularityRes && amountRes && sizeRes);
    });
    return result;
  }
}

export { ProductCreator };