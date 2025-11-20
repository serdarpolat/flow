import React, { useState } from 'react';
import Sidebar from './Sidebar';
import ChatArea from './ChatArea';
import { ChevronRight } from 'lucide-react';

const Dashboard: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-[#23262d] text-slate-50 overflow-hidden relative">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      
      {/* Desktop Sidebar Toggle (Visual only based on design) */}
      <div className="hidden lg:flex absolute left-72 top-8 z-40 transform -translate-x-1/2">
        <button className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-slate-900 shadow-lg border border-slate-200 hover:scale-110 transition-transform">
            <ChevronRight size={14} />
        </button>
      </div>

      <ChatArea isSidebarOpen={isSidebarOpen} setSidebarOpen={setIsSidebarOpen} />
    </div>
  );
};

export default Dashboard;