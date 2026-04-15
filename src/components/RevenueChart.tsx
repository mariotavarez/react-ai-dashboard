import { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { revenueData } from '../data/mockData';

const fmt = (v: number) => `$${(v / 1000).toFixed(0)}k`;

export function RevenueChart() {
  const [active, setActive] = useState('1Y');
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-white font-semibold">Revenue Overview</h3>
          <p className="text-gray-400 text-sm">Annual revenue and profit</p>
        </div>
        <div className="flex gap-1">
          {['1M','3M','6M','1Y'].map((p) => (
            <button key={p} onClick={() => setActive(p)}
              className={active === p
                ? 'px-3 py-1 text-xs bg-violet-600 text-white rounded-md'
                : 'px-3 py-1 text-xs text-gray-400 hover:text-white rounded-md hover:bg-gray-800'}>
              {p}
            </button>
          ))}
        </div>
      </div>
      <ResponsiveContainer width="100%" height={280}>
        <AreaChart data={revenueData}>
          <defs>
            <linearGradient id="gRev" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="gProf" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#1f2937"/>
          <XAxis dataKey="month" tick={{ fill:'#6b7280', fontSize:12 }} axisLine={false} tickLine={false}/>
          <YAxis tickFormatter={fmt} tick={{ fill:'#6b7280', fontSize:12 }} axisLine={false} tickLine={false}/>
          <Tooltip contentStyle={{ backgroundColor:'#111827', border:'1px solid #1f2937', borderRadius:'8px' }}
            labelStyle={{ color:'#e5e7eb' }} formatter={(v:number) => [`$${v.toLocaleString()}`,'']}/>
          <Legend wrapperStyle={{ paddingTop:'16px' }}/>
          <Area type="monotone" dataKey="revenue" name="Revenue" stroke="#8b5cf6" fill="url(#gRev)" strokeWidth={2}/>
          <Area type="monotone" dataKey="profit" name="Profit" stroke="#10b981" fill="url(#gProf)" strokeWidth={2}/>
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
