import React, { useState, useRef, useEffect } from 'react';
import { Send, Paperclip, Bot, User, Sparkles, Copy, ThumbsUp, ThumbsDown, MoreVertical } from 'lucide-react';

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
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: 'ai',
      content: "Hello! I'm BotBuzz, your advanced AI assistant. I can help you with coding, writing, analysis, and much more. How can I help you today?",
      timestamp: new Date(Date.now() - 1000 * 60 * 5)
    }
  ]);
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
        content: "I'm simulating a response here. In the real application, this would be connected to the Gemini API to provide intelligent answers based on your query.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, newAiMessage]);
    }, 1500);
  };

  return (
    <div className="flex-1 flex flex-col h-full relative bg-slate-950">
      {/* Mobile Header */}
      <div className="lg:hidden flex items-center p-4 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md sticky top-0 z-10">
        <button 
          onClick={() => setSidebarOpen(true)}
          className="p-2 -ml-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
        <span className="ml-3 font-semibold text-white">BotBuzz</span>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-8">
        {messages.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-center p-8 opacity-0 animate-in fade-in duration-700">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-brand-400 to-accent-500 flex items-center justify-center mb-6 shadow-xl shadow-brand-500/20">
              <Bot size={32} className="text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">How can I help you today?</h2>
            <p className="text-slate-400 max-w-md mb-8">
              Ask me anything from writing code to explaining complex topics.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-2xl">
              {['Explain quantum computing', 'Write a React component', 'Debug my Python script', 'Compose an email'].map((suggestion, idx) => (
                <button 
                  key={idx}
                  className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-brand-500/50 hover:bg-slate-900 text-left text-slate-300 hover:text-white transition-all"
                  onClick={() => setInput(suggestion)}
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <>
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex gap-4 max-w-3xl mx-auto animate-in slide-in-from-bottom-2 duration-300 ${msg.role === 'ai' ? 'items-start' : 'items-end flex-row-reverse'}`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 shadow-lg ${
                  msg.role === 'ai' 
                    ? 'bg-gradient-to-br from-brand-500 to-accent-600 text-white' 
                    : 'bg-slate-700 text-slate-300'
                }`}>
                  {msg.role === 'ai' ? <Bot size={18} /> : <User size={18} />}
                </div>

                <div className={`group relative px-5 py-3.5 rounded-2xl shadow-md max-w-[85%] sm:max-w-[75%] ${
                  msg.role === 'ai' 
                    ? 'bg-slate-900 border border-slate-800 text-slate-200 rounded-tl-none' 
                    : 'bg-brand-600 text-white rounded-tr-none'
                }`}>
                  <p className="leading-relaxed whitespace-pre-wrap text-sm sm:text-base">{msg.content}</p>
                  
                  {msg.role === 'ai' && (
                    <div className="mt-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity pt-2 border-t border-slate-800/50">
                      <button className="p-1.5 rounded hover:bg-slate-800 text-slate-400 hover:text-white" title="Copy">
                        <Copy size={14} />
                      </button>
                      <button className="p-1.5 rounded hover:bg-slate-800 text-slate-400 hover:text-white" title="Good response">
                        <ThumbsUp size={14} />
                      </button>
                      <button className="p-1.5 rounded hover:bg-slate-800 text-slate-400 hover:text-white" title="Bad response">
                        <ThumbsDown size={14} />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </>
        )}
      </div>

      {/* Input Area */}
      <div className="p-4 sm:p-6 bg-slate-950 border-t border-slate-900">
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSend} className="relative flex items-end gap-2 bg-slate-900/50 border border-slate-800 rounded-2xl p-2 shadow-lg focus-within:border-brand-500/50 focus-within:ring-1 focus-within:ring-brand-500/20 transition-all">
            <button 
              type="button"
              className="p-3 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors"
              title="Attach file"
            >
              <Paperclip size={20} />
            </button>
            
            <textarea 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
              placeholder="Message BotBuzz..."
              className="flex-1 bg-transparent border-0 focus:ring-0 text-white placeholder:text-slate-500 min-h-[48px] max-h-32 py-3 resize-none scrollbar-none"
              rows={1}
            />

            <button 
              type="submit"
              disabled={!input.trim()}
              className="p-3 bg-brand-500 hover:bg-brand-400 disabled:opacity-50 disabled:hover:bg-brand-500 text-white rounded-xl shadow-lg shadow-brand-500/20 transition-all duration-200"
            >
              <Send size={20} />
            </button>
          </form>
          <p className="text-center text-xs text-slate-600 mt-3">
            BotBuzz can make mistakes. Consider checking important information.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatArea;