import styled from 'styled-components';
import { palette, sizes, devices } from 'Styles/GlobalStyles';

export const MembersContainer = styled.div`
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
    & img {
      margin: 0.125rem;
      height: 2.375rem;
      width: 2.375rem;
      border-radius: 50%;
    }
  }
  & p {
    max-height: 1.625rem;
    font-size: 0.625rem;
    overflow-y: auto;
    & ::-webkit-scrollbar {
      display: none;
    }
  }
  @media ${devices.breakpointsTablet} {
  }
  @media ${devices.breakpointsDesktop} {
  }
`;
