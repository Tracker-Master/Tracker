import React from 'react';
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

function App() {
  return (
    <div>
      <Doughnut data={data} />
    </div>
  );
}
export default App;
