import ListGroup from 'react-bootstrap/ListGroup';
import ItemTarea from './ItemTarea';

const ListaTareas = ({tareas, borrarTarea, editarTarea}) => {
  return (
    <div>
      <ListGroup>
        {
          tareas.map((tarea)=><ItemTarea key={tarea._id} tarea={tarea} borrarTarea={borrarTarea} editarTarea={editarTarea}/>)
        }
        
      </ListGroup>
    </div>
  );
};

export default ListaTareas;
