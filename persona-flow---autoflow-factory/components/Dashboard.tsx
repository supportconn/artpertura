
import React, { useState } from 'react';
import { RefreshCcw, LayoutGrid, Plus } from 'lucide-react';
import AiStudioInput from './AiStudioInput';
import FactoryCardItem from './FactoryCardItem';
import AutoFlowList from './AutoFlowList';
import InspiresSection from './InspiresSection';
import { MOCK_FACTORY_CARDS } from '../constants';
import { FactoryCard } from '../types';

interface DashboardProps {
  onCardClick: (card: FactoryCard) => void;
  onViewAll: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onCardClick, onViewAll }) => {
  const [cards, setCards] = useState(MOCK_FACTORY_CARDS);

  const handleShuffle = () => {
    setCards([...cards].sort(() => Math.random() - 0.5));
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-20">
      {/* AI Search Section */}
      <section className="flex flex-col items-center">
        <div className="w-full max-w-3xl space-y-4">
          <h1 className="text-center text-4xl font-bold text-slate-900 tracking-tight">
            Design your brand strategy.
          </h1>
          <AiStudioInput />
        </div>
      </section>

      {/* AutoFlow Agents Section */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-bold text-slate-800">AutoFlow Agents</h2>
            <div className="h-1 w-1 rounded-full bg-slate-300"></div>
            <p className="text-sm text-slate-500 italic">Quickly launch your content pipelines</p>
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={handleShuffle}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:bg-white hover:shadow-sm rounded-lg border border-transparent hover:border-slate-100 transition-all"
            >
              <RefreshCcw size={14} />
              Shuffle
            </button>
            <button 
              onClick={onViewAll}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:bg-white hover:shadow-sm rounded-lg border border-transparent hover:border-slate-100 transition-all"
            >
              <LayoutGrid size={14} />
              View All
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((card) => (
            <FactoryCardItem 
              key={card.id} 
              card={card} 
              onClick={() => onCardClick(card)} 
            />
          ))}
        </div>
      </section>

      {/* Inspires Module */}
      <InspiresSection />

      {/* AutoFlows List Section */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Existing AutoFlows</h2>
          </div>
          <button className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold px-6 py-2.5 rounded-xl transition-all shadow-sm">
            <Plus size={18} />
            Create New Flow
          </button>
        </div>
        <AutoFlowList />
      </section>
    </div>
  );
};

export default Dashboard;
