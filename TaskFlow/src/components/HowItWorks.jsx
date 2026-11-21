import React from 'react';
import { FolderPlus, UserPlus, TrendingUp, ArrowRight } from 'lucide-react';

const steps = [
  {
    step: '01',
    icon: FolderPlus,
    title: 'Create Your Project',
    description:
      'Set up your project in seconds. Define goals, milestones, and timelines with our intuitive project builder.',
    color: 'text-purple-600',
    bg: 'bg-purple-50',
    iconBg: 'bg-purple-600',
  },
  {
    step: '02',
    icon: UserPlus,
    title: 'Assign Tasks to Your Team',
    description:
      'Invite teammates, assign tasks with priorities and due dates, and keep everyone aligned on what matters.',
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
    iconBg: 'bg-indigo-600',
  },
  {
    step: '03',
    icon: TrendingUp,
    title: 'Track Progress & Achieve Goals',
    description:
      'Monitor real-time progress with dashboards, analytics, and reports. Celebrate wins as you hit every goal.',
    color: 'text-violet-600',
    bg: 'bg-violet-50',
    iconBg: 'bg-violet-600',
  },
];

export default function HowItWorks() {
  return (
    <section
      className="py-24"
      style={{ background: 'linear-gradient(145deg, #faf9ff 0%, #eef2ff 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-sm font-semibold mb-4">
            ✦ How It Works
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
            Up and Running in{' '}
            <span className="gradient-text">3 Simple Steps</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            No steep learning curve. Start managing your projects like a pro in
            minutes, not hours.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector lines (desktop only) */}
          <div className="hidden md:block absolute top-16 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-purple-200 via-indigo-300 to-violet-200 z-0" />

          {steps.map((step, idx) => (
            <div key={step.step} className="relative z-10 flex flex-col items-center text-center group">
              {/* Step number badge */}
              <div className="relative mb-6">
                <div className={`w-16 h-16 rounded-2xl ${step.iconBg} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                  <step.icon size={28} className="text-white" />
                </div>
                <div className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-white border-2 border-purple-200 flex items-center justify-center">
                  <span className="text-xs font-bold gradient-text">{step.step}</span>
                </div>
              </div>

              <div className={`bg-white rounded-2xl p-6 border border-purple-100 card-shadow group-hover:card-shadow-hover group-hover:-translate-y-1 transition-all duration-300 w-full`}>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{step.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{step.description}</p>
              </div>

              {/* Mobile arrow */}
              {idx < steps.length - 1 && (
                <div className="md:hidden mt-6 text-purple-300">
                  <ArrowRight size={24} className="rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <button
            onClick={() => alert('Creating your free account...')}
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white gradient-bg rounded-2xl shadow-lg hover:shadow-purple-400/40 hover:scale-105 transition-all duration-300 group"
          >
            Start for Free Today
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </section>
  );
}
