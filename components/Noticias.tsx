import { INoticia } from '../interfaces';
import Noticia from './Noticia';

interface INoticiasProps {
  noticias: INoticia[];
}
const Noticias: React.FunctionComponent<INoticiasProps> = ({ noticias }) => {
  return (
    <div className="row">
      {noticias.map((noticia, index) => (
        <Noticia key={index} noticia={noticia} />
      ))}
    </div>
  );
};

export default Noticias;
