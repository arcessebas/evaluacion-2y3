import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from '../componentes/Navbar/Navbar';
import Footer from '../componentes/Footer/Footer';

const Servicios: React.FC = () => {
  return (
    <>
      <Navbar />

      <Container className="my-5">
        <h1 className="text-center text-primary mb-4">Nuestros Servicios Dentales</h1>
        <p className="text-center lead">
          En <strong>Dentisalud</strong>, ofrecemos una amplia gama de servicios para garantizar tu salud bucal y bienestar.
          Con un equipo altamente calificado y tecnología avanzada, cuidamos de tu sonrisa.
        </p>

        <Row className="my-5">
          <Col md={6}>
            <h3>Consulta Dental General</h3>
            <p>Realizamos exámenes completos para evaluar tu salud bucal. Detectamos cualquier problema a tiempo y ofrecemos tratamientos preventivos para que tu boca esté siempre en su mejor estado.</p>
            <img src="/imagenes/dentaaal.jpg" alt="Consulta dental" className="img-fluid rounded" />
          </Col>
          <Col md={6}>
            <h3>Ortodoncia</h3>
            <p>La ortodoncia es clave para alinear tus dientes y mejorar tu mordida. Ofrecemos tratamientos con brackets tradicionales o invisibles para un tratamiento cómodo y eficaz.</p>
            <img src="/imagenes/ortodoncia.jpg" alt="Ortodoncia" className="img-fluid rounded" />
          </Col>
        </Row>

        <Row className="my-5">
          <Col md={6}>
            <h3>Implantes Dentales</h3>
            <p>Recupera tu sonrisa y funcionalidad con nuestros implantes dentales. Son una solución permanente para dientes perdidos, asegurando una mordida natural y estética.</p>
            <img src="/imagenes/dentadura.jpg" alt="Implantes dentales" className="img-fluid rounded" />
          </Col>
          <Col md={6}>
            <h3>Blanqueamiento Dental</h3>
            <p>Recupera la blancura de tus dientes con nuestro blanqueamiento dental profesional. Eliminamos manchas y mejoramos la apariencia de tu sonrisa, dejándola radiante y saludable.</p>
            <img src="/imagenes/blanqueamiento.jpg" alt="Blanqueamiento dental" className="img-fluid rounded" />
          </Col>
        </Row>

        <Row className="my-5">
          <Col>
            <h3>Tratamientos de Conducto</h3>
            <p>Si tienes problemas con tus muelas o dientes sensibles, el tratamiento de conducto es la solución para eliminar infecciones y salvar el diente afectado. Te ayudamos a mantener tu salud dental sin dolor.</p>
            <img src="/imagenes/tratamiento_conducto.jpg" alt="Tratamiento de conducto" className="img-fluid rounded" />
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default Servicios;
