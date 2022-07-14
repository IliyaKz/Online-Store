const goliath = require('../../assets/img/голиаф.jpg');
const eudicella = require('../../assets/img/эвдицелла.jpg');
const smaragdesthes = require('../../assets/img/смарагдезис.jpg');
const pachnoda = require('../../assets/img/пахнода.jpg');
const hercules = require('../../assets/img/геркулес.jpg');
const rhino = require('../../assets/img/носорог.jpg');
const chalcosoma = require('../../assets/img/халкосома.jpg');
const allomyrina = require('../../assets/img/алломирина.jpg');
const lamprima = require('../../assets/img/ламприма.jpg');
const homoderus = require('../../assets/img/хомодерус.jpg');
const acrocinus = require('../../assets/img/арлекин.jpg');
const eupholus = require('../../assets/img/эуфолюс.jpg');
const giraffa = require('../../assets/img/трубковерт.jpg');
const ovalisia = require('../../assets/img/овалисия.jpg');
const brilliant = require('../../assets/img/бриллиант.jpg');
const macrodontia = require('../../assets/img/крупнозуб.jpg');
const phalacrognathus = require('../../assets/img/радужный.jpg');
const buprestis = require('../../assets/img/бупрестис.jpg');
const frog = require('../../assets/img/лягушка.jpg');
const polyphemus = require('../../assets/img/полифемус.jpg');
const alp = require('../../assets/img/альп.jpg');
const crysina = require('../../assets/img/хризина.jpg');
import { IProductStats } from '../interfacesAndTypes';

const list: Array<IProductStats> = [
  {
    name: 'Голиаф',
    img: `${goliath}`,
    country: 'Африка',
    horns: '0',
    color: 'Желтый',
    amount: '5',
    size: '11',
    popularity: 'Нет',
  },
  {
    name: 'Эвдицелла',
    img: `${eudicella}`,
    country: 'Африка',
    horns: '1',
    color: 'Зеленый',
    amount: '18',
    size: '4',
    popularity: 'Да',
  },
  {
    name: 'Смарагдезис',
    img: `${smaragdesthes}`,
    country: 'Африка',
    horns: '0',
    color: 'Зеленый',
    amount: '10',
    size: '2',
    popularity: 'Нет',
  },
  {
    name: 'Пахнода',
    img: `${pachnoda}`,
    country: 'Африка',
    horns: '0',
    color: 'Красный',
    amount: '19',
    size: '2',
    popularity: 'Да',
  },
  {
    name: 'Геркулес',
    img: `${hercules}`,
    country: 'Америка',
    horns: '2',
    color: 'Желтый',
    amount: '3',
    size: '17',
    popularity: 'Нет',
  },
  {
    name: 'Носорог',
    img: `${rhino}`,
    country: 'Евразия',
    horns: '1',
    color: 'Красный',
    amount: '4',
    size: '5',
    popularity: 'Нет',
  },
  {
    name: 'Халкосома',
    img: `${chalcosoma}`,
    country: 'Евразия',
    horns: '3',
    color: 'Красный',
    amount: '2',
    size: '13',
    popularity: 'Нет',
  },
  {
    name: 'Алломирина',
    img: `${allomyrina}`,
    country: 'Евразия',
    horns: '2',
    color: 'Красный',
    amount: '4',
    size: '8',
    popularity: 'Нет',
  },
  {
    name: 'Эухирина',
    img: `${allomyrina}`,
    country: 'Евразия',
    horns: '2',
    color: 'Красный',
    amount: '4',
    size: '7',
    popularity: 'Нет',
  },
  {
    name: 'Ламприма',
    img: `${lamprima}`,
    country: 'Евразия',
    horns: '2',
    color: 'Зеленый',
    amount: '5',
    size: '8',
    popularity: 'Нет',
  },
  {
    name: 'Хомодерус',
    img: `${homoderus}`,
    country: 'Африка',
    horns: '2',
    color: 'Желтый',
    amount: '4',
    size: '5',
    popularity: 'Нет',
  },
  {
    name: 'Арлекин',
    img: `${acrocinus}`,
    country: 'Aмерика',
    horns: '0',
    color: 'Желтый',
    amount: '6',
    size: '11',
    popularity: 'Нет',
  },
  {
    name: 'Эуфолюс',
    img: `${eupholus}`,
    country: 'Америка',
    horns: '0',
    color: 'Синий',
    amount: '15',
    size: '3',
    popularity: 'Нет',
  },
  {
    name: 'Мадагаскарский трубковерт',
    img: `${giraffa}`,
    country: 'Африка',
    horns: '0',
    color: 'Красный',
    amount: '4',
    size: '2',
    popularity: 'Нет',
  },
  {
    name: 'Овалисия',
    img: `${ovalisia}`,
    country: 'Евразия',
    horns: '0',
    color: 'Зеленый',
    amount: '5',
    size: '2',
    popularity: 'Нет',
  },
  {
    name: 'Бриллиантовый долгоносик',
    img: `${brilliant}`,
    country: 'Америка',
    horns: '0',
    color: 'Зеленый',
    amount: '9',
    size: '3',
    popularity: 'Нет',
  },
  {
    name: 'Дровосек крупнозуб',
    img: `${macrodontia}`,
    country: 'Америка',
    horns: '2',
    color: 'Желтый',
    amount: '5',
    size: '17',
    popularity: 'Нет',
  },
  {
    name: 'Радужный рогач',
    img: `${phalacrognathus}`,
    country: 'Евразия',
    horns: '2',
    color: 'Зеленый',
    amount: '6',
    size: '8',
    popularity: 'Нет',
  },
  {
    name: 'Бупрестис',
    img: `${buprestis}`,
    country: 'Америка',
    horns: '0',
    color: 'Синий',
    amount: '10',
    size: '3',
    popularity: 'Нет',
  },
  {
    name: 'Жук лягушка',
    img: `${frog}`,
    country: 'Америка',
    horns: '0',
    color: 'Зеленый',
    amount: '7',
    size: '2',
    popularity: 'Нет',
  },
  {
    name: 'Полифемус',
    img: `${polyphemus}`,
    country: 'Африка',
    horns: '1',
    color: 'Зеленый',
    amount: '11',
    size: '9',
    popularity: 'Нет',
  },
  {
    name: 'Альпийский усач',
    img: `${alp}`,
    country: 'Евразия',
    horns: '0',
    color: 'Синий',
    amount: '3',
    size: '7',
    popularity: 'Нет',
  },
  {
    name: 'Хризина',
    img: `${crysina}`,
    country: 'Африка',
    horns: '0',
    color: 'Желтый',
    amount: '15',
    size: '3',
    popularity: 'Нет',
  },
];

export { list };
