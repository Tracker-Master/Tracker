import React from 'react';
import { StyledProgress } from 'Styles/components/ProgressBarStyles';

const ProgressBar = () => {
  return (
    <StyledProgress>
      <progress max="100" value="69.56">
        69.56%
      </progress>
    </StyledProgress>
  );
};

export default ProgressBar;
