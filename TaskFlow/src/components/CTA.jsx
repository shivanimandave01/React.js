import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-bg" />
      <div className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      {/* Orbs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 border border-white/30 text-white text-sm font-semibold mb-6 backdrop-blur-sm">
          <Sparkles size={14} />
          Join 10,000+ Teams Already Using TaskFlow
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-6 leading-tight">
          Ready to Take Control of
          <br />
          Your Projects?
        </h2>

        <p className="text-lg sm:text-xl text-purple-100 max-w-2xl mx-auto mb-10 leading-relaxed">
          Join thousands of teams who ship faster, collaborate better, and achieve
          more with TaskFlow. Start for free today — no credit card needed.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => alert('Creating your free account...')}
            className="group flex items-center justify-center gap-2 px-8 py-4 bg-white text-purple-700 font-bold rounded-2xl text-base shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <Sparkles size={18} className="text-purple-500" />
            Start Your Free Journey
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
          </button>
          <button
            onClick={() => alert('Opening demo...')}
            className="flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-2xl text-base border border-white/30 hover:bg-white/20 hover:scale-105 transition-all duration-300 backdrop-blur-sm"
          >
            Watch 2-min Demo
          </button>
        </div>

        <p className="text-purple-200 text-sm mt-6">
          Free 14-day trial · No credit card · Cancel anytime
        </p>
      </div>
    </section>
  );
}
