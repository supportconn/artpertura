
import React from 'react';
import { FullAnalysis } from '../types';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer
} from 'recharts';

interface ResultViewProps {
  analysis: FullAnalysis;
  userImage: string;
  onReset: () => void;
}

const ResultView: React.FC<ResultViewProps> = ({ analysis, userImage, onReset }) => {
  const chartData = [
    { name: 'Texture', value: analysis.textureAndStyle.percentage },
    { name: 'Light', value: analysis.lightAndShadow.percentage },
    { name: 'Lines', value: analysis.lines.percentage },
    { name: 'Expression', value: analysis.poseAndExpression.percentage },
    { name: 'Atmosphere', value: analysis.overallAtmosphere.percentage },
    { name: 'Color', value: analysis.colorIntensity.percentage },
  ];

  const dimensions = [
    { id: 'textureAndStyle', label: 'Texture & Style', ...analysis.textureAndStyle, borderColor: 'border-indigo-500' },
    { id: 'lightAndShadow', label: 'Light & Shadow', ...analysis.lightAndShadow, borderColor: 'border-purple-500' },
    { id: 'lines', label: 'Linearity', ...analysis.lines, borderColor: 'border-blue-500' },
    { id: 'poseAndExpression', label: 'Pose & Expression', ...analysis.poseAndExpression, borderColor: 'border-rose-500' },
    { id: 'overallAtmosphere', label: 'Atmosphere', ...analysis.overallAtmosphere, borderColor: 'border-emerald-500' },
    { id: 'colorIntensity', label: 'Color Intensity', ...analysis.colorIntensity, borderColor: 'border-amber-500' },
  ];

  return (
    <div className="space-y-16 pb-24">
      <div className="text-center space-y-4">
        <div className="inline-block px-4 py-1 bg-emerald-50 text-emerald-600 rounded-full text-[10px] font-black uppercase tracking-widest mb-2">Analysis Complete</div>
        <h2 className="text-6xl font-black text-slate-900">Qualitative Report</h2>
        <p className="text-xl text-slate-400 font-medium italic">AI&Hope Summary #EST-2025-ACTIVE</p>
      </div>

      <div className="flex flex-col xl:flex-row gap-16">
        <div className="w-full xl:w-[450px] space-y-10">
           <div className="bg-white p-8 rounded-[3rem] shadow-2xl border border-slate-100/50">
             <h3 className="text-xl font-black mb-6 flex items-center gap-3">
               <span className="w-3 h-3 bg-indigo-500 rounded-full animate-pulse"></span>
               Input Visual
             </h3>
             <div className="w-full aspect-square bg-slate-50 rounded-2xl flex items-center justify-center p-4">
                <svg viewBox="0 0 500 500" className="w-full h-full fill-none opacity-80">
                  <path d="M150,200 Q250,50 350,200 T250,450 T150,200" stroke="#4f46e5" strokeWidth="8" />
                  <circle cx="200" cy="220" r="15" stroke="#ef4444" strokeWidth="4" />
                  <circle cx="300" cy="220" r="15" stroke="#ef4444" strokeWidth="4" />
                  <path d="M180,350 Q250,300 320,350" stroke="#10b981" strokeWidth="6" />
                </svg>
             </div>
           </div>

           <div className="bg-slate-900 p-10 rounded-[3rem] shadow-2xl text-white">
             <h3 className="text-xl font-black mb-8 flex items-center gap-3">
               <span className="w-3 h-3 bg-indigo-400 rounded-full"></span>
               Estimation Matrix
             </h3>
             <div className="h-64">
               <ResponsiveContainer width="100%" height="100%">
                 <RadarChart data={chartData}>
                   <PolarGrid stroke="#334155" />
                   <PolarAngleAxis dataKey="name" tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 700 }} />
                   <PolarRadiusAxis domain={[0, 40]} axisLine={false} tick={false} />
                   <Radar
                     name="Estimation"
                     dataKey="value"
                     stroke="#6366f1"
                     fill="#6366f1"
                     fillOpacity={0.6}
                   />
                 </RadarChart>
               </ResponsiveContainer>
             </div>
           </div>
        </div>

        <div className="flex-1 space-y-12">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {dimensions.map((dim) => (
                <div key={dim.id} className={`glass-card p-8 rounded-[2rem] shadow-xl border-t-8 ${dim.borderColor} hover:translate-y-[-6px] transition-all`}>
                  <div className="flex justify-between items-start mb-6">
                     <div>
                       <h4 className="text-xl font-black text-slate-800">{dim.label}</h4>
                       <span className="text-3xl font-black text-indigo-600">{dim.percentage}%</span>
                     </div>
                  </div>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Analysis</p>
                      <p className="text-base text-slate-600 leading-relaxed font-semibold">{dim.analysis}</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">Symbolism</p>
                      <p className="text-base text-indigo-700 leading-relaxed font-black italic">{dim.symbolism}</p>
                    </div>
                  </div>
                </div>
              ))}
           </div>

           <div className="p-10 bg-indigo-50 rounded-[3rem] border-2 border-dashed border-indigo-200 text-center space-y-6">
              <h3 className="text-3xl font-black text-indigo-900 tracking-tight">AI Diagnostic Insight</h3>
              <p className="text-lg text-indigo-700 font-medium max-w-2xl mx-auto italic leading-relaxed">
                "The visual markers identified by AI&Hope align with clinical markers of emotional withdrawal. Our 'Tech connects, care protects' framework bridges the gap between digital expression and mental wellness."
              </p>
              <div className="flex justify-center gap-4">
                 <span className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs font-black uppercase tracking-widest shadow-lg">Actionable Insight</span>
                 <span className="px-4 py-2 bg-white text-indigo-600 rounded-xl text-xs font-black uppercase tracking-widest border border-indigo-100">AI&Hope Finalized</span>
              </div>
           </div>
        </div>
      </div>

      <div className="flex justify-center pt-8">
        <button
          onClick={onReset}
          className="px-20 py-6 bg-slate-900 text-white font-black text-2xl rounded-3xl shadow-2xl hover:bg-black transition-all hover:scale-105 active:scale-95"
        >
          Return to Overview
        </button>
      </div>
    </div>
  );
};

export default ResultView;
