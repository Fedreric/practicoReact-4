const URL_TAREAS = import.meta.env.VITE_API_TAREAS;

// export const login = async (usuario) =>{
//     console.log(usuario);
//     try{
//         const respuesta = await fetch (URL_USUARIO)
//         const listaUsuarios = await respuesta.json();
//         console.log(listaUsuarios)
//         //buscar
//         const usuarioBuscado = listaUsuarios.find((itemUsuario)=>itemUsuario.email === usuario.email)
//         if(usuarioBuscado){
//             console.log('Email encontrado')
//             //verificar el pass
//             if(usuarioBuscado.password === usuario.password){
//                 console.log('Encontramos el usuario')
//                 return usuarioBuscado;
//             }else{
//                 console.log('Contraseña incorrecta')
//                 return null;
//             }
//         }else{
//             console.log('email incorrecto')
//             return null;
//         }
//     }catch(e){
//         console.log(e)
//     }
// }

export const obtenerTareas = async () =>{
    try{
        const respuesta = await fetch(URL_TAREAS);
        const listaTareas = await respuesta.json();
        return listaTareas;
    }catch(e){
        console.log(e); 
    }
}
export const obtenerTarea = async (id) => {
    try {
      const respuesta = await fetch(`${URL_TAREAS}/${id}`);
      const tarea = await respuesta.json();
      return tarea;
    } catch (e) {
      console.log(e);
    }
  };
export const consultaBorrarTarea = async (id) =>{
    try{
        const respuesta = await fetch(`${URL_TAREAS}/${id}`,{
            method:"DELETE"
        });
        return respuesta;
    }catch(e){
        console.log(e); 
    }
}
export const consultaCrearTarea = async (tarea) =>{
    try{
        const respuesta = await fetch(URL_TAREAS,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(tarea)
        });
        return respuesta;
    }catch(e){
        console.log(e); 
    }
}
export const consultaEditarTarea = async (tarea,id) =>{
    try{
        console.log(tarea)
        const respuesta = await fetch(URL_TAREAS+"/"+id,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(tarea)
        });
        return respuesta;
    }catch(e){
        console.log(e); 
    }
}