
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import PipelineDetailView from './components/PipelineDetailView';
import AllAgentsView from './components/AllAgentsView';
import { ViewType, FactoryCard } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>('dashboard');
  const [selectedPipeline, setSelectedPipeline] = useState<FactoryCard | null>(null);

  const handleOpenPipeline = (card: FactoryCard) => {
    setSelectedPipeline(card);
    setCurrentView('pipeline-detail');
  };

  const handleBackToDashboard = () => {
    setCurrentView('dashboard');
    setSelectedPipeline(null);
  };

  const renderContent = () => {
    switch (currentView) {
      case 'dashboard':
        return (
          <Dashboard 
            onCardClick={handleOpenPipeline} 
            onViewAll={() => setCurrentView('all-agents')} 
          />
        );
      case 'pipeline-detail':
        return (
          <PipelineDetailView 
            pipeline={selectedPipeline} 
            onBack={() => setCurrentView('all-agents')} 
          />
        );
      case 'all-agents':
        return (
          <AllAgentsView 
            onBack={handleBackToDashboard} 
            onCardClick={handleOpenPipeline}
          />
        );
      default:
        return <Dashboard onCardClick={handleOpenPipeline} onViewAll={() => setCurrentView('all-agents')} />;
    }
  };

  return (
    <div className="flex h-screen w-full bg-[#f8fafc] text-slate-800">
      <Sidebar 
        currentView={currentView} 
        onNavigate={(view) => setCurrentView(view)} 
      />
      <div className="flex flex-col flex-1 min-w-0">
        <Header />
        <main className="flex-1 overflow-y-auto custom-scrollbar">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default App;
