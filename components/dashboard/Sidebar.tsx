import React from 'react';
import { Bot, Plus, MessageSquare, Settings, LogOut, User, LayoutDashboard } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();

  const recentChats = [
    { id: 1, title: 'React Component Help', date: 'Today' },
    { id: 2, title: 'Marketing Copy Ideas', date: 'Today' },
    { id: 3, title: 'Python Script Debugging', date: 'Yesterday' },
    { id: 4, title: 'Travel Itinerary Paris', date: 'Previous 7 Days' },
    { id: 5, title: 'Email Draft to Client', date: 'Previous 7 Days' },
  ];

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-20 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside 
        className={`fixed top-0 left-0 bottom-0 w-72 bg-slate-950 border-r border-slate-800 z-30 transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static flex flex-col ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="p-6 flex items-center gap-3">
          <div 
            className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-400 to-accent-500 flex items-center justify-center text-white shadow-lg shadow-brand-500/20 cursor-pointer"
            onClick={() => navigate('/')}
          >
            <Bot size={20} />
          </div>
          <span className="text-lg font-bold text-white">BotBuzz</span>
        </div>

        {/* New Chat Button */}
        <div className="px-4 mb-6">
          <button className="w-full flex items-center gap-3 bg-slate-900 hover:bg-slate-800 text-white px-4 py-3 rounded-xl border border-slate-800 transition-colors group">
            <div className="w-6 h-6 rounded-full bg-brand-500/20 flex items-center justify-center group-hover:bg-brand-500/30 transition-colors">
              <Plus size={16} className="text-brand-400" />
            </div>
            <span className="font-medium">New Chat</span>
          </button>
        </div>

        {/* Navigation / History */}
        <div className="flex-1 overflow-y-auto px-4 space-y-6 custom-scrollbar">
          <div>
            <h3 className="text-xs font-medium text-slate-500 px-2 mb-3 uppercase tracking-wider">Recent</h3>
            <div className="space-y-1">
              {recentChats.map((chat) => (
                <button 
                  key={chat.id}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                    chat.id === 1 
                      ? 'bg-slate-900 text-white border border-slate-800' 
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/50'
                  }`}
                >
                  <MessageSquare size={16} className={chat.id === 1 ? 'text-brand-400' : 'text-slate-500'} />
                  <span className="truncate">{chat.title}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
             <h3 className="text-xs font-medium text-slate-500 px-2 mb-3 uppercase tracking-wider">Menu</h3>
             <div className="space-y-1">
                <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-slate-400 hover:text-slate-200 hover:bg-slate-900/50 transition-colors">
                  <LayoutDashboard size={16} />
                  <span>Overview</span>
                </button>
                <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-slate-400 hover:text-slate-200 hover:bg-slate-900/50 transition-colors">
                  <Settings size={16} />
                  <span>Settings</span>
                </button>
             </div>
          </div>
        </div>

        {/* User Profile */}
        <div className="p-4 border-t border-slate-800">
          <div className="flex items-center justify-between p-2 rounded-xl hover:bg-slate-900 transition-colors cursor-pointer group">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-medium text-sm">
                JD
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-white">John Doe</span>
                <span className="text-xs text-slate-500">Pro Plan</span>
              </div>
            </div>
            <LogOut size={18} className="text-slate-500 group-hover:text-white transition-colors" onClick={() => navigate('/')} />
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;