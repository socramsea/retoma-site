import React, { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { BASE, img } from '../config';

/**
 * Foto do totem Retoma num corredor de galeria. Na tela da foto passam vídeos de verdade, feitos pelo motor da
 * Retoma (anúncios de demonstração com empresas fictícias + filme da marca).
 * A tela da foto (1080 x 1920) vai de (403,309) a (786,1125); a perspectiva é reproduzida por matrix3d.
 */
const MATRIZ_TELA =
  'matrix3d(1.01078480,0.17077143,0,0.00021221,0.01077465,1.02312131,0,0.00002055,0,0,1,0,403,309,0,1)';

export const PROGRAMACAO = ['retoma-filme-marca', 'moda-praia', 'coworking', 'otica'];
export const video = (n: string) => `${BASE}video/${n}.mp4`;
export const poster = (n: string) => `${BASE}video/${n}.jpg`;

const TotemNoite: React.FC<{ className?: string }> = ({ className = '' }) => {
  const caixa = useRef<HTMLDivElement>(null);
  const [escala, setEscala] = useState(0);
  const [i, setI] = useState(0);
  const parado = useReducedMotion();

  useEffect(() => {
    const el = caixa.current;
    if (!el) return;
    const medir = () => setEscala(el.clientWidth / 1080);
    medir();
    const ro = new ResizeObserver(medir);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const atual = PROGRAMACAO[i % PROGRAMACAO.length];

  return (
    <div ref={caixa} className={`relative overflow-hidden ${className}`}>
      <img src={img('totem-galeria-noite.webp')} alt="Totem Retoma de 55 polegadas num corredor de galeria, com um anúncio na tela"
        width={1080} height={1920} className="block h-auto w-full" fetchPriority="high" />
      {escala > 0 && (
        <div aria-hidden="true" className="pointer-events-none absolute left-0 top-0 origin-top-left"
          style={{ width: 1080, height: 1920, transform: `scale(${escala})` }}>
          <div className="absolute left-0 top-0 origin-top-left overflow-hidden bg-black" style={{ width: 459, height: 816, transform: MATRIZ_TELA }}>
            {parado ? (
              <img src={poster(atual)} alt="" className="h-full w-full object-cover" />
            ) : (
              <video key={atual} src={video(atual)} poster={poster(atual)} autoPlay muted playsInline preload="auto"
                onEnded={() => setI((x) => x + 1)} className="h-full w-full object-cover" />
            )}
            <div className="absolute inset-0" style={{ background: 'linear-gradient(115deg, rgba(255,255,255,.10) 0%, rgba(255,255,255,0) 38%)' }} />
          </div>
        </div>
      )}
    </div>
  );
};

export default TotemNoite;
