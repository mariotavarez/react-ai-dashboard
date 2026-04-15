import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { TopBar } from './components/TopBar';
import { MetricCard } from './components/MetricCard';
import { RevenueChart } from './components/RevenueChart';
import { UserGrowthChart } from './components/UserGrowthChart';
import { ActivityFeed } from './components/ActivityFeed';
import { AiInsights } from './components/AiInsights';
import { metrics } from './data/mockData';

function App() {
  const [activeSection, setActiveSection] = useState('dashboard');
  return (
    <div className="flex h-screen bg-gray-950 text-white">
      <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
      <div className="flex-1 ml-64 flex flex-col overflow-hidden">
        <TopBar />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-white">Dashboard Overview</h1>
            <p className="text-gray-400 text-sm mt-1">Welcome back, Mario. Here's what's happening.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
            {metrics.map((m) => <MetricCard key={m.id} metric={m} />)}
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 mb-4">
            <div className="xl:col-span-2"><RevenueChart /></div>
            <div><AiInsights /></div>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
            <div className="xl:col-span-2"><UserGrowthChart /></div>
            <div><ActivityFeed /></div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
