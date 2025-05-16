import React, { useState } from 'react';
import Navbar from '../componentes/Navbar/Navbar';
import Footer from '../componentes/Footer/Footer';
import { Container, Form, Button, Alert } from 'react-bootstrap';

const Contacto: React.FC = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  const [errores, setErrores] = useState<string[]>([]);
  const [exito, setExito] = useState(false);
  const [mensajeExito, setMensajeExito] = useState('');

  const validarEmail = (email: string): boolean => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/i;
    return regex.test(email);
  };

  const validarNombre = (nombre: string): boolean => {
    return nombre.trim().split(' ').length >= 2;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const erroresTemporales: string[] = [];

    // Validaciones
    if (!nombre.trim()) {
      erroresTemporales.push('El campo "Nombre" es obligatorio.');
    } else if (!validarNombre(nombre)) {
      erroresTemporales.push('El nombre debe contener al menos dos palabras (Ej: Juan Pérez).');
    }

    if (!email.trim()) {
      erroresTemporales.push('El campo "Correo electrónico" es obligatorio.');
    } else if (!validarEmail(email)) {
      erroresTemporales.push('Ingrese un correo electrónico válido. Ej: ejemplo@correo.com');
    }

    if (!mensaje.trim()) {
      erroresTemporales.push('El campo "Mensaje" no puede estar vacío.');
    }

   
    if (erroresTemporales.length > 0) {
      setErrores(erroresTemporales);
      setExito(false);
      return;
    }

    const datosPrevios = JSON.parse(localStorage.getItem('formularioContacto') || '[]');
    datosPrevios.push({ nombre, email, mensaje });
    localStorage.setItem('formularioContacto', JSON.stringify(datosPrevios));

    const primerNombre = nombre.trim().split(' ')[0];
    setMensajeExito(`Gracias ${primerNombre}, tu mensaje ha sido enviado y guardado correctamente.`);
    setExito(true);
    setErrores([]);

    // Limpiar campos
    setNombre('');
    setEmail('');
    setMensaje('');
  };

  return (
    <>
      <Navbar />
      <Container className="my-5">
        <h2 className="text-center mb-4">Contáctanos</h2>

        
        {errores.length > 0 && (
          <Alert variant="danger" dismissible onClose={() => setErrores([])}>
            <ul className="mb-0">
              {errores.map((err, idx) => (
                <li key={idx}>{err}</li>
              ))}
            </ul>
          </Alert>
        )}

        
        {exito && (
          <Alert variant="success" dismissible onClose={() => setExito(false)}>
            {mensajeExito}
          </Alert>
        )}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="nombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Juan Pérez"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Correo electrónico</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ej: ejemplo@correo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="mensaje">
            <Form.Label>Mensaje</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Escribe tu mensaje aquí..."
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              required
            />
          </Form.Group>

          <div className="text-center">
            <Button type="submit" variant="primary">
              Enviar
            </Button>
          </div>
        </Form>
      </Container>
      <Footer />
    </>
  );
};

export default Contacto;