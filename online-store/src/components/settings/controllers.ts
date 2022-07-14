import { Checkbox } from './checkboxes';
import { RangeSlider } from './rangeSliders';
import { Sorting } from './sorting';
import { Search } from './search';
import { Reset } from './reset';
import { Basket } from './basket';
import { Message } from './message';
import { TemplateKeeper } from '../products/productTemplate';
 
class Controller {
  checkbox: Checkbox;

  ranges: RangeSlider;

  sorting: Sorting;

  search: Search;

  reset: Reset;

  basket: Basket;

  template: TemplateKeeper;

  message: Message;

  constructor() {
    this.checkbox = new Checkbox;
    this.ranges = new RangeSlider;
    this.sorting = new Sorting;
    this.search = new Search;
    this.reset = new Reset;
    this.basket = new Basket;
    this.template = new TemplateKeeper;
    this.message = new Message;
  }

  drawCheckboxes(): void {
    this.checkbox.createCheckbox('black', 'Черный', 'color');
    this.checkbox.createCheckbox('silver', 'Серебристый', 'color');
    this.checkbox.createCheckbox('grey', 'Серый', 'color');
    this.checkbox.createCheckbox('hp', 'HP', 'firm');
    this.checkbox.createCheckbox('asus', 'ASUS', 'firm');
    this.checkbox.createCheckbox('lenovo', 'Lenovo', 'firm');
    this.checkbox.createCheckbox('popularity', 'Да', 'popularity');
  }

  drawRangeSliders(): void {
    this.ranges.createRangeSlider(3, 9, 'amount');
    this.ranges.createRangeSlider(2016, 2021, 'year');
  }

  drawSelect(): void {
    this.sorting.createSelect();
  }

  drawSearch(): void {
    this.search.createSearch();
  }

  drawResetsButton(): void {
    this.reset.createResetFilterButton();
    this.reset.createResetStorageButton();
  }

  drawBasket(): void {
    this.basket.createBasket();
  }

  addSetterGetter(): void {
    this.basket.setContent();
    this.basket.getContent();
    this.checkbox.setCheckbox();
    this.checkbox.getCheckbox();
    this.ranges.setRanges();
    this.ranges.getRanges();
    this.template.setTemplate();
    this.template.getTemplate();
  }

  showMessage(): void {
    this.message.showMessage();
  }
}

export { Controller };