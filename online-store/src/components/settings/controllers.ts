import { Checkbox } from './checkboxes';
import { RangeSlider } from './rangeSliders';
import { Sorting } from './sorting';
import { Search } from './search';
import { Reset } from './reset';
 
class Controller {
  checkbox: Checkbox;

  ranges: RangeSlider;

  sorting: Sorting;

  search: Search;

  reset: Reset;

  constructor() {
    this.checkbox = new Checkbox;
    this.ranges = new RangeSlider;
    this.sorting = new Sorting;
    this.search = new Search;
    this.reset = new Reset;
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
  }

}

export { Controller };