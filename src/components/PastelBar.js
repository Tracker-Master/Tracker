import React, { useState, useEffect } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { palette } from 'Styles/GlobalStyles';

import { Doughnut } from 'react-chartjs-2';

const data = {
  labels: ['To Do', 'Doing', 'Done'],
  datasets: [
    {
      labels: ['52.17%', '30.43%', '17.39%'],
      data: [300, 60, 80],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    },
  ],
};

export const PastelBar = () => {
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
        <div key={i}>
          <Skeleton />
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Skeleton circle={true} height={130} width={130} />
          </div>
        </div>
      );
    }

    return (
      <SkeletonTheme
        color={`${palette.skeletonColor}`}
        highlightColor={`${palette.whiteColor}`}
      >
        {results}
      </SkeletonTheme>
    );
  };
  if (loading) {
    return Loader();
  } else {
    return <Doughnut data={data} />;
  }
};
