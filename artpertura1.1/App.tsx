
import React, { useState } from 'react';
import { AppState, FullAnalysis, MOCK_ANALYSIS } from './types';
import ResultView from './components/ResultView';
import SimulatedDemo from './components/SimulatedDemo';

/**
 * High-fidelity SVG recreation of the Artpertura "Aperture A" Logo
 * Matches the provided image exactly:
 * - Circular aperture blades forming a subtle 'A'
 * - Indigo-to-Rose gradient palette
 */
const ArtperturaLogo = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${className} drop-shadow-sm`}>
    <defs>
      <linearGradient id="artpertura_grad_focused" x1="0" y1="100" x2="100" y2="0" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#1e1b4b" />
        <stop offset="40%" stopColor="#312e81" />
        <stop offset="75%" stopColor="#86198f" />
        <stop offset="100%" stopColor="#be123c" />
      </linearGradient>
    </defs>
    
    {/* Background Circle */}
    <circle cx="50" cy="50" r="48" fill="url(#artpertura_grad_focused)" />
    
    {/* Geometric Aperture Blades */}
    <g stroke="white" strokeWidth="0.8" opacity="0.5">
      {[...Array(9)].map((_, i) => (
        <path key={i} d="M50 2 L50 98" transform={`rotate(${i * 40} 50 50)`} />
      ))}
    </g>

    {/* The Central Light Aperture */}
    <circle cx="50" cy="50" r="14" fill="white" fillOpacity="0.1" />
    <circle cx="50" cy="50" r="6" fill="white" />
    
    {/* Outer 'A' Leg structure using the same gradient */}
    <path d="M18 92 L50 18 L82 92" stroke="url(#artpertura_grad_focused)" strokeWidth="16" fill="none" />
    <path d="M18 92 L50 18 L82 92" stroke="white" strokeWidth="1" strokeOpacity="0.2" fill="none" />
  </svg>
);

// High-fidelity GoGoChart Logo
const GoGoChartLogo = ({ className = "" }: { className?: string }) => (
  <div className={`flex flex-col font-black tracking-[0.12em] leading-none select-none ${className}`}>
    <div className="text-2xl text-white">GOGO</div>
    <div className="text-2xl text-white flex items-center">
      CH<span className="text-[#00df9a] italic -skew-x-12 inline-block mx-0.5">/</span>RT
    </div>
  </div>
);

const App: React.FC = () => {
  const [gameState, setGameState] = useState<AppState>('landing');
  const [analysis, setAnalysis] = useState<FullAnalysis | null>(null);

  const handleJoinWaitlist = () => {
    window.open('https://gogochart.com/contact-us/', '_blank');
  };

  const handleStartDemo = () => {
    setGameState('simulating');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSimulationComplete = () => {
    setGameState('scanning');
    setTimeout(() => {
      setAnalysis(MOCK_ANALYSIS);
      setGameState('result');
    }, 2500);
  };

  const handleReset = () => {
    setGameState('landing');
    setAnalysis(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#fcfaff] text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-xl z-50 border-b border-slate-100/60">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <button onClick={handleReset} className="group flex items-center gap-2 transition-transform active:scale-95">
            <ArtperturaLogo className="w-14 h-11" />
            <div className="flex flex-col text-left">
              <span className="font-black text-2xl tracking-tighter leading-none text-[#1e293b] uppercase">ARTPERTURA</span>
              <span className="text-[9px] text-indigo-500 font-black uppercase tracking-[0.25em] mt-0.5">Subconscious AI by GoGoChart</span>
            </div>
          </button>
          
          <div className="hidden lg:flex items-center gap-10">
            <a href="#vision" className="text-sm font-black text-slate-400 hover:text-indigo-600 transition-colors uppercase tracking-widest">Vision</a>
            <a href="#tech" className="text-sm font-black text-slate-400 hover:text-indigo-600 transition-colors uppercase tracking-widest">Technology</a>
            <button 
              onClick={handleJoinWaitlist}
              className="px-6 py-2.5 bg-indigo-600 text-white font-black rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 uppercase text-xs tracking-widest"
            >
              Join Waitlist
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        {gameState === 'landing' && (
          <div className="animate-in fade-in duration-700">
            {/* Hero Section */}
            <section className="relative pt-20 pb-12 px-6 overflow-hidden">
              <div className="max-w-7xl mx-auto text-center space-y-8 relative z-10">
                <div className="inline-flex items-center gap-3 px-5 py-2 bg-slate-900 text-white rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-4 shadow-xl">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                  CES 2026 Innovation Showcase
                </div>
                <h1 className="text-6xl md:text-[8.5rem] font-black leading-[0.85] tracking-tight text-slate-900">
                  Revealing <br />
                  <span className="text-gradient">The Unspoken.</span>
                </h1>
                <p className="text-xl md:text-2xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
                  The first AI ecosystem that maps the subconscious through the kinetic energy of digital expression.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
                  <button 
                    onClick={handleJoinWaitlist}
                    className="group relative px-12 py-7 bg-indigo-600 text-white font-black text-xl rounded-[2.5rem] shadow-2xl hover:bg-indigo-700 transition-all hover:scale-105 uppercase tracking-tighter"
                  >
                    Join the Waitlist
                    <span className="absolute -top-3 -right-3 px-3 py-1 bg-rose-500 text-[9px] rounded-full shadow-lg font-black uppercase">Limited Beta</span>
                  </button>
                  <button 
                    onClick={handleStartDemo}
                    className="px-12 py-7 bg-white text-slate-900 font-black text-xl rounded-[2.5rem] border-2 border-slate-200 hover:border-slate-900 transition-all uppercase tracking-tighter"
                  >
                    Product Demo
                  </button>
                </div>
              </div>
              <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-indigo-100/30 rounded-full blur-[120px] -z-10 animate-pulse"></div>
            </section>

            {/* Vision Section */}
            <section id="vision" className="py-20 bg-white border-y border-slate-50">
              <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                  <div className="relative">
                    <div className="aspect-square bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl relative group">
                      <img 
                        src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=1000" 
                        className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
                        alt="Behavioral Analysis"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                      <div className="absolute bottom-10 left-10 text-white max-w-sm">
                        <span className="text-indigo-400 font-black text-[10px] uppercase tracking-widest mb-2 block">Our Methodology</span>
                        <h3 className="text-3xl font-black italic">Extracting truth from the micro-kinetics of art.</h3>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-8">
                    <h2 className="text-5xl font-black tracking-tighter leading-none text-slate-900 uppercase">Qualitative Estimation</h2>
                    <p className="text-lg text-slate-500 font-medium leading-relaxed">
                      Artpertura measures the micro-cadence and spatial tension of every brushstroke. Our proprietary algorithm identifies sub-clinical markers that traditional verbal diagnostics often miss.
                    </p>
                    <div className="grid grid-cols-1 gap-6">
                      <VisionFeature icon="🧠" title="Cognitive Mapping" desc="Analyzing latency in creation to detect underlying cognitive dissonance." />
                      <VisionFeature icon="⚡" title="Kinetic Tracking" desc="Quantifying stroke velocity and pressure profiles for emotional markers." />
                      <VisionFeature icon="🔍" title="Pattern Analysis" desc="Synthesizing visual output with established psychiatric frameworks." />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Tech Pillars */}
            <section id="tech" className="py-20 bg-slate-50">
              <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12 space-y-4">
                  <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">Technology Ecosystem</h2>
                  <div className="w-16 h-1.5 bg-indigo-600 mx-auto rounded-full"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <TechPillar num="01" title="Behavioral Biometrics" desc="Building a unique emotional profile through real-time kinetic tracking." tags={['Velocity', 'Tremor', 'Flow']} />
                  <TechPillar num="02" title="Neural Mapping" desc="Mapping chromatic intensity to identify repressed emotional states." tags={['Hue Logic', 'Luminance']} />
                  <TechPillar num="03" title="Professional Insight" desc="Generating clinical-grade datasets for mental health specialists." tags={['API Export', 'Diagnostic Support']} />
                </div>
              </div>
            </section>

            {/* Focused Conversion */}
            <section className="py-20 bg-indigo-600 text-white text-center">
               <div className="max-w-4xl mx-auto px-6 space-y-8">
                  <h2 className="text-6xl font-black leading-none uppercase tracking-tighter">Secure Early Access.</h2>
                  <p className="text-xl opacity-90 leading-relaxed font-medium">
                    Be at the forefront of the digital art therapy revolution. Secure your position in the 2025 Professional Beta.
                  </p>
                  <div className="pt-4">
                    <button 
                      onClick={handleJoinWaitlist}
                      className="px-12 py-6 bg-white text-indigo-900 font-black text-xl rounded-full hover:bg-slate-100 transition-all uppercase tracking-tighter shadow-2xl hover:scale-105 active:scale-95"
                    >
                      Join waitlist
                    </button>
                  </div>
               </div>
            </section>
          </div>
        )}

        {gameState === 'simulating' && (
          <div className="max-w-4xl mx-auto px-6 py-12">
            <SimulatedDemo onComplete={handleSimulationComplete} />
          </div>
        )}

        {gameState === 'scanning' && (
          <div className="max-w-4xl mx-auto py-24 text-center space-y-8">
            <ArtperturaLogo className="w-48 h-36 mx-auto animate-pulse" />
            <h2 className="text-3xl font-black text-indigo-950 animate-pulse tracking-tight uppercase italic">Quantifying Insights...</h2>
          </div>
        )}

        {gameState === 'result' && analysis && (
          <div className="max-w-7xl mx-auto px-6 py-12">
            <ResultView analysis={analysis} userImage="DEMO_VISUAL" onReset={handleReset} />
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="pt-16 pb-10 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
             <div className="text-left max-w-sm space-y-8">
                <a href="https://gogochart.com/" target="_blank" rel="noopener noreferrer" className="block hover:opacity-80 transition-opacity">
                  <GoGoChartLogo />
                </a>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                   Artpertura is a proprietary technology project by GoGoChart. Reimagining the intersection of AI and mental health diagnostics.
                </p>
             </div>
             <div className="grid grid-cols-2 gap-20">
                <div className="space-y-6">
                  <h5 className="text-[9px] font-black text-indigo-500 uppercase tracking-widest">Global Labs</h5>
                  <ul className="space-y-3">
                    <li><a href="https://gogochart.com/solutions/" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-slate-400 hover:text-white transition-colors">Solutions</a></li>
                    <li><a href="https://gogochart.com/case-studies/" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-slate-400 hover:text-white transition-colors">Case Studies</a></li>
                  </ul>
                </div>
                <div className="space-y-6">
                  <h5 className="text-[9px] font-black text-indigo-500 uppercase tracking-widest">Connect</h5>
                  <ul className="space-y-3">
                    <li><a href="https://gogochart.com/contact-us/" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-slate-400 hover:text-white transition-colors">Contact Us</a></li>
                    <li><a href="https://gogochart.com/about-us/" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-slate-400 hover:text-white transition-colors">About Us</a></li>
                  </ul>
                </div>
             </div>
          </div>
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
               <ArtperturaLogo className="w-12 h-9 opacity-40" />
               <p className="text-[9px] text-slate-600 font-bold uppercase tracking-[0.15em]">© 2025 GoGoChart Technology Limited. All Rights Reserved.</p>
            </div>
            <p className="text-[8px] text-slate-700 max-w-sm text-center md:text-right leading-relaxed">
              CES 2026 Showcase Edition. Artpertura is an estimation marker framework. Not a substitute for clinical psychiatric advice.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const VisionFeature: React.FC<{ icon: string; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div className="flex gap-4 items-start group">
    <div className="text-2xl bg-slate-50 p-2.5 rounded-xl group-hover:bg-indigo-50 transition-colors">{icon}</div>
    <div className="space-y-0.5">
      <h4 className="text-lg font-black text-slate-900">{title}</h4>
      <p className="text-sm text-slate-400 font-medium leading-relaxed">{desc}</p>
    </div>
  </div>
);

const TechPillar: React.FC<{ num: string; title: string; desc: string; tags: string[] }> = ({ num, title, desc, tags }) => (
  <div className="p-8 bg-white rounded-[2.5rem] shadow-lg border border-slate-100 hover:shadow-2xl transition-all h-full flex flex-col">
    <span className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.3em] mb-4">Metric {num}</span>
    <h3 className="text-2xl font-black text-slate-900 mb-4">{title}</h3>
    <p className="text-slate-500 font-medium text-sm leading-relaxed mb-6 flex-1">{desc}</p>
    <div className="flex flex-wrap gap-2">
      {tags.map(tag => (
        <span key={tag} className="px-2.5 py-1 bg-slate-50 text-slate-400 text-[8px] font-black rounded-full uppercase tracking-widest">{tag}</span>
      ))}
    </div>
  </div>
);

export default App;
