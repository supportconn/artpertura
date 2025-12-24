
import React from 'react';
import { ArrowLeft, Search, Filter } from 'lucide-react';
import FactoryCardItem from './FactoryCardItem';
import { MOCK_FACTORY_CARDS } from '../constants';
import { FactoryCard } from '../types';

interface Props {
  onBack: () => void;
  onCardClick: (card: FactoryCard) => void;
}

const AllAgentsView: React.FC<Props> = ({ onBack, onCardClick }) => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10 space-y-10 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-medium transition-colors mb-2"
          >
            <ArrowLeft size={18} />
            Back to Dashboard
          </button>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">AutoFlow Agent Library</h1>
          <p className="text-slate-500">Choose from dozens of pre-configured AI pipelines</p>
        </div>
      </div>

      <div className="flex gap-4 p-1 bg-white border border-slate-100 rounded-2xl shadow-sm max-w-xl">
        <div className="flex items-center gap-3 px-4 flex-1">
          <Search size={18} className="text-slate-300" />
          <input 
            type="text" 
            placeholder="Search agents by title, tag, or category..."
            className="w-full py-3 bg-transparent text-sm focus:outline-none placeholder-slate-300"
          />
        </div>
        <button className="px-6 py-2 bg-slate-900 text-white font-bold rounded-xl text-sm flex items-center gap-2">
          <Filter size={16} />
          Filter
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Expanded mock set */}
        {[...MOCK_FACTORY_CARDS, ...MOCK_FACTORY_CARDS].map((card, idx) => (
          <FactoryCardItem 
            key={`${card.id}-${idx}`} 
            card={card} 
            onClick={() => onCardClick(card)} 
          />
        ))}
      </div>
    </div>
  );
};

export default AllAgentsView;
