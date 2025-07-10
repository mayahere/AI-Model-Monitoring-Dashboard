import React from 'react';
import { LayoutDashboardIcon, TestTubeIcon, LineChartIcon, WrenchIcon, UsersIcon, AlertCircleIcon, SettingsIcon, LogOutIcon } from 'lucide-react';
interface SidebarProps {
  currentView: string;
  setCurrentView: (view: string) => void;
}
export const Sidebar = ({
  currentView,
  setCurrentView
}: SidebarProps) => {
  const menuItems = [{
    id: 'dashboard',
    label: 'Dashboard',
    icon: <LayoutDashboardIcon size={20} />
  }, {
    id: 'statistical-tests',
    label: 'Statistical Tests',
    icon: <TestTubeIcon size={20} />
  }, {
    id: 'model-monitoring',
    label: 'Model Monitoring',
    icon: <LineChartIcon size={20} />
  }, {
    id: 'prompt-improvement',
    label: 'Prompt Improvement',
    icon: <WrenchIcon size={20} />
  }, {
    id: 'users',
    label: 'User Management',
    icon: <UsersIcon size={20} />
  }, {
    id: 'alerts',
    label: 'Alerts',
    icon: <AlertCircleIcon size={20} />
  }, {
    id: 'settings',
    label: 'Settings',
    icon: <SettingsIcon size={20} />
  }];
  return <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center">
          <div className="h-8 w-8 bg-red-600 rounded-md flex items-center justify-center text-white font-bold mr-3">
            H
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-800">HSBC AI</h2>
            <p className="text-xs text-gray-500">Model Monitoring</p>
          </div>
        </div>
      </div>
      <nav className="flex-1 pt-4">
        <ul>
          {menuItems.map(item => <li key={item.id}>
              <button onClick={() => setCurrentView(item.id)} className={`flex items-center w-full px-4 py-3 text-left ${currentView === item.id ? 'bg-red-50 text-red-700 border-r-4 border-red-600' : 'text-gray-700 hover:bg-gray-100'}`}>
                <span className="mr-3">{item.icon}</span>
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            </li>)}
        </ul>
      </nav>
      <div className="p-4 border-t border-gray-200">
        <button className="flex items-center text-gray-700 hover:text-red-600 w-full">
          <LogOutIcon size={20} className="mr-3" />
          <span className="text-sm font-medium">Log Out</span>
        </button>
      </div>
    </div>;
};