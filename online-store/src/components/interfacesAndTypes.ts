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

type IFilterStatsConst = Readonly<IFilterStats>;

export { IProductStats, IFilterStats, IFilterStatsConst, IRangeTemplate };