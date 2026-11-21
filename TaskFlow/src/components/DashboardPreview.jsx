import React, { useState } from 'react';
import {
  LayoutDashboard, CheckSquare, FolderOpen, Bell,
  Users, TrendingUp, Circle, ChevronRight, MoreHorizontal,
} from 'lucide-react';

const projects = [
  { name: 'Website Redesign', progress: 72, color: 'bg-purple-500', tasks: 18, done: 13 },
  { name: 'Mobile App v2.0', progress: 45, color: 'bg-indigo-500', tasks: 24, done: 11 },
  { name: 'Marketing Campaign', progress: 90, color: 'bg-violet-500', tasks: 10, done: 9 },
];

const activities = [
  { user: 'SL', name: 'Sarah L.', action: 'completed', task: 'Homepage wireframe', time: '2m ago', color: 'bg-purple-500' },
  { user: 'MK', name: 'Mike K.', action: 'assigned', task: 'API integration', time: '15m ago', color: 'bg-indigo-500' },
  { user: 'AJ', name: 'Amy J.', action: 'commented on', task: 'User testing plan', time: '1h ago', color: 'bg-violet-500' },
  { user: 'RD', name: 'Ryan D.', action: 'started', task: 'Performance audit', time: '2h ago', color: 'bg-blue-500' },
];

const stats = [
  { label: 'Total Projects', value: '24', icon: FolderOpen, change: '+3', color: 'text-purple-600', bg: 'bg-purple-50' },
  { label: 'Active Tasks', value: '142', icon: CheckSquare, change: '+12', color: 'text-indigo-600', bg: 'bg-indigo-50' },
  { label: 'Completed', value: '389', icon: TrendingUp, change: '+28', color: 'text-green-600', bg: 'bg-green-50' },
  { label: 'Team Members', value: '18', icon: Users, change: '+2', color: 'text-violet-600', bg: 'bg-violet-50' },
];

function MiniChart() {
  const bars = [60, 80, 55, 90, 70, 95, 75, 88, 65, 92, 78, 85];
  return (
    <div className="flex items-end gap-1 h-16">
      {bars.map((h, i) => (
        <div
          key={i}
          className="flex-1 rounded-t-sm transition-all duration-300"
          style={{
            height: `${h}%`,
            background: i === bars.length - 1
              ? 'linear-gradient(180deg, #7c3aed, #4f46e5)'
              : `rgba(124,58,237,${0.15 + (i / bars.length) * 0.3})`,
          }}
        />
      ))}
    </div>
  );
}

export default function DashboardPreview() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="bg-white rounded-3xl shadow-2xl border border-purple-100 overflow-hidden w-full">
      {/* Dashboard Header */}
      <div className="gradient-bg px-5 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
            <LayoutDashboard size={16} className="text-white" />
          </div>
          <div>
            <p className="text-white font-semibold text-sm">TaskFlow Dashboard</p>
            <p className="text-purple-200 text-xs">Good morning, Sarah 👋</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="relative w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors">
            <Bell size={14} className="text-white" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-400 rounded-full" />
          </button>
          <div className="w-8 h-8 rounded-lg bg-white/90 flex items-center justify-center">
            <span className="text-xs font-bold text-purple-700">SL</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-100 px-4 bg-slate-50/60">
        {['overview', 'projects', 'activity'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-3 text-xs font-semibold capitalize transition-all duration-200 border-b-2 ${
              activeTab === tab
                ? 'text-purple-600 border-purple-600'
                : 'text-slate-400 border-transparent hover:text-slate-600'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="p-4 space-y-4">
        {/* Stats Row */}
        <div className="grid grid-cols-2 gap-3">
          {stats.map((stat) => (
            <div key={stat.label} className={`${stat.bg} rounded-xl p-3 flex items-center gap-3`}>
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm">
                <stat.icon size={14} className={stat.color} />
              </div>
              <div>
                <p className="text-xs text-slate-500 leading-none mb-0.5">{stat.label}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-lg font-bold text-slate-800 leading-none">{stat.value}</span>
                  <span className="text-xs text-green-500 font-semibold">{stat.change}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Progress Chart */}
        <div className="bg-slate-50 rounded-xl p-3">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-slate-700">Task Completion (12 weeks)</span>
            <span className="text-xs font-bold text-purple-600">+18% ↑</span>
          </div>
          <MiniChart />
        </div>

        {/* Projects */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-slate-700">Active Projects</span>
            <button className="text-xs text-purple-600 font-semibold flex items-center gap-1 hover:gap-2 transition-all">
              View all <ChevronRight size={12} />
            </button>
          </div>
          <div className="space-y-2.5">
            {projects.map((proj) => (
              <div key={proj.name} className="flex items-center gap-3 group">
                <div className={`w-2 h-2 rounded-full ${proj.color} flex-shrink-0`} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-medium text-slate-700 truncate">{proj.name}</span>
                    <span className="text-xs text-slate-400 ml-2 flex-shrink-0">{proj.done}/{proj.tasks}</span>
                  </div>
                  <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${proj.color} rounded-full transition-all duration-700`}
                      style={{ width: `${proj.progress}%` }}
                    />
                  </div>
                </div>
                <span className="text-xs font-bold text-slate-500 w-8 text-right">{proj.progress}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-slate-700">Recent Activity</span>
            <MoreHorizontal size={14} className="text-slate-400" />
          </div>
          <div className="space-y-2">
            {activities.map((act, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <div className={`w-6 h-6 rounded-full ${act.color} flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white text-[9px] font-bold">{act.user}</span>
                </div>
                <p className="text-xs text-slate-600 flex-1 leading-tight">
                  <span className="font-semibold">{act.name}</span> {act.action}{' '}
                  <span className="text-purple-600 font-medium">{act.task}</span>
                </p>
                <span className="text-xs text-slate-400 flex-shrink-0">{act.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
