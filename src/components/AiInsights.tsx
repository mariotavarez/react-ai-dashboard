import clsx from 'clsx';
import { Sparkles, AlertCircle, TrendingUp, Target } from 'lucide-react';
import { aiInsights } from '../data/mockData';
import { AiInsight } from '../types';

const impactCfg: Record<AiInsight['impact'], { color: string; label: string }> = {
  high:   { color: 'text-red-400 bg-red-500/10',     label: 'High Impact'   },
  medium: { color: 'text-orange-400 bg-orange-500/10', label: 'Medium Impact' },
  low:    { color: 'text-blue-400 bg-blue-500/10',   label: 'Low Impact'    },
};

const catIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Revenue: TrendingUp, Retention: AlertCircle, Conversion: Target,
};

export function AiInsights() {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 h-full">
      <div className="flex items-center gap-2 mb-5">
        <div className="p-1.5 bg-violet-500/10 rounded-lg">
          <Sparkles size={16} className="text-violet-400" />
        </div>
        <h3 className="text-white font-semibold">AI Insights</h3>
        <span className="ml-auto text-xs bg-violet-600/20 text-violet-400 px-2 py-0.5 rounded-full border border-violet-500/30">Live</span>
      </div>
      <div className="space-y-3">
        {aiInsights.map((insight) => {
          const impact = impactCfg[insight.impact];
          const Icon = catIcons[insight.category] || Target;
          return (
            <div key={insight.id} className="p-4 bg-gray-800/50 border border-gray-700/50 rounded-xl hover:border-violet-500/30 transition-colors cursor-pointer">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-gray-700 rounded-lg flex-shrink-0">
                  <Icon size={14} className="text-gray-300" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <span className="text-sm font-medium text-white">{insight.title}</span>
                    <span className={clsx('text-xs px-1.5 py-0.5 rounded font-medium', impact.color)}>{impact.label}</span>
                  </div>
                  <p className="text-xs text-gray-400 mb-3">{insight.description}</p>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-1.5 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full"
                        style={{ width: `${insight.confidence}%` }} />
                    </div>
                    <span className="text-xs text-gray-400 whitespace-nowrap">{insight.confidence}% confident</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
