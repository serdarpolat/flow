import React from 'react';
import { Sparkles, Bot, CreditCard } from 'lucide-react';
import Button from '../ui/Button';
import { Zap, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-500/20 rounded-full blur-3xl mix-blend-screen animate-blob"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent-500/20 rounded-full blur-3xl mix-blend-screen animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl mix-blend-screen animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 border border-slate-800 backdrop-blur-sm mb-8">
            <span className="flex h-2 w-2 rounded-full bg-brand-400 animate-pulse"></span>
            <span className="text-sm text-slate-300 font-medium">BotBuzz AI 2.0 is now live</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-white">
            Chat smarter with <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-400 via-accent-500 to-brand-400">
              Artificial Intelligence
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Experience the future of communication. BotBuzz helps you write code, generate content, and solve complex problems in seconds.
          </p>
          
          <div className="flex flex-col items-center gap-6">
            <Button 
              size="lg" 
              className="w-full sm:w-auto min-w-[280px] text-lg"
              onClick={() => navigate('/auth')}
            >
              Start Conversation for free
            </Button>
            
            <div className="flex items-center gap-3 text-slate-400">
              <CreditCard className="w-6 h-6 text-yellow-400 fill-yellow-400/10" />
              <span className="text-lg font-medium">No credit card required</span>
            </div>
          </div>
        </div>

        {/* Abstract Chat UI Mockup */}
        <div className="relative mx-auto max-w-5xl animate-float">
          <div className="rounded-2xl border border-slate-800 bg-slate-950/80 backdrop-blur-xl shadow-2xl overflow-hidden">
            <div className="flex items-center px-4 py-3 border-b border-slate-800 bg-slate-900/50 gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="ml-4 flex-1 flex justify-center">
                <div className="px-4 py-1 rounded-md bg-slate-800 text-xs text-slate-400 font-mono">botbuzz.ai/chat</div>
              </div>
            </div>
            
            <div className="p-6 md:p-8 space-y-6 min-h-[400px]">
              {/* Message 1: User */}
              <div className="flex items-end justify-end gap-3">
                <div className="bg-brand-600 text-white px-5 py-3 rounded-2xl rounded-br-sm max-w-[80%] shadow-lg">
                  <p className="text-sm md:text-base">Help me write a React component for a landing page hero section.</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center shrink-0">
                  <span className="text-xs font-bold text-white">YO</span>
                </div>
              </div>

              {/* Message 2: AI */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-brand-400 to-accent-500 flex items-center justify-center shrink-0 shadow-lg shadow-brand-500/20">
                  <Bot size={16} className="text-white" />
                </div>
                <div className="bg-slate-800/50 border border-slate-700/50 text-slate-200 px-5 py-3 rounded-2xl rounded-tl-sm max-w-[80%] shadow-md">
                  <p className="text-sm md:text-base mb-3">Here's a modern Hero component using Tailwind CSS:</p>
                  <div className="bg-slate-950 rounded-lg p-3 font-mono text-xs md:text-sm text-slate-400 overflow-x-auto border border-slate-800">
                    <code>
                      <span className="text-pink-400">const</span> <span className="text-blue-400">Hero</span> = () <span className="text-pink-400">=&gt;</span> {'{'}
                      <br/>
                      &nbsp;&nbsp;<span className="text-pink-400">return</span> (
                      <br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-emerald-400">div</span> className="<span className="text-amber-300">relative pt-32</span>"&gt;
                      <br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-emerald-400">h1</span>&gt;Welcome to BotBuzz&lt;/<span className="text-emerald-400">h1</span>&gt;
                      <br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="text-emerald-400">div</span>&gt;
                      <br/>
                      &nbsp;&nbsp;);
                      <br/>
                      {'}'}
                    </code>
                  </div>
                </div>
              </div>
              
               {/* Features Badge Strip */}
               <div className="pt-8 flex flex-wrap gap-4 justify-center opacity-80">
                  <div className="flex items-center gap-2 text-xs text-slate-400 px-3 py-1.5 rounded-full border border-slate-800 bg-slate-900/50">
                    <Sparkles size={12} className="text-yellow-400" />
                    <span>Smart Suggestions</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-400 px-3 py-1.5 rounded-full border border-slate-800 bg-slate-900/50">
                    <Zap size={12} className="text-blue-400" />
                    <span>Instant Code</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-400 px-3 py-1.5 rounded-full border border-slate-800 bg-slate-900/50">
                    <ShieldCheck size={12} className="text-green-400" />
                    <span>Secure & Private</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;