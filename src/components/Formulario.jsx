import {Button, Form} from 'react-bootstrap';
import ListaTareas from './ListaTareas';
import { useState, useEffect } from 'react';
import { obtenerTareas, consultaBorrarTarea, consultaCrearTarea } from "../js/queries";
import { useForm } from "react-hook-form";

const Formulario = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [tareas, setTareas] = useState([]);
    // let tareasLS = JSON.parse(localStorage.getItem('listaTareas')) || [];
    //aqui creo las funciones
    useEffect(()=>{
      obtenerTareas().then((respuesta)=>{
        setTareas(respuesta)
      })
    },[])

    const onSubmit = (tarea) =>{
      consultaCrearTarea(tarea).then(()=>{
        obtenerTareas().then((respuesta)=>{
          setTareas(respuesta)
        })
        reset()
      });
    }

    const borrarTarea = (idTarea) =>{
      consultaBorrarTarea(idTarea).then(()=>{
        obtenerTareas().then((respuesta)=>{
          setTareas(respuesta)
        })
      })
    }

  return (
    <section>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3 d-flex" controlId="tarea">
          <Form.Control type="text" placeholder="Ingrese una tarea" {...register("tarea", {
              required: "ingresa una tarea",
            })}/>
            <Form.Text className="text-danger fst-italic">
            {errors.tarea?.message}
          </Form.Text>
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
