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
      /* color: transparent; */
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
      height: 0.5rem;
      width: 0.5rem;
      box-shadow: 0px 0px 0.125rem 0.125rem ${palette.firstColorAlpha};
    }
    & img {
      width: 100%;
      max-width: ${sizes.tablet};
    }
  }
  & :last-child {
    & .rec-carousel button {
      color: transparent;
      background: none;
      border: none;
      font-size: 1.5rem;
      box-shadow: none;
      &:hover:enabled,
      &:focus:enabled {
        color: ${palette.firstColor};
        box-shadow: none;
        text-shadow: 0.625rem 0.625rem 0.625rem 0 ${palette.secondColor};
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
