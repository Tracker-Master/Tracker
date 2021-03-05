import React from 'react';

import { StyledProgress } from 'Styles/components/ProgressBarStyles';

export const ProgressBar = () => {
  return (
    <StyledProgress>
      <progress max="100" value="69.56" />
      <p>69.56%</p>
    </StyledProgress>
  );
};
