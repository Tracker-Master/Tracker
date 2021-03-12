import React, { useState, useEffect, useContext } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import { Context } from 'Context/BoardContext';

import { SEOHeader } from 'Components/SEOHeader';
import { Members } from 'Components/Members';
import { Cards } from 'Components/Cards';
import { ProgressBar } from 'Components/ProgressBar';
import { PastelBar } from 'Components/PastelBar';
import { FooterActions } from 'Components/FooterActions';

import { StyledInfo, Title, SubTitle } from 'Styles/pages/BoardInfoStyles';
import { palette } from 'Styles/GlobalStyles';

export const BoardInfo = () => {
  const { board, card } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 250);
  }, []);

  const Loader = () => {
    return (
      <SkeletonTheme
        color={`${palette.skeletonColor}`}
        highlightColor={`${palette.whiteColor}`}
      >
        <StyledInfo>
          <Title>
            Members of <Skeleton width={60} /> :
          </Title>
          <hr />
          <SubTitle>
            In total, your project has{' '}
            <strong className="stronger">
              <Skeleton width={30} />
            </strong>{' '}
            cards
          </SubTitle>
          <hr />
          <SubTitle>Number of cards you have in each list: </SubTitle>

          <hr />
          <SubTitle>
            <strong>Your progress: </strong>
          </SubTitle>
          <hr />

          <hr />
          <SubTitle>
            You only need to complete{' '}
            <strong className="stronger">
              <Skeleton width={30}>%</Skeleton>
            </strong>{' '}
            to finish the project
          </SubTitle>
          <hr />
          <FooterActions />
        </StyledInfo>
      </SkeletonTheme>
    );
  };
  if (loading) {
    return Loader();
  } else {
    return (
      <>
        <SEOHeader title={`${board?.name}`} />
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
          <Cards />
          <hr />
          <SubTitle>
            <strong>Your progress: </strong>
          </SubTitle>
          <ProgressBar />
          <hr />
          <PastelBar />
          <hr />
          <SubTitle>
            You only need to complete <strong className="stronger">{}%</strong>{' '}
            to finish the project
          </SubTitle>
          <hr />
          <FooterActions />
        </StyledInfo>
      </>
    );
  }
};
