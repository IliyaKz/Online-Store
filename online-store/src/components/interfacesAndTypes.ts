interface IProductStats {
  name: string;
  img: string;
  firm: string;
  RAM: string;
  screen: string;
  color: string;
  amount: string;
  year: string;
  popularity: string;
}

interface IFilterStats {
  name: string[];
  firm: string[];
  RAM: string[];
  screen: string[];
  color: string[];
  amount: string[];
  year: string[];
  popularity: string[];
}

interface IRangeTemplate {
  year: number[];
  amount: number[];
}

type IFilterStatsConst = Readonly<IFilterStats>;

export { IProductStats, IFilterStats, IFilterStatsConst, IRangeTemplate };