import React from 'react';
import styled from 'styled-components';
import Carousel from 'react-elastic-carousel';

import { palette, sizes } from 'Routes/GlobalStyles';

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
  outline: none;
  & :first-child {
    outline: none;
    & .rec-carousel button {
      color: ${palette.firstColor};
      background: none;
      border: none;
      font-size: 1.5rem;
      box-shadow: none;
      &:hover:enabled,
      &:focus:enabled {
        color: ${palette.firstColor};
        box-shadow: none;
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
    }
    & img {
      width: 100%;
      max-width: ${sizes.tablet};
    }
  }
  & :last-child {
    & .rec-carousel button {
      color: ${palette.firstColor};
      background: none;
      border: none;
      font-size: 1.5rem;
      box-shadow: none;
      &:hover:enabled,
      &:focus:enabled {
        color: ${palette.firstColor};
        box-shadow: none;

        text-shadow: 10px 10px 10px 0 ${palette.secondColor};
      }
      &:disabled {
        color: transparent;
      }
    }
    & .rec-pagination button {
      display: none;
    }
  }
`;
