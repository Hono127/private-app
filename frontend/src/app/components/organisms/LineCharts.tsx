import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const LineCharts = () => {
  // ダミーデータ
  const weightData = [
    { date: '2024-01-01', weight: 70 },
    { date: '2024-01-02', weight: 69.5 },
    { date: '2024-01-03', weight: 69 },
  ];
  return (
    <div className='bg-gray-800 p-4 rounded-md mt-2 w-full h-64 sm:h-80 md:h-96 lg:h-128'>
      <ResponsiveContainer width='100%' height='100%'>
        <LineChart data={weightData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='date' stroke='#ffffff' />
          <YAxis stroke='#ffffff' />
          <Tooltip />
          <Legend />
          <Line type='monotone' dataKey='weight' stroke='#82ca9d' />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineCharts;
