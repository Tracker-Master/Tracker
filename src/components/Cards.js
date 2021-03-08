import React, { useContext } from 'react';

import { Context } from 'Context/BoardContext';
import { getCardsOfLists } from 'Services/getCardsOfList';

// import { Card } from 'Components/Card';

import {
  StyledCards,
  Container,
  CardLeft,
  CardInner,
  Card,
} from 'Styles/components/CardsStyles';

export const Cards = () => {
  const { list } = useContext(Context);
  getCardsOfLists();

  return (
    <StyledCards>
      {list.map((list) => (
        <Container key={list.id}>
          <CardLeft />
          <CardInner />
          <Card>
            <p>{list.name}</p>
            <p>7</p>
          </Card>
        </Container>
      ))}
    </StyledCards>
  );
};
