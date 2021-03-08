import styled from 'styled-components';
import Carousel from 'react-elastic-carousel';

import { palette, devices, sizes } from 'Styles/GlobalStyles';

export const StyledCarousel = styled.div`
  width: 100%;
  @media ${devices.breakpointsTablet} {
  }
  @media ${devices.breakpointsDesktop} {
  }
`;
export const Carousell = styled(Carousel)`
  & .rec-swipable {
    display: flex;
    align-items: center;
    text-align: center;
    font-size: 0.75rem;
    & img {
      max-width: 15rem;
      max-height: 10rem;
    }
  }
  & .rec-pagination {
    margin: 0.125rem 0;
    & .rec-dot {
      height: 0.5rem;
      width: 0.5rem;
      background: ${palette.dividerColor};
      box-shadow: none;
    }
    & .rec-dot_active {
      background: ${palette.secondTextColor};
      transition: 0.3s ease-in-out;
    }
  }
  & :last-child {
    & .rec-pagination {
      display: none;
    }
  }
  @media ${devices.breakpointsTablet} {
    & .rec-swipable {
      font-size: 1rem;
      & img {
        max-width: 25rem;
        max-height: 17.5rem;
      }
    }
    & .rec-pagination {
      padding: 1.5rem 0;
      & .rec-dot {
        height: 0.75rem;
        width: 0.75rem;
      }
    }
  }
  @media ${devices.breakpointsDesktop} {
    display: none;
  }
`;
