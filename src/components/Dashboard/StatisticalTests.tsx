import React, { useState } from 'react';
import { FilterIcon, DownloadIcon, CheckIcon, XIcon, ChevronDownIcon } from 'lucide-react';
export const StatisticalTests = () => {
  const [activeTab, setActiveTab] = useState('qc-reviews');
  return <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Statistical Tests</h2>
        <div className="flex items-center space-x-3">
          <button className="flex items-center px-3 py-1.5 border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-50">
            <FilterIcon size={16} className="mr-1.5" />
            Filter
          </button>
          <button className="flex items-center px-3 py-1.5 border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-50">
            <DownloadIcon size={16} className="mr-1.5" />
            Export
          </button>
        </div>
      </div>
      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8">
          <button onClick={() => setActiveTab('qc-reviews')} className={`py-3 px-1 border-b-2 font-medium text-sm ${activeTab === 'qc-reviews' ? 'border-red-600 text-red-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
            QC Reviews
          </button>
          <button onClick={() => setActiveTab('random-sampling')} className={`py-3 px-1 border-b-2 font-medium text-sm ${activeTab === 'random-sampling' ? 'border-red-600 text-red-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
            Random Sampling
          </button>
          <button onClick={() => setActiveTab('test-results')} className={`py-3 px-1 border-b-2 font-medium text-sm ${activeTab === 'test-results' ? 'border-red-600 text-red-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
            Test Results
          </button>
        </nav>
      </div>
      {/* Content */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        {activeTab === 'qc-reviews' && <div>
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-800">
                Quality Control Reviews
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                100% of underwriter decisions are reviewed for quality control.
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Application ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Underwriter
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      AI Decision
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Final Decision
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Match
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {qcReviewData.map(item => <tr key={item.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {item.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {item.underwriter}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <span className={`px-2 py-1 rounded-full text-xs ${item.aiDecision === 'Approve' ? 'bg-green-100 text-green-800' : item.aiDecision === 'Reject' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'}`}>
                          {item.aiDecision}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <span className={`px-2 py-1 rounded-full text-xs ${item.finalDecision === 'Approve' ? 'bg-green-100 text-green-800' : item.finalDecision === 'Reject' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'}`}>
                          {item.finalDecision}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {item.match ? <CheckIcon size={18} className="text-green-500" /> : <XIcon size={18} className="text-red-500" />}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {item.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <button className="text-red-600 hover:text-red-800">
                          View Details
                        </button>
                      </td>
                    </tr>)}
                </tbody>
              </table>
            </div>
            <div className="px-6 py-4 bg-white border-t border-gray-200 flex items-center justify-between">
              <div className="flex items-center">
                <span className="text-sm text-gray-700">
                  Showing <span className="font-medium">1</span> to{' '}
                  <span className="font-medium">10</span> of{' '}
                  <span className="font-medium">45</span> results
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <button className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                  Previous
                </button>
                <button className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                  Next
                </button>
              </div>
            </div>
          </div>}
        {activeTab === 'random-sampling' && <div className="p-6">
            <h3 className="text-lg font-medium text-gray-800">
              Random Sampling
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              Random sampling configuration and results for statistical
              validation.
            </p>
            {/* Random sampling content would go here */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-4">
                <h4 className="text-md font-medium text-gray-700">
                  Sampling Configuration
                </h4>
                <div className="mt-4 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Sampling Rate</span>
                    <div className="flex items-center">
                      <input type="text" className="w-16 px-2 py-1 border border-gray-300 rounded text-sm text-right" defaultValue="15" />
                      <span className="ml-1 text-sm text-gray-600">%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">
                      Confidence Level
                    </span>
                    <div className="relative">
                      <select className="appearance-none w-32 px-3 py-1.5 border border-gray-300 rounded text-sm pr-8">
                        <option>95%</option>
                        <option>99%</option>
                        <option>90%</option>
                      </select>
                      <ChevronDownIcon size={16} className="absolute right-2 top-2 text-gray-500" />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">
                      Distribution Method
                    </span>
                    <div className="relative">
                      <select className="appearance-none w-32 px-3 py-1.5 border border-gray-300 rounded text-sm pr-8">
                        <option>Stratified</option>
                        <option>Random</option>
                        <option>Systematic</option>
                      </select>
                      <ChevronDownIcon size={16} className="absolute right-2 top-2 text-gray-500" />
                    </div>
                  </div>
                </div>
                <button className="mt-4 w-full py-2 bg-red-600 text-white rounded-md text-sm hover:bg-red-700">
                  Update Configuration
                </button>
              </div>
              <div className="border rounded-lg p-4">
                <h4 className="text-md font-medium text-gray-700">
                  Sampling Statistics
                </h4>
                <div className="mt-4 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">
                      Total Applications
                    </span>
                    <span className="text-sm font-semibold text-gray-800">
                      1,248
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">
                      Sampled Applications
                    </span>
                    <span className="text-sm font-semibold text-gray-800">
                      187
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">
                      Discrepancies Found
                    </span>
                    <span className="text-sm font-semibold text-gray-800">
                      12
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Accuracy Rate</span>
                    <span className="text-sm font-semibold text-green-600">
                      93.6%
                    </span>
                  </div>
                </div>
                <button className="mt-4 w-full py-2 border border-gray-300 text-gray-700 rounded-md text-sm hover:bg-gray-50">
                  View Detailed Report
                </button>
              </div>
            </div>
          </div>}
        {activeTab === 'test-results' && <div className="p-6">
            <h3 className="text-lg font-medium text-gray-800">Test Results</h3>
            <p className="mt-2 text-sm text-gray-500">
              Statistical test results across all model components.
            </p>
            {/* Test results content would go here */}
            <div className="mt-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="text-md font-medium text-gray-700 mb-4">
                  Recent Statistical Tests
                </h4>
                {testResults.map((test, index) => <div key={index} className="mb-6 last:mb-0">
                    <div className="flex justify-between items-center mb-2">
                      <h5 className="text-sm font-medium text-gray-800">
                        {test.name}
                      </h5>
                      <span className={`px-2 py-1 rounded-full text-xs ${test.status === 'Passed' ? 'bg-green-100 text-green-800' : test.status === 'Failed' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'}`}>
                        {test.status}
                      </span>
                    </div>
                    <div className="bg-white p-3 rounded border border-gray-200 text-sm text-gray-600">
                      <div className="flex justify-between mb-1">
                        <span>Test Type:</span>
                        <span className="font-medium text-gray-800">
                          {test.type}
                        </span>
                      </div>
                      <div className="flex justify-between mb-1">
                        <span>p-value:</span>
                        <span className="font-medium text-gray-800">
                          {test.pValue}
                        </span>
                      </div>
                      <div className="flex justify-between mb-1">
                        <span>Confidence Interval:</span>
                        <span className="font-medium text-gray-800">
                          {test.confidenceInterval}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Date:</span>
                        <span className="font-medium text-gray-800">
                          {test.date}
                        </span>
                      </div>
                    </div>
                  </div>)}
              </div>
            </div>
          </div>}
      </div>
    </div>;
};
// Sample data
const qcReviewData = [{
  id: 'APP-2023-1001',
  underwriter: 'John Smith',
  aiDecision: 'Approve',
  finalDecision: 'Approve',
  match: true,
  date: '2023-10-15'
}, {
  id: 'APP-2023-1002',
  underwriter: 'Emma Johnson',
  aiDecision: 'Review',
  finalDecision: 'Approve',
  match: false,
  date: '2023-10-15'
}, {
  id: 'APP-2023-1003',
  underwriter: 'Michael Brown',
  aiDecision: 'Reject',
  finalDecision: 'Reject',
  match: true,
  date: '2023-10-14'
}, {
  id: 'APP-2023-1004',
  underwriter: 'Sarah Davis',
  aiDecision: 'Approve',
  finalDecision: 'Approve',
  match: true,
  date: '2023-10-14'
}, {
  id: 'APP-2023-1005',
  underwriter: 'James Wilson',
  aiDecision: 'Review',
  finalDecision: 'Reject',
  match: false,
  date: '2023-10-13'
}, {
  id: 'APP-2023-1006',
  underwriter: 'John Smith',
  aiDecision: 'Approve',
  finalDecision: 'Approve',
  match: true,
  date: '2023-10-13'
}, {
  id: 'APP-2023-1007',
  underwriter: 'Emma Johnson',
  aiDecision: 'Reject',
  finalDecision: 'Reject',
  match: true,
  date: '2023-10-12'
}];
const testResults = [{
  name: 'Document Processing Accuracy Test',
  status: 'Passed',
  type: 'Chi-Square Test',
  pValue: '0.023',
  confidenceInterval: '92.3% - 98.1%',
  date: '2023-10-15'
}, {
  name: 'Fraud Detection Bias Test',
  status: 'Warning',
  type: 'T-Test',
  pValue: '0.056',
  confidenceInterval: '88.7% - 94.2%',
  date: '2023-10-14'
}, {
  name: 'Affordability Assessment Accuracy',
  status: 'Passed',
  type: 'F-Test',
  pValue: '0.008',
  confidenceInterval: '94.5% - 99.2%',
  date: '2023-10-13'
}];