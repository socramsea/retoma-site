import React, { useEffect, useRef, useState } from 'react';
import { img } from '../config';
import { AnuncioCafe, AnuncioClinica, AnuncioModa } from './Anuncios';

/**
 * Foto do totem Retoma num corredor de galeria, com anúncios de exemplo passando na tela.
 * A tela da foto (1080 x 1920) vai de (403,309) a (786,1125); a perspectiva é reproduzida por matrix3d,
 * calculada a partir dos quatro cantos da tela. O primeiro "anúncio" é o próprio filme da foto (baleia).
 */
const MATRIZ_TELA =
  'matrix3d(1.01078480,0.17077143,0,0.00021221,0.01077465,1.02312131,0,0.00002055,0,0,1,0,403,309,0,1)';

const TotemNoite: React.FC<{ className?: string }> = ({ className = '' }) => {
  const caixa = useRef<HTMLDivElement>(null);
  const [escala, setEscala] = useState(0);

  useEffect(() => {
    const el = caixa.current;
    if (!el) return;
    const medir = () => setEscala(el.clientWidth / 1080);
    medir();
    const ro = new ResizeObserver(medir);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={caixa} className={`relative overflow-hidden ${className}`}>
      <img
        src={img('totem-galeria-noite.webp')}
        alt="Totem Retoma de 55 polegadas num corredor de galeria, com um anúncio na tela"
        width={1080}
        height={1920}
        className="block h-auto w-full"
        fetchPriority="high"
      />
      {escala > 0 && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 origin-top-left"
          style={{ width: 1080, height: 1920, transform: `scale(${escala})` }}
        >
          <div className="absolute left-0 top-0 origin-top-left" style={{ width: 459, height: 816, transform: MATRIZ_TELA, fontSize: 22 }}>
            <div className="anuncio"><AnuncioModa /></div>
            <div className="anuncio"><AnuncioClinica /></div>
            <div className="anuncio"><AnuncioCafe /></div>
            {/* brilho do vidro, para o anúncio parecer aceso na tela e não colado na foto */}
            <div className="absolute inset-0" style={{ background: 'linear-gradient(115deg, rgba(255,255,255,.10) 0%, rgba(255,255,255,0) 38%)' }} />
          </div>
        </div>
      )}
    </div>
  );
};

export default TotemNoite;
