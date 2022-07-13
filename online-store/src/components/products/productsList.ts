const hp255g8 = require('../../assets/img/hp255g8.jpg');
const laptop14s = require('../../assets/img/14s-fq0081ur.jpg');
const laptop17c = require('../../assets/img/17-ca1022ur.jpg');
const hp255g7 = require('../../assets/img/hp255g7.jpg');
const asuse41 = require('../../assets/img/asus-laptop-e41.jpg');
const asusVivobook = require('../../assets/img/asus-vivobook.jpg');
const asusZenbook = require('../../assets/img/asus-zenbook.jpg');
const lenovoIdeapad = require('../../assets/img/lenovo-ideapad-110.jpg');
const lenovoV15 = require('../../assets/img/lenovo-v15.jpg');
import { IProductStats } from '../interfacesAndTypes';

const list: Array<IProductStats> = [
  {
    name: 'HP 255 G8',
    img: `${hp255g8}`,
    firm: 'HP',
    RAM: '4 ГБ',
    screen: '15.6"',
    color: 'Серый',
    amount: '5',
    year: '2021',
    popularity: 'Нет',
  },
  {
    name: 'HP Laptop 14s-fq0081ur',
    img: `${laptop14s}`,
    firm: 'HP',
    RAM: '4 ГБ',
    screen: '14"',
    color: 'Серебристый',
    amount: '3',
    year: '2020',
    popularity: 'Нет',
  },
  {
    name: 'HP 255 G7',
    img: `${hp255g7}`,
    firm: 'HP',
    RAM: '8 ГБ',
    screen: '15.6"',
    color: 'Серебристый',
    amount: '7',
    year: '2021',
    popularity: 'Да',
  },
  {
    name: 'HP Laptop 17-ca1022ur',
    img: `${laptop17c}`,
    firm: 'HP',
    RAM: '8 ГБ',
    screen: '17.3"',
    color: 'Черный',
    amount: '7',
    year: '2019',
    popularity: 'Нет',
  },
  {
    name: 'ASUS Laptop E410KA-BV1422',
    img: `${asuse41}`,
    firm: 'ASUS',
    RAM: '4 ГБ',
    screen: '14"',
    color: 'Черный',
    amount: '3',
    year: '2020',
    popularity: 'Нет',
  },
  {
    name: 'ASUS Vivobook Go 15',
    img: `${asusVivobook}`,
    firm: 'ASUS',
    RAM: '4 ГБ',
    screen: '15.6"',
    color: 'Черный',
    amount: '9',
    year: '2020',
    popularity: 'Да',
  },
  {
    name: 'ASUS Zenbook 15',
    img: `${asusZenbook}`,
    firm: 'ASUS',
    RAM: '16 ГБ',
    screen: '15.6"',
    color: 'Серый',
    amount: '6',
    year: '2016',
    popularity: 'Нет',
  },
  {
    name: 'Lenovo IdeaPad 110-17',
    img: `${lenovoIdeapad}`,
    firm: 'Lenovo',
    RAM: '4 ГБ',
    screen: '17.3"',
    color: 'Серебристый',
    amount: '3',
    year: '2017',
    popularity: 'Нет',
  },
  {
    name: 'Lenovo V15 ADA',
    img: `${lenovoV15}`,
    firm: 'Lenovo',
    RAM: '4 ГБ',
    screen: '15.6"',
    color: 'Серебристый',
    amount: '8',
    year: '2020',
    popularity: 'Нет',
  },
];

export { list };
