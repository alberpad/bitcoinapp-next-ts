import Evento from './Evento';

interface IEventosProps {
  eventos: any[];
}
const Eventos: React.FunctionComponent<IEventosProps> = ({ eventos }) => {
  // Como eventos es un arreglo obtenmos las keys.
  const eventosId: string[] = Object.keys(eventos);
  return (
    <div className="row">
      {eventosId.map((key) => (
        <Evento key={key} evento={eventos[Number(key)]} />
      ))}
    </div>
  );
};

export default Eventos;
