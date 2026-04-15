import { TrendingUp, TrendingDown, DollarSign, Users, Clock, BarChart2 } from 'lucide-react';
import clsx from 'clsx';
import { MetricData } from '../types';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  DollarSign, Users, TrendingUp, Clock, BarChart2,
};

const colorMap: Record<string, { bg: string; icon: string }> = {
  emerald: { bg: 'bg-emerald-500/10', icon: 'text-emerald-400' },
  blue: { bg: 'bg-blue-500/10', icon: 'text-blue-400' },
  purple: { bg: 'bg-purple-500/10', icon: 'text-purple-400' },
  orange: { bg: 'bg-orange-500/10', icon: 'text-orange-400' },
};

export function MetricCard({ metric }: { metric: MetricData }) {
  const Icon = iconMap[metric.icon] || BarChart2;
  const colors = colorMap[metric.color] || colorMap.blue;
  const isIncrease = metric.changeType === 'increase';
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-gray-700 transition-colors">
      <div className="flex items-start justify-between mb-4">
        <div className={clsx('p-2.5 rounded-lg', colors.bg)}>
          <Icon size={20} className={colors.icon} />
        </div>
        <span className={clsx('flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full',
          isIncrease ? 'bg-emerald-500/10 text-emerald-400' : 'bg-red-500/10 text-red-400')}>
          {isIncrease ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
          {metric.change}%
        </span>
      </div>
      <p className="text-2xl font-bold text-white mb-1">{metric.value}</p>
      <p className="text-sm text-gray-400">{metric.title}</p>
    </div>
  );
}
