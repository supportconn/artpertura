
import React from 'react';
import { Globe, User } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="h-16 bg-white border-b border-slate-100 flex items-center justify-end px-6 gap-4">
      <button className="p-2 rounded-full hover:bg-slate-50 text-slate-500 transition-colors border border-slate-100">
        <Globe size={18} />
      </button>
      <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center overflow-hidden border border-slate-200 cursor-pointer hover:opacity-80 transition-opacity">
        <img src="https://picsum.photos/seed/profile/100/100" alt="profile" />
      </div>
    </header>
  );
};

export default Header;
