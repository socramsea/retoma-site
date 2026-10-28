import React from 'react';
import { img } from '../config';

/** Assinatura Retoma: símbolo oficial + "Retoma" em Big Shoulders Display (docs/identidade-retoma.md). */
const Logo: React.FC<{ escuro?: boolean; className?: string }> = ({ escuro = false, className = '' }) => (
  <span className={`inline-flex items-center gap-2.5 ${className}`}>
    <img src={img(escuro ? 'simbolo-petroleo.png' : 'simbolo-ambar.png')} alt="" className="h-8 w-auto" width={17} height={32} />
    <span className={`font-display text-[30px] font-extrabold leading-none ${escuro ? 'text-petroleo' : 'text-off-white'}`}>Retoma</span>
  </span>
);

export default Logo;
