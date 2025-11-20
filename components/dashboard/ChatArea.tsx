import React, { useState, useRef, useEffect } from 'react';
import { Send, Image as ImageIcon, Mic, Bot, MessageSquare, ShieldAlert, Component, Aperture, Leaf, Command, Menu } from 'lucide-react';

interface Message {
  id: number;
  role: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

interface ChatAreaProps {
  isSidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const ChatArea: React.FC<ChatAreaProps> = ({ isSidebarOpen, setSidebarOpen }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim()) return;

    const newUserMessage: Message = {
      id: messages.length + 1,
      role: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newUserMessage]);
    setInput('');

    // Mock AI Response
    setTimeout(() => {
      const newAiMessage: Message = {
        id: messages.length + 2,
        role: 'ai',
        content: "I'm simulating a response here. In the real application, this would be connected to the Gemini API.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, newAiMessage]);
    }, 1500);
  };

  const suggestionCards = [
    { icon: Component, text: 'Create a crossword puzzle for me', color: 'text-cyan-400' },
    { icon: Aperture, text: 'Plan a budget for my vacation', color: 'text-rose-400' },
    { icon: Leaf, text: 'Ethical implications of AI', color: 'text-lime-400' },
    { icon: Command, text: 'Calendar for the whole month', color: 'text-yellow-200' },
  ];

  return (
    <div className="flex-1 flex flex-col h-full relative bg-[#1E2230] lg:bg-[#23262d]">
      {/* Header */}
      <div className="flex items-center justify-between p-6 absolute top-0 left-0 right-0 z-10">
        <div className="lg:hidden">
            <button onClick={() => setSidebarOpen(true)} className="text-slate-400">
                <Menu size={24} />
            </button>
        </div>
        <div className="flex items-center gap-6 ml-auto">
            <button className="text-slate-400 hover:text-white transition-colors relative">
                <MessageSquare size={24} />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
            </button>
            <button className="text-slate-400 hover:text-white transition-colors relative">
                <ShieldAlert size={24} />
                <div className="absolute top-0 right-0 w-2 h-2 bg-indigo-500 rounded-full border-2 border-[#23262d]"></div>
            </button>
            <div className="w-10 h-10 rounded-xl overflow-hidden border-2 border-slate-700">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop" alt="User" className="w-full h-full object-cover" />
            </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        {messages.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center px-4">
            <div className="w-16 h-16 bg-[#D8DAF3] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/10">
                <Bot size={32} className="text-indigo-600" />
            </div>
            <h1 className="text-3xl font-medium text-white mb-16">Your Daily AI Assistant</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
                {suggestionCards.map((card, idx) => (
                    <button 
                        key={idx}
                        onClick={() => setInput(card.text)}
                        className="group p-6 rounded-xl border border-slate-700/50 bg-[#2A2D36] hover:bg-[#32353e] hover:border-slate-600 transition-all duration-300 text-left flex flex-col justify-between h-32"
                    >
                        <card.icon className={`w-8 h-8 ${card.color} mb-2`} />
                        <span className="text-slate-300 group-hover:text-white text-sm font-medium">{card.text}</span>
                    </button>
                ))}
            </div>
          </div>
        ) : (
          <div className="p-4 sm:p-6 space-y-8 pt-24 pb-32 max-w-4xl mx-auto">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500 ${msg.role === 'ai' ? 'items-start' : 'items-end flex-row-reverse'}`}
              >
                {msg.role === 'ai' && (
                   <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-violet-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Bot size={18} className="text-white" />
                   </div>
                )}
                
                <div className={`px-6 py-4 rounded-2xl max-w-[80%] ${
                  msg.role === 'ai' 
                    ? 'bg-[#2A2D36] text-slate-200 rounded-tl-sm' 
                    : 'bg-indigo-600 text-white rounded-br-sm shadow-lg shadow-indigo-500/20'
                }`}>
                  <p className="leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="p-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative group">
             <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl blur opacity-0 group-focus-within:opacity-100 transition-opacity duration-500"></div>
             <div className="relative bg-[#2F3239] rounded-2xl flex items-center p-2 border border-slate-700 focus-within:border-indigo-500/50 transition-colors">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Enter a prompt here"
                  className="flex-1 bg-transparent border-none text-slate-200 placeholder:text-slate-500 focus:ring-0 px-4 py-3"
                />
                <div className="flex items-center gap-2 pr-2">
                    <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors">
                        <ImageIcon size={20} />
                    </button>
                    <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors">
                        <Mic size={20} />
                    </button>
                    <button 
                        onClick={handleSend}
                        disabled={!input.trim()}
                        className="p-2 bg-[#383B42] text-slate-400 hover:text-white hover:bg-indigo-600 rounded-lg transition-all disabled:opacity-50 disabled:hover:bg-[#383B42]"
                    >
                        <Send size={20} />
                    </button>
                </div>
             </div>
          </div>
          <p className="text-center text-slate-500 text-xs mt-4">
            Free Research Preview. BotBuzz may produce inaccurate information about people, places, or facts. BotBuzz Version 2.0
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatArea;