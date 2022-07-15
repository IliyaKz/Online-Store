import { ProductCreator } from '../products/productCreator';
import { Product } from '../products/product';
import { TemplateKeeper } from '../products/productTemplate';
import { Sorting } from './sorting';
import { IFilterStats } from '../interfacesAndTypes';
import { Checkbox } from './checkboxes';
import { RangeSlider } from './rangeSliders';
import '../../styles/reset.css';

class Reset {
  static isSaveAllowed = true;

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
    resetFilterButton.classList.add('reset-button', 'reset-filter-button');
    resetFilterButton.innerText = 'Сбросить фильтры';
    resetFilterButton.addEventListener('click', () => {
      const resetEvent = new Event('resetEvent', {
        bubbles: true,
        cancelable: true,
        composed: true,
      });
      document.dispatchEvent(resetEvent);
      Checkbox.currentCheckboxes = [];
      RangeSlider.currentRanges.size = [];
      RangeSlider.currentRanges.amount = [];
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

  createResetStorageButton(): void {
    const target = document.querySelector('.resets') as HTMLElement;
    const wrapper = document.createElement('div') as HTMLElement;
    const resetFilterButton = document.createElement('button') as HTMLButtonElement;
    resetFilterButton.classList.add('reset-button', 'reset-storage-button');
    resetFilterButton.innerText = 'Сбросить настройки';
    resetFilterButton.addEventListener('click', () => {
      Reset.isSaveAllowed = false;
      localStorage.clear();
      window.location.reload();
    });
    target.append(wrapper);
    wrapper.append(resetFilterButton);
  }

}

export { Reset };