import React from 'react';
import { Zap, AtSign, Link, MessageSquare, Rss, Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = {
  'Quick Links': [
    { label: 'Home', href: '#home' },
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'About', href: '#about' },
    { label: 'Blog', href: '#' },
  ],
  'Features': [
    { label: 'Project Management', href: '#features' },
    { label: 'Task Tracking', href: '#features' },
    { label: 'Team Collaboration', href: '#features' },
    { label: 'Progress Analytics', href: '#features' },
    { label: 'Real-time Updates', href: '#features' },
  ],
  'Company': [
    { label: 'About Us', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Security', href: '#' },
  ],
};

const socials = [
  { icon: AtSign, href: '#', label: 'Twitter / X' },
  { icon: Link, href: '#', label: 'LinkedIn' },
  { icon: MessageSquare, href: '#', label: 'GitHub' },
  { icon: Rss, href: '#', label: 'Blog / RSS' },
];

const contacts = [
  { icon: Mail, text: 'hello@taskflow.app' },
  { icon: Phone, text: '+1 (555) 234-5678' },
  { icon: MapPin, text: 'San Francisco, CA 94107' },
];

export default function Footer() {
  const handleNavClick = (e, href) => {
    if (href.startsWith('#') && href.length > 1) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center gap-2.5 mb-5 group w-fit">
              <div className="w-9 h-9 rounded-xl gradient-bg flex items-center justify-center shadow-md">
                <Zap size={18} className="text-white fill-white" />
              </div>
              <span className="text-xl font-bold text-white">TaskFlow</span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              The all-in-one project management platform that helps modern teams
              organize, collaborate, and deliver their best work.
            </p>
            {/* Contact Info */}
            <div className="space-y-2.5 mb-6">
              {contacts.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-sm text-slate-400 hover:text-purple-400 transition-colors cursor-pointer">
                  <Icon size={15} className="text-purple-500 flex-shrink-0" />
                  {text}
                </div>
              ))}
            </div>
            {/* Social Icons */}
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-purple-600 hover:scale-110 transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-white font-bold text-sm mb-5">{heading}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-sm text-slate-400 hover:text-purple-400 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="border border-slate-700/50 rounded-2xl p-6 mb-10 bg-slate-800/50">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div>
              <h4 className="text-white font-bold mb-1">Stay in the loop 📬</h4>
              <p className="text-slate-400 text-sm">Get product updates and tips delivered to your inbox.</p>
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 sm:w-56 px-4 py-2.5 bg-slate-700 border border-slate-600 rounded-xl text-sm text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 transition-colors"
              />
              <button
                onClick={() => alert('Subscribed! Thanks!')}
                className="px-5 py-2.5 gradient-bg rounded-xl text-white text-sm font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-200 whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © 2026 TaskFlow, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {['Privacy', 'Terms', 'Cookies'].map((item) => (
              <a key={item} href="#" className="text-xs text-slate-500 hover:text-purple-400 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
