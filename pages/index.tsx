import { NextFunctionComponent, NextContext } from 'next';
import fetch from 'isomorphic-unfetch';

import Layout from '../components/Layout';
import Precio from '../components/Precio';
import Noticias from '../components/Noticias';
import Eventos from '../components/Eventos';

import { IPrecioBitcoin, INoticia } from '../interfaces';

export interface IIndexPageProps {
  precioBitcoin: IPrecioBitcoin;
  noticias: INoticia[];
  eventos: any;
}
const IndexPage: NextFunctionComponent<IIndexPageProps> = ({
  precioBitcoin,
  noticias,
  eventos
}) => {
  return (
    <Layout>
      <div className="row">
        <div className="col-12">
          <h2>Precio del Bitcoin</h2>
          <Precio precioBitcoin={precioBitcoin} />
        </div>
        <div className="col-md-8">
          <h2 className="my-3">Noticas sobre Bitcoin</h2>
          <Noticias noticias={noticias} />
        </div>
        <div className="col-md-4">
          <h2 className="my-3">Próximos Eventos Bitcoin</h2>
          <Eventos eventos={eventos} />
        </div>
      </div>
    </Layout>
  );
};

IndexPage.getInitialProps = async () => {
  const responseCoin = await fetch(
    'https://api.coinmarketcap.com/v2/ticker/1/'
  );
  const responseNews = await fetch(
    `https://newsapi.org/v2/everything?q=bitcoin&from=2019-03-30&sortBy=publishedAt&apiKey=cfdf418f1f0c46d0a0df672377596915&language=es`
  );
  const responseEventos = await fetch(
    `https://www.eventbriteapi.com/v3/events/search/?q=Bitcoin&sort_by=date&token=6W4RNW7YFL52G3RZ6GWA`
  );

  const precio = await responseCoin.json();
  const noticias = await responseNews.json();
  const eventos = await responseEventos.json();
  return {
    precioBitcoin: precio.data.quotes.USD,
    noticias: noticias.articles,
    eventos: eventos.events
  };
};
export default IndexPage;
