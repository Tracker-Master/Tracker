import React, { useEffect, useContext } from 'react';

import { SEOHeader } from 'Components/SEOHeader';
import { Members } from 'Components/Members';
import { ProgressBar } from 'Components/ProgressBar';
import { Context } from 'Context/BoardContext';
import { PastelBar } from 'Components/PastelBar';

import {
  StyledInfo,
  Title,
  SubTitle,
  CardsContainer,
  Card,
} from 'Styles/pages/BoardInfoStyles';

const TODO_DOING_DONE = [
  'To Do',
  'Things To Do',
  'Pendientes',
  'Doing',
  'En Curso',
  'Done',
  'Finalizados',
];

export const BoardInfo = () => {
  const { board, card, list } = useContext(Context);

  useEffect(() => {
    const filter = list.filter((singleList) => {
      const capitalizeListTitle = singleList.name
        .trim()
        .toLowerCase()
        .replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()));
      return TODO_DOING_DONE.includes(capitalizeListTitle);
    });
    console.log(filter);
  }, []);

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
        <SubTitle>
          You only need to complete <strong className="stronger">{}%</strong> to
          finish the project
          {/* {console.log('necesitas hacer un if para cuando llegue al 100%')} */}
          {/* {filter.map((item) => (
            <p>{item.id}</p>
          ))} */}
        </SubTitle>
      </StyledInfo>
    </>
  );
};
