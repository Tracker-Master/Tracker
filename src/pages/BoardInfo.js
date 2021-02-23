import React, { useContext } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import { palette, sizes, devices } from 'Routes/GlobalStyles';

import { Context } from 'Context/BoardContext';

export const BoardInfo = () => {
  const {
    board,
    setBoard,
    card,
    setCard,
    list,
    setList,
    member,
    setMember,
  } = useContext(Context);

  console.log(
    // board,
    // card
    list
    // member
  );
  return (
    <>
      <Helmet>
        <title>{`🔱${board.name}`}</title>
        <meta property="og:title" content="Proyect Tracker" />
        <meta property="og:description" content="Proyect Tracker" />
        <meta property="og:image" content="" />
        <meta property="og:url" content=".github" />
        <meta property="og:site_name" content="Proyect Tracker" />
        <meta property="og:locale" content="es_EN" />
        <meta property="og:type" content="article" />
      </Helmet>
      <StyledInfo>
        <Title>Members of {board.name}: </Title>
        <MembersContainer>
          <Member>
            <picture>
              <img src="" alt="" />
            </picture>
            <p>Jenkins Gene Gene Gene Gene</p>
          </Member>
          <Member>
            <picture>
              <img src="" alt="" />
            </picture>
            <p>Jenkins Gene</p>
          </Member>
          <Member>
            <picture>
              <img src="" alt="" />
            </picture>
            <p>Jenkins Gene</p>
          </Member>
          <Member>
            <picture>
              <img src="" alt="" />
            </picture>
            <p>Jenkins Gene</p>
          </Member>
          <Member>
            <picture>
              <img src="" alt="" />
            </picture>
            <p>Jenkins Gene</p>
          </Member>
          <Member>
            <picture>
              <img src="" alt="" />
            </picture>
            <p>Jenkins Gene</p>
          </Member>
          <Member>
            <picture>
              <img src="" alt="" />
            </picture>
            <p>Jenkins Gene</p>
          </Member>
          <Member>
            <picture>
              <img src="" alt="" />
            </picture>
            <p>Jenkins Gene</p>
          </Member>
          <Member>
            <picture>
              <img src="" alt="" />
            </picture>
            <p>Jenkins Gene</p>
          </Member>
        </MembersContainer>
        <hr />
        <SubTitle>
          In total, your project has <strong>{card.length}</strong> cards
        </SubTitle>
        <hr />
        <SubTitle>Number of cards you have in each list: </SubTitle>
        <CardsContainer>
          <Cards>
            {/* { if(list.name.toLowerCase.replace(/\w/, (firstLetter) => (firstLetter.toUpperCase())) === 'To Do' || 'Doing' || 'Done'){ */}
            {/* {list.name === 'To Do'} */}
            <p>To Do</p>
            <p> 7</p>
          </Cards>
          <Cards>
            {/* { if(list.name.toLowerCase.replace(/\w/, (firstLetter) => (firstLetter.toUpperCase())) === 'To Do' || 'Doing' || 'Done'){ */}
            {/* {list.name === 'To Do'} */}
            <p>To Do</p>
            <p> 7</p>
          </Cards>
          <Cards>
            {/* { if(list.name.toLowerCase.replace(/\w/, (firstLetter) => (firstLetter.toUpperCase())) === 'To Do' || 'Doing' || 'Done'){ */}
            {/* {list.name === 'To Do'} */}
            <p>To Do</p>
            <p> 7</p>
          </Cards>
          <Cards>
            {/* { if(list.name.toLowerCase.replace(/\w/, (firstLetter) => (firstLetter.toUpperCase())) === 'To Do' || 'Doing' || 'Done'){ */}
            {/* {list.name === 'To Do'} */}
            <p>To Do</p>
            <p> 7</p>
          </Cards>
        </CardsContainer>
        <hr />
        <SubTitle>
          <strong>Your progress: </strong>
        </SubTitle>
        <hr />
        <SubTitle>
          You only need to complete <strong>{}</strong> to finish the project
          {console.log('necesitas hacer un if para cuando llegue al 100%')}
        </SubTitle>
      </StyledInfo>
    </>
  );
};

export const StyledInfo = styled.main`
  /* display: flex;
  align-items: center;
  justify-content: space-around; */
  /* flex-direction: column; */
  & hr {
    border-top: thin solid ${palette.secondTextColor};
  }
`;
export const Title = styled.h1`
  font-size: 1rem;
  font-weight: normal;
  color: ${palette.firstColor};
  overflow-x: auto;
  max-height: 1.3125rem;
`;
export const SubTitle = styled.h2`
  font-size: 1rem;
  font-weight: normal;
  color: ${palette.firstColor};
  overflow-x: auto;
  padding: 0.75rem 0;
  /* max-height: 1.3125rem; */
`;
export const MembersContainer = styled.div`
  display: flex;
  padding: 1.5rem 0 1.5rem 1rem;
  gap: 0 1rem;
  overflow-x: auto;
`;
export const Member = styled.div`
  text-align: center;
  /* padding: 1rem 0 1rem 1rem; */
  & picture {
    & img {
      width: 2.5rem;
      height: 2.5rem;
      background-color: red;
      border-radius: 50%;
      margin: 0.125rem;
    }
  }
  & p {
    font-size: 0.625rem;
    max-height: 1.625rem;
    overflow-y: auto;
  }
`;
export const CardsContainer = styled.div`
  display: flex;
  padding: 0.75rem 0 1.5rem 0;
  gap: 0 1.25rem;
  overflow-x: auto;
`;
export const Cards = styled.div`
  display: block;
  width: 5.75rem;
  height: 4.5rem;
  padding: 0.75rem 0 0 0.75rem;
  background-image: url('https://assets-juanjosemayorga-website.s3.amazonaws.com/tracker-project-s3/card-container.svg');
  & :first-child {
    min-width: 100%;
    height: 1rem;
    /* border: 1px solid red; */
    padding: 0 0 0 0.25rem;
    font-size: 0.625rem;
    overflow-x: auto;
    /* width: 5.75rem; */
  }
  & :last-child {
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100% - 1rem);
    min-width: 100%;
    font-size: 2rem;
    overflow-x: auto;
    color: ${palette.secondColor};
  }
`;
