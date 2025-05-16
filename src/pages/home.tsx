import React from 'react';
import { Container } from 'react-bootstrap';
import Carousel from '../componentes/Carousel/Carousel';
import Navbar from '../componentes/Navbar/Navbar';
import Footer from '../componentes/Footer/Footer';

const slides = [
  {
    image: '/imagenes/dentaaal.jpg',
    title: 'Bienvenidos a Dentisalud',
    description: 'Nos preocupamos por tu salud bucal. Tecnología de punta y un equipo capacitado.',
  },
  {
    image: '/imagenes/dentadura.jpg',
    title: 'Tu sonrisa, nuestra prioridad',
    description: 'Implantes dentales, ortodoncia y blanqueamiento para mejorar tu salud bucal.',
  },
  {
    image: '/imagenes/imagendental.jpg',
    title: 'Recupera tu sonrisa',
    description: 'Logra una sonrisa más brillante y saludable.',
  },
];

const Home: React.FC = () => {
  return (
    <Container fluid className="mt-1">
      <Navbar />
      <Carousel slides={slides} />

     
      <div className="container">
        <h1 className="text-center text-primary mt-5">Bienvenidos a Dentisalud</h1>
        <p className="text-center lead">
          En <strong>Dentisalud</strong>, ofrecemos atención dental de alta calidad con tecnología avanzada y atención personalizada.
        </p>
        <div className="text-center my-5">
          <p className="lead">Ofrecemos servicios como:</p>
          <div className="d-flex justify-content-center">
            <a href="/Servicios" className="btn btn-primary mx-3">Servicios</a>
            <a href="/Quienes-somos" className="btn btn-primary mx-3">Sobre Nosotros</a>
            <a href="/contacto" className="btn btn-primary mx-3">Contacto</a>
          </div>
        </div>
      </div>

      <Footer />
    </Container>
  );
};

export default Home;