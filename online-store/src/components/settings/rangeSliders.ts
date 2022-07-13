import { ProductCreator } from '../products/productCreator';
import { Product } from '../products/product';
import { TemplateKeeper } from '../products/productTemplate';
import { IFilterStats } from '../interfacesAndTypes';
import { Sorting } from './sorting';
import * as noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

class RangeSlider {

  creator: ProductCreator;

  sorting: Sorting;

  constructor() {
    this.creator = new ProductCreator;
    this.sorting = new Sorting();
  }

  createRangeSlider(min: number, max: number, prop:  keyof IFilterStats): void {
    const target = document.querySelector(`.${prop}-range-slider`) as noUiSlider.Instance;
    const leftValueContainer = document.querySelector(`.${prop}-value-left`) as HTMLElement;
    const rightValueContainer = document.querySelector(`.${prop}-value-right`) as HTMLElement;
    noUiSlider.create(target, {
      start: [min, max],
      connect: true,
      padding: 0,
      step: 1,
      range: {
        'min': min,
        'max': max,
      },
    });
    leftValueContainer.innerText = (+(target.noUiSlider.get()[0])).toString();
    rightValueContainer.innerText = (+(target.noUiSlider.get()[1])).toString();
    target.noUiSlider.on('change', (values: Array<string>) => {
      leftValueContainer.innerText = (+(values[0])).toString();
      rightValueContainer.innerText = (+(values[1])).toString();
      TemplateKeeper.currentTemplate[prop][0] = (+(values[0])).toString();
      TemplateKeeper.currentTemplate[prop][1] = (+(values[1])).toString();
      let result: Array<Product> = this.creator.filterProducts(TemplateKeeper.currentTemplate, ProductCreator.productArray);
      result = this.sorting.sortingProducts(result);
      this.creator.drawProducts(result);
    });
    document.addEventListener(('resetEvent'), () => {
      target.noUiSlider.reset();
      leftValueContainer.innerText = (+(target.noUiSlider.get()[0])).toString();
      rightValueContainer.innerText = (+(target.noUiSlider.get()[1])).toString();
    });
  }

}

export { RangeSlider };