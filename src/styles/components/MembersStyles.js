import styled from 'styled-components';
import { palette, sizes, devices } from 'Styles/GlobalStyles';

export const StyledMembers = styled.div`
  display: flex;
  padding: 1.5rem 0 1.5rem 1rem;
  gap: 0 1.5rem;
  overflow-x: auto;
  & ::-webkit-scrollbar {
    display: none; /* width of the entire scrollbar */
  }
  @media ${devices.breakpointsTablet} {
  }
  @media ${devices.breakpointsDesktop} {
  }
`;
export const Member = styled.div`
  max-height: 4.25rem;
  max-width: 2.625rem;
  text-align: center;

  & picture {
    filter: drop-shadow(0 0.25rem 0.125rem ${palette.cardsBorderAlpha});
    & img {
      margin: 0.125rem;
      height: 2.375rem;
      width: 2.375rem;
      border-radius: 50%;
      opacity: 0.7;
      &:hover {
        opacity: 0.8;
      }
    }
    & figcaption {
      line-height: 0.75rem;
      max-height: 1.625rem;
      font-size: 0.625rem;
      overflow-y: auto;
      /* font-weight: 700; */
      color: ${palette.secondTextColor};
      & ::-webkit-scrollbar {
        display: none;
      }
    }
  }
  @media ${devices.breakpointsTablet} {
  }
  @media ${devices.breakpointsDesktop} {
  }
`;
