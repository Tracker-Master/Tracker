import React from 'react';

import { ContainerProgress } from 'Styles/components/ProgressBarStyles';

export const ProgressBar = () => {
  return (
    <ContainerProgress>
      <progress max="100" value="69.56">
        69.56%
      </progress>
    </ContainerProgress>
  );
};
