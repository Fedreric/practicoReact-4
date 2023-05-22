import ListGroup from 'react-bootstrap/ListGroup';
import ItemTarea from './ItemTarea';

const ListaTareas = ({tareas,borrarTarea}) => {
  return (
    <div>
      <ListGroup>
        {
          tareas.map((tarea,indice)=><ItemTarea key={indice} tarea={tarea} borrarTarea={borrarTarea} />)
        }
        
      </ListGroup>
    </div>
  );
};

export default ListaTareas;
