import styled from 'styled-components';
import { palette, devices, sizes } from 'Styles/GlobalStyles';

export const StyledLayout = styled.div`
  display: grid;
  grid-template-rows: ${(props) =>
    props.withOutFooter ? '50px 1fr' : '50px 1fr 50px'};
  height: 100vh;
  /* background-color: ${palette.firstColor}; */
  & main {
    width: 100%;
    margin: 0 auto;
    padding: 1rem;
    background-image: url('https://i.imgur.com/M8kOD68.png');
    overflow: auto;
    & ::-webkit-scrollbar {
      display: none;
    }
  }
  @media ${devices.breakpointsTablet} {
    & main {
      padding: 2rem;
    }
  }
  @media ${devices.breakpointsDesktop} {
    & main {
      max-width: ${sizes.desktop};
    }
  }
`;
