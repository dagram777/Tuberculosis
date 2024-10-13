import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Afar', 'Amhara', 'Oromiya', 'SNNPR', 'Tigray', 'Addis Ababa'],
  datasets: [
    {
      label: 'Number of victims',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(10, 10, 10, 0.8)',
        'rgba(36, 225, 136, 0.8)',
        'rgba(39, 245, 80, 0.8)',
        'rgba(36, 168, 136, 0.8)',
        'rgba(27, 70, 222, 0.8)',
        'rgba(135, 27, 222, 0.8)',
      ],
      borderColor: [
        'rgba(255, 255, 255, 0.8)',
        'rgba(255, 255, 255, 0.8)',
        'rgba(255, 255, 255, 0.8)',
        'rgba(255, 255, 255, 0.8)',
        'rgba(255, 255, 255, 0.8)',
        'rgba(255, 255, 255, 0.8)',
      ],
      borderWidth: 1,
    },
  ],
};

export default function Piechart() {
  return <Doughnut data={data} />
;
}
