import { IFilterStats, IFilterStatsConst } from '../interfacesAndTypes';
import { Reset } from '../settings/reset';

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

  static defaultTemplate: IFilterStatsConst = <IFilterStatsConst> Object.freeze({
    name: [''],
    firm: ['HP', 'ASUS', 'Lenovo'],
    RAM: ['4 ГБ', '8 ГБ', '16 ГБ'],
    screen: ['14"', '15.6"', '17.3"'],
    color: ['Черный', 'Серебристый', 'Серый'],
    amount: ['3', '9'],
    year: ['2016', '2021'],
    popularity: ['Да', 'Нет'],
  });

  setTemplate(): void {
    window.addEventListener('beforeunload', () => {
      if (Reset.isSaveAllowed) {
        localStorage.setItem('savedTemplate', JSON.stringify(TemplateKeeper.currentTemplate));
      }
    });
  }

  getTemplate(): void {
    if (localStorage.getItem('savedTemplate') !== null) {
      const sample = JSON.parse(localStorage.getItem('savedTemplate') as string);
      let key: keyof IFilterStats;
      for (key in TemplateKeeper.currentTemplate) {
        const str = JSON.stringify(sample[key]);
        TemplateKeeper.currentTemplate[key] = JSON.parse(str);
      }
    }
  }
}

export { template, TemplateKeeper };