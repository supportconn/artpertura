
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { FactoryCard } from '../types';

interface Props {
  card: FactoryCard;
  onClick: () => void;
}

const FactoryCardItem: React.FC<Props> = ({ card, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="group bg-white border border-slate-100 rounded-2xl p-3 shadow-sm hover:shadow-xl hover:border-yellow-200 transition-all cursor-pointer flex flex-col h-full"
    >
      <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
        <img 
          src={card.imageUrl} 
          alt={card.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-2 left-2 bg-white/90 backdrop-blur px-2 py-1 rounded-md">
          <span className="text-[10px] font-bold text-slate-800 uppercase tracking-tight">{card.tag}</span>
        </div>
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between mb-1">
          <h3 className="font-bold text-slate-900 group-hover:text-yellow-600 transition-colors">{card.title}</h3>
          <ArrowUpRight size={16} className="text-slate-300 group-hover:text-yellow-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </div>
        <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
          {card.description}
        </p>
      </div>
    </div>
  );
};

export default FactoryCardItem;
