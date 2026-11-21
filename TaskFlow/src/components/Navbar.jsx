import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-purple-100/50 border-b border-purple-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-9 h-9 rounded-xl gradient-bg flex items-center justify-center shadow-md group-hover:shadow-purple-400/40 transition-shadow duration-300">
              <Zap size={18} className="text-white fill-white" />
            </div>
            <span className="text-xl font-bold gradient-text">TaskFlow</span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-purple-600 rounded-lg hover:bg-purple-50 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => alert('Login page coming soon!')}
              className="px-5 py-2 text-sm font-semibold text-purple-700 border border-purple-200 rounded-xl hover:bg-purple-50 hover:border-purple-400 transition-all duration-200"
            >
              Login
            </button>
            <button
              onClick={() => alert('Welcome to TaskFlow! Sign up coming soon.')}
              className="px-5 py-2 text-sm font-semibold text-white gradient-bg rounded-xl shadow-md hover:shadow-purple-400/40 hover:scale-105 transition-all duration-200"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl text-slate-600 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md border-t border-purple-100 px-4 py-4 space-y-1 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block px-4 py-3 text-sm font-medium text-slate-600 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 flex flex-col gap-2 border-t border-purple-100">
            <button
              onClick={() => { setIsOpen(false); alert('Login page coming soon!'); }}
              className="w-full py-3 text-sm font-semibold text-purple-700 border border-purple-200 rounded-xl hover:bg-purple-50 transition-all duration-200"
            >
              Login
            </button>
            <button
              onClick={() => { setIsOpen(false); alert('Welcome to TaskFlow!'); }}
              className="w-full py-3 text-sm font-semibold text-white gradient-bg rounded-xl shadow-md transition-all duration-200"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
