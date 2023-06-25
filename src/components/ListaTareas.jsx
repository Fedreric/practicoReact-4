import ListGroup from 'react-bootstrap/ListGroup';
import ItemTarea from './ItemTarea';

const ListaTareas = ({tareas,borrarTarea}) => {
  return (
    <div>
      <ListGroup>
        {
          tareas.map((tarea)=><ItemTarea key={tarea.id} tarea={tarea} borrarTarea={borrarTarea} />)
        }
        
      </ListGroup>
    </div>
  );
};

export default ListaTareas;
