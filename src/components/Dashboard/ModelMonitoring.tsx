import React, { useState, memo, Component } from 'react';
import { CalendarIcon, RefreshCwIcon, AlertTriangleIcon, InfoIcon, ArrowRightIcon } from 'lucide-react';
export const ModelMonitoring = () => {
  const [timeRange, setTimeRange] = useState('7d');
  return <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Model Monitoring</h2>
        <div className="flex items-center space-x-3">
          <div className="flex border border-gray-300 rounded-md overflow-hidden">
            <button onClick={() => setTimeRange('24h')} className={`px-3 py-1.5 text-sm ${timeRange === '24h' ? 'bg-red-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}>
              24h
            </button>
            <button onClick={() => setTimeRange('7d')} className={`px-3 py-1.5 text-sm ${timeRange === '7d' ? 'bg-red-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}>
              7d
            </button>
            <button onClick={() => setTimeRange('30d')} className={`px-3 py-1.5 text-sm ${timeRange === '30d' ? 'bg-red-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}>
              30d
            </button>
            <button onClick={() => setTimeRange('custom')} className={`px-3 py-1.5 text-sm flex items-center ${timeRange === 'custom' ? 'bg-red-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}>
              <CalendarIcon size={14} className="mr-1" />
              Custom
            </button>
          </div>
          <button className="flex items-center px-3 py-1.5 bg-white border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">
            <RefreshCwIcon size={14} className="mr-1.5" />
            Refresh
          </button>
        </div>
      </div>
      {/* Model Components */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {modelComponents.map(component => <ModelComponentCard key={component.id} name={component.name} status={component.status} accuracy={component.accuracy} trend={component.trend} alerts={component.alerts} />)}
      </div>
      {/* Performance Metrics */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-800">
            Performance Metrics
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            Key performance indicators across all model components.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Metric
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Document Processing
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Fraud Detection
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Affordability Assessment
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Credit Memo Generation
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {performanceMetrics.map(metric => <tr key={metric.name} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    <div className="flex items-center">
                      {metric.name}
                      {metric.hasInfo && <InfoIcon size={14} className="ml-1 text-gray-400" />}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <MetricValue value={metric.docProcessing} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <MetricValue value={metric.fraudDetection} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <MetricValue value={metric.affordabilityAssessment} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <MetricValue value={metric.creditMemo} />
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </div>
      {/* Alerts */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <div>
            <h3 className="text-lg font-medium text-gray-800">Recent Alerts</h3>
            <p className="mt-1 text-sm text-gray-500">
              System-generated alerts for potential issues.
            </p>
          </div>
          <button className="text-sm text-red-600 hover:text-red-800 font-medium">
            View All Alerts
          </button>
        </div>
        <div className="divide-y divide-gray-200">
          {alerts.map(alert => <div key={alert.id} className="p-4 hover:bg-gray-50">
              <div className="flex items-start">
                <div className={`p-1.5 rounded-full mr-3 ${alert.severity === 'high' ? 'bg-red-100 text-red-600' : alert.severity === 'medium' ? 'bg-yellow-100 text-yellow-600' : 'bg-blue-100 text-blue-600'}`}>
                  <AlertTriangleIcon size={16} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-medium text-gray-900">
                      {alert.title}
                    </h4>
                    <span className="text-xs text-gray-500">{alert.time}</span>
                  </div>
                  <p className="mt-1 text-sm text-gray-600">
                    {alert.description}
                  </p>
                  <div className="mt-2 flex items-center">
                    <span className="text-xs font-medium text-gray-500 mr-2">
                      {alert.component}
                    </span>
                    <button className="text-xs text-red-600 hover:text-red-800 font-medium flex items-center">
                      Investigate
                      <ArrowRightIcon size={12} className="ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </div>;
};
interface ModelComponentCardProps {
  name: string;
  status: 'healthy' | 'warning' | 'critical';
  accuracy: number;
  trend: 'up' | 'down' | 'stable';
  alerts: number;
}
const ModelComponentCard = ({
  name,
  status,
  accuracy,
  trend,
  alerts
}: ModelComponentCardProps) => {
  const statusColors = {
    healthy: 'bg-green-500',
    warning: 'bg-yellow-500',
    critical: 'bg-red-500'
  };
  const trendColors = {
    up: 'text-green-500',
    down: 'text-red-500',
    stable: 'text-gray-500'
  };
  return <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-gray-800">{name}</h3>
        <div className="flex items-center">
          <div className={`h-2 w-2 rounded-full ${statusColors[status]} mr-1.5`}></div>
          <span className="text-xs text-gray-500 capitalize">{status}</span>
        </div>
      </div>
      <div className="flex items-baseline">
        <span className="text-3xl font-bold text-gray-900">{accuracy}%</span>
        <span className={`ml-2 text-sm ${trendColors[trend]}`}>
          {trend === 'up' && '+1.2%'}
          {trend === 'down' && '-0.8%'}
          {trend === 'stable' && '0.0%'}
        </span>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <div className="flex items-center">
          <AlertTriangleIcon size={14} className="text-yellow-500 mr-1" />
          <span className="text-xs text-gray-600">{alerts} alerts</span>
        </div>
        <button className="text-xs text-red-600 hover:text-red-800 font-medium">
          View Details
        </button>
      </div>
    </div>;
};
const MetricValue = ({
  value
}: {
  value: {
    value: string;
    change?: string;
    isPositive?: boolean;
  };
}) => {
  return <div>
      <span className="font-medium">{value.value}</span>
      {value.change && <span className={`ml-2 text-xs ${value.isPositive ? 'text-green-500' : 'text-red-500'}`}>
          {value.isPositive ? '+' : ''}
          {value.change}
        </span>}
    </div>;
};
// Sample data
const modelComponents = [{
  id: 1,
  name: 'Document Processing',
  status: 'healthy' as const,
  accuracy: 97.2,
  trend: 'up' as const,
  alerts: 0
}, {
  id: 2,
  name: 'Fraud Detection',
  status: 'healthy' as const,
  accuracy: 99.1,
  trend: 'stable' as const,
  alerts: 0
}, {
  id: 3,
  name: 'Affordability Assessment',
  status: 'warning' as const,
  accuracy: 94.5,
  trend: 'down' as const,
  alerts: 2
}, {
  id: 4,
  name: 'Credit Memo Generation',
  status: 'healthy' as const,
  accuracy: 96.8,
  trend: 'up' as const,
  alerts: 1
}];
const performanceMetrics = [{
  name: 'Accuracy',
  hasInfo: true,
  docProcessing: {
    value: '97.2%',
    change: '1.2%',
    isPositive: true
  },
  fraudDetection: {
    value: '99.1%',
    change: '0.3%',
    isPositive: true
  },
  affordabilityAssessment: {
    value: '94.5%',
    change: '0.8%',
    isPositive: false
  },
  creditMemo: {
    value: '96.8%',
    change: '0.5%',
    isPositive: true
  }
}, {
  name: 'Precision',
  hasInfo: true,
  docProcessing: {
    value: '96.8%'
  },
  fraudDetection: {
    value: '98.7%'
  },
  affordabilityAssessment: {
    value: '93.9%'
  },
  creditMemo: {
    value: '95.4%'
  }
}, {
  name: 'Recall',
  hasInfo: true,
  docProcessing: {
    value: '95.3%'
  },
  fraudDetection: {
    value: '97.5%'
  },
  affordabilityAssessment: {
    value: '92.8%'
  },
  creditMemo: {
    value: '94.7%'
  }
}, {
  name: 'F1 Score',
  hasInfo: true,
  docProcessing: {
    value: '96.0%'
  },
  fraudDetection: {
    value: '98.1%'
  },
  affordabilityAssessment: {
    value: '93.3%'
  },
  creditMemo: {
    value: '95.0%'
  }
}, {
  name: 'Response Time',
  hasInfo: false,
  docProcessing: {
    value: '215ms',
    change: '10ms',
    isPositive: true
  },
  fraudDetection: {
    value: '180ms',
    change: '5ms',
    isPositive: true
  },
  affordabilityAssessment: {
    value: '320ms',
    change: '15ms',
    isPositive: false
  },
  creditMemo: {
    value: '450ms',
    change: '20ms',
    isPositive: true
  }
}];
const alerts = [{
  id: 1,
  title: 'Affordability Assessment Accuracy Drop',
  description: 'The accuracy of affordability assessments has dropped below the 95% threshold in the last 24 hours.',
  severity: 'medium' as const,
  component: 'Affordability Assessment',
  time: '35 min ago'
}, {
  id: 2,
  title: 'Response Time Increase',
  description: 'Average response time for affordability assessments increased by 15ms over the last 6 hours.',
  severity: 'low' as const,
  component: 'Affordability Assessment',
  time: '2 hours ago'
}, {
  id: 3,
  title: 'Credit Memo Generation Alert',
  description: 'Anomalous pattern detected in credit memo generation for high-value commercial loans.',
  severity: 'medium' as const,
  component: 'Credit Memo Generation',
  time: '4 hours ago'
}];