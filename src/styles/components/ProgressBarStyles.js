import styled from 'styled-components';

import { palette, devices, sizes } from 'Styles/GlobalStyles';

export const ContainerProgress = styled.div`
  margin: 8px auto 50px;
  & progress {
    width: 100%;
    height: 18px;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    border: 1px solid ${palette.firstColor};
    border-radius: 30px;
    overflow: hidden;
    ::-webkit-progress-bar {
      background-color: transparent;
    }
    ::-webkit-progress-value {
      background: linear-gradient(
        to right,
        ${palette.degradedPurple},
        ${palette.degradedBlue}
      );
    }
  }
  & p {
    color: ${palette.secondColor};
    font-size: 1.125rem;
    font-weight: bold;
    margin-right: 60px;
    text-align: right;
  }
`;
