import { ProductCreator } from '../products/productCreator';
import { Product } from '../products/product';
import { TemplateKeeper } from '../products/productTemplate';
import { Sorting } from './sorting';
import { IFilterStats } from '../interfacesAndTypes';

class Reset {
  creator: ProductCreator;

  sorting: Sorting;

  constructor() {
    this.creator = new ProductCreator;
    this.sorting = new Sorting();
  }

  createResetFilterButton(): void {
    const target = document.querySelector('.resets') as HTMLElement;
    const wrapper = document.createElement('div') as HTMLElement;
    const resetFilterButton = document.createElement('button') as HTMLButtonElement;
    resetFilterButton.classList.add('button', 'reset-filter-button');
    resetFilterButton.innerText = 'Сбросить фильтры';
    resetFilterButton.addEventListener('click', () => {
      const resetEvent = new Event('resetEvent', {
        bubbles: true,
        cancelable: true,
        composed: true,
      });
      document.dispatchEvent(resetEvent);
      let key: keyof IFilterStats;
      for (key in TemplateKeeper.currentTemplate) {
        const str = JSON.stringify(TemplateKeeper.defaultTemplate[key]);
        TemplateKeeper.currentTemplate[key] = JSON.parse(str);
      }
      let result: Array<Product> = this.creator.filterProducts(TemplateKeeper.defaultTemplate, ProductCreator.productArray);
      result = this.sorting.sortingProducts(result);
      this.creator.drawProducts(result);
    });
    target.append(wrapper);
    wrapper.append(resetFilterButton);
  }

}

export { Reset };