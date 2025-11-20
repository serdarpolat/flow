import React from 'react';
import { Bot, Twitter, Github, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
               <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-400 to-accent-500 flex items-center justify-center text-white">
                  <Bot size={20} />
                </div>
                <span className="text-xl font-bold text-white">BotBuzz</span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Empowering creativity and productivity through intelligent conversational AI.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-500 hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors"><Github size={20} /></a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="text-white font-semibold mb-6">Product</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-400 hover:text-brand-400 transition-colors">Features</a></li>
              <li><a href="#" className="text-slate-400 hover:text-brand-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="text-slate-400 hover:text-brand-400 transition-colors">API</a></li>
              <li><a href="#" className="text-slate-400 hover:text-brand-400 transition-colors">Showcase</a></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-400 hover:text-brand-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-slate-400 hover:text-brand-400 transition-colors">Careers</a></li>
              <li><a href="#" className="text-slate-400 hover:text-brand-400 transition-colors">Blog</a></li>
              <li><a href="#" className="text-slate-400 hover:text-brand-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Links Column 3 */}
          <div>
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-400 hover:text-brand-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-brand-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-slate-400 hover:text-brand-400 transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} BotBuzz AI. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            Systems Operational
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;