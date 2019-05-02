import { INoticia } from '../interfaces';

interface INoticiaProps {
  noticia: INoticia;
}
const Noticia: React.FunctionComponent<INoticiaProps> = ({ noticia }) => {
  const { author, title, description, source, url, urlToImage } = noticia;

  let imagen = null;
  if (urlToImage !== '') {
    imagen = (
      <img
        src={urlToImage}
        alt="Imagen de la noticia"
        className="card-img-top"
      />
    );
  } else {
    imagen = <p className="text-center my-5">Imagen No disponible</p>;
  }

  return (
    <div className="col-md-6 col-12 mb-4">
      <div className="card">
        <div className="card-image">{imagen}</div>
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <p className="card-text">{description}</p>
          <p className="card-text">{author}</p>
          <p className="card-text">{source.name}</p>
          <a href={url} target="_blank" className="btn btn-primary d-block">
            Leer Noticia
          </a>
        </div>
      </div>
    </div>
  );
};

export default Noticia;
