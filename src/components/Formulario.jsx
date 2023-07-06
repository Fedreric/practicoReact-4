import {Button, Form} from 'react-bootstrap';
import ListaTareas from './ListaTareas';
import { useState, useEffect } from 'react';
import { obtenerTareas, consultaBorrarTarea, consultaCrearTarea, consultaEditarTarea, obtenerTarea } from "../js/queries";
import { useForm } from "react-hook-form";

const Formulario = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue
  } = useForm();
  const [tareas, setTareas] = useState([]);
  const [tareaEditId, setTareaEditId] = useState('');
  const [buttonState, setButtonState] = useState(true)
    // let tareasLS = JSON.parse(localStorage.getItem('listaTareas')) || [];
    //aqui creo las funciones
    useEffect(()=>{
      obtenerTareas().then((respuesta)=>{
        setTareas(respuesta)
      })
    },[])

    const onSubmit = (tarea) =>{
      if(buttonState){
        consultaCrearTarea(tarea).then(()=>{
          obtenerTareas().then((respuesta)=>{
            setTareas(respuesta)
          })
          reset()
        });
      }else{
        consultaEditarTarea(tarea, tareaEditId).then(()=>{
          obtenerTareas().then((respuesta)=>{
            setTareas(respuesta)
            setButtonState(true)
          })
          reset()
        });
      }
    }

    const borrarTarea = (idTarea) =>{
      consultaBorrarTarea(idTarea).then(()=>{
        obtenerTareas().then((respuesta)=>{
          setTareas(respuesta)
        })
      })
    }

    const editarTarea = (idTarea) =>{
      obtenerTarea(idTarea).then((respuesta)=>{
        setValue('tarea',respuesta.tarea)
         setTareaEditId(respuesta.id)
        setButtonState(false)
      })
    }

    // const handleEdit = (tarea, tareaEditId) => {
    //   consultaEditarTarea(tarea, tareaEditId).then(()=>{
    //     obtenerTareas().then((respuesta)=>{
    //       setTareas(respuesta)
    //     })
    //   })
    // }

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
            {
              buttonState ? <Button variant="primary" type="submit" className='mx-1'>
              Agregar
            </Button> : <Button variant="warning" type="submit" className='mx-1'>
              Editar
            </Button>
            }
        </Form.Group>
      </Form>
      <ListaTareas tareas={tareas} borrarTarea = {borrarTarea} editarTarea={editarTarea}></ListaTareas>
    </section>
  );
};

export default Formulario;
