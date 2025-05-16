import React from 'react';
import './Footer.css';
const Footer = () => {
  return (
    <footer className="footerindex text-center mt-5 py-4" id="footerindex">
      <p className="text-muted">© 2025 Dentisalud. Todos los derechos reservados.</p>
      <p className="text-muted">Desarrollado por Sebastián Arce</p>
      <div>
        <a href="https://facebook.com" target="_blank" rel="noreferrer" className="mx-3">Facebook</a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer" className="mx-3">Twitter</a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="mx-3">Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;