
import React from 'react';
import { 
  Trash2, 
  Edit3, 
  Facebook, 
  MoreVertical 
} from 'lucide-react';
import { MOCK_FLOWS } from '../constants';

const AutoFlowList: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-slate-50/50 text-[11px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100">
            <th className="px-6 py-4 font-bold">Pipeline Title</th>
            <th className="px-6 py-4 font-bold">AI Persona</th>
            <th className="px-6 py-4 font-bold">Content Type</th>
            <th className="px-6 py-4 font-bold">Source Context</th>
            <th className="px-6 py-4 font-bold text-center">Batch Size</th>
            <th className="px-6 py-4 font-bold">Frequency</th>
            <th className="px-6 py-4 font-bold text-center">Auto-Execution</th>
            <th className="px-6 py-4 font-bold text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-50">
          {MOCK_FLOWS.map((flow) => (
            <tr key={flow.id} className="group hover:bg-slate-50/80 transition-colors">
              <td className="px-6 py-5">
                <span className="text-sm font-medium text-slate-700">{flow.title}</span>
              </td>
              <td className="px-6 py-5">
                <div className="flex items-center gap-1.5">
                   <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center text-[11px] font-bold text-blue-600 border border-blue-200">
                     {flow.persona[0]}
                   </div>
                   <div className="flex -space-x-1">
                      {flow.platforms.map((p, idx) => (
                        <div key={idx} className="bg-white rounded-full p-0.5 shadow-sm">
                          {p === 'twitter' && <div className="w-4 h-4 bg-black rounded-full flex items-center justify-center text-[8px] text-white">𝕏</div>}
                          {p === 'facebook' && <Facebook size={14} className="text-blue-600 fill-blue-600" />}
                          {p === 'reddit' && <div className="w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center text-[8px] text-white font-bold">R</div>}
                        </div>
                      ))}
                   </div>
                </div>
              </td>
              <td className="px-6 py-5">
                <span className="px-2 py-0.5 bg-yellow-100 text-[10px] font-bold text-yellow-700 rounded-md uppercase">
                  {flow.type}
                </span>
              </td>
              <td className="px-6 py-5">
                <span className="text-sm text-slate-600">{flow.inspiration}</span>
              </td>
              <td className="px-6 py-5 text-center">
                <span className="text-sm font-bold text-slate-700">{flow.quantity}</span>
              </td>
              <td className="px-6 py-5">
                <span className="text-sm text-slate-600">{flow.frequency}</span>
              </td>
              <td className="px-6 py-5">
                <div className="flex justify-center">
                  <div className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" checked={flow.isActive} readOnly />
                    <div className="w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-yellow-400 shadow-inner"></div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-5">
                <div className="flex items-center justify-center gap-3">
                  <button className="text-slate-400 hover:text-red-500 transition-colors p-1 hover:bg-red-50 rounded-md">
                    <Trash2 size={16} />
                  </button>
                  <button className="text-slate-400 hover:text-slate-900 transition-colors p-1 hover:bg-slate-100 rounded-md">
                    <Edit3 size={16} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AutoFlowList;
