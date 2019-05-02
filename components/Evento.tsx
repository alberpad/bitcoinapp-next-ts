interface IEventoProps {
  evento: any;
}
const Noticia: React.FunctionComponent<IEventoProps> = ({ evento }) => {
  const { name, url, description } = evento;
  let titulo: string = name.text;
  if (titulo.length > 100) {
    titulo = titulo.substr(0, 100) + '...';
  }
  let descripcion: string = description.text;
  if (descripcion) {
    descripcion = descripcion.substr(0, 250) + '...';
  }
  return (
    <a href={url} className="list-group-item active text-light mb-1">
      <h3 className="mb-3">{titulo}</h3>
      <p className="mb-1">{descripcion}</p>
    </a>
  );
};

export default Noticia;
