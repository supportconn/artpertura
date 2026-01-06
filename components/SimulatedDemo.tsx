
import React, { useEffect } from 'react';

const SimulatedDemo: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 4500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-slate-900 rounded-[3rem] shadow-2xl overflow-hidden relative border-8 border-slate-800">
      <div className="absolute top-6 left-10 flex items-center gap-2">
        <div className="w-3 h-3 bg-rose-500 rounded-full animate-pulse"></div>
        <span className="text-white font-mono text-xs uppercase tracking-widest opacity-60">Live Simulation: Recording Session #CES-2026-01</span>
      </div>
      
      <div className="w-full max-w-lg aspect-square relative bg-white rounded-2xl shadow-inner p-4 overflow-hidden">
        <svg viewBox="0 0 500 500" className="w-full h-full fill-none">
          <path 
            className="simulated-stroke" 
            d="M150,200 Q250,50 350,200 T250,450 T150,200" 
            stroke="#4f46e5" 
            strokeWidth="8" 
            strokeLinecap="round" 
          />
          <circle 
            className="simulated-stroke" 
            cx="200" cy="220" r="15" 
            stroke="#ef4444" 
            strokeWidth="4" 
            style={{ animationDelay: '1.5s' }}
          />
          <circle 
            className="simulated-stroke" 
            cx="300" cy="220" r="15" 
            stroke="#ef4444" 
            strokeWidth="4" 
            style={{ animationDelay: '1.8s' }}
          />
          <path 
            className="simulated-stroke" 
            d="M180,350 Q250,300 320,350" 
            stroke="#10b981" 
            strokeWidth="6" 
            style={{ animationDelay: '2.5s' }}
          />
          <path 
            className="simulated-stroke" 
            d="M100,100 L400,400 M400,100 L100,400" 
            stroke="#eab308" 
            strokeWidth="2" 
            strokeOpacity="0.3"
            style={{ animationDelay: '3.5s' }}
          />
        </svg>

        <div className="absolute bottom-4 left-4 right-4 flex justify-between">
           <div className="flex gap-2">
             <div className="w-6 h-6 bg-indigo-600 rounded-full"></div>
             <div className="w-6 h-6 bg-emerald-500 rounded-full"></div>
             <div className="w-6 h-6 bg-rose-500 rounded-full opacity-40"></div>
           </div>
           <div className="text-[10px] font-black text-slate-300">USER EXPRESSING...</div>
        </div>
      </div>

      <div className="mt-8 text-white/40 text-sm font-medium tracking-tight text-center">
        Simulating user drawing behavior... <br/>
        <span className="text-white/20 italic">Capturing patterns for GoGoChart's Mental Health AI Framework</span>
      </div>
    </div>
  );
};

export default SimulatedDemo;
