import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  tension:0.3,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'TB-Victims Time Series Analysis',
    },
  },
};

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Nov', 'Dec'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Normal',
      data: [50, 300, 100, 50, 500, 300, 300, 400, 700, 300, 346, 289],
      borderColor: 'rgba(36, 225, 136, 0.8)',
      backgroundColor: 'rgba(10, 10, 10, 0.8)',
    },
    {
      label: 'Tuberculosis',
      data: [100, 400, 400, 50, 400, 100, 300, 400, 700, 300, 346, 289],
      borderColor: 'rgba(10, 10, 10, 0.8)',
      backgroundColor: 'rgba(36, 225, 136, 0.8)',
    }
   
  ],
};

export default function Linegraph() {
  return <Line options={options} data={data} />;
}

