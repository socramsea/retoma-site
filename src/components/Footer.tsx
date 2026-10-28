import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-petroleo border-t border-white/[0.04]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-[2fr,1fr,1fr] gap-12 lg:gap-16">
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6">
              <svg viewBox="0 0 100 100" className="w-8 h-8">
                <rect width="100" height="100" rx="20" fill="#FFC23D" />
                <path d="M25 72V28H38V60H58V72H25Z" fill="#0B1F26" />
                <rect x="62" y="28" width="13" height="44" rx="2" fill="#0B1F26" />
              </svg>
              <span className="font-display font-black text-lg tracking-tight text-off-white">RETOMA</span>
            </Link>
            <p className="text-off-white/30 font-body text-sm leading-relaxed max-w-xs">
              Telas de anúncio em galerias, shoppings e centros médicos de todo o Rio de Janeiro.
            </p>
          </div>

          <div>
            <h4 className="label-caps text-off-white/20 mb-6">Links</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/cadastro" className="text-off-white/40 hover:text-amber transition-colors text-sm font-body">Cadastro</Link>
              <Link to="/dicas" className="text-off-white/40 hover:text-amber transition-colors text-sm font-body">Dicas</Link>
              <a href="#" className="text-off-white/40 hover:text-amber transition-colors text-sm font-body">Portal do cliente</a>
            </nav>
          </div>

          <div>
            <h4 className="label-caps text-off-white/20 mb-6">Contato</h4>
            <p className="text-off-white/30 font-body text-sm">
              Rio de Janeiro, RJ
              <br />Brasil
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/[0.04] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-off-white/20 text-xs font-body">
            &copy; {year} RETOMA. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-off-white/20 hover:text-off-white/40 transition-colors text-xs font-body">Termos</a>
            <a href="#" className="text-off-white/20 hover:text-off-white/40 transition-colors text-xs font-body">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
