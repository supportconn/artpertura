
import React, { useState } from 'react';
import { Send, Image, Mic, Sparkles } from 'lucide-react';

const AiStudioInput: React.FC = () => {
  const [value, setValue] = useState('');

  return (
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
      <div className="relative flex flex-col w-full bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden focus-within:ring-2 focus-within:ring-yellow-400/50 transition-all">
        <div className="flex items-center px-4 py-3 gap-3 border-b border-slate-50">
           <Sparkles size={18} className="text-yellow-500" />
           <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">New Marketing Concept</span>
        </div>
        <textarea 
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Describe your content idea, or ask me to generate a pipeline..."
          className="w-full min-h-[120px] px-6 py-4 text-lg bg-transparent focus:outline-none resize-none placeholder-slate-300"
        />
        <div className="flex items-center justify-between px-4 py-3 bg-slate-50/50">
          <div className="flex items-center gap-2">
            <IconButton icon={<Image size={18} />} />
            <IconButton icon={<Mic size={18} />} />
          </div>
          <button className={`flex items-center gap-2 px-5 py-2 rounded-xl font-bold transition-all ${
            value.trim() ? 'bg-slate-900 text-white shadow-lg translate-y-[-2px]' : 'bg-slate-100 text-slate-300 cursor-not-allowed'
          }`}>
            <span>Create</span>
            <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

const IconButton: React.FC<{ icon: React.ReactNode }> = ({ icon }) => (
  <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
    {icon}
  </button>
);

export default AiStudioInput;
