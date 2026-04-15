import { LayoutDashboard, BarChart3, Users, FileText, Settings, Bell, Zap, ChevronRight } from 'lucide-react';
import clsx from 'clsx';

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'analytics', label: 'Analytics', icon: BarChart3, badge: 3 },
  { id: 'users', label: 'Users', icon: Users },
  { id: 'reports', label: 'Reports', icon: FileText },
  { id: 'settings', label: 'Settings', icon: Settings },
];

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export function Sidebar({ activeSection, onSectionChange }: SidebarProps) {
  return (
    <aside className="w-64 bg-gray-900 border-r border-gray-800 flex flex-col h-screen fixed left-0 top-0">
      <div className="flex items-center gap-3 px-6 py-5 border-b border-gray-800">
        <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-lg flex items-center justify-center">
          <Zap size={18} className="text-white" />
        </div>
        <span className="text-white font-bold text-lg tracking-tight">NeuralMetrics</span>
      </div>
      <nav className="flex-1 px-3 py-6 space-y-1">
        {navItems.map(({ id, label, icon: Icon, badge }) => (
          <button
            key={id}
            onClick={() => onSectionChange(id)}
            className={clsx(
              'w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all',
              activeSection === id
                ? 'bg-violet-600/20 text-violet-400 border border-violet-500/30'
                : 'text-gray-400 hover:bg-gray-800 hover:text-white'
            )}
          >
            <Icon size={18} />
            <span className="flex-1 text-left">{label}</span>
            {badge && <span className="bg-violet-600 text-white text-xs px-1.5 py-0.5 rounded-full">{badge}</span>}
            {activeSection === id && <ChevronRight size={14} className="text-violet-400" />}
          </button>
        ))}
      </nav>
      <div className="px-3 py-4 border-t border-gray-800">
        <div className="bg-gradient-to-r from-violet-900/40 to-indigo-900/40 rounded-xl p-4 border border-violet-800/30">
          <div className="flex items-center gap-2 mb-2">
            <Bell size={14} className="text-violet-400" />
            <span className="text-xs font-semibold text-violet-400">AI Credits</span>
          </div>
          <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
            <div className="h-full w-3/4 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full" />
          </div>
          <p className="text-xs text-gray-400 mt-2">7,500 / 10,000 used</p>
        </div>
      </div>
    </aside>
  );
}
