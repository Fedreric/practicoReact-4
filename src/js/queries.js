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
        const listaProductos = await respuesta.json();
        return listaProductos;
    }catch(e){
        console.log(e); 
    }
}
export const obtenerProducto = async (id) =>{
    try{
        const respuesta = await fetch(`${URL_PRODUCTO}/${id}`);
        const producto = await respuesta.json();
        return producto;
    }catch(e){
        console.log(e); 
    }
}

export const consultaBorrarProducto = async (id) =>{
    try{
        const respuesta = await fetch(`${URL_PRODUCTO}/${id}`,{
            method:"DELETE"
        });
        return respuesta;
    }catch(e){
        console.log(e); 
    }
}
export const consultaCrearProducto = async (producto) =>{
    try{
        const respuesta = await fetch(URL_PRODUCTO,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(producto)
        });
        return respuesta;
    }catch(e){
        console.log(e); 
    }
}
export const consultaEditarProducto = async (producto,id) =>{
    try{
        console.log(producto)
        const respuesta = await fetch(URL_PRODUCTO+"/"+id,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(producto)
        });
        return respuesta;
    }catch(e){
        console.log(e); 
    }
}