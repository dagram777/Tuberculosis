import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Male-Female Victim Ratio',
    },
  },
};

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Male',
      data: [700, 300, 100, 50, 1000, 900, 300, 400, 700, 300, 346, 289],
      backgroundColor: 'rgba(36, 225, 136, 0.8)',
    },
    {
      label: 'Female',
      data: [289, 346, 300, 700, 400, 300, 900, 1000, 50, 100, 300, 700],
      backgroundColor: 'rgba(10, 10, 10, 0.8)',
    },
  ],
};

export default function Barchart() {
  return <Bar options={options} data={data} />;
}
