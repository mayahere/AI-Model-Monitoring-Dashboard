import React, { useState, memo, Component } from 'react';
import { PlusIcon, CheckIcon, XIcon, ThumbsUpIcon, ThumbsDownIcon, ArrowUpIcon, ArrowDownIcon } from 'lucide-react';
export const PromptImprovement = () => {
  const [activeTab, setActiveTab] = useState('suggestions');
  return <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Prompt Improvement</h2>
        <button className="flex items-center px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
          <PlusIcon size={16} className="mr-1.5" />
          New Suggestion
        </button>
      </div>
      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8">
          <button onClick={() => setActiveTab('suggestions')} className={`py-3 px-1 border-b-2 font-medium text-sm ${activeTab === 'suggestions' ? 'border-red-600 text-red-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
            Suggestions
          </button>
          <button onClick={() => setActiveTab('implemented')} className={`py-3 px-1 border-b-2 font-medium text-sm ${activeTab === 'implemented' ? 'border-red-600 text-red-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
            Implemented
          </button>
          <button onClick={() => setActiveTab('rejected')} className={`py-3 px-1 border-b-2 font-medium text-sm ${activeTab === 'rejected' ? 'border-red-600 text-red-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
            Rejected
          </button>
        </nav>
      </div>
      {/* Content */}
      <div>
        {activeTab === 'suggestions' && <div className="space-y-4">
            {suggestions.map(suggestion => <SuggestionCard key={suggestion.id} suggestion={suggestion} showActions={true} />)}
          </div>}
        {activeTab === 'implemented' && <div className="space-y-4">
            {implementedSuggestions.map(suggestion => <SuggestionCard key={suggestion.id} suggestion={suggestion} showActions={false} />)}
          </div>}
        {activeTab === 'rejected' && <div className="space-y-4">
            {rejectedSuggestions.map(suggestion => <SuggestionCard key={suggestion.id} suggestion={suggestion} showActions={false} />)}
          </div>}
      </div>
      {/* Prompt Performance */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-800">
            Prompt Performance Metrics
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            Track improvements in prompt effectiveness over time.
          </p>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <PromptMetricCard title="Document Processing" current={97.2} previous={95.8} change={1.4} />
            <PromptMetricCard title="Fraud Detection" current={99.1} previous={98.7} change={0.4} />
            <PromptMetricCard title="Credit Memo Quality" current={96.8} previous={94.5} change={2.3} />
          </div>
          <div className="mt-8">
            <h4 className="text-md font-medium text-gray-700 mb-4">
              Recent Prompt Updates
            </h4>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="space-y-4">
                {promptUpdates.map((update, index) => <div key={index} className="bg-white p-4 rounded border border-gray-200">
                    <div className="flex justify-between items-start">
                      <div>
                        <h5 className="text-sm font-medium text-gray-800">
                          {update.title}
                        </h5>
                        <p className="mt-1 text-xs text-gray-600">
                          {update.date}
                        </p>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs ${update.impact === 'positive' ? 'bg-green-100 text-green-800' : update.impact === 'negative' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'}`}>
                        {update.impact === 'positive' ? 'Positive Impact' : update.impact === 'negative' ? 'Negative Impact' : 'Neutral Impact'}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-gray-600">
                      {update.description}
                    </p>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <ThumbsUpIcon size={14} className="text-gray-500 mr-1" />
                          <span className="text-xs text-gray-600">
                            {update.upvotes}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <ThumbsDownIcon size={14} className="text-gray-500 mr-1" />
                          <span className="text-xs text-gray-600">
                            {update.downvotes}
                          </span>
                        </div>
                      </div>
                      <button className="text-xs text-red-600 hover:text-red-800 font-medium">
                        View Details
                      </button>
                    </div>
                  </div>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
interface SuggestionCardProps {
  suggestion: {
    id: number;
    title: string;
    description: string;
    component: string;
    submittedBy: string;
    date: string;
    status?: string;
    impact?: string;
  };
  showActions: boolean;
}
const SuggestionCard = ({
  suggestion,
  showActions
}: SuggestionCardProps) => {
  return <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-medium text-gray-800">
          {suggestion.title}
        </h3>
        {suggestion.status && <span className={`px-2 py-1 rounded-full text-xs ${suggestion.status === 'Implemented' ? 'bg-green-100 text-green-800' : suggestion.status === 'Rejected' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'}`}>
            {suggestion.status}
          </span>}
      </div>
      <p className="mt-2 text-sm text-gray-600">{suggestion.description}</p>
      <div className="mt-4 flex items-center text-sm text-gray-500">
        <span className="mr-4">
          Component:{' '}
          <span className="font-medium text-gray-700">
            {suggestion.component}
          </span>
        </span>
        <span className="mr-4">
          Submitted by:{' '}
          <span className="font-medium text-gray-700">
            {suggestion.submittedBy}
          </span>
        </span>
        <span>
          Date:{' '}
          <span className="font-medium text-gray-700">{suggestion.date}</span>
        </span>
      </div>
      {suggestion.impact && <div className="mt-3 text-sm">
          <span className="text-gray-500">Impact: </span>
          <span className={suggestion.impact === 'High' ? 'text-green-600 font-medium' : suggestion.impact === 'Medium' ? 'text-yellow-600 font-medium' : 'text-blue-600 font-medium'}>
            {suggestion.impact}
          </span>
        </div>}
      {showActions && <div className="mt-6 flex space-x-3">
          <button className="flex-1 flex justify-center items-center px-4 py-2 bg-green-50 text-green-700 border border-green-200 rounded-md hover:bg-green-100">
            <CheckIcon size={16} className="mr-1.5" />
            Implement
          </button>
          <button className="flex-1 flex justify-center items-center px-4 py-2 bg-red-50 text-red-700 border border-red-200 rounded-md hover:bg-red-100">
            <XIcon size={16} className="mr-1.5" />
            Reject
          </button>
        </div>}
    </div>;
};
interface PromptMetricCardProps {
  title: string;
  current: number;
  previous: number;
  change: number;
}
const PromptMetricCard = ({
  title,
  current,
  previous,
  change
}: PromptMetricCardProps) => {
  return <div className="bg-gray-50 p-4 rounded-lg">
      <h4 className="text-sm font-medium text-gray-700">{title}</h4>
      <div className="mt-2 flex items-baseline">
        <span className="text-2xl font-bold text-gray-900">
          {current.toFixed(1)}%
        </span>
        <div className="ml-2 flex items-center">
          {change > 0 ? <ArrowUpIcon size={14} className="text-green-500" /> : <ArrowDownIcon size={14} className="text-red-500" />}
          <span className={`text-xs font-medium ${change > 0 ? 'text-green-600' : 'text-red-600'}`}>
            {change > 0 ? '+' : ''}
            {change.toFixed(1)}%
          </span>
        </div>
      </div>
      <div className="mt-1 text-xs text-gray-500">
        Previous: {previous.toFixed(1)}%
      </div>
    </div>;
};
// Sample data
const suggestions = [{
  id: 1,
  title: 'Improve Document Classification Prompts',
  description: 'Update prompts to better distinguish between bank statements and account summaries, which are currently being misclassified in approximately 3% of cases.',
  component: 'Document Processing',
  submittedBy: 'Emma Johnson',
  date: '2023-10-14',
  impact: 'High'
}, {
  id: 2,
  title: 'Enhance Fraud Detection Context',
  description: 'Add more context about industry-specific norms to fraud detection prompts to reduce false positives in manufacturing sector applications.',
  component: 'Fraud Detection',
  submittedBy: 'Michael Brown',
  date: '2023-10-13',
  impact: 'Medium'
}, {
  id: 3,
  title: 'Refine Credit Memo Structure',
  description: 'Update the prompt structure for credit memos to ensure more consistent formatting and inclusion of key risk factors in the executive summary.',
  component: 'Credit Memo Generation',
  submittedBy: 'Sarah Davis',
  date: '2023-10-12',
  impact: 'Medium'
}, {
  id: 4,
  title: 'Add Regional Context to Affordability Assessment',
  description: 'Include regional economic indicators in affordability assessment prompts to better account for geographic variations in cost of living and economic conditions.',
  component: 'Affordability Assessment',
  submittedBy: 'James Wilson',
  date: '2023-10-10',
  impact: 'Low'
}];
const implementedSuggestions = [{
  id: 101,
  title: 'Enhance Document Data Extraction Precision',
  description: 'Refined prompts to better extract numerical data from complex tables in financial statements, reducing extraction errors by 25%.',
  component: 'Document Processing',
  submittedBy: 'John Smith',
  date: '2023-10-08',
  status: 'Implemented',
  impact: 'High'
}, {
  id: 102,
  title: 'Improve Cross-Document Validation',
  description: 'Updated prompts to better cross-reference information across multiple documents, enhancing fraud detection capabilities.',
  component: 'Fraud Detection',
  submittedBy: 'Emma Johnson',
  date: '2023-10-05',
  status: 'Implemented',
  impact: 'Medium'
}];
const rejectedSuggestions = [{
  id: 201,
  title: 'Implement Sentiment Analysis for Customer Communications',
  description: 'Add sentiment analysis to evaluate customer communications for risk assessment. Rejected due to privacy concerns and limited validation of effectiveness.',
  component: 'Fraud Detection',
  submittedBy: 'Michael Brown',
  date: '2023-10-07',
  status: 'Rejected',
  impact: 'Low'
}];
const promptUpdates = [{
  title: 'Document Classification Enhancement',
  date: 'October 14, 2023',
  description: 'Updated document classification prompts to better distinguish between similar financial document types, resulting in a 2.1% improvement in classification accuracy.',
  impact: 'positive',
  upvotes: 12,
  downvotes: 1
}, {
  title: 'Fraud Detection Pattern Recognition',
  date: 'October 10, 2023',
  description: 'Enhanced fraud detection prompts with additional pattern recognition guidance for identifying synthetic identity patterns.',
  impact: 'positive',
  upvotes: 9,
  downvotes: 0
}, {
  title: 'Credit Memo Format Update',
  date: 'October 8, 2023',
  description: 'Restructured credit memo generation prompts to prioritize key risk factors in the executive summary section.',
  impact: 'neutral',
  upvotes: 5,
  downvotes: 2
}];