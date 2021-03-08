import React from 'react';
import { StyledCarouselDesktop } from 'Styles/components/CarouselDesktopStyles';
import { HashLink as Link } from 'react-router-hash-link';

export const CarouselDesktop = () => {
  return (
    <StyledCarouselDesktop>
      <div>
        <div>
          <p>
            Sólo necesitas introducir el ID de tu tablero y nosotros haremos el
            resto
          </p>
          <Link to="#FormBoard" smooth>
            <button>Comenzar</button>
          </Link>
        </div>
        <picture>
          <img
            src="https://assets-juanjosemayorga-website.s3.amazonaws.com/tracker-project-s3/slider_one.svg"
            alt="carousel-slide-1"
          />
        </picture>
      </div>
      <small>
        Your Trello board needs only three lists: <br />
        <em>To Do, Doing, Done</em>
      </small>
      <Link to="#down" smooth>
        <img
          className="arrow-down"
          src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Arrow-down.svg"
          alt="arrow-down"
        />
      </Link>
      <div>
        <picture>
          <img
            id="down"
            src="https://assets-juanjosemayorga-website.s3.amazonaws.com/tracker-project-s3/slider_two.svg"
            alt="carousel-slide-2"
          />
        </picture>
        <p>
          Sabrás el número de miembros con los que cuenta tu tablero, y el
          nombre de cada uno de ellos
        </p>
      </div>
      <div>
        <p>
          Sabrás de una manera rápida el número total de tarjetas que tienes en
          cada lista
        </p>
        <picture>
          <img
            src="https://assets-juanjosemayorga-website.s3.amazonaws.com/tracker-project-s3/slider_three.svg"
            alt="carousel-slide-3"
          />
        </picture>
      </div>
    </StyledCarouselDesktop>
  );
};
