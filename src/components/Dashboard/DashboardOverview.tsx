import React from 'react';
import { CheckCircleIcon, AlertTriangleIcon, AlertCircleIcon, ActivityIcon, ArrowUpIcon, ArrowDownIcon } from 'lucide-react';
import { PerformanceChart } from '../Charts/PerformanceChart';
import { AccuracyChart } from '../Charts/AccuracyChart';
export const DashboardOverview = () => {
  return <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Dashboard Overview</h2>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">
            Last updated: Today, 10:45 AM
          </span>
          <button className="px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700">
            Refresh
          </button>
        </div>
      </div>
      {/* Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatusCard title="Models Online" value="4/5" status="success" icon={<CheckCircleIcon size={24} />} change={{
        value: '+1',
        isPositive: true
      }} />
        <StatusCard title="Alerts" value="3" status="warning" icon={<AlertTriangleIcon size={24} />} change={{
        value: '+2',
        isPositive: false
      }} />
        <StatusCard title="Critical Issues" value="0" status="success" icon={<AlertCircleIcon size={24} />} change={{
        value: '-1',
        isPositive: true
      }} />
        <StatusCard title="Avg. Response Time" value="236ms" status="info" icon={<ActivityIcon size={24} />} change={{
        value: '-12ms',
        isPositive: true
      }} />
      </div>
      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Model Performance
          </h3>
          <PerformanceChart />
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Accuracy Metrics
          </h3>
          <AccuracyChart />
        </div>
      </div>
      {/* Summary Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <SummaryCard title="Statistical Tests" items={[{
        label: 'QC Reviews Pending',
        value: '12'
      }, {
        label: 'Random Sampling Rate',
        value: '15%'
      }, {
        label: 'Tests Passed',
        value: '94%'
      }]} />
        <SummaryCard title="Model Monitoring" items={[{
        label: 'Document Processing',
        value: '97.2%'
      }, {
        label: 'Fraud Detection',
        value: '99.1%'
      }, {
        label: 'Affordability Assessment',
        value: '94.5%'
      }]} />
        <SummaryCard title="Prompt Improvement" items={[{
        label: 'Suggestions',
        value: '7'
      }, {
        label: 'Implemented',
        value: '3'
      }, {
        label: 'Under Review',
        value: '4'
      }]} />
      </div>
    </div>;
};
interface StatusCardProps {
  title: string;
  value: string;
  status: 'success' | 'warning' | 'error' | 'info';
  icon: React.ReactNode;
  change: {
    value: string;
    isPositive: boolean;
  };
}
const StatusCard = ({
  title,
  value,
  status,
  icon,
  change
}: StatusCardProps) => {
  const statusColors = {
    success: 'bg-green-50 text-green-600',
    warning: 'bg-yellow-50 text-yellow-600',
    error: 'bg-red-50 text-red-600',
    info: 'bg-blue-50 text-blue-600'
  };
  return <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-2 rounded-full ${statusColors[status]}`}>{icon}</div>
        <div className="flex items-center">
          {change.isPositive ? <ArrowUpIcon size={16} className="text-green-500 mr-1" /> : <ArrowDownIcon size={16} className="text-red-500 mr-1" />}
          <span className={change.isPositive ? 'text-green-500' : 'text-red-500'}>
            {change.value}
          </span>
        </div>
      </div>
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <p className="text-2xl font-bold text-gray-800 mt-1">{value}</p>
    </div>;
};
interface SummaryCardProps {
  title: string;
  items: {
    label: string;
    value: string;
  }[];
}
const SummaryCard = ({
  title,
  items
}: SummaryCardProps) => {
  return <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">{title}</h3>
      <div className="space-y-3">
        {items.map((item, index) => <div key={index} className="flex justify-between items-center">
            <span className="text-sm text-gray-600">{item.label}</span>
            <span className="text-sm font-semibold text-gray-800">
              {item.value}
            </span>
          </div>)}
      </div>
      <button className="mt-4 w-full py-2 px-4 border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-50 flex justify-center">
        View Details
      </button>
    </div>;
};