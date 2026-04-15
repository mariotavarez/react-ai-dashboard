import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { userGrowthData } from '../data/mockData';

export function UserGrowthChart() {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
      <div className="mb-6">
        <h3 className="text-white font-semibold">User Growth</h3>
        <p className="text-gray-400 text-sm">Weekly new, active, and churned users</p>
      </div>
      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={userGrowthData} barGap={2}>
          <CartesianGrid strokeDasharray="3 3" stroke="#1f2937"/>
          <XAxis dataKey="week" tick={{ fill:'#6b7280', fontSize:12 }} axisLine={false} tickLine={false}/>
          <YAxis tick={{ fill:'#6b7280', fontSize:12 }} axisLine={false} tickLine={false}/>
          <Tooltip contentStyle={{ backgroundColor:'#111827', border:'1px solid #1f2937', borderRadius:'8px' }}
            labelStyle={{ color:'#e5e7eb' }}/>
          <Legend wrapperStyle={{ paddingTop:'16px' }}/>
          <Bar dataKey="users" name="New Users" fill="#6366f1" radius={[4,4,0,0]}/>
          <Bar dataKey="active" name="Active" fill="#10b981" radius={[4,4,0,0]}/>
          <Bar dataKey="churned" name="Churned" fill="#ef4444" radius={[4,4,0,0]}/>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
