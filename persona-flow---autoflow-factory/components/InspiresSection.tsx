
import React, { useState } from 'react';
import { Eye, Heart, MessageSquare, ChevronRight } from 'lucide-react';
import { MOCK_INSPIRES } from '../constants';

const INDUSTRIES = ['All', 'Beauty', 'Tech', 'Design', 'Fashion', 'Art', 'Business'];

const InspiresSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? MOCK_INSPIRES 
    : MOCK_INSPIRES.filter(item => item.category === activeCategory);

  return (
    <section className="space-y-8">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Creative Inspiration</h2>
          <button className="text-sm font-semibold text-slate-500 hover:text-slate-900 flex items-center gap-1 group transition-colors">
            See more inspirations
            <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Industry Filters */}
        <div className="flex flex-wrap gap-2">
          {INDUSTRIES.map((industry) => (
            <button
              key={industry}
              onClick={() => setActiveCategory(industry)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                activeCategory === industry 
                  ? 'bg-slate-900 text-white shadow-md' 
                  : 'bg-white text-slate-500 hover:bg-slate-50 border border-slate-100 shadow-sm'
              }`}
            >
              {industry}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredItems.map((item) => (
          <div key={item.id} className="group flex flex-col space-y-4 bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-xl transition-all">
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-inner">
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                 <p className="text-white text-xs font-medium line-clamp-3 mb-2">{item.content}</p>
                 <div className="flex items-center justify-between text-white/80 text-[10px] font-bold uppercase tracking-widest">
                   <span>{item.date}</span>
                   <span>{item.category}</span>
                 </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-xs text-slate-600 border border-slate-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?u=${item.id}`} alt={item.author} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-slate-900 leading-none">{item.author}</span>
                    <span className="text-[10px] text-slate-400 font-medium">{item.handle}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-slate-400">
                  <div className="flex items-center gap-1">
                    <Eye size={14} />
                    <span className="text-[11px] font-bold">{item.views}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Heart size={14} />
                    <span className="text-[11px] font-bold">{item.likes}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InspiresSection;
