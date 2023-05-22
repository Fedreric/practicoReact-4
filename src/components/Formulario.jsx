import {Button, Form} from 'react-bootstrap';
import ListaTareas from './ListaTareas';
import { useState, useEffect } from 'react';

const Formulario = () => {
    const [tarea, setTarea] = useState('');
    let tareasLS = JSON.parse(localStorage.getItem('listaTareas')) || [];
    const [tareas, setTareas] = useState(tareasLS);
    //aqui creo las funciones
    useEffect(()=>{
      localStorage.setItem('listaTareas',JSON.stringify(tareas));
    },[tareas])
    const handleSubmit = (e) =>{
      e.preventDefault();
      //crea un nuevo array con los datos que ya posee y agrega uno nuevo al final
      setTareas([...tareas,tarea])
      //limpia el input
      setTarea('');
    }

    const borrarTarea = (nombreTarea) =>{
      let tareasFiltrada = tareas.filter((itemTarea)=> itemTarea !==nombreTarea)
      setTareas(tareasFiltrada);
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
      <ListaTareas tareas={tareas} borrarTarea = {borrarTarea}></ListaTareas>
    </section>
  );
};

export default Formulario;
