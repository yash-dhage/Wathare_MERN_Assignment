import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
  labels: ['1 hr', '8 hr', '24 hr'],
  datasets: [
    {
      label: 'Cycle Status',
      backgroundColor: '#f87979',
      data: [1, 2, 3], // Replace these values with your actual cycle status data
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const CycleStatusChart = () => {
  return <Bar data={data} options={options} />;
};

export default CycleStatusChart;