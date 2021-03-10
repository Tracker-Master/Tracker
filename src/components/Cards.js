import React, { useState, useEffect, useContext, useMemo } from 'react';

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { palette } from 'Styles/GlobalStyles';

import { Context } from 'Context/BoardContext';
import { getCardsOfLists } from 'Services/getCardsOfList';

import {
  StyledCards,
  Container,
  CardLeft,
  CardInner,
  Card,
} from 'Styles/components/CardsStyles';

export const Cards = () => {
  const { list } = useContext(Context);
  // const [cardOfList, setCardOfList] = useState([]);
  const [loading, setLoading] = useState(true);

  // const listOfCards = () => {
  //   getCardsOfLists();
  // };
  // console.log(listOfCards);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  const Loader = () => {
    let results = [];
    for (let i = 0; i < 3; i++) {
      results.push(
        <Container key={i}>
          <CardLeft />
          <CardInner />
          <Card>
            <p>
              <Skeleton width={70} />
            </p>
            <p>
              <Skeleton width={20} />
            </p>
          </Card>
        </Container>
      );
    }
    return (
      <SkeletonTheme
        color={`${palette.skeletonColor}`}
        highlightColor={`${palette.whiteColor}`}
      >
        <StyledCards>{results}</StyledCards>
      </SkeletonTheme>
    );
  };
  if (loading) {
    return Loader();
  } else {
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
  }
};
