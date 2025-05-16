import React from 'react';

type Slide = {
  image: string;
  title: string;
  description: string;
};

interface CarouselProps {
  slides: Slide[];
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide my-5" data-bs-ride="carousel">
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            <img src={slide.image} className="d-block w-100" alt={slide.title} />
            <div className="carousel-caption d-none d-md-block">
              <h5>{slide.title}</h5>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Siguiente</span>
      </button>
    </div>
  );
};

export default Carousel;