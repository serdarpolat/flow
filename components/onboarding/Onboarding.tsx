import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bot, ArrowRight, Smile, Triangle, Hexagon, Box, Layout, MoreHorizontal, Sparkles, User, Shuffle, Circle } from 'lucide-react';
import Button from '../ui/Button';

interface OnboardingData {
  personality: string[];
  hobbies: string;
  experience: string[];
  interaction: string;
  topics: string[];
}

const Onboarding: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<OnboardingData>({
    personality: [],
    hobbies: '',
    experience: [],
    interaction: '',
    topics: []
  });

  const totalSteps = 5;

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(prev => prev + 1);
    } else {
      navigate('/dashboard');
    }
  };

  const handleSkip = () => {
    navigate('/dashboard');
  };

  const toggleSelection = (field: keyof OnboardingData, value: string) => {
    setFormData(prev => {
      const current = prev[field] as string[];
      const updated = current.includes(value)
        ? current.filter(item => item !== value)
        : [...current, value];
      return { ...prev, [field]: updated };
    });
  };

  const setSingleSelection = (field: keyof OnboardingData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const renderStep1 = () => {
    const options = [
      { id: 'friendly', label: 'Friendly', icon: Smile },
      { id: 'introvert', label: 'Introvert', icon: Triangle },
      { id: 'extrovert', label: 'Extrovert', icon: Hexagon },
      { id: 'analytical', label: 'Analytical', icon: Box },
      { id: 'creative', label: 'Creative', icon: Layout },
      { id: 'others', label: 'Others', icon: MoreHorizontal },
    ];

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
        {options.map((opt) => {
          const isSelected = formData.personality.includes(opt.id);
          return (
            <button
              key={opt.id}
              onClick={() => toggleSelection('personality', opt.id)}
              className={`h-40 rounded-xl border p-6 flex flex-col justify-between transition-all duration-200 text-left group ${
                isSelected 
                  ? 'border-brand-500 bg-brand-500/10' 
                  : 'border-slate-800 bg-slate-900/30 hover:bg-slate-800 hover:border-slate-700'
              }`}
            >
              <opt.icon className={`w-10 h-10 ${isSelected ? 'text-brand-400' : 'text-white'}`} />
              <div className="flex items-center gap-3">
                <div className={`w-5 h-5 rounded-md border flex items-center justify-center ${
                  isSelected ? 'bg-brand-500 border-brand-500' : 'border-slate-600 bg-transparent'
                }`}>
                  {isSelected && <div className="w-2.5 h-2.5 bg-white rounded-sm" />}
                </div>
                <span className="text-lg font-medium text-white">{opt.label}</span>
              </div>
            </button>
          );
        })}
      </div>
    );
  };

  const renderStep2 = () => (
    <div className="max-w-2xl mx-auto">
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-800/50"></div>
        <textarea
          value={formData.hobbies}
          onChange={(e) => setFormData(prev => ({ ...prev, hobbies: e.target.value }))}
          placeholder="type here"
          className="w-full bg-transparent border-none text-5xl font-bold text-slate-500 placeholder:text-slate-700 focus:ring-0 focus:text-white focus:placeholder:text-slate-600 resize-none h-48 leading-tight"
          autoFocus
        />
      </div>
    </div>
  );

  const renderStep3 = () => {
    const options = [
      'Casual And Friendly',
      'Professional And Formal',
      'Informative And Detailed',
      'Quick And To The Point',
      'Creative And Engaging'
    ];

    return (
      <div className="max-w-xl mx-auto space-y-4">
        {options.map((opt) => {
          const isSelected = formData.experience.includes(opt);
          return (
            <button
              key={opt}
              onClick={() => toggleSelection('experience', opt)}
              className={`w-full p-5 rounded-xl border flex items-center justify-between transition-all duration-200 ${
                isSelected 
                  ? 'border-brand-500 bg-brand-500/10' 
                  : 'border-slate-800 bg-slate-900/30 hover:bg-slate-800 hover:border-slate-700'
              }`}
            >
              <span className="text-lg text-white font-medium">{opt}</span>
              <div className={`w-6 h-6 rounded-md border flex items-center justify-center ${
                isSelected ? 'bg-brand-500 border-brand-500' : 'border-slate-600 bg-transparent'
              }`}>
                {isSelected && <div className="w-3 h-3 bg-white rounded-sm" />}
              </div>
            </button>
          );
        })}
      </div>
    );
  };

  const renderStep4 = () => {
    const options = [
      { 
        id: 'ai-lead', 
        label: 'AI Lead', 
        desc: "AI ask questions or give prompts, and I'll respond accordingly.",
        icon: Sparkles 
      },
      { 
        id: 'you-lead', 
        label: 'You Lead', 
        desc: "I initiate conversation, ask questions, and provide topics for discussion.",
        icon: User 
      },
      { 
        id: 'mixed', 
        label: 'Mixed', 
        desc: "A blend of both, where either of us can initiate and steer the conversation.",
        icon: Shuffle 
      },
    ];

    return (
      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        {options.map((opt) => {
          const isSelected = formData.interaction === opt.id;
          return (
            <button
              key={opt.id}
              onClick={() => setSingleSelection('interaction', opt.id)}
              className={`p-6 rounded-xl border flex flex-col h-full text-left transition-all duration-200 ${
                isSelected 
                  ? 'border-brand-500 bg-brand-500/10' 
                  : 'border-slate-800 bg-slate-900/30 hover:bg-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <opt.icon className={`w-8 h-8 ${isSelected ? 'text-brand-400' : 'text-white'}`} />
                <div className={`w-6 h-6 rounded-full border flex items-center justify-center ${
                  isSelected ? 'border-brand-500' : 'border-slate-600'
                }`}>
                  {isSelected && <div className="w-3 h-3 bg-brand-500 rounded-full" />}
                </div>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{opt.label}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{opt.desc}</p>
            </button>
          );
        })}
      </div>
    );
  };

  const renderStep5 = () => {
    const options = [
      { id: 'science', label: 'Science and Technology', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=500&auto=format&fit=crop' },
      { id: 'entertainment', label: 'Entertainment and Pop Culture', img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=500&auto=format&fit=crop' },
      { id: 'travel', label: 'Travel and Adventure', img: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=500&auto=format&fit=crop' },
      { id: 'education', label: 'Education and Learning', img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=500&auto=format&fit=crop' },
      { id: 'art', label: 'Art and Literature', img: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=500&auto=format&fit=crop' },
    ];

    return (
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {options.map((opt) => {
          const isSelected = formData.topics.includes(opt.id);
          return (
            <button
              key={opt.id}
              onClick={() => toggleSelection('topics', opt.id)}
              className={`group relative h-48 rounded-xl overflow-hidden border transition-all duration-200 text-left ${
                isSelected 
                  ? 'border-brand-500 ring-2 ring-brand-500/50' 
                  : 'border-slate-800 hover:border-slate-600'
              }`}
            >
              <img src={opt.img} alt={opt.label} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent opacity-90" />
              
              <div className="absolute inset-0 p-5 flex flex-col justify-between">
                 <span className="text-white font-medium leading-tight">{opt.label}</span>
                 {isSelected && (
                    <div className="self-end w-6 h-6 bg-brand-500 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                 )}
              </div>
            </button>
          );
        })}
      </div>
    );
  };

  const getStepContent = () => {
    switch(step) {
      case 1:
        return {
          title: "How would you describe your personality?",
          subtitle: "You can select multiple options from the following list",
          render: renderStep1
        };
      case 2:
        return {
          title: "What are some of your favorite hobbies or activities",
          subtitle: "Tell us about your activities that you do in your leisure time",
          render: renderStep2
        };
      case 3:
        return {
          title: "When Interacting with chat AI, what type of experience are you looking for?",
          subtitle: "You can select multiple options from the following list",
          render: renderStep3
        };
      case 4:
        return {
          title: "Do you prefer the AI to initiate conversation and ask questions, or would you rather lead the interaction?",
          subtitle: "Select only single option from the following list",
          render: renderStep4
        };
      case 5:
        return {
          title: "Are there any specific topics or areas of interest you would like the AI to focus on during your interactions?",
          subtitle: "You can select multiple options from the following list",
          render: renderStep5
        };
      default:
        return { title: '', subtitle: '', render: () => null };
    }
  };

  const { title, subtitle, render } = getStepContent();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 flex flex-col">
      {/* Header */}
      <header className="p-6 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
           <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-400 to-accent-500 flex items-center justify-center text-white shadow-lg shadow-brand-500/20">
              <Bot size={24} />
            </div>
            <span className="text-xl font-bold text-white">BotBuzz</span>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        <div className="w-full max-w-5xl mx-auto text-center">
          <span className="block text-slate-400 mb-8 font-medium">{step}/{totalSteps}</span>
          
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 max-w-4xl mx-auto">
            {title}
          </h1>
          
          <p className="text-slate-400 text-lg mb-12">
            {subtitle}
          </p>

          <div className="mb-16">
            {render()}
          </div>

          <div className="flex items-center justify-center gap-4">
            <button 
              onClick={handleSkip}
              className="px-8 py-3 text-slate-400 hover:text-white font-medium transition-colors"
            >
              Skip
            </button>
            <Button 
              onClick={handleNext} 
              className="bg-[#8B5CF6] hover:bg-[#7c3aed] text-white px-10 shadow-lg shadow-purple-500/20 border-none"
            >
              Next <ArrowRight size={18} className="ml-2" />
            </Button>
          </div>
        </div>
      </main>

      {/* Background Effects */}
      <div className="fixed top-1/2 right-0 w-[500px] h-[500px] bg-brand-500/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
      <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-accent-500/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 translate-y-1/2"></div>
    </div>
  );
};

export default Onboarding;