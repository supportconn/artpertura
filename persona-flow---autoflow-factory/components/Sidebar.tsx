
import React from 'react';
import { 
  Zap, 
  Home,
  Calendar, 
  UserCircle, 
  Share2, 
  ChevronDown,
  LayoutGrid,
  Cpu
} from 'lucide-react';
import { ViewType } from '../types';

interface SidebarProps {
  currentView: ViewType;
  onNavigate: (view: ViewType) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, onNavigate }) => {
  return (
    <aside className="w-64 bg-white border-r border-slate-100 flex flex-col shrink-0">
      <div className="p-4 flex items-center gap-2">
        <div className="bg-yellow-400 p-1.5 rounded-lg">
          <Zap size={20} className="text-white fill-white" />
        </div>
        <span className="font-bold text-xl text-yellow-500 tracking-tight">Persona Flow</span>
      </div>

      <div className="px-3 mt-4">
        <button className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 transition-colors">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-slate-900 overflow-hidden">
               <img src="https://picsum.photos/seed/user/100/100" alt="avatar" />
            </div>
            <span className="text-sm font-semibold">AI Marketing Agent</span>
          </div>
          <ChevronDown size={14} className="text-slate-400" />
        </button>
      </div>

      <nav className="flex-1 px-3 py-6 space-y-8 overflow-y-auto custom-scrollbar">
        <section>
          <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-3 mb-2">Navigation</h3>
          <div className="space-y-1">
            <NavItem 
              icon={<Home size={18} />} 
              label="Homepage" 
              active={currentView === 'dashboard'} 
              onClick={() => onNavigate('dashboard')} 
            />
            <NavItem 
              icon={<Zap size={18} />} 
              label="AutoFlow Agents" 
              active={currentView === 'all-agents'} 
              onClick={() => onNavigate('all-agents')} 
            />
          </div>
        </section>

        <section>
          <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-3 mb-2">Content Studio</h3>
          <div className="space-y-1">
            <NavItem icon={<LayoutGrid size={18} />} label="Post Designer" />
            <NavItem icon={<Cpu size={18} />} label="Strategy Engine" />
            <NavItem icon={<Calendar size={18} />} label="Content Planner" />
          </div>
        </section>

        <section>
          <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-3 mb-2">AI Settings</h3>
          <div className="space-y-1">
            <NavItem icon={<UserCircle size={18} />} label="AI Persona" />
            <NavItem icon={<Share2 size={18} />} label="Social Channels" />
          </div>
        </section>
      </nav>

      <div className="p-4 border-t border-slate-50">
        <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
          <div className="flex justify-between text-[11px] font-medium mb-1">
            <span className="text-slate-500">posts consumed</span>
            <span className="text-slate-900 font-bold">42 <span className="text-slate-400">/ 500</span></span>
          </div>
          <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
            <div className="h-full bg-yellow-400 w-[8%]"></div>
          </div>
          <button className="w-full mt-3 py-1.5 text-xs font-semibold bg-white border border-slate-200 rounded-lg hover:border-yellow-400 transition-all">
            Upgrade Plan
          </button>
        </div>
      </div>
    </aside>
  );
};

const NavItem: React.FC<{ icon: React.ReactNode; label: string; active?: boolean; onClick?: () => void }> = ({ icon, label, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all ${
      active ? 'bg-yellow-50 text-slate-900 font-bold border-l-4 border-yellow-400 -ml-1 shadow-sm' : 'text-slate-500 hover:bg-slate-50'
    }`}
  >
    <span className={active ? 'text-yellow-500' : ''}>{icon}</span>
    <span className="text-sm">{label}</span>
  </button>
);

export default Sidebar;
