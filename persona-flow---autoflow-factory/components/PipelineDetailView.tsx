
import React, { useState } from 'react';
import { ArrowLeft, Save, Eye, RefreshCw, Instagram, AtSign } from 'lucide-react';
import { FactoryCard } from '../types';

interface Props {
  pipeline: FactoryCard | null;
  onBack: () => void;
}

const PipelineDetailView: React.FC<Props> = ({ pipeline, onBack }) => {
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(['instagram']);

  if (!pipeline) return null;

  const togglePlatform = (id: string) => {
    setSelectedPlatforms(prev => 
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    );
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button 
            onClick={onBack}
            className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400"
          >
            <ArrowLeft size={20} />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-slate-900">{pipeline.title} Agent</h1>
            <p className="text-sm text-slate-500 uppercase tracking-widest font-bold">Configuration Workspace</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
           <button className="flex items-center gap-2 bg-slate-900 text-white font-bold px-8 py-3 rounded-2xl hover:bg-slate-800 transition-all shadow-xl text-sm">
             <Save size={18} />
             Save & Activate
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Configuration Form */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white border border-slate-200 rounded-[32px] p-8 shadow-sm space-y-8">
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-slate-900">Strategy & Objectives</h3>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">Core Content Concept</label>
                  <textarea 
                    rows={5}
                    placeholder="Describe your content idea, or ask the AI to generate a strategy based on your target audience..."
                    className="w-full bg-slate-50/50 border border-slate-100 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:ring-4 focus:ring-yellow-400/10 focus:border-yellow-400 transition-all placeholder-slate-300 resize-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">Update Frequency</label>
                    <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400/20">
                      <option>Once per day</option>
                      <option>Twice per day</option>
                      <option>Three times per day</option>
                      <option>Weekly Digest</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">Intelligence Level</label>
                    <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400/20">
                      <option>Standard (Stable)</option>
                      <option>Creative (Experimental)</option>
                      <option>Pro (Strategy-focused)</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Platform Selection */}
            <div className="space-y-6 pt-4">
              <div className="flex items-center gap-1.5">
                <span className="text-red-500 font-bold text-lg">*</span>
                <h3 className="text-lg font-bold text-slate-900">Select Social Platform</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button 
                  onClick={() => togglePlatform('instagram')}
                  className={`flex items-center justify-between p-4 rounded-2xl border-2 transition-all ${selectedPlatforms.includes('instagram') ? 'border-yellow-400 bg-yellow-50/30' : 'border-slate-100 bg-white hover:border-slate-200'}`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[2px]">
                      <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                        <Instagram size={20} className="text-pink-600" />
                      </div>
                    </div>
                    <span className="text-sm font-bold text-slate-700">OliviaChau</span>
                  </div>
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${selectedPlatforms.includes('instagram') ? 'bg-yellow-400 border-yellow-400' : 'border-slate-200'}`}>
                    {selectedPlatforms.includes('instagram') && <div className="w-2 h-2 bg-white rounded-full"></div>}
                  </div>
                </button>

                <button 
                  onClick={() => togglePlatform('threads')}
                  className={`flex items-center justify-between p-4 rounded-2xl border-2 transition-all ${selectedPlatforms.includes('threads') ? 'border-yellow-400 bg-yellow-50/30' : 'border-slate-100 bg-white hover:border-slate-200'}`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center">
                      <AtSign size={20} className="text-white" />
                    </div>
                    <span className="text-sm font-bold text-slate-700">OliviaChau</span>
                  </div>
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${selectedPlatforms.includes('threads') ? 'bg-yellow-400 border-yellow-400' : 'border-slate-200'}`}>
                    {selectedPlatforms.includes('threads') && <div className="w-2 h-2 bg-white rounded-full"></div>}
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Persona Card */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white border border-slate-200 rounded-[32px] p-8 shadow-sm">
            <div className="flex items-center justify-between mb-10">
              <h3 className="text-xl font-bold text-slate-900">AI Persona</h3>
              <div className="flex gap-2">
                <button className="p-2 hover:bg-slate-50 rounded-xl text-slate-400 border border-slate-100 transition-colors">
                  <Eye size={18} />
                </button>
                <button className="p-2 hover:bg-slate-50 rounded-xl text-slate-400 border border-slate-100 transition-colors">
                  <RefreshCw size={18} />
                </button>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="relative mb-6">
                <div className="w-40 h-40 rounded-full bg-blue-400 flex items-center justify-center shadow-2xl border-8 border-slate-50 overflow-hidden">
                   <img src="https://api.dicebear.com/7.x/bottts-neutral/svg?seed=Zhang&backgroundColor=7ec1ff" alt="avatar" className="w-32 h-32" />
                </div>
                <div className="absolute bottom-2 right-2 w-8 h-8 bg-green-500 border-4 border-white rounded-full"></div>
              </div>
              
              <h4 className="text-2xl font-black text-slate-900 mb-8 tracking-tight">Zhang Yiming</h4>
              
              <div className="w-full space-y-5 border-t border-slate-50 pt-8">
                <div className="flex justify-between items-center py-1">
                  <span className="text-sm font-bold text-slate-300 uppercase tracking-widest">Gender</span>
                  <span className="font-bold text-slate-800">Male</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-sm font-bold text-slate-300 uppercase tracking-widest">Birthday</span>
                  <span className="font-bold text-slate-800">1995-03-20</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-sm font-bold text-slate-300 uppercase tracking-widest">Location</span>
                  <span className="font-bold text-slate-800">Beijing, China</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 rounded-[32px] p-8 text-white relative overflow-hidden shadow-2xl">
             <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-yellow-400/20 rounded-full blur-3xl"></div>
             <h4 className="font-bold text-sm text-yellow-400 uppercase tracking-widest mb-4">AI Strategist Insight</h4>
             <p className="text-sm leading-relaxed text-slate-300 italic">
               "This persona is optimized for high-authority industry analysis. Syncing 'OliviaChau' across Instagram and Threads will ensure a consistent narrative for your audience."
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PipelineDetailView;
