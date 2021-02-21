import React from 'react';
import styled from 'styled-components';
import Carousel, { props } from 'react-elastic-carousel';

import { palette, sizes, devices } from 'Routes/GlobalStyles';

export const Carousell = ({ children }) => {
  return (
    <CarouselContainer>
      <Carousel enableAutoPlay={true} autoPlaySpeed={3000}>
        {children}
      </Carousel>
    </CarouselContainer>
  );
};

export const CarouselContainer = styled.div`
  width: 100%;
  max-width: ${sizes.desktop};

  & :first-child {
    & .rec-carousel button {
      color: ${palette.firstColor};
      background: transparent;
      border: none;
      font-size: 1.5rem;
      box-shadow: none;
      &:hover:enabled,
      &:focus:enabled {
        color: ${palette.firstColor};
        box-shadow: none;
        background-color: transparent;
        text-shadow: 10px 10px 10px 0 ${palette.secondColor};
      }
      &:disabled {
        color: transparent;
      }
    }
    & .rec-pagination button {
      height: 5px;
      width: 5px;
      box-shadow: 0px 0px 2px 2px ${palette.firstColorAlpha};
      /* background: transparent; */
    }
    & img {
      width: 100%;
      max-width: ${sizes.tablet};
    }
  }
  & :last-child {
    & .rec-carousel button {
      color: ${palette.firstColor};
      background: transparent;
      border: none;
      font-size: 1.5rem;
      box-shadow: none;
      &:hover:enabled,
      &:focus:enabled {
        color: ${palette.firstColor};
        box-shadow: none;
        background-color: transparent;
        text-shadow: 10px 10px 10px 0 ${palette.secondColor};
      }
      &:disabled {
        color: transparent;
      }
    }
    & .rec-pagination button {
      /* background-color: red; */
      display: none;
      /* background: transparent; */
    }
  }
`;
