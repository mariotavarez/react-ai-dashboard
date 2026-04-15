import { LayoutDashboard, BarChart3, Users, FileText, Settings, Zap } from 'lucide-react';
import { NavItem } from '../molecules/NavItem';
import { ProgressBar } from '../atoms/ProgressBar';

const NAV_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'analytics', label: 'Analytics',  icon: BarChart3, badge: 3 },
  { id: 'users',     label: 'Users',       icon: Users },
  { id: 'reports',   label: 'Reports',     icon: FileText },
  { id: 'settings',  label: 'Settings',    icon: Settings },
] as const;

interface SidebarProps {
  activeSection: string;
  onSectionChange: (id: string) => void;
}

export function Sidebar({ activeSection, onSectionChange }: SidebarProps) {
  return (
    <aside className="w-64 bg-gray-900 border-r border-gray-800 flex flex-col h-screen fixed left-0 top-0">
      {/* Logo */}
      <div className="flex items-center gap-3 px-6 py-5 border-b border-gray-800">
        <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-lg flex items-center justify-center">
          <Zap size={18} className="text-white" />
        </div>
        <span className="text-white font-bold text-lg tracking-tight">NeuralMetrics</span>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-6 space-y-1">
        {NAV_ITEMS.map((item) => (
          <NavItem
            key={item.id}
            label={item.label}
            icon={item.icon}
            active={activeSection === item.id}
            badge={'badge' in item ? (item as { badge: number }).badge : undefined}
            onClick={() => onSectionChange(item.id)}
          />
        ))}
      </nav>

      {/* AI Credits */}
      <div className="px-3 py-4 border-t border-gray-800">
        <div className="bg-gradient-to-r from-violet-900/40 to-indigo-900/40 rounded-xl p-4 border border-violet-800/30">
          <p className="text-xs font-semibold text-violet-400 mb-2">AI Credits</p>
          <ProgressBar value={75} color="violet" />
          <p className="text-xs text-gray-400 mt-2">7,500 / 10,000 used</p>
        </div>
      </div>
    </aside>
  );
}
