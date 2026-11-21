import React from 'react';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';
import DashboardPreview from './DashboardPreview';

const highlights = ['Free 14-day trial', 'No credit card required', 'Cancel anytime'];

export default function Hero() {
  const handleScroll = (href) => {
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
      style={{
        background: 'linear-gradient(145deg, #faf9ff 0%, #f0ebff 30%, #eef2ff 60%, #ffffff 100%)',
      }}
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #7c3aed, transparent)' }} />
        <div className="absolute top-1/2 -left-24 w-72 h-72 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #4f46e5, transparent)' }} />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #7c3aed, transparent)' }} />
        {/* Grid pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.025]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#7c3aed" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-sm font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
              New: AI-Powered Task Automation 🚀
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              Manage Projects{' '}
              <span className="gradient-text">Smarter.</span>
              <br />
              Achieve More.
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-slate-500 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              TaskFlow helps teams organize projects, manage tasks, collaborate
              seamlessly, and achieve goals faster — all in one powerful platform.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <button
                onClick={() => alert('Creating your free account...')}
                className="group flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold text-white gradient-bg rounded-2xl shadow-lg hover:shadow-purple-400/40 hover:scale-105 transition-all duration-300"
              >
                Get Started Free
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button
                onClick={() => handleScroll('#features')}
                className="group flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold text-purple-700 bg-white border-2 border-purple-200 rounded-2xl hover:border-purple-400 hover:bg-purple-50 hover:scale-105 transition-all duration-300 shadow-sm"
              >
                <Play size={16} className="text-purple-500 fill-purple-500" />
                Explore Features
              </button>
            </div>

            {/* Highlights */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-slate-500">
                  <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right Dashboard Preview */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-xl">
              {/* Glow behind card */}
              <div className="absolute -inset-4 rounded-3xl opacity-30 blur-2xl"
                style={{ background: 'linear-gradient(135deg, #7c3aed, #4f46e5)' }} />
              <div className="relative">
                <DashboardPreview />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
