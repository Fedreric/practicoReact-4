import {Button, Form} from 'react-bootstrap';
import ListaTareas from './ListaTareas';
import { useState } from 'react';

const Formulario = () => {
    const [tarea, setTarea] = useState('');
    const [tareas, setTareas] = useState([]);
    //aqui creo las funciones
    const handleSubmit = (e) =>{
      e.preventDefault();
      //crea un nuevo array con los datos que ya posee y agrega uno nuevo al final
      setTareas([...tareas,tarea])
      setTarea('');
    }
  return (
    <section>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex" controlId="tarea">
          <Form.Control type="text" placeholder="Ingrese una tarea" onChange={(e)=>setTarea(e.target.value)} value={tarea}/>
        <Button variant="primary" type="submit" className='mx-1'>
          Agregar
        </Button>
        </Form.Group>
      </Form>
      <ListaTareas></ListaTareas>
    </section>
  );
};

export default Formulario;