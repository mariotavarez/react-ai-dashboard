import clsx from 'clsx';
import { recentActivity } from '../data/mockData';
import { Activity } from '../types';

const typeConfig: Record<Activity['type'], { badge: string; label: string }> = {
  purchase: { badge: 'bg-emerald-500/10 text-emerald-400', label: 'Purchase' },
  signup:   { badge: 'bg-blue-500/10 text-blue-400',       label: 'Signup'   },
  upgrade:  { badge: 'bg-violet-500/10 text-violet-400',   label: 'Upgrade'  },
  cancel:   { badge: 'bg-red-500/10 text-red-400',         label: 'Cancelled'},
  support:  { badge: 'bg-orange-500/10 text-orange-400',   label: 'Support'  },
};

export function ActivityFeed() {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 h-full">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-white font-semibold">Recent Activity</h3>
        <button className="text-xs text-violet-400 hover:text-violet-300">View all</button>
      </div>
      <div className="space-y-4">
        {recentActivity.map((a) => {
          const cfg = typeConfig[a.type];
          return (
            <div key={a.id} className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-xs font-bold text-white flex-shrink-0">
                {a.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-300">
                  <span className="font-medium text-white">{a.user}</span> {a.action}{' '}
                  <span className="font-medium text-violet-400">{a.target}</span>
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <span className={clsx('text-xs px-1.5 py-0.5 rounded', cfg.badge)}>{cfg.label}</span>
                  <span className="text-xs text-gray-500">{a.time}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
