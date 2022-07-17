interface IProductStats {
  name: string;
  img: string;
  country: string;
  horns: string;
  color: string;
  amount: string;
  size: string;
  popularity: string;
}

interface IFilterStats {
  name: string[];
  country: string[];
  horns: string[];
  color: string[];
  amount: string[];
  size: string[];
  popularity: string[];
}

interface IRangeTemplate {
  size: number[];
  amount: number[];
}

interface IProduct {
  data: IProductStats;
  addProperty(prop: string, target: HTMLElement, propName?: string): void;
  create(): void;
}

interface IProdCreator {
  data: Array<IProductStats>;
  createProducts(): void;
  drawProducts(arr: Array<IProduct>): void;
  filterProducts(currentTemplate: IFilterStats, arr: Array<IProduct>): Array<IProduct>;
}

interface IMessage {
  showMessage(): void;
}

interface ISorting {
  creator: IProdCreator;
  message: IMessage;
  sortingProducts(array: Array<IProduct>): Array<IProduct> | void;
  createSelectItem(text: string, parent: HTMLElement, current: HTMLElement): void;
  createSelect(): void;
}

interface IProdStartDrawing {
  creator: IProdCreator;
  sorting: ISorting;
  drawProducts(): void;
}

interface IBasket {
  getContent(): void;
  setContent(): void;
  createBasket(): void;
}

interface ICheckboxes {
  message: IMessage;
  productDrawer: IProdStartDrawing;
  getCheckbox(): void;
  setCheckbox(): void;
  createCheckbox(name: string, text: string, prop: keyof IFilterStats, labelText?: string): void;
}

interface IRanges {
  message: IMessage;
  productDrawer: IProdStartDrawing;
  getRanges(): void;
  setRanges(): void;
  createRangeSlider(min: number, max: number, prop: (keyof IFilterStats | keyof IRangeTemplate)): void
}

interface IReset {
  productDrawer: IProdStartDrawing;
  createResetFilterButton(): void;
  createResetStorageButton(): void;
}

interface ISearch {
  message: IMessage;
  productDrawer: IProdStartDrawing;
  createSearch(): void
}

interface IControllers {
  checkbox: ICheckboxes;
  ranges: IRanges;
  sorting: ISorting;
  search: ISearch;
  reset: IReset;
  basket: IBasket;
  message: IMessage;
  drawCheckboxes(): void;
  drawRangeSliders(): void;
  drawSelect(): void;
  drawSearch(): void;
  drawResetsButton(): void;
  drawBasket(): void;
  addSetterGetter(): void;
  showMessage(): void;
}

interface IApp {
  creator: IProdCreator;
  controller: IControllers;
  basket: IBasket;
  startDrawer: IProdStartDrawing;
  start(): void;
}

type IFilterStatsConst = Readonly<IFilterStats>;

export { IProductStats, IFilterStats, IFilterStatsConst, IRangeTemplate, IProduct, IProdCreator, IMessage, ISorting, IProdStartDrawing, IBasket, ICheckboxes, IRanges, IReset, ISearch, IControllers, IApp };