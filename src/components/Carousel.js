import React from 'react';

import { StyledCarousel, Carousell } from 'Styles/components/CarouselStyles';

export const Carousel = ({ children }) => {
  return (
    <StyledCarousel>
      <Carousell
        autoPlaySpeed={3000}
        enableAutoPlay={true}
        focusOnSelect={false}
        showArrows={false}
      >
        <img
          src="https://assets-juanjosemayorga-website.s3.amazonaws.com/tracker-project-s3/slider_one.svg"
          alt="carousel-slide-1"
        />
        <img
          src="https://assets-juanjosemayorga-website.s3.amazonaws.com/tracker-project-s3/slider_two.svg"
          alt="carousel-slide-2"
        />
        <img
          src="https://assets-juanjosemayorga-website.s3.amazonaws.com/tracker-project-s3/slider_three.svg"
          alt="carousel-slide-3"
        />
      </Carousell>
      <Carousell
        autoPlaySpeed={3000}
        enableAutoPlay={true}
        focusOnSelect={false}
        showArrows={false}
      >
        <p>
          Sólo necesitas introducir el ID de tu tablero y nosotros haremos el
          resto
        </p>
        <p>
          Sabrás el número de miembros con los que cuenta tu tablero, y el
          nombre de cada uno de ellos
        </p>
        <p>
          Sabrás de una manera rápida el número total de tarjetas que tienes en
          cada lista
        </p>
      </Carousell>
    </StyledCarousel>
  );
};
