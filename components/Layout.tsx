import Head from 'next/head';
import Navegacion from '../components/Navegacion';

type TLayoutProps = {};
const Layout: React.FunctionComponent<TLayoutProps> = (props) => (
  <div>
    <Head>
      <title>Bitcoin App</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link
        rel="stylesheet"
        href="https://bootswatch.com/4/cosmo/bootstrap.min.css"
      />
    </Head>
    <Navegacion />
    <div className="container mt-4">{props.children}</div>
  </div>
);

export default Layout;
