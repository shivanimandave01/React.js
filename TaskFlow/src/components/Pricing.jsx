import React, { useState } from 'react';
import { Check, Zap, Building2, ArrowRight, Star } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    icon: Zap,
    price: '$0',
    period: 'forever',
    description: 'Perfect for individuals and small teams just getting started.',
    color: 'text-slate-600',
    iconBg: 'bg-slate-100',
    badge: null,
    features: [
      'Up to 3 projects',
      '5 team members',
      'Basic task management',
      '1 GB storage',
      'Email support',
      'Mobile app access',
    ],
    cta: 'Get Started Free',
    ctaStyle: 'border-2 border-slate-200 text-slate-700 hover:border-purple-400 hover:text-purple-700 hover:bg-purple-50',
    popular: false,
  },
  {
    name: 'Pro',
    icon: Star,
    price: '$12',
    period: 'per user / month',
    description: 'Everything your growing team needs to deliver projects on time.',
    color: 'text-purple-600',
    iconBg: 'bg-purple-100',
    badge: 'Most Popular',
    features: [
      'Unlimited projects',
      'Unlimited team members',
      'Advanced analytics & reports',
      '50 GB storage',
      'Priority support',
      'Custom workflows',
      'Time tracking',
      'API access',
    ],
    cta: 'Start Pro Trial',
    ctaStyle: 'gradient-bg text-white shadow-lg hover:shadow-purple-400/40',
    popular: true,
  },
  {
    name: 'Enterprise',
    icon: Building2,
    price: 'Custom',
    period: 'contact us',
    description: 'Advanced security, compliance, and control for large organizations.',
    color: 'text-indigo-600',
    iconBg: 'bg-indigo-100',
    badge: null,
    features: [
      'Everything in Pro',
      'SSO / SAML authentication',
      'Advanced security controls',
      'Unlimited storage',
      'Dedicated account manager',
      'Custom integrations',
      'SLA guarantee',
      'Audit logs & compliance',
    ],
    cta: 'Contact Sales',
    ctaStyle: 'border-2 border-indigo-200 text-indigo-700 hover:border-indigo-400 hover:bg-indigo-50',
    popular: false,
  },
];

export default function Pricing() {
  const [billing, setBilling] = useState('monthly');

  return (
    <section id="pricing" className="py-24"
      style={{ background: 'linear-gradient(145deg, #faf9ff 0%, #f0ebff 50%, #eef2ff 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-sm font-semibold mb-4">
            ✦ Simple Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
            Choose the Plan That{' '}
            <span className="gradient-text">Fits Your Team</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-8">
            Start free, upgrade when you're ready. No hidden fees. Cancel anytime.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-white border border-purple-100 rounded-2xl p-1 shadow-sm">
            <button
              onClick={() => setBilling('monthly')}
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                billing === 'monthly'
                  ? 'gradient-bg text-white shadow-md'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling('annual')}
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                billing === 'annual'
                  ? 'gradient-bg text-white shadow-md'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              Annual
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold">-20%</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-3xl p-8 border transition-all duration-300 hover:-translate-y-2 hover:card-shadow-hover ${
                plan.popular
                  ? 'border-purple-300 shadow-2xl shadow-purple-100 scale-105 md:scale-105'
                  : 'border-slate-200 card-shadow'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-5 py-1.5 gradient-bg text-white text-xs font-bold rounded-full shadow-lg whitespace-nowrap">
                    ⭐ {plan.badge}
                  </span>
                </div>
              )}

              <div className={`w-12 h-12 ${plan.iconBg} rounded-2xl flex items-center justify-center mb-4`}>
                <plan.icon size={22} className={plan.color} />
              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-1">{plan.name}</h3>
              <p className="text-sm text-slate-500 mb-6">{plan.description}</p>

              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-extrabold text-slate-900">
                  {billing === 'annual' && plan.price !== '$0' && plan.price !== 'Custom'
                    ? '$' + Math.round(parseInt(plan.price.slice(1)) * 0.8)
                    : plan.price}
                </span>
                <span className="text-sm text-slate-400">{plan.period}</span>
              </div>

              <button
                onClick={() => alert(`Selected ${plan.name} plan!`)}
                className={`w-full py-3.5 rounded-2xl text-sm font-semibold transition-all duration-300 hover:scale-105 mb-8 ${plan.ctaStyle}`}
              >
                {plan.cta}
              </button>

              <div className="space-y-3">
                {plan.features.map((f) => (
                  <div key={f} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                      plan.popular ? 'bg-purple-100' : 'bg-slate-100'
                    }`}>
                      <Check size={11} className={plan.popular ? 'text-purple-600' : 'text-slate-500'} strokeWidth={3} />
                    </div>
                    <span className="text-sm text-slate-600">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <p className="text-center text-sm text-slate-400 mt-10">
          All plans include a 14-day free trial. No credit card required.
        </p>
      </div>
    </section>
  );
}
