import React, { useState } from 'react';
import { Sidebar } from './components/Layout/Sidebar';
import { Header } from './components/Layout/Header';
import { DashboardOverview } from './components/Dashboard/DashboardOverview';
import { ModelMonitoring } from './components/Dashboard/ModelMonitoring';
import { StatisticalTests } from './components/Dashboard/StatisticalTests';
import { PromptImprovement } from './components/Dashboard/PromptImprovement';
export function App() {
  const [currentView, setCurrentView] = useState('dashboard');
  const renderContent = () => {
    switch (currentView) {
      case 'dashboard':
        return <DashboardOverview />;
      case 'statistical-tests':
        return <StatisticalTests />;
      case 'model-monitoring':
        return <ModelMonitoring />;
      case 'prompt-improvement':
        return <PromptImprovement />;
      default:
        return <DashboardOverview />;
    }
  };
  return <div className="flex h-screen bg-gray-50">
      <Sidebar currentView={currentView} setCurrentView={setCurrentView} />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {renderContent()}
        </main>
      </div>
    </div>;
}