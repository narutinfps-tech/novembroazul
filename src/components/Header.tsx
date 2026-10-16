import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onScrollToOffers: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onScrollToOffers }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Conteúdo', href: '#conteudo' },
    { label: 'Vantagens', href: '#vantagens' },
    { label: 'Bônus', href: '#bonus' },
    { label: 'Ofertas', href: '#ofertas' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark */}
        <a href="#inicio" className="text-xl font-bold tracking-tight text-blue-950 whitespace-nowrap shrink-0 flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-sm bg-sky-600 inline-block"></span>
          <span>ClickMateriais</span>
        </a>

        {/* Zone 2: Clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-blue-900 transition-colors whitespace-nowrap shrink-0"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={onScrollToOffers}
            className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-blue-900 hover:bg-blue-800 active:scale-95 transition-all rounded-md shadow-sm whitespace-nowrap shrink-0 cursor-pointer"
          >
            Quero Meus Slides
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-700 hover:text-blue-900 focus:outline-none"
          aria-label="Abrir menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-md"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onScrollToOffers();
            }}
            className="w-full mt-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-blue-900 hover:bg-blue-800 rounded-md text-center"
          >
            Quero Meus Slides
          </button>
        </div>
      )}
    </header>
  );
};
