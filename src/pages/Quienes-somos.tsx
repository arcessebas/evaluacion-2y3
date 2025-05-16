import React from 'react';
import Navbar from '../componentes/Navbar/Navbar';
import Footer from '../componentes/Footer/Footer';
import Carousel from '../componentes/Carousel/Carousel'; // Reutilizamos tu componente
import { Container } from 'react-bootstrap';



const QuienesSomos: React.FC = () => {
  return (
    <>
      <Navbar />
     

      <Container className="my-5">
        <h2 className="text-center mb-4">Sobre Nosotros</h2>
        <p className="text-center lead">
          En <strong>Dentisalud</strong>, somos un equipo de profesionales dedicados a cuidar tu salud bucal.
          Brindamos un servicio de excelencia con tratamientos personalizados, tecnología moderna y un enfoque
          humano y responsable.
        </p>
        <p className="text-center">
          Trabajamos con altos estándares de calidad y seguridad para garantizar tu bienestar en cada consulta.
        </p>
      </Container>

      <Footer />
    </>
  );
};

export default QuienesSomos;