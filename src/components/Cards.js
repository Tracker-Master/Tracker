import React, { useContext } from 'react';

import { Context } from 'Context/BoardContext';

import {
  StyledCards,
  Container,
  CardLeft,
  CardInner,
  Card,
} from 'Styles/components/CardsStyles';

export const Cards = () => {
  const { card } = useContext(Context);
  return (
    <StyledCards>
      <Container>
        <CardLeft />
        <CardInner />
        <Card>
          <p>To do</p>
          <p>7</p>
        </Card>
      </Container>
    </StyledCards>
  );
};
