import ListGroup from 'react-bootstrap/ListGroup';
import ItemTarea from './ItemTarea';

const ListaTareas = ({tareas}) => {
  return (
    <div>
      <ListGroup>
        {
          tareas.map((tarea,indice)=><ItemTarea key={indice}/>)
        }
        
      </ListGroup>
    </div>
  );
};

export default ListaTareas;
