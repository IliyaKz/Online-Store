import { ProductCreator } from '../products/productCreator';
import { Product } from '../products/product';
import { TemplateKeeper } from '../products/productTemplate';
import { IFilterStats, IRangeTemplate } from '../interfacesAndTypes';
import { Sorting } from './sorting';
import { Reset } from './reset';
import { Message } from './message';
import '../../styles/ranges.css';
import * as noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

class RangeSlider {

  creator: ProductCreator;

  sorting: Sorting;

  message: Message;

  static currentRanges: IRangeTemplate = {
    size: [],
    amount: [],
  };

  constructor() {
    this.creator = new ProductCreator;
    this.sorting = new Sorting();
    this.message = new Message;
  }

  setRanges(): void {
    window.addEventListener('beforeunload', () => {
      if (Reset.isSaveAllowed) {
        localStorage.setItem('savedRanges', JSON.stringify(RangeSlider.currentRanges));
      }
    });
  }

  getRanges(): void {
    if (localStorage.getItem('savedRanges') !== null) {
      const sample = JSON.parse(localStorage.getItem('savedRanges') as string);
      let key: keyof IRangeTemplate;
      for (key in RangeSlider.currentRanges) {
        const str = JSON.stringify(sample[key]);
        RangeSlider.currentRanges[key] = JSON.parse(str);
      }
    }
  }

  createRangeSlider(min: number, max: number, prop: (keyof IFilterStats | keyof IRangeTemplate)): void {
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
    if (RangeSlider.currentRanges[prop as keyof IRangeTemplate].length != 0) {
      target.noUiSlider.set(RangeSlider.currentRanges[prop as keyof IRangeTemplate]);
      leftValueContainer.innerText = RangeSlider.currentRanges[prop as keyof IRangeTemplate][0].toString();
      rightValueContainer.innerText = RangeSlider.currentRanges[prop as keyof IRangeTemplate][1].toString();
    }
    target.noUiSlider.on('change', (values: Array<string>) => {
      leftValueContainer.innerText = (+(values[0])).toString();
      rightValueContainer.innerText = (+(values[1])).toString();
      RangeSlider.currentRanges[prop as keyof IRangeTemplate] = values.map(item => +item);
      TemplateKeeper.currentTemplate[prop][0] = (+(values[0])).toString();
      TemplateKeeper.currentTemplate[prop][1] = (+(values[1])).toString();
      let result: Array<Product> = this.creator.filterProducts(TemplateKeeper.currentTemplate, ProductCreator.productArray);
      result = this.sorting.sortingProducts(result);
      this.creator.drawProducts(result);
      this.message.showMessage();
    });
    document.addEventListener(('resetEvent'), () => {
      target.noUiSlider.reset();
      leftValueContainer.innerText = (+(target.noUiSlider.get()[0])).toString();
      rightValueContainer.innerText = (+(target.noUiSlider.get()[1])).toString();
    });
  }

}

export { RangeSlider };