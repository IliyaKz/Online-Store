import { IFilterStats } from '../interfacesAndTypes';

const template: IFilterStats = {
  name: [''],
  firm: ['HP', 'ASUS', 'Lenovo'],
  RAM: ['4 ГБ', '8 ГБ', '16 ГБ'],
  screen: ['14"', '15.6"', '17.3"'],
  color: ['Черный', 'Серебристый', 'Серый'],
  amount: ['3', '9'],
  year: ['2016', '2021'],
  popularity: ['Да', 'Нет'],
};

class TemplateKeeper {
  static currentTemplate: IFilterStats = {
    name: [''],
    firm: ['HP', 'ASUS', 'Lenovo'],
    RAM: ['4 ГБ', '8 ГБ', '16 ГБ'],
    screen: ['14"', '15.6"', '17.3"'],
    color: ['Черный', 'Серебристый', 'Серый'],
    amount: ['3', '9'],
    year: ['2016', '2021'],
    popularity: ['Да', 'Нет'],
  };

  static defaultTemplate: IFilterStats = {
    name: [''],
    firm: ['HP', 'ASUS', 'Lenovo'],
    RAM: ['4 ГБ', '8 ГБ', '16 ГБ'],
    screen: ['14"', '15.6"', '17.3"'],
    color: ['Черный', 'Серебристый', 'Серый'],
    amount: ['3', '9'],
    year: ['2016', '2021'],
    popularity: ['Да', 'Нет'],
  };
}

export { template, TemplateKeeper };