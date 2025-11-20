import React from 'react';
import Button from '../ui/Button';
import { useNavigate } from 'react-router-dom';

const CallToAction: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-brand-950/30 pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                Ready to experience the future?
            </h2>
            <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
                Join thousands of developers, writers, and creators who are already using BotBuzz to work smarter.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="shadow-brand-500/40" onClick={() => navigate('/auth')}>
                    Get Started for Free
                </Button>
                <Button variant="outline" size="lg">
                    Contact Sales
                </Button>
            </div>

            <p className="mt-8 text-sm text-slate-500">
                No credit card required. 14-day free trial on Pro plans.
            </p>
        </div>
    </section>
  );
};

export default CallToAction;