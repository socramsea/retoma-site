import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  const links = [
    { href: '/#como-funciona', label: 'Como Funciona' },
    { href: '/#garantias', label: 'Garantias' },
    { href: '/#segmentos', label: 'Para Quem' },
    { href: '/dicas', label: 'Dicas' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-petroleo/90 backdrop-blur-2xl border-b border-white/[0.04]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20 lg:h-24">
          <Link to="/" className="flex items-center gap-3 group">
            <svg viewBox="0 0 100 100" className="w-9 h-9 lg:w-10 lg:h-10">
              <rect width="100" height="100" rx="20" fill="#FFC23D" />
              <path d="M25 72V28H38V60H58V72H25Z" fill="#0B1F26" />
              <rect x="62" y="28" width="13" height="44" rx="2" fill="#0B1F26" />
            </svg>
            <span className="font-display font-black text-xl lg:text-2xl tracking-tight text-off-white group-hover:text-amber transition-colors duration-300">
              RETOMA
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-off-white/50 hover:text-off-white transition-colors duration-300 text-[13px] font-body tracking-wide"
              >
                {l.label}
              </a>
            ))}
            <Link
              to="/cadastro"
              className="bg-amber text-petroleo font-display font-extrabold uppercase tracking-[0.15em] px-7 py-3 text-xs transition-all duration-300 hover:shadow-[0_8px_30px_rgba(255,194,61,0.3)]"
            >
              Cadastrar
            </Link>
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-off-white/70 p-2"
            aria-label="Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden bg-petroleo/98 backdrop-blur-2xl border-b border-white/[0.04] transition-all duration-500 overflow-hidden ${
          mobileOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col px-6 py-8 gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-off-white/70 hover:text-amber transition-colors text-base font-body"
            >
              {l.label}
            </a>
          ))}
          <Link to="/cadastro" className="btn-primary mt-4 text-center">
            Cadastrar minha loja
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
