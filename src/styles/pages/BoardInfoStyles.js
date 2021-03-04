import styled from 'styled-components';
import { palette, sizes, devices } from 'Styles/GlobalStyles';

export const StyledInfo = styled.main`
  & hr {
    border-top: thin solid ${palette.dividerColor};
  }
  @media ${devices.breakpointsTablet} {
  }
  @media ${devices.breakpointsDesktop} {
  }
`;

export const Title = styled.h1`
  max-height: 1.3125rem;
  font-size: 1rem;
  font-weight: normal;
  color: ${palette.firstColor};
  overflow-x: auto;
  @media ${devices.breakpointsTablet} {
  }
  @media ${devices.breakpointsDesktop} {
  }
`;
export const SubTitle = styled.h2`
  padding: 0.75rem 0;
  font-size: 1rem;
  font-weight: normal;
  color: ${palette.firstColor};
  overflow-x: auto;
  & strong {
    color: ${palette.secondColor};
    font-size: 1rem;
    font-weight: bold;
  }
  @media ${devices.breakpointsTablet} {
  }
  @media ${devices.breakpointsDesktop} {
  }
`;
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
  & div {
    align-items: center;
    background-color: ${palette.secondColor};
    border: 1px solid ${palette.secondColor};
    color: ${palette.whiteColor};
    display: flex;
    font-weight: 600;
    justify-content: center;
    height: 35px;
    width: 35px;
    border-radius: 50%;
  }
  & p {
    color: ${palette.secondTextColor};
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

export const CardsContainer = styled.section`
  display: flex;
  flex-direction: column;
  height: auto;
  margin-bottom: 10px;
`;

export const ListCard = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
`;
export const CardContainers = styled.div`
  position: relative;
  width: 100px;
  height: 70px;
`;

export const CardLeft = styled.div`
  background-color: ${palette.whiteColor};
  border: 1px solid ${palette.cardsBorderOpacity};
  border-radius: 5px;
  height: 60px;
  position: absolute;
  z-index: 1;
  width: 80px;
`;
export const CardInner = styled.div`
  background-color: ${palette.whiteColor};
  border: 1px solid ${palette.cardsBorderOpacity1};
  border-radius: 5px;
  position: absolute;
  top: 10px;
  height: 60px;
  left: 10px;
  z-index: 2;
  width: 80px;
`;

export const Card = styled.div`
  background-color: ${palette.whiteColor};
  border: 1px solid ${palette.cardsBorder};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  top: 20px;
  left: 20px;
  position: absolute;
  z-index: 3;
  height: auto;
  width: 80px;
  & div {
    border-bottom: 1px solid ${palette.cardsBorder};
    font-size: 10px;
  }
  & p {
    color: ${palette.secondColor};
    font-size: 1.625rem;
    font-weight: 600;
    text-align: center;
  }
`;

export const ContainerProgress = styled.section`
  margin: 15px 0px;
  & progress {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: 1px solid ${palette.firstColor};
    border-radius: 30px;
    height: 18px;
    margin: 15px 0 10px;
    overflow: hidden;
    width: 320px;
    ::-webkit-progress-bar {
      background-color: ${palette.whiteColor};
    }
    ::-webkit-progress-value {
      ${'' /* background-color: red; */}
      background: linear-gradient(to right, ${palette.degradedPurple}, ${palette.degradedBlue});
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

// export const CardsContainer = styled.div`
//    display: flex;
//    padding: 0.75rem 0 1.5rem 0;
//    gap: 0 1.375rem;
//    overflow-x: scroll;
//    & ::-webkit-scrollbar {
//      display: none;
//    }
//    @media ${devices.breakpointsTablet} {
//    }
//    @media ${devices.breakpointsDesktop} {
//    }
//  `;
//  export const Card = styled.div`
//    display: block;
//    width: 5.75rem;
//    height: 4.625rem;
//    padding: 0.75rem 0 0 0.75rem;
//    background-image: url('https://assets-juanjosemayorga-website.s3.amazonaws.com/tracker-project-s3/card-container.svg');

//    & p:first-child {
//      height: 1rem;
//      min-width: 100%;
//      padding: 0 0 0 0.25rem;
//      font-size: 0.625rem;
//      overflow-x: auto;
//      width: 5rem;
//    }
//    & p:last-child {
//      display: flex;
//      justify-content: center;
//      align-items: center;
//      height: calc(100% - 1rem);
//      min-width: 100%;
//      font-size: 2rem;
//      overflow-x: auto;
//      color: ${palette.secondColor};
//    }

//   /* } */
//   @media ${devices.breakpointsTablet} {
//   }
//   @media ${devices.breakpointsDesktop} {
//   }
// `;
