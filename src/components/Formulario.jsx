import {Button, Form} from 'react-bootstrap';

const Formulario = () => {
  return (
    <section>
      <Form>
        <Form.Group className="mb-3 d-flex" controlId="tarea">
          <Form.Control type="text" placeholder="Ingrese una tarea" />
        <Button variant="primary" type="submit" className='mx-1'>
          Agregar
        </Button>
        </Form.Group>
      </Form>
    </section>
  );
};

export default Formulario;
