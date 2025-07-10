import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const data = [{
  name: 'Day 1',
  docProcessing: 95.1,
  fraudDetection: 98.5,
  affordability: 93.2,
  creditMemo: 94.8
}, {
  name: 'Day 2',
  docProcessing: 95.3,
  fraudDetection: 98.7,
  affordability: 93.5,
  creditMemo: 95.1
}, {
  name: 'Day 3',
  docProcessing: 95.8,
  fraudDetection: 98.8,
  affordability: 93.8,
  creditMemo: 95.4
}, {
  name: 'Day 4',
  docProcessing: 96.2,
  fraudDetection: 98.9,
  affordability: 94.1,
  creditMemo: 95.8
}, {
  name: 'Day 5',
  docProcessing: 96.5,
  fraudDetection: 99.0,
  affordability: 94.5,
  creditMemo: 96.2
}, {
  name: 'Day 6',
  docProcessing: 96.9,
  fraudDetection: 99.1,
  affordability: 94.3,
  creditMemo: 96.5
}, {
  name: 'Day 7',
  docProcessing: 97.2,
  fraudDetection: 99.1,
  affordability: 94.5,
  creditMemo: 96.8
}];
export const PerformanceChart = () => {
  return <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data} margin={{
      top: 5,
      right: 30,
      left: 20,
      bottom: 5
    }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis domain={[93, 100]} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="docProcessing" name="Document Processing" stroke="#ef4444" activeDot={{
        r: 8
      }} />
        <Line type="monotone" dataKey="fraudDetection" name="Fraud Detection" stroke="#3b82f6" />
        <Line type="monotone" dataKey="affordability" name="Affordability" stroke="#eab308" />
        <Line type="monotone" dataKey="creditMemo" name="Credit Memo" stroke="#10b981" />
      </LineChart>
    </ResponsiveContainer>;
};