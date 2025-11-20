import React, { useState } from 'react';
import Sidebar from './Sidebar';
import ChatArea from './ChatArea';

const Dashboard: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-slate-950 text-slate-50 overflow-hidden">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <ChatArea isSidebarOpen={isSidebarOpen} setSidebarOpen={setIsSidebarOpen} />
    </div>
  );
};

export default Dashboard;