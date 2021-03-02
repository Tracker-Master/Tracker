import React, { useContext } from 'react';

import { SEOHeader } from 'Components/SEOHeader';
import { Context } from 'Context/BoardContext';

import {
  StyledInfo,
  Title,
  SubTitle,
  MembersContainer,
  Member,
  CardsContainer,
  Card,
} from 'Styles/pages/BoardInfoStyles';

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

  console
    .log
    // board,
    // card
    // list
    // member
    ();
  return (
    <>
      <SEOHeader title={`🔱 ${board?.name}`} />
      <StyledInfo>
        <Title>Members of {board?.name}: </Title>
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
        </MembersContainer>
        <hr />
        <SubTitle>
          In total, your project has <strong>{card.length}</strong> cards
        </SubTitle>
        <hr />
        <SubTitle>Number of cards you have in each list: </SubTitle>
        <CardsContainer>
          <Card>
            <p>To Do</p>
            <p> 7</p>
            {/* { if(list.name.toLowerCase.replace(/\w/, (firstLetter) => (firstLetter.toUpperCase())) === 'To Do' || 'Doing' || 'Done'){ */}
            {/* {list.name === 'To Do'} */}
          </Card>
          <Card>
            <p>To Do</p>
            <p> 7</p>
            {/* { if(list.name.toLowerCase.replace(/\w/, (firstLetter) => (firstLetter.toUpperCase())) === 'To Do' || 'Doing' || 'Done'){ */}
            {/* {list.name === 'To Do'} */}
          </Card>
          <Card>
            <p>To Do</p>
            <p> 7</p>
            {/* { if(list.name.toLowerCase.replace(/\w/, (firstLetter) => (firstLetter.toUpperCase())) === 'To Do' || 'Doing' || 'Done'){ */}
            {/* {list.name === 'To Do'} */}
          </Card>
          <Card>
            <p>To Do</p>
            <p> 7</p>
            {/* { if(list.name.toLowerCase.replace(/\w/, (firstLetter) => (firstLetter.toUpperCase())) === 'To Do' || 'Doing' || 'Done'){ */}
            {/* {list.name === 'To Do'} */}
          </Card>
        </CardsContainer>
        <hr />
        <SubTitle>
          <strong>Your progress: </strong>
        </SubTitle>
        <hr />
        <SubTitle>
          You only need to complete <strong>{}</strong> to finish the project
          {/* {console.log('necesitas hacer un if para cuando llegue al 100%')} */}
        </SubTitle>
      </StyledInfo>
    </>
  );
};
