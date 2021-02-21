import React from 'react';

import { palette } from 'Routes/GlobalStyles';

export const NotFound = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: `${palette.firstColor}`,
      }}
    >
      <h1>Error</h1>
    </div>
  );
};
