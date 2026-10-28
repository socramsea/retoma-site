import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { PORTAL_URL } from '../config';

const Footer: React.FC = () => (
  <footer className="border-t border-white/10 bg-petroleo">
    <div className="bloco flex flex-col gap-8 py-12 md:flex-row md:items-end md:justify-between">
      <div>
        <Logo />
        <p className="mt-4 max-w-sm font-body text-off-white/70">Telas de anúncio em galerias, shoppings e centros médicos de todo o Rio de Janeiro.</p>
      </div>
      <nav aria-label="Rodapé" className="flex flex-wrap gap-x-8 gap-y-3 font-body text-off-white/80">
        <Link to="/cadastro" className="hover:text-amber">Cadastro</Link>
        <Link to="/dicas" className="hover:text-amber">Dicas</Link>
        {PORTAL_URL && <a href={PORTAL_URL} className="hover:text-amber">Portal do cliente</a>}
      </nav>
    </div>
  </footer>
);

export default Footer;
