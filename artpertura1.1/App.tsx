
import React, { useState } from 'react';
import { AppState, FullAnalysis, MOCK_ANALYSIS } from './types';
import ResultView from './components/ResultView';
import SimulatedDemo from './components/SimulatedDemo';

/**
 * AI&Hope Logo
 * Recreated from the provided image:
 * - Pencil pointing up-right
 * - Colorful petals at the top
 * - Pink heart line drawing
 */
const AIHopeLogo = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${className}`}>
    {/* Pencil Body */}
    <path d="M52 45 L65 32 C66 31 68 31 69 32 L73 36 C74 37 74 39 73 40 L60 53 L52 45Z" fill="#333" />
    <path d="M40 70 L52 45 L60 53 L40 70Z" fill="#eee" stroke="#333" strokeWidth="1.5" />
    <path d="M40 70 L43 65 M40 70 L46 68" stroke="#333" strokeWidth="1" />
    
    {/* Colorful Petals/Dots at the top */}
    <g transform="translate(68, 34)">
      <circle cx="-12" cy="-8" r="3.5" fill="#facc15" /> {/* Yellow */}
      <circle cx="-6" cy="-14" r="3.5" fill="#ea580c" /> {/* Orange */}
      <circle cx="4" cy="-14" r="3.5" fill="#dc2626" />  {/* Red */}
      <circle cx="12" cy="-8" r="3.5" fill="#d946ef" />  {/* Pink */}
      <circle cx="12" cy="4" r="3.5" fill="#2563eb" />   {/* Blue */}
      <circle cx="4" cy="10" r="3.5" fill="#16a34a" />   {/* Green */}
      <circle cx="-6" cy="10" r="3.5" fill="#84cc16" />  {/* Lime */}
    </g>

    {/* Heart and Line */}
    <path d="M40 70 Q30 80 20 75 Q10 70 15 60 Q20 50 40 70" stroke="#333" strokeWidth="1.5" fill="none" />
    <path d="M30 45 C28 40 32 38 35 40 C38 38 42 40 40 45 L35 50 L30 45Z" fill="#ec4899" />
    <path d="M35 50 Q45 55 52 45" stroke="#333" strokeWidth="1" strokeDasharray="2 2" fill="none" />
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
    window.open('https://getwaitlist.com/waitlist/32265', '_blank');
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
        <div className="max-w-7xl mx-auto px-6 h-24 flex justify-between items-center">
          <button onClick={handleReset} className="group flex items-center gap-4 transition-transform active:scale-95">
            <AIHopeLogo className="w-16 h-16 md:w-20 md:h-20" />
            <div className="flex flex-col text-left">
              <span className="font-black text-3xl md:text-4xl tracking-tighter leading-none text-[#1e293b] uppercase">AI&Hope</span>
              <span className="text-[10px] md:text-[11px] text-pink-500 font-black uppercase tracking-[0.25em] mt-1">Tech connects, care protects</span>
            </div>
          </button>
          
          <div className="hidden lg:flex items-center gap-10">
            <a href="#vision" className="text-sm font-black text-slate-400 hover:text-indigo-600 transition-colors uppercase tracking-widest">Vision</a>
            <a href="#workflow" className="text-sm font-black text-slate-400 hover:text-indigo-600 transition-colors uppercase tracking-widest">Process</a>
            <a href="#tech" className="text-sm font-black text-slate-400 hover:text-indigo-600 transition-colors uppercase tracking-widest">Technology</a>
            <button 
              onClick={handleJoinWaitlist}
              className="px-8 py-3 bg-indigo-600 text-white font-black rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 uppercase text-xs tracking-widest"
            >
              Join Waitlist
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-24">
        {gameState === 'landing' && (
          <div className="animate-in fade-in duration-700">
            {/* Hero Section */}
            <section className="relative pt-20 pb-12 px-6 overflow-hidden">
              <div className="max-w-7xl mx-auto text-center space-y-8 relative z-10">
                <div className="inline-flex items-center gap-3 px-5 py-2 bg-slate-900 text-white rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-4 shadow-xl">
                  <span className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></span>
                  The First AI Ecosystem for Mental Resilience
                </div>
                <h1 className="text-6xl md:text-[8.5rem] font-black leading-[0.85] tracking-tight text-slate-900">
                  Hope <br />
                  <span className="text-gradient">Connects Us.</span>
                </h1>
                <p className="text-xl md:text-2xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
                  Mapping the subconscious through creative expression. Soothing depression and identifying risk with clinical precision.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
                  <button 
                    onClick={handleJoinWaitlist}
                    className="group relative px-12 py-7 bg-indigo-600 text-white font-black text-xl rounded-[2.5rem] shadow-2xl hover:bg-indigo-700 transition-all hover:scale-105 uppercase tracking-tighter"
                  >
                    Join Waitlist
                    <span className="absolute -top-3 -right-3 px-3 py-1 bg-pink-500 text-[9px] rounded-full shadow-lg font-black uppercase">Open Beta</span>
                  </button>
                  <button 
                    onClick={handleStartDemo}
                    className="px-12 py-7 bg-white text-slate-900 font-black text-xl rounded-[2.5rem] border-2 border-slate-200 hover:border-slate-900 transition-all uppercase tracking-tighter"
                  >
                    Try the Demo
                  </button>
                </div>
              </div>
              <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-pink-100/30 rounded-full blur-[120px] -z-10 animate-pulse"></div>
              <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-indigo-100/20 rounded-full blur-[100px] -z-10"></div>
            </section>

            {/* Workflow Section (from PDF page 1) */}
            <section id="workflow" className="py-24 bg-white">
              <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 space-y-4">
                  <h2 className="text-5xl font-black text-slate-900 uppercase tracking-tighter">Your Journey with AI&Hope</h2>
                  <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Three Steps to Insight</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  <WorkflowStep 
                    num="01" 
                    title="Intelligent Guide" 
                    desc="Start with 5-10 tailored questions to establish your emotional baseline and prepare the subconscious for expression."
                    icon={<div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-2xl">📋</div>}
                  />
                  <WorkflowStep 
                    num="02" 
                    title="Expressive Drawing" 
                    desc="Our canvas monitors every stroke. Line thickness, shape geometry, and color saturation are mapped in real-time."
                    icon={<div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-2xl">🎨</div>}
                  />
                  <WorkflowStep 
                    num="03" 
                    title="Clinical Scanning" 
                    desc="Advanced AI scans your artwork for 6 clinical dimensions, yielding a deep Qualitative Estimation Matrix."
                    icon={<div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-2xl">🔍</div>}
                  />
                </div>
              </div>
            </section>

            {/* Vision Section (page 1/2) */}
            <section id="vision" className="py-20 bg-slate-50 border-y border-slate-100">
              <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                  <div className="relative">
                    <div className="aspect-[4/3] bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl relative group">
                      <img 
                        src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=1000" 
                        className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
                        alt="Creative Expression"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                      <div className="absolute bottom-10 left-10 text-white max-w-sm">
                        <span className="text-pink-400 font-black text-[10px] uppercase tracking-widest mb-2 block">Our Vision</span>
                        <h3 className="text-3xl font-black italic">"Tech connects, care protects."</h3>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-8">
                    <h2 className="text-5xl font-black tracking-tighter leading-none text-slate-900 uppercase">Art Therapy Logic</h2>
                    <p className="text-lg text-slate-500 font-medium leading-relaxed">
                      AI&Hope utilizes clinical art therapy principles where the "how" is more important than the "what."
                    </p>
                    <div className="grid grid-cols-1 gap-6">
                      <VisionFeature icon="📏" title="Line Linearity" desc="Stability vs. Chaos: We measure line shakiness and retracing to detect internal anxiety." />
                      <VisionFeature icon="🩸" title="Saturation Impact" desc="Filling colors and high-contrast choices correlate directly with psychological accuracy." />
                      <VisionFeature icon="👤" title="Pose & Expression" desc="Anatomical tilts and downcast eyes are scanned as key markers of mental exhaustion." />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Tech Pillars (page 2) */}
            <section id="tech" className="py-24 bg-white">
              <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 space-y-4">
                  <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">Technology Framework</h2>
                  <div className="w-16 h-1.5 bg-pink-500 mx-auto rounded-full"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <TechPillar num="01" title="Subconscious Logic" desc="Translating fragmented brushstrokes and light distribution into clinical markers of cognitive dissonance." tags={['Visual NLP', 'Sentiment', 'Rhythm']} />
                  <TechPillar num="02" title="Personal Sanctuary" desc="A secure, private library for your drawings and reports, enabling long-term trend tracking of your mental health." tags={['Gallery', 'Encryption', 'Privacy']} />
                  <TechPillar num="03" title="Professional Matrix" desc="Yielding a 6-dimensional Radar analysis used by care teams to assess risk level." tags={['Dashboard', 'Clinical Matrix', 'Radar']} />
                </div>
              </div>
            </section>

            {/* Conversion */}
            <section className="py-24 bg-slate-900 text-white text-center relative overflow-hidden">
               <div className="max-w-4xl mx-auto px-6 space-y-8 relative z-10">
                  <h2 className="text-6xl md:text-7xl font-black leading-none uppercase tracking-tighter italic">Care Protects.</h2>
                  <p className="text-xl opacity-80 leading-relaxed font-medium max-w-2xl mx-auto">
                    Join the waitlist to be among the first to experience the fusion of art therapy and empathetic artificial intelligence.
                  </p>
                  <div className="pt-8">
                    <button 
                      onClick={handleJoinWaitlist}
                      className="px-16 py-7 bg-pink-600 text-white font-black text-2xl rounded-full hover:bg-pink-700 transition-all uppercase tracking-tighter shadow-[0_0_50px_rgba(236,72,153,0.3)] hover:scale-105 active:scale-95"
                    >
                      Join Waitlist
                    </button>
                  </div>
               </div>
               <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 blur-[80px] rounded-full"></div>
               <div className="absolute bottom-0 left-0 w-80 h-80 bg-pink-500/10 blur-[100px] rounded-full"></div>
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
            <AIHopeLogo className="w-48 h-48 mx-auto animate-bounce" />
            <h2 className="text-3xl font-black text-slate-900 animate-pulse tracking-tight uppercase italic">Capturing Subconscious Patterns...</h2>
            <p className="text-slate-400 font-bold text-sm tracking-widest uppercase">Applying Qualitative Estimation Matrix</p>
          </div>
        )}

        {gameState === 'result' && analysis && (
          <div className="max-w-7xl mx-auto px-6 py-12">
            <ResultView analysis={analysis} userImage="DEMO_VISUAL" onReset={handleReset} />
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="pt-20 pb-10 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
             <div className="text-left max-w-sm space-y-8">
                <a href="https://gogochart.com/" target="_blank" rel="noopener noreferrer" className="block hover:opacity-80 transition-opacity">
                  <GoGoChartLogo />
                </a>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                   AI&Hope is an empathetic technology initiative by GoGoChart. "Tech connects, care protects."
                </p>
             </div>
             <div className="grid grid-cols-2 gap-20">
                <div className="space-y-6">
                  <h5 className="text-[9px] font-black text-pink-500 uppercase tracking-widest">Resources</h5>
                  <ul className="space-y-3">
                    <li><a href="https://gogochart.com/solutions/" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-slate-400 hover:text-white transition-colors">Support Hub</a></li>
                    <li><a href="https://gogochart.com/case-studies/" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-slate-400 hover:text-white transition-colors">Clinical Research</a></li>
                  </ul>
                </div>
                <div className="space-y-6">
                  <h5 className="text-[9px] font-black text-pink-500 uppercase tracking-widest">Connect</h5>
                  <ul className="space-y-3">
                    <li><a href="https://gogochart.com/contact-us/" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-slate-400 hover:text-white transition-colors">Contact Care Team</a></li>
                    <li><a href="https://gogochart.com/about-us/" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-slate-400 hover:text-white transition-colors">About Us</a></li>
                  </ul>
                </div>
             </div>
          </div>
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
               <AIHopeLogo className="w-12 h-12 opacity-40 grayscale" />
               <p className="text-[9px] text-slate-600 font-bold uppercase tracking-[0.15em]">© 2025 AI&Hope. Powered by GoGoChart Technology Limited.</p>
            </div>
            <p className="text-[8px] text-slate-700 max-w-sm text-center md:text-right leading-relaxed">
              AI&Hope is a qualitative indicator for art therapy purposes. It is not a clinical replacement. If you are in crisis, seek professional help immediately.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const WorkflowStep: React.FC<{ num: string; title: string; desc: string; icon: React.ReactNode }> = ({ num, title, desc, icon }) => (
  <div className="space-y-6 group">
    <div className="flex items-center gap-4">
       {icon}
       <span className="text-4xl font-black text-slate-100 group-hover:text-indigo-50 transition-colors">{num}</span>
    </div>
    <div className="space-y-2">
      <h4 className="text-xl font-black text-slate-900">{title}</h4>
      <p className="text-slate-500 font-medium leading-relaxed">{desc}</p>
    </div>
  </div>
);

const VisionFeature: React.FC<{ icon: string; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div className="flex gap-4 items-start group">
    <div className="text-2xl bg-white p-2.5 rounded-xl group-hover:bg-pink-50 transition-colors shadow-sm">{icon}</div>
    <div className="space-y-0.5">
      <h4 className="text-lg font-black text-slate-900">{title}</h4>
      <p className="text-sm text-slate-400 font-medium leading-relaxed">{desc}</p>
    </div>
  </div>
);

const TechPillar: React.FC<{ num: string; title: string; desc: string; tags: string[] }> = ({ num, title, desc, tags }) => (
  <div className="p-8 bg-white rounded-[2.5rem] shadow-lg border border-slate-100 hover:shadow-2xl transition-all h-full flex flex-col">
    <span className="text-[10px] font-black text-pink-500 uppercase tracking-[0.3em] mb-4">Pillar {num}</span>
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
