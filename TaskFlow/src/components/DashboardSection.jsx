import React from 'react';
import DashboardPreview from './DashboardPreview';
import { ArrowRight, Shield, Zap, Globe } from 'lucide-react';

const badges = [
  { icon: Shield, label: 'SOC 2 Certified' },
  { icon: Zap, label: '99.9% Uptime' },
  { icon: Globe, label: '50+ Integrations' },
];

export default function DashboardSection() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Dashboard */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-6 rounded-3xl opacity-20 blur-3xl"
              style={{ background: 'linear-gradient(135deg, #7c3aed, #4f46e5)' }} />
            <div className="relative">
              <DashboardPreview />
            </div>
            {/* Floating badges */}
            <div className="absolute -right-4 top-8 bg-white rounded-2xl shadow-xl border border-purple-100 px-4 py-3 flex items-center gap-2 animate-bounce">
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 text-xs font-bold">✓</span>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-700">Task completed!</p>
                <p className="text-xs text-slate-400">Homepage redesign</p>
              </div>
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-sm font-semibold mb-6">
              ✦ Dashboard Overview
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6">
              Your Entire Workflow{' '}
              <span className="gradient-text">at a Glance</span>
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed mb-8">
              The TaskFlow dashboard gives you a crystal-clear view of project
              health, team performance, and upcoming deadlines — all in one
              beautifully designed interface.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                'Real-time project and task metrics',
                'Visual progress bars and completion charts',
                'Team activity feed with instant notifications',
                'Deadline alerts and priority indicators',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full gradient-bg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-[10px] font-bold">✓</span>
                  </div>
                  <span className="text-slate-600">{item}</span>
                </li>
              ))}
            </ul>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 mb-8">
              {badges.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-600 font-medium">
                  <Icon size={15} className="text-purple-500" />
                  {label}
                </div>
              ))}
            </div>

            <button
              onClick={() => alert('Loading demo...')}
              className="group inline-flex items-center gap-2 px-7 py-4 text-base font-semibold text-white gradient-bg rounded-2xl shadow-lg hover:shadow-purple-400/40 hover:scale-105 transition-all duration-300"
            >
              See Live Demo
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
