import React, { useState, useEffect, useContext } from 'react';

import SEOHeader from 'Components/SEOHeader';
import Members from 'Components/Members';
import ProgressBar from 'Components/ProgressBar';
import { Context } from 'Context/BoardContext';
import { PastelBar } from 'Components/PastelBar';
import { FooterActions } from 'Components/FooterActions';

import {
  StyledInfo,
  Title,
  SubTitle,
  CardsContainer,
  Card,
} from 'Styles/pages/BoardInfoStyles';

export const BoardInfo = () => {
  const { board, card } = useContext(Context);

  return (
    <>
      <SEOHeader title={`🔱 ${board?.name}`} />
      <StyledInfo>
        <Title>Members of {board?.name}: </Title>
        <Members />
        <hr />
        <SubTitle>
          In total, your project has{' '}
          <strong className="stronger">{card.length}</strong> cards
        </SubTitle>
        <hr />
        <SubTitle>Number of cards you have in each list: </SubTitle>
        <CardsContainer>
          <Card>
            <p>To Do</p>
            <p> 7</p>
          </Card>
          <Card>
            <p>To Do</p>
            <p> 7</p>
          </Card>
          <Card>
            <p>To Do</p>
            <p> 7</p>
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
        <ProgressBar />
        <hr />
        <PastelBar />
        <hr />
        <SubTitle>
          You only need to complete <strong className="stronger">{}%</strong> to
          finish the project
        </SubTitle>
        <hr />
        <FooterActions />
        {/* {console.log('necesitas hacer un if para cuando llegue al 100%')} */}
        {/* {filter.map((item) => (
          <p>{item.id}</p>
        ))} */}
      </StyledInfo>
    </>
  );
};
