import {Button, ListGroup} from 'react-bootstrap';

const ItemTarea = ({tarea, borrarTarea}) => {
    return (
        <ListGroup.Item className='d-flex justify-content-between'>
            {tarea.tarea}
            <Button variant='danger' onClick={()=> borrarTarea(tarea.id)}>Borrar</Button>
        </ListGroup.Item>
    );
};

export default ItemTarea;