// You can include shared interfaces in a separate file and then
// use them in any component by importing them. For example, to
// import the interface below do:
//
// import IDataObject from 'path/to/interfaces';

export interface IDataObject {
  id: number;
  name: string;
}

export interface IPrecioBitcoin {
  market_cap: number;
  percent_change_1h: number;
  percent_change_7d: number;
  percent_change_24h: number;
  price: number;
  volume_24: number;
}

export interface INoticia {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: { id: any; name: string };
  title: string;
  url: string;
  urlToImage: string;
}

export interface IPrecioProps {
  precioBitcoin: IPrecioBitcoin;
}
