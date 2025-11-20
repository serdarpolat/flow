import React, { useState } from 'react';
import { Bot, Mail, Lock, User } from 'lucide-react';
import Button from '../ui/Button';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would validate and call an API here
    navigate('/onboarding');
  };

  return (
    <div className="min-h-screen bg-slate-950 flex relative overflow-hidden">
      
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[100px] mix-blend-screen animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent-500/10 rounded-full blur-[100px] mix-blend-screen animate-blob animation-delay-2000"></div>
      </div>

      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row h-screen relative z-10">
        
        {/* Left Column - Visual */}
        <div className="hidden lg:flex lg:w-1/2 flex-col justify-between p-12">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-400 to-accent-500 flex items-center justify-center text-white shadow-lg shadow-brand-500/20">
                <Bot size={24} />
              </div>
              <span className="text-xl font-bold text-white">BotBuzz</span>
            </Link>
          </div>
          
          <div className="max-w-md">
             <h1 className="text-4xl font-bold text-white mb-6">
               {isLogin ? "Experience the future of communication" : "Join the AI revolution"}
             </h1>
             <p className="text-slate-400 text-lg leading-relaxed">
               {isLogin 
                 ? "Join thousands of developers and creators using BotBuzz to accelerate their workflow and unlock new creative possibilities."
                 : "Create an account today and start building the future with the power of BotBuzz AI at your fingertips."}
             </p>
          </div>

          <div className="text-slate-500 text-sm">
            © {new Date().getFullYear()} BotBuzz AI. All rights reserved.
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 bg-slate-900/30 backdrop-blur-sm border-l border-slate-800/50">
          <div className="w-full max-w-[420px] space-y-8">
            
            <div className="lg:hidden mb-8">
               <Link to="/" className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-400 to-accent-500 flex items-center justify-center text-white">
                  <Bot size={20} />
                </div>
                <span className="text-lg font-bold text-white">BotBuzz</span>
              </Link>
            </div>

            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold text-white tracking-tight">
                {isLogin ? "Welcome back" : "Create an account"}
              </h2>
              <p className="mt-2 text-slate-400">
                {isLogin ? "Enter your details to access your account" : "Enter your details to get started"}
              </p>
            </div>

            {/* Social Logins */}
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 px-4 py-3 border border-slate-700 rounded-xl bg-slate-800/50 text-white hover:bg-slate-800 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span>Google</span>
              </button>
              <button className="flex items-center justify-center gap-2 px-4 py-3 border border-slate-700 rounded-xl bg-slate-800/50 text-white hover:bg-slate-800 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                   <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74 1.18 0 2.21-1.23 3.97-.98 1.29.18 2.52.82 3.34 1.98-3.03 1.86-2.46 5.63.58 6.99-.73 1.83-1.73 3.59-2.97 4.24M12.03 5c.15-1.7 1.35-3.3 2.87-3.5 1.41 0 2.58 1.59 2.44 3.33-1.6.1-3.42-1.4-5.31.17" />
                </svg>
                <span>Apple</span>
              </button>
            </div>

            <div className="relative flex items-center">
              <div className="flex-grow border-t border-slate-800"></div>
              <span className="flex-shrink-0 mx-4 text-slate-500 text-sm">
                {isLogin ? "Or continue with email" : "Or sign up with email"}
              </span>
              <div className="flex-grow border-t border-slate-800"></div>
            </div>

            {/* Form */}
            <form className="space-y-6" onSubmit={handleAuth}>
              {!isLogin && (
                <div className="space-y-2 animate-in fade-in slide-in-from-bottom-4 duration-300">
                  <label className="text-sm font-medium text-slate-300">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 h-5 w-5" />
                    <input 
                      type="text" 
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-10 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Email address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 h-5 w-5" />
                  <input 
                    type="email" 
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-10 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all"
                    placeholder="name@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <label className="text-sm font-medium text-slate-300">Password</label>
                  {isLogin && <a href="#" className="text-sm text-brand-400 hover:text-brand-300">Forgot password?</a>}
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 h-5 w-5" />
                  <input 
                    type="password" 
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-10 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all"
                    placeholder="Enter your password"
                  />
                </div>
              </div>

              <Button type="submit" className="w-full py-3.5 text-base">
                {isLogin ? "Sign In" : "Create Account"}
              </Button>
            </form>

            <div className="text-center">
              <span className="text-slate-500">
                {isLogin ? "Don't have an account? " : "Already have an account? "}
              </span>
              <button 
                onClick={() => setIsLogin(!isLogin)}
                className="text-brand-400 font-medium hover:text-brand-300 focus:outline-none"
              >
                {isLogin ? "Sign up" : "Sign in"}
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;