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
          You only need to enter the ID of your board and we will do the rest
        </p>
        <p>
          You will know the number of members that your board has, and the name
          of each of them
        </p>
        <p>
          You will quickly know the total number of cards you have in each list
        </p>
      </Carousell>
    </StyledCarousel>
  );
};
