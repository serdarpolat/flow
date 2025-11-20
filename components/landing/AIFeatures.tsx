import React from 'react';
import { CheckCircle2, Bot, Sparkles } from 'lucide-react';
import Button from '../ui/Button';
import { useNavigate } from 'react-router-dom';

const AIFeatures: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-32">
        
        {/* Feature 1: Discover Personalities */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-accent-500 font-medium mb-2 block text-lg">AI Features</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Discover Personalities
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Switch Between Various Personalities To Match Your Mood And Make Conversations More Engaging.
            </p>
            
            <ul className="space-y-5">
              {[
                '12 different personalities',
                'Personalized experience',
                'Empathetic interactions'
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-accent-500 w-6 h-6 flex-shrink-0" fill="rgba(139, 92, 246, 0.1)" />
                  <span className="text-slate-200 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Visual Mockup */}
          <div className="relative">
             {/* Glow Effect */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent-500/10 rounded-full blur-3xl pointer-events-none"></div>
             
             {/* Card Container */}
             <div className="relative bg-[#13161F] border border-slate-800 rounded-2xl p-8 max-w-md mx-auto shadow-2xl">
                {/* Profile Header */}
                <div className="flex flex-col items-center mb-8 relative">
                   <div className="w-24 h-24 rounded-full p-1 bg-gradient-to-tr from-brand-400 to-accent-500 mb-4 shadow-lg shadow-accent-500/20">
                      <img 
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop" 
                        alt="Sage Personality" 
                        className="w-full h-full rounded-full object-cover border-4 border-[#13161F]"
                      />
                   </div>
                   <h3 className="text-2xl font-bold text-white mb-1">Sage</h3>
                   <p className="text-slate-500 text-sm text-center max-w-[200px]">A wise and knowledgeable guide for deep discussions.</p>
                </div>

                {/* Stats Bars */}
                <div className="space-y-4 mb-8">
                  {[
                    { label: 'Role', width: '80%' },
                    { label: 'Purpose', width: '90%' },
                  ].map((stat, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <span className="text-xs text-slate-400 w-16 font-medium">{stat.label}</span>
                      <div className="flex-1 h-2 bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-slate-600 rounded-full" style={{ width: stat.width }}></div>
                      </div>
                    </div>
                  ))}
                  
                  <div className="mt-6">
                    <span className="text-xs text-slate-400 font-medium mb-2 block">Character Skills</span>
                    <div className="flex gap-2 flex-wrap">
                        <div className="h-2 w-16 bg-slate-700 rounded-full"></div>
                        <div className="h-2 w-12 bg-slate-700 rounded-full"></div>
                        <div className="h-2 w-20 bg-slate-700 rounded-full"></div>
                        <div className="h-2 w-10 bg-slate-700 rounded-full"></div>
                        <div className="h-2 w-14 bg-slate-700 rounded-full"></div>
                        <div className="h-2 w-16 bg-slate-700 rounded-full"></div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <span className="text-xs text-slate-400 font-medium mb-2 block">Interaction Style</span>
                    <div className="flex gap-2">
                        <div className="h-2 w-full bg-slate-700 rounded-full"></div>
                        <div className="h-2 w-full bg-slate-700 rounded-full"></div>
                        <div className="h-2 w-full bg-slate-700 rounded-full"></div>
                    </div>
                  </div>
                </div>

                <Button 
                  className="w-full bg-accent-600 hover:bg-accent-700 text-white border-0 shadow-lg shadow-accent-600/20"
                  onClick={() => navigate('/auth')}
                >
                  Chat Now
                </Button>
             </div>
          </div>
        </div>

        {/* Feature 2: Seamless Follow-up Questions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           {/* Visual Mockup */}
          <div className="lg:order-1">
            <span className="text-accent-500 font-medium mb-2 block text-lg">AI Features</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Seamless Follow-up Questions
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Keeps The Conversation Flowing Naturally By Asking Relevant Follow-Up Questions.
            </p>
            
            <ul className="space-y-5">
              {[
                'Enhanced Engagement',
                'Deeper Understanding',
                'Smooth Interactions'
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                   <CheckCircle2 className="text-accent-500 w-6 h-6 flex-shrink-0" fill="rgba(139, 92, 246, 0.1)" />
                  <span className="text-slate-200 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Visual Mockup */}
          <div className="lg:order-2 relative">
            {/* Background Element */}
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-brand-500/10 rounded-full blur-3xl pointer-events-none"></div>

            {/* Chat Interface */}
            <div className="bg-[#1E2230] border border-slate-800 rounded-2xl p-6 max-w-xl mx-auto shadow-2xl relative">
               
               {/* Tree Line Connector (Decoration) */}
               <div className="absolute left-8 top-16 bottom-24 w-px bg-slate-700/50"></div>

               {/* User Question */}
               <div className="flex items-start gap-4 mb-8 relative">
                  <div className="absolute left-[-9px] top-8 w-3 h-px bg-slate-700/50"></div>
                  <div className="w-10 h-10 rounded-full bg-slate-700 overflow-hidden flex-shrink-0 border border-slate-600">
                      <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop" alt="User" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                      <div className="text-xs text-slate-400 mb-2">Your Question</div>
                      <div className="space-y-2">
                          <div className="h-3 bg-slate-700/50 rounded-full w-full"></div>
                          <div className="h-3 bg-slate-700/50 rounded-full w-2/3"></div>
                      </div>
                  </div>
               </div>

               {/* Bot Response */}
               <div className="flex items-start gap-4 mb-8 relative">
                  <div className="absolute left-[-9px] top-8 w-3 h-3 rounded-bl-xl border-b border-l border-slate-700/50"></div>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-accent-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Bot size={20} className="text-white" />
                  </div>
                  <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs text-brand-400 font-medium">Bot Buzz Response</span>
                        <span className="text-[10px] text-slate-600">01 July - 08:12 PM</span>
                      </div>
                      <div className="space-y-2">
                          <div className="h-3 bg-slate-700/30 rounded-full w-full"></div>
                          <div className="h-3 bg-slate-700/30 rounded-full w-full"></div>
                          <div className="h-3 bg-slate-700/30 rounded-full w-5/6"></div>
                          <div className="h-3 bg-slate-700/30 rounded-full w-4/5"></div>
                      </div>
                  </div>
               </div>

               {/* Suggestions */}
               <div className="flex flex-wrap gap-3 pl-14">
                   <button className="text-xs text-slate-300 border border-slate-700 bg-slate-800/50 px-4 py-2.5 rounded-xl hover:border-accent-500/50 hover:text-white transition-colors">
                      Can our perception of reality be trusted?
                   </button>
                   <button className="text-xs text-slate-300 border border-slate-700 bg-slate-800/50 px-4 py-2.5 rounded-xl hover:border-accent-500/50 hover:text-white transition-colors">
                      How do different philosophers define the self?
                   </button>
               </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AIFeatures;