import React from 'react';
import { Check } from 'lucide-react';
import Button from '../ui/Button';

const plans = [
  {
    name: 'Free',
    price: 'USD $0/month',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop',
    buttonText: 'Your Current Plan',
    buttonVariant: 'outline' as const,
    features: [
      'Limited access to Multiple Personalities (3 personalities)',
      'Basic Dynamic Suggestions',
      'Multi-platform Integration (limited to 1 device)',
      'Multilingual Support (2 languages)',
    ],
  },
  {
    name: 'Plus',
    price: 'USD $20/month',
    badge: 'Best Selling',
    image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2574&auto=format&fit=crop',
    buttonText: 'Upgrade to Plus',
    buttonVariant: 'primary' as const,
    features: [
      'Access to Multiple Personalities (10 personalities)',
      'Real-time Web References (unlimited queries)',
      'Multi-platform Integration (up to 5 devices)',
      'Multilingual Support (10 languages)',
    ],
  },
  {
    name: 'Team',
    price: 'USD $40/month (per user)',
    image: 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=2670&auto=format&fit=crop',
    buttonText: 'Upgrade to Team',
    buttonVariant: 'primary' as const,
    features: [
      'Advanced Generated Images (limited to 100 images/month for the team)',
      'Multilingual Support (15 languages)',
      'Advanced Feedback Mechanism',
      'Collaborative conversation features for team projects',
    ],
  },
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent-500/20 text-accent-400 text-sm font-medium mb-6 border border-accent-500/20">
            Plan & Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Choose the Plan that's Right For You
          </h2>
          <p className="text-slate-400 text-lg">
            Provide Descriptions, Get Instant AI Generated Content
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className="flex flex-col p-6 rounded-3xl bg-[#0B0F17] border border-slate-800 hover:border-slate-700 transition-all duration-300"
            >
              {/* Card Image */}
              <div className="h-48 mb-8 rounded-2xl overflow-hidden relative group">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                <img 
                  src={plan.image} 
                  alt={`${plan.name} Plan Abstract Art`} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Header & Price */}
              <div className="mb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                  {plan.badge && (
                    <span className="px-3 py-1 rounded-lg border border-accent-500/30 text-accent-400 text-xs font-medium bg-accent-500/10">
                      {plan.badge}
                    </span>
                  )}
                </div>
                <p className="text-slate-400 text-sm font-medium">{plan.price}</p>
              </div>

              {/* Features List */}
              <div className="flex-1 mb-8">
                <ul className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-1 min-w-[18px]">
                        <Check size={18} className="text-white" />
                      </div>
                      <span className="text-slate-400 text-sm leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <Button 
                variant={plan.buttonVariant === 'outline' ? 'outline' : 'primary'} 
                className={`w-full ${plan.buttonVariant === 'primary' ? 'bg-accent-600 hover:bg-accent-700 border-0' : 'border-slate-700 text-slate-400 hover:text-white hover:border-slate-500'}`}
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Pricing;