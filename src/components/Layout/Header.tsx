import React from 'react';
import { BellIcon, SearchIcon, UserIcon } from 'lucide-react';
export const Header = () => {
  return <header className="bg-white border-b border-gray-200 py-4 px-6 flex items-center justify-between">
      <div className="flex items-center">
        <h1 className="text-xl font-semibold text-gray-800">
          AI Model Monitoring
        </h1>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input type="text" placeholder="Search..." className="pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent" />
          <SearchIcon size={18} className="absolute left-3 top-2.5 text-gray-400" />
        </div>
        <button className="relative p-2 text-gray-600 hover:text-red-600">
          <BellIcon size={20} />
          <span className="absolute top-1 right-1 h-4 w-4 bg-red-600 rounded-full flex items-center justify-center text-xs text-white">
            3
          </span>
        </button>
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center">
            <UserIcon size={18} className="text-gray-600" />
          </div>
          <span className="text-sm font-medium text-gray-700">Admin User</span>
        </div>
      </div>
    </header>;
};