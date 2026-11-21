import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Product Manager at Vercel',
    avatar: 'SM',
    color: 'bg-purple-500',
    rating: 5,
    quote:
      "TaskFlow completely transformed how our team operates. We cut our project delivery time by 40% in the first quarter. The dashboard is beautiful and everyone loves using it.",
  },
  {
    name: 'David Chen',
    role: 'CTO at NovaTech Startups',
    avatar: 'DC',
    color: 'bg-indigo-500',
    rating: 5,
    quote:
      "We've tried every project management tool on the market. TaskFlow is the only one our entire engineering team actually stuck with. The real-time collaboration is seamless.",
  },
  {
    name: 'Priya Sharma',
    role: 'Design Lead at Figma Agency',
    avatar: 'PS',
    color: 'bg-violet-500',
    rating: 5,
    quote:
      "As a design lead managing multiple client projects simultaneously, TaskFlow keeps everything organized beautifully. The analytics help me show clients exactly where we stand.",
  },
];

function StarRating({ count }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-sm font-semibold mb-4">
            ⭐ Loved by Teams Worldwide
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
            What Our{' '}
            <span className="gradient-text">Customers Say</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Over 10,000 teams trust TaskFlow to deliver their best work. Here's what
            some of them have to say.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-6 mb-16 max-w-2xl mx-auto text-center">
          {[
            { value: '10,000+', label: 'Happy Teams' },
            { value: '4.9/5', label: 'Average Rating' },
            { value: '99%', label: 'Customer Satisfaction' },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-2xl sm:text-3xl font-extrabold gradient-text">{s.value}</p>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-7 border border-purple-100 card-shadow hover:card-shadow-hover hover:-translate-y-1 transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center">
                <Quote size={18} className="text-purple-300" />
              </div>

              {/* Rating */}
              <StarRating count={t.rating} />

              {/* Quote */}
              <p className="text-slate-600 mt-4 mb-6 leading-relaxed text-sm italic">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white text-sm font-bold">{t.avatar}</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800">{t.name}</p>
                  <p className="text-xs text-slate-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
