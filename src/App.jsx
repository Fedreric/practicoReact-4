import { Container } from 'react-bootstrap'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Formulario from './components/Formulario'

function App() {

  return (
    <>
    <Container className='my-5 mainPage'>
      <h1 className='display-4 text-center text-light'>Lista de tareas</h1>
      <hr className='text-light'/>
      {/* Aqui agrego el componente del formulario */}
      <Formulario></Formulario>
    </Container>
    <footer className='bg-dark text-light py-3 text-center'>
      <p className='m-0'>&copy;Todos los derechos reservados</p>
    </footer>
    </>
  )
}

export default App
