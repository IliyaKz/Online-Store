import { ProductCreator } from '../products/productCreator';
import { Product } from '../products/product';
import { TemplateKeeper } from '../products/productTemplate';
import { IFilterStats } from '../interfacesAndTypes';
import { Sorting } from './sorting';

class Checkbox {

  creator: ProductCreator;

  sorting: Sorting;

  constructor() {
    this.creator = new ProductCreator();
    this.sorting = new Sorting();
  }

  createCheckbox(name: string, text: string, prop: keyof IFilterStats): void {
    const target = document.querySelector(`.${prop}-sorting`) as HTMLElement;
    const checkboxContainer = document.createElement('div') as HTMLElement;
    checkboxContainer.classList.add('checkbox-container');
    const checkbox = document.createElement('input') as HTMLInputElement;
    checkbox.type = 'checkbox';
    checkbox.id = name;
    checkbox.classList.add(`${prop}-checkbox`);
    checkbox.addEventListener(('click'), () => {
      if (checkbox.checked) {
        if (TemplateKeeper.currentTemplate[prop].length === TemplateKeeper.defaultTemplate[prop].length) {
          TemplateKeeper.currentTemplate[prop] = []; 
        }
        TemplateKeeper.currentTemplate[prop].push(text);
      } else {
        if (TemplateKeeper.currentTemplate[prop].length !== 1) {
          TemplateKeeper.currentTemplate[prop] = TemplateKeeper.currentTemplate[prop].filter(item => item != text);
        } else {
          TemplateKeeper.currentTemplate[prop] = TemplateKeeper.defaultTemplate[prop];
        }
      }
      let result: Array<Product> = this.creator.filterProducts(TemplateKeeper.currentTemplate, ProductCreator.productArray);
      result = this.sorting.sortingProducts(result);
      this.creator.drawProducts(result);
    });
    document.addEventListener(('resetEvent'), () => {
      checkbox.checked = false;
    });
    const label = document.createElement('label') as HTMLLabelElement;
    label.classList.add(`${prop}-label`, name);
    label.htmlFor = name;
    checkboxContainer.append(checkbox);
    checkboxContainer.append(label);
    target.append(checkboxContainer);
  }
}

export { Checkbox };