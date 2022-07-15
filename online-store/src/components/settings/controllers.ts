import { Checkbox } from './checkboxes';
import { RangeSlider } from './rangeSliders';
import { Sorting } from './sorting';
import { Search } from './search';
import { Reset } from './reset';
import { Basket } from './basket';
import { Message } from './message';
import { TemplateKeeper } from '../products/productTemplate';
import { IControllers } from '../interfacesAndTypes';
 
class Controller implements IControllers {
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
    this.checkbox.createCheckbox('africa', 'Африка', 'country', 'Африка');
    this.checkbox.createCheckbox('america', 'Америка', 'country', 'Америка');
    this.checkbox.createCheckbox('eurasia', 'Евразия', 'country', 'Евразия');
    this.checkbox.createCheckbox('yellow', 'Желтый', 'color');
    this.checkbox.createCheckbox('red', 'Красный', 'color');
    this.checkbox.createCheckbox('green', 'Зеленый', 'color');
    this.checkbox.createCheckbox('blue', 'Синий', 'color');
    this.checkbox.createCheckbox('zero-horns', '0', 'horns', '0');
    this.checkbox.createCheckbox('one-horns', '1', 'horns', '1');
    this.checkbox.createCheckbox('two-horns', '2', 'horns', '2');
    this.checkbox.createCheckbox('three-horns', '3', 'horns', '3');
    this.checkbox.createCheckbox('popularity', 'Да', 'popularity');
  }

  drawRangeSliders(): void {
    this.ranges.createRangeSlider(2, 19, 'amount');
    this.ranges.createRangeSlider(2, 17, 'size');
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