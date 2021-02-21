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
        width: '100%',
      }}
    >
      <h1>Error</h1>
    </div>
  );
};
