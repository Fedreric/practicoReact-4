import ListGroup from 'react-bootstrap/ListGroup';
import ItemTarea from './ItemTarea';

const ListaTareas = ({tareas, borrarTarea, editarTarea, handleEdit}) => {
  return (
    <div>
      <ListGroup>
        {
          tareas.map((tarea)=><ItemTarea key={tarea.id} tarea={tarea} borrarTarea={borrarTarea} editarTarea={editarTarea} handleEdit={handleEdit} />)
        }
        
      </ListGroup>
    </div>
  );
};

export default ListaTareas;
