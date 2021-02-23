import styled, { css } from 'styled-components';
import { palette, sizes } from 'Routes/GlobalStyles';
import Carousel from 'react-elastic-carousel';

export const Container = styled.div`
  width: 100%;
  outline: none;
`;

export const Carousell = styled(Carousel)`
  & .rec .rec-dot {
    background-color: #BDBDBD;
    box-shadow: none;
    transition: 0.3s ease-in-out;
  }

  & .rec .rec-dot_active {
    background-color: #757575;
    transition: 0.3s ease-in-out;
  }
`;