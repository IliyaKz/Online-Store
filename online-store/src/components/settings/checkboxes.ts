import { ProductStartDrawer } from '../products/productStartDrawer';
import { TemplateKeeper } from '../products/productTemplate';
import { IFilterStats, ICheckboxes } from '../interfacesAndTypes';
import { Reset } from './reset';
import { Message } from './message';
import '../../styles/checkboxes.css';

class Checkbox implements ICheckboxes {

  productDrawer: ProductStartDrawer;

  message: Message;

  static currentCheckboxes: Array<string> = [];

  constructor() {
    this.productDrawer = new ProductStartDrawer;
    this.message = new Message;
  }

  setCheckbox(): void {
    window.addEventListener('beforeunload', () => {
      if (Reset.isSaveAllowed) {
        localStorage.setItem('savedCheckboxes', JSON.stringify(Checkbox.currentCheckboxes));
      }
    });
  }

  getCheckbox(): void {
    if (localStorage.getItem('savedCheckboxes') !== null) {
      Checkbox.currentCheckboxes = JSON.parse(localStorage.getItem('savedCheckboxes') as string);
    }
  }

  createCheckbox(name: string, text: string, prop: keyof IFilterStats, labelText?: string): void {
    const target = document.querySelector(`.${prop}-sorting`) as HTMLElement;
    const checkboxContainer = document.createElement('div') as HTMLElement;
    checkboxContainer.classList.add(`${prop}-checkbox-container`);
    const checkbox = document.createElement('input') as HTMLInputElement;
    checkbox.type = 'checkbox';
    checkbox.id = name;
    if (Checkbox.currentCheckboxes.includes(name)) {
      checkbox.checked = true;
    }
    checkbox.classList.add(`${prop}-checkbox`, 'checkbox');
    checkbox.addEventListener(('click'), () => {
      if (checkbox.checked) {
        if (TemplateKeeper.currentTemplate[prop].length === TemplateKeeper.defaultTemplate[prop].length) {
          TemplateKeeper.currentTemplate[prop] = []; 
        }
        TemplateKeeper.currentTemplate[prop].push(text);
        Checkbox.currentCheckboxes.push(name);
      } else {
        if (TemplateKeeper.currentTemplate[prop].length !== 1) {
          TemplateKeeper.currentTemplate[prop] = TemplateKeeper.currentTemplate[prop].filter(item => item != text);
        } else {
          TemplateKeeper.currentTemplate[prop] = TemplateKeeper.defaultTemplate[prop];
        }
        Checkbox.currentCheckboxes = Checkbox.currentCheckboxes.filter(item => item != name);
      }
      this.productDrawer.drawProducts();
      this.message.showMessage();
    });
    document.addEventListener(('resetEvent'), () => {
      checkbox.checked = false;
    });
    const label = document.createElement('label') as HTMLLabelElement;
    label.classList.add(`${prop}-label`, name);
    label.htmlFor = name;
    if (labelText !== undefined) {
      label.innerText = labelText;
    }
    checkboxContainer.append(checkbox);
    checkboxContainer.append(label);
    target.append(checkboxContainer);
  }
}

export { Checkbox };