import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const data = [{
  name: 'Week 1',
  current: 94.5,
  previous: 93.1
}, {
  name: 'Week 2',
  current: 95.2,
  previous: 93.8
}, {
  name: 'Week 3',
  current: 96.1,
  previous: 94.5
}, {
  name: 'Week 4',
  current: 96.8,
  previous: 95.2
}];
export const AccuracyChart = () => {
  return <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{
      top: 5,
      right: 30,
      left: 20,
      bottom: 5
    }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis domain={[90, 100]} />
        <Tooltip />
        <Legend />
        <Bar dataKey="current" name="Current Period" fill="#ef4444" />
        <Bar dataKey="previous" name="Previous Period" fill="#9ca3af" />
      </BarChart>
    </ResponsiveContainer>;
};