
import React, { useState } from 'react';
import { 
  Sparkles, 
  Send, 
  Image as ImageIcon, 
  Mic, 
  ArrowLeft,
  Settings2,
  Cpu,
  Zap,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { MOCK_FACTORY_CARDS } from '../constants';
import { FactoryCard } from '../types';

const FactoryV2View: React.FC = () => {
  const [selectedAgent, setSelectedAgent] = useState<FactoryCard | null>(null);

  if (selectedAgent) {
    return (
      <div className="max-w-5xl mx-auto px-6 py-10 space-y-8 animate-in slide-in-from-right duration-500">
        <button 
          onClick={() => setSelectedAgent(null)}
          className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-medium transition-colors"
        >
          <ArrowLeft size={18} />
          Back to Selection
        </button>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Main Form Area */}
          <div className="flex-1 space-y-8">
            <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-xl">
              <div className="px-8 py-6 border-b border-slate-50 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-2xl flex items-center justify-center text-yellow-600">
                    <Sparkles size={24} />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">{selectedAgent.title} Builder</h2>
                    <p className="text-sm text-slate-400 uppercase font-bold tracking-widest">Pipeline Configuration</p>
                  </div>
                </div>
              </div>

              <div className="p-8 space-y-8">
                <div className="space-y-4">
                  <label className="block text-sm font-bold text-slate-700">Content Concept & Core Idea</label>
                  <div className="relative">
                    <textarea 
                      placeholder="Describe your content idea, or let AI generate a base concept for this pipeline..."
                      className="w-full min-h-[200px] p-6 text-lg bg-slate-50/50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-yellow-400/10 focus:border-yellow-400 transition-all placeholder-slate-300 resize-none"
                    />
                    <div className="absolute bottom-4 right-4 flex items-center gap-2">
                       <button className="p-2 text-slate-400 hover:bg-white rounded-lg transition-colors border border-transparent hover:border-slate-100">
                         <ImageIcon size={18} />
                       </button>
                       <button className="p-2 text-slate-400 hover:bg-white rounded-lg transition-colors border border-transparent hover:border-slate-100">
                         <Mic size={18} />
                       </button>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Social Platform</label>
                    <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400/30">
                      <option>Twitter (X)</option>
                      <option>LinkedIn</option>
                      <option>Instagram</option>
                      <option>Reddit</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Persona Tone</label>
                    <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400/30">
                      <option>Professional & Authoritative</option>
                      <option>Friendly & Casual</option>
                      <option>Hype & Energetic</option>
                    </select>
                  </div>
                </div>

                <button className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold flex items-center justify-center gap-3 shadow-2xl hover:bg-slate-800 transition-all transform active:scale-95 group">
                  <span>Generate Pipeline Preview</span>
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Helper Sidebar */}
          <div className="w-full md:w-80 space-y-6">
             <div className="bg-yellow-400 rounded-3xl p-6 text-slate-900 shadow-lg relative overflow-hidden group">
               <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-125 transition-transform duration-1000">
                 <Cpu size={120} />
               </div>
               <h3 className="font-bold text-lg mb-2">Pro Builder Tip</h3>
               <p className="text-sm font-medium leading-relaxed opacity-90">
                 "Try adding specific keywords about your audience to get more accurate sentiment analysis in the output."
               </p>
             </div>

             <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm space-y-4">
                <h3 className="font-bold text-slate-900">Current Steps</h3>
                <div className="space-y-3">
                  <Step active done label="Concept Brainstorming" />
                  <Step active label="Context Refinement" />
                  <Step label="Asset Generation" />
                  <Step label="Final Deployment" />
                </div>
             </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-12 animate-in fade-in duration-500">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-black text-slate-900 tracking-tight">AutoFlow Factory V2</h1>
        <p className="text-xl text-slate-500">Professional workspace for high-performance marketing automation.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {MOCK_FACTORY_CARDS.map(card => (
          <div 
            key={card.id}
            onClick={() => setSelectedAgent(card)}
            className="group relative bg-white border border-slate-100 rounded-[32px] p-6 shadow-sm hover:shadow-2xl hover:border-yellow-300 transition-all cursor-pointer flex flex-col h-full overflow-hidden"
          >
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-yellow-50 rounded-full group-hover:scale-150 transition-transform duration-700 opacity-50"></div>
            
            <div className="w-14 h-14 bg-slate-50 rounded-2xl mb-6 flex items-center justify-center text-slate-400 group-hover:bg-yellow-400 group-hover:text-white transition-all duration-300 shadow-inner">
               <Zap size={24} fill="currentColor" />
            </div>

            <div className="flex-1 space-y-3">
               <h3 className="text-xl font-bold text-slate-900 leading-tight">{card.title}</h3>
               <p className="text-sm text-slate-500 leading-relaxed">{card.description}</p>
            </div>

            <div className="mt-8 flex items-center gap-2 text-xs font-bold text-yellow-600 uppercase tracking-widest">
               Select Agent
               <ChevronRight size={16} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Step: React.FC<{ label: string; active?: boolean; done?: boolean }> = ({ label, active, done }) => (
  <div className={`flex items-center gap-3 p-3 rounded-xl transition-all ${active ? 'bg-slate-50' : 'opacity-40'}`}>
    {done ? (
      <CheckCircle2 size={18} className="text-green-500" />
    ) : (
      <div className={`w-4 h-4 rounded-full border-2 ${active ? 'border-yellow-400' : 'border-slate-300'}`}></div>
    )}
    <span className={`text-sm font-bold ${active ? 'text-slate-900' : 'text-slate-400'}`}>{label}</span>
  </div>
);

export default FactoryV2View;
