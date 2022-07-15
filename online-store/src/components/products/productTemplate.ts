import { IFilterStats, IFilterStatsConst } from '../interfacesAndTypes';
import { Reset } from '../settings/reset';

class TemplateKeeper {
  static currentTemplate: IFilterStats = {
    name: [''],
    country: ['Африка', 'Америка', 'Евразия'],
    horns: ['0', '1', '2', '3'],
    color: ['Желтый', 'Красный', 'Зеленый', 'Синий'],
    amount: ['2', '19'],
    size: ['2', '17'],
    popularity: ['Да', 'Нет'],
  };

  static defaultTemplate: IFilterStatsConst = <IFilterStatsConst> Object.freeze({
    name: [''],
    country: ['Африка', 'Америка', 'Евразия'],
    horns: ['0', '1', '2', '3'],
    color: ['Желтый', 'Красный', 'Зеленый', 'Синий'],
    amount: ['2', '19'],
    size: ['2', '17'],
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

export { TemplateKeeper };