
import React from 'react';
import { Activity, PanelTop, Share2, Users, RefreshCw, Cast } from 'lucide-react';

const features = [
  {
    title: 'Effortless Content AI',
    description: 'Let our AI-powered service the hard work out of content creation. Get started today with AI.',
    icon: Activity,
  },
  {
    title: 'Real Time Web References',
    description: 'Access up-to-date information on any topic during your conversations with Ai-Con.',
    icon: PanelTop,
  },
  {
    title: 'Emotional Intelligence',
    description: 'Enhances the empathetic aspect of your interactions, making your conversations more meaningful.',
    icon: Share2,
  },
  {
    title: 'Multiple Personalities',
    description: 'Ai-Con offers a variety of personalities for your AI companion, such as a Explorer, Sage and etc.',
    icon: Users,
  },
  {
    title: 'Dynamic Suggestions',
    description: 'Ai-Con provides dynamic topic suggestions based on your interests and previous conversations.',
    icon: RefreshCw,
  },
  {
    title: 'Personalized Responses',
    description: 'Personalization makes your interactions more engaging and tailored to your unique needs.',
    icon: Cast,
  },
];

const InstantContent: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Instant Content Generation with AI
          </h2>
          <p className="text-slate-400 text-lg">
            Provide Descriptions, Get Instant AI Generated Content
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-2xl bg-slate-900/30 border border-slate-800 hover:bg-slate-900 hover:border-brand-500/30 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-accent-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstantContent;
