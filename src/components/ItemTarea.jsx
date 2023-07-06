import {Button, ListGroup} from 'react-bootstrap';

const ItemTarea = ({tarea, borrarTarea, editarTarea}) => {
    return (
        <ListGroup.Item className='d-flex justify-content-between'>
            {tarea.tarea}
            <div>
                <Button variant='danger' onClick={()=> borrarTarea(tarea.id)} className='mx-1'>Borrar</Button>
                <Button variant='warning' onClick={()=>{return  editarTarea(tarea.id)}}>Editar</Button>
            </div>
        </ListGroup.Item>
    );
};

export default ItemTarea;