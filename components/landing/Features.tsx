import React from 'react';
import { Zap, Lock, Globe, Code, MessageSquare, Cpu, LucideIcon } from 'lucide-react';
import { Feature } from '../../types';

const features: Feature[] = [
  {
    title: 'Lightning Fast',
    description: 'Get instant answers with our optimized Gemini-powered engine that processes queries in milliseconds.',
    icon: Zap,
  },
  {
    title: 'Bank-Grade Security',
    description: 'Your data is encrypted at rest and in transit. We value your privacy above everything else.',
    icon: Lock,
  },
  {
    title: 'Multi-language Support',
    description: 'Communicate fluently in over 95 languages with native-level understanding and nuance.',
    icon: Globe,
  },
  {
    title: 'Advanced Coding',
    description: 'Generate, debug, and refactor code in Python, JavaScript, Rust, and more with expert precision.',
    icon: Code,
  },
  {
    title: 'Context Awareness',
    description: 'BotBuzz remembers previous messages in your conversation for a truly natural dialogue flow.',
    icon: MessageSquare,
  },
  {
    title: 'Latest Models',
    description: 'Powered by Google\'s Gemini Pro and Flash models for state-of-the-art reasoning capabilities.',
    icon: Cpu,
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-slate-950 relative">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Supercharge your productivity
          </h2>
          <p className="text-slate-400 text-lg">
            More than just a chatbot. BotBuzz is a comprehensive AI assistant designed to handle complex tasks with ease.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-brand-500/50 hover:bg-slate-900 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-brand-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-brand-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;