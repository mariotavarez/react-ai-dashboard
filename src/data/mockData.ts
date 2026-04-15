import { MetricData, ChartDataPoint, UserGrowthPoint, Activity, AiInsight } from '../types';

export const metrics: MetricData[] = [
  { id: '1', title: 'Total Revenue', value: '$2,847,392', change: 12.5, changeType: 'increase', icon: 'DollarSign', color: 'emerald' },
  { id: '2', title: 'Active Users', value: '148,291', change: 8.2, changeType: 'increase', icon: 'Users', color: 'blue' },
  { id: '3', title: 'Conversion Rate', value: '3.84%', change: 1.1, changeType: 'decrease', icon: 'TrendingUp', color: 'purple' },
  { id: '4', title: 'Avg. Session', value: '4m 32s', change: 6.7, changeType: 'increase', icon: 'Clock', color: 'orange' },
];

export const revenueData: ChartDataPoint[] = [
  { month: 'Jan', revenue: 186000, expenses: 142000, profit: 44000 },
  { month: 'Feb', revenue: 215000, expenses: 158000, profit: 57000 },
  { month: 'Mar', revenue: 248000, expenses: 171000, profit: 77000 },
  { month: 'Apr', revenue: 291000, expenses: 189000, profit: 102000 },
  { month: 'May', revenue: 312000, expenses: 201000, profit: 111000 },
  { month: 'Jun', revenue: 287000, expenses: 195000, profit: 92000 },
  { month: 'Jul', revenue: 341000, expenses: 214000, profit: 127000 },
  { month: 'Aug', revenue: 389000, expenses: 231000, profit: 158000 },
  { month: 'Sep', revenue: 428000, expenses: 248000, profit: 180000 },
  { month: 'Oct', revenue: 467000, expenses: 262000, profit: 205000 },
  { month: 'Nov', revenue: 512000, expenses: 278000, profit: 234000 },
  { month: 'Dec', revenue: 571000, expenses: 297000, profit: 274000 },
];

export const userGrowthData: UserGrowthPoint[] = [
  { week: 'W1', users: 4200, active: 3800, churned: 120 },
  { week: 'W2', users: 4800, active: 4200, churned: 145 },
  { week: 'W3', users: 5100, active: 4600, churned: 132 },
  { week: 'W4', users: 5800, active: 5100, churned: 168 },
  { week: 'W5', users: 6200, active: 5500, churned: 155 },
  { week: 'W6', users: 7100, active: 6300, churned: 178 },
  { week: 'W7', users: 7800, active: 7000, churned: 192 },
  { week: 'W8', users: 8900, active: 8100, churned: 201 },
];

export const recentActivity: Activity[] = [
  { id: '1', user: 'Sarah Chen', avatar: 'SC', action: 'upgraded to', target: 'Enterprise Plan', time: '2 min ago', type: 'upgrade' },
  { id: '2', user: 'Marcus Johnson', avatar: 'MJ', action: 'completed purchase', target: '$2,400 order', time: '15 min ago', type: 'purchase' },
  { id: '3', user: 'Elena Rodriguez', avatar: 'ER', action: 'signed up for', target: 'Pro Trial', time: '32 min ago', type: 'signup' },
  { id: '4', user: 'David Kim', avatar: 'DK', action: 'opened support ticket', target: '#4821', time: '1h ago', type: 'support' },
  { id: '5', user: 'Aria Patel', avatar: 'AP', action: 'cancelled subscription', target: 'Pro Plan', time: '2h ago', type: 'cancel' },
];

export const aiInsights: AiInsight[] = [
  {
    id: '1', title: 'Revenue spike predicted',
    description: 'Based on historical patterns, expect a 23% revenue increase in Q1. Consider pre-scaling infrastructure.',
    confidence: 87, impact: 'high', category: 'Revenue',
  },
  {
    id: '2', title: 'Churn risk detected',
    description: '340 enterprise users show early churn signals. Proactive outreach could recover ~$180K ARR.',
    confidence: 74, impact: 'high', category: 'Retention',
  },
  {
    id: '3', title: 'Optimization opportunity',
    description: 'Reducing checkout steps from 4 to 2 could improve conversion by an estimated 1.8%.',
    confidence: 68, impact: 'medium', category: 'Conversion',
  },
];
