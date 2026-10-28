import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import Avaliacao from './Avaliacao';
import { PORTAL_URL } from '../config';

const links = [
  { to: '/#como-funciona', label: 'Como funciona' },
  { to: '/#para-quem', label: 'Para quem é' },
  { to: '/dicas', label: 'Dicas' },
];

const Header: React.FC = () => {
  const [aberto, setAberto] = useState(false);
  const local = useLocation();
  useEffect(() => setAberto(false), [local]);

  return (
    <header className="relative z-30">
      <Avaliacao />
      <div className="bloco flex h-20 items-center gap-8">
        <Link to="/" aria-label="Retoma, página inicial"><Logo /></Link>
        <nav aria-label="Principal" className="ml-auto hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="font-body text-[15px] text-off-white/80 transition hover:text-off-white">{l.label}</Link>
          ))}
          {PORTAL_URL && <a href={PORTAL_URL} className="font-body text-[15px] text-off-white/80 hover:text-off-white">Entrar</a>}
          <Link to="/cadastro" className="btn-primario !px-6 !py-3 !text-[15px]">Cadastrar minha loja</Link>
        </nav>
        <button className="ml-auto p-2 text-off-white md:hidden" onClick={() => setAberto(!aberto)} aria-expanded={aberto} aria-label="Abrir menu">
          {aberto ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
      {aberto && (
        <nav aria-label="Menu" className="absolute inset-x-0 top-full border-t border-white/10 bg-petroleo px-5 pb-8 pt-4 md:hidden">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="block py-3 font-body text-lg text-off-white">{l.label}</Link>
          ))}
          {PORTAL_URL && <a href={PORTAL_URL} className="block py-3 font-body text-lg text-off-white">Entrar no portal</a>}
          <Link to="/cadastro" className="btn-primario mt-4 w-full">Cadastrar minha loja</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
