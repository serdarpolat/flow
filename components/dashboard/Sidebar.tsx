import React, { useState } from 'react';
import { Bot, MessageSquare, FileText, Users, Settings, ChevronDown, ChevronRight, Sparkles, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();
  const [historyOpen, setHistoryOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(true);

  const navItems = [
    { icon: MessageSquare, label: 'Chat', active: true },
    { 
      icon: FileText, 
      label: 'Chat History', 
      hasSubmenu: true, 
      isOpen: historyOpen, 
      onToggle: () => setHistoryOpen(!historyOpen) 
    },
    { icon: Users, label: 'AI Personalities' },
    { 
      icon: Settings, 
      label: 'Settings', 
      hasSubmenu: true, 
      isOpen: settingsOpen, 
      onToggle: () => setSettingsOpen(!settingsOpen) 
    },
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
        className={`fixed top-0 left-0 bottom-0 w-72 bg-[#1E2230] border-r border-slate-800 z-30 transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static flex flex-col ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="p-6 flex items-center gap-3 mb-2">
          <div 
            className="w-10 h-10 rounded-xl bg-[#D8DAF3] flex items-center justify-center text-brand-600 cursor-pointer"
            onClick={() => navigate('/')}
          >
            <Bot size={24} />
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto px-4 space-y-2 custom-scrollbar">
          {navItems.map((item, index) => (
            <div key={index}>
              <button 
                onClick={item.onToggle}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all ${
                  item.active 
                    ? 'bg-gradient-to-r from-indigo-400 to-violet-500 text-white shadow-lg shadow-indigo-500/20' 
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <item.icon size={20} />
                  <span className="font-medium">{item.label}</span>
                </div>
                {item.hasSubmenu && (
                  item.isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />
                )}
              </button>

              {/* Submenu for Settings */}
              {item.label === 'Settings' && item.isOpen && (
                <div className="ml-4 pl-4 border-l border-slate-700 my-2 space-y-2">
                  {['Tone', 'Language', 'Formality Level'].map((subItem) => (
                    <button key={subItem} className="block w-full text-left text-sm text-slate-500 hover:text-slate-300 py-1 transition-colors">
                      {subItem}
                    </button>
                  ))}
                </div>
              )}
              
              {/* Submenu for History */}
              {item.label === 'Chat History' && item.isOpen && (
                <div className="ml-4 pl-4 border-l border-slate-700 my-2 space-y-2">
                  {['React Help', 'Marketing Copy'].map((subItem) => (
                    <button key={subItem} className="block w-full text-left text-sm text-slate-500 hover:text-slate-300 py-1 transition-colors">
                      {subItem}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Upgrade Card */}
        <div className="p-4">
          <div className="rounded-3xl bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] p-6 text-white relative overflow-hidden">
            {/* Background shapes */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
            
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-lg">
               <Sparkles className="text-[#6366F1]" size={24} />
            </div>
            
            <h3 className="text-lg font-bold mb-2">Upgrade to Pro</h3>
            <p className="text-indigo-100 text-sm mb-6 leading-relaxed">
              Unlock powerful features with our pro upgrade today!
            </p>
            
            <button className="w-full bg-white text-[#6366F1] py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 hover:bg-indigo-50 transition-colors">
              Upgrade now <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;