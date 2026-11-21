import React from 'react';
import {
  LayoutDashboard, CheckSquare, Users, BarChart3,
  Clock, Zap,
} from 'lucide-react';

const features = [
  {
    icon: LayoutDashboard,
    title: 'Project Management',
    description:
      'Organize every project with boards, timelines, and milestones. Keep the full picture in one place.',
    color: 'text-purple-600',
    bg: 'bg-purple-50',
    border: 'border-purple-100',
  },
  {
    icon: CheckSquare,
    title: 'Task Tracking',
    description:
      'Create, assign, and prioritize tasks with ease. Never miss a deadline with smart reminders.',
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
    border: 'border-indigo-100',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description:
      'Comment, mention teammates, share files, and work together in real time without switching tools.',
    color: 'text-violet-600',
    bg: 'bg-violet-50',
    border: 'border-violet-100',
  },
  {
    icon: BarChart3,
    title: 'Progress Analytics',
    description:
      'Visual dashboards and reports that reveal team velocity, bottlenecks, and project health at a glance.',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
  },
  {
    icon: Clock,
    title: 'Deadline Management',
    description:
      'Smart deadline tracking with calendar views, Gantt charts, and automated alerts so you stay on schedule.',
    color: 'text-pink-600',
    bg: 'bg-pink-50',
    border: 'border-pink-100',
  },
  {
    icon: Zap,
    title: 'Real-time Updates',
    description:
      'Instant notifications keep every team member in sync. See changes live as they happen across projects.',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
  },
];

function FeatureCard({ icon: Icon, title, description, color, bg, border }) {
  return (
    <div
      className={`group relative bg-white rounded-2xl p-6 border ${border} card-shadow hover:card-shadow-hover hover:-translate-y-1 transition-all duration-300 cursor-default`}
    >
      <div className={`w-12 h-12 ${bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
        <Icon size={22} className={color} />
      </div>
      <h3 className="text-lg font-bold text-slate-800 mb-2">{title}</h3>
      <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
      <div className={`absolute bottom-0 left-0 right-0 h-0.5 ${bg.replace('50', '400')} rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}
        style={{ background: 'linear-gradient(90deg, #7c3aed, #4f46e5)' }} />
    </div>
  );
}

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-sm font-semibold mb-4">
            ✦ Powerful Features
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
            Everything You Need to{' '}
            <span className="gradient-text">Succeed</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            TaskFlow brings together the tools your team needs to plan smarter,
            collaborate better, and deliver results on time.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
