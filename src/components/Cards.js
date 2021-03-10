import React, { useState, useEffect, useContext, useMemo } from 'react';

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { palette } from 'Styles/GlobalStyles';

import { Context } from 'Context/BoardContext';
import { API_URL, API_KEY, API_TOKEN } from 'Services/Settings';
// import { getCardsOfLists } from 'Services/getCardsOfList';

import {
  StyledCards,
  Container,
  CardLeft,
  CardInner,
  Card,
} from 'Styles/components/CardsStyles';

export const Cards = () => {
  const { list } = useContext(Context);
  const [cardOfList, setCardOfList] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log(cardOfList);

  useEffect(async () => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);

    const getIdOfList = list.map(
      ({ id }) =>
        `${API_URL}/lists/${id}/cards?key=${API_KEY}&token=${API_TOKEN}`
    );
    const data = await Promise.allSettled(
      getIdOfList.map((url) =>
        fetch(url)
          .then((response) => response.json())
          .then((data) => data.length)
      )
    ).then((item) => setCardOfList(item));
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
        {/* {cardOfList.map((lengthOfList, index) => {
          return <p key={index}>{lengthOfList.value}</p>;
        })} */}
        {list.map((list) => (
          <Container key={list.id}>
            <CardLeft />
            <CardInner />
            <Card>
              <p>{list.name}</p>
              {cardOfList.map((lengthOfList, index) => {
                return <p key={index}>{lengthOfList.value}</p>;
              })}
            </Card>
          </Container>
        ))}
      </StyledCards>
    );
  }
};
