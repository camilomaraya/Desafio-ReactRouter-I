import { Form, Button, FloatingLabel } from "react-bootstrap"


export default function Contacto() {
  return (
    <div className="main">
        <h1>Cualquier duda, consulta, reclamo... contactanos!</h1>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Correo:</Form.Label>
            <Form.Control type="email" placeholder="nombre@ejemplo.com" />
        </Form.Group>

        <FloatingLabel
            controlId="floatingTextarea"
            className="mb-5">
            <Form.Label>Deja tu comentario</Form.Label>
            <Form.Control as="textarea" />
        </FloatingLabel>
        <Button className="justify-content-center" variant="danger" type="submit">
            Enviar
        </Button>
        </Form>
    </div>
  )
}
