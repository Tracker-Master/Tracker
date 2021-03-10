import React, { useState, useEffect } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { palette } from 'Styles/GlobalStyles';

import { StyledProgress } from 'Styles/components/ProgressBarStyles';

export const ProgressBar = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  const Loader = () => {
    let results = [];

    for (let i = 0; i < 1; i++) {
      results.push(
        <StyledProgress key={i}>
          <Skeleton />
          <p>
            <Skeleton />
          </p>
        </StyledProgress>
      );
    }

    return (
      <SkeletonTheme
        color={`${palette.skeletonColor}`}
        highlightColor={`${palette.whiteColor}`}
      >
        <StyledProgress>{results}</StyledProgress>
      </SkeletonTheme>
    );
  };
  if (loading) {
    return Loader();
  } else {
    return (
      <StyledProgress>
        <progress max="100" value="69.56" />
        <p>69.56%</p>
      </StyledProgress>
    );
  }
};
