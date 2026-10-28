import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Monitor } from 'lucide-react';

interface FloorData {
  label: string;
  screens: { name: string; active: boolean }[];
}

const floors: FloorData[] = [
  {
    label: '5º Andar',
    screens: [{ name: 'Hall dos elevadores', active: true }],
  },
  {
    label: '3º Andar',
    screens: [{ name: 'Corredor principal', active: true }],
  },
  {
    label: 'Térreo',
    screens: [
      { name: 'Entrada principal', active: true },
      { name: 'Hall central', active: true },
    ],
  },
  {
    label: 'Centros Médicos',
    screens: [{ name: 'Recepção', active: true }],
  },
];

const LocationSelector: React.FC = () => {
  const { ref, isInView } = useScrollReveal(0.15);

  return (
    <section className="relative py-32 lg:py-44 overflow-hidden" style={{ background: 'linear-gradient(180deg, #0B1F26 0%, #0f2a34 50%, #0B1F26 100%)' }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 lg:mb-28"
        >
          <span className="label-caps text-amber/50 mb-6 block">Cobertura</span>
          <h2 className="heading-xl text-off-white text-[clamp(2.5rem,6vw,5.5rem)] mb-6">
            Escolha onde aparecer
          </h2>
          <p className="text-off-white/40 font-body text-lg max-w-lg">
            Combine em quais pontos da galeria, shopping ou centro médico o seu anúncio passa.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-6 lg:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-amber/30 via-verde-agua/20 to-transparent" />

          <div className="space-y-0">
            {floors.map((floor, idx) => (
              <motion.div
                key={floor.label}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.1 * idx, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="relative pl-16 lg:pl-20 py-8 group"
              >
                <div className="absolute left-[18px] lg:left-[26px] top-10 w-3 h-3 rounded-full border-2 border-verde-agua bg-petroleo z-10 group-hover:bg-verde-agua/30 transition-colors duration-300" />

                <div className="flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-16">
                  <span className="font-display font-extrabold text-off-white/80 uppercase tracking-wide text-sm lg:text-base w-40 flex-shrink-0">
                    {floor.label}
                  </span>

                  <div className="flex flex-wrap gap-3">
                    {floor.screens.map((screen) => (
                      <div
                        key={screen.name}
                        className="flex items-center gap-3 px-5 py-3 rounded-lg border border-white/[0.06] bg-white/[0.02] hover:border-verde-agua/30 transition-all duration-300"
                      >
                        <Monitor size={14} className="text-verde-agua/70" />
                        <span className="text-off-white/60 font-body text-sm">{screen.name}</span>
                        {screen.active && (
                          <span className="w-1.5 h-1.5 rounded-full bg-verde-agua animate-pulse" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="absolute bottom-0 left-16 lg:left-20 right-0 h-px bg-white/[0.03]" />
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="pl-16 lg:pl-20 mt-10 text-off-white/25 text-sm font-body"
          >
            A rede cresce bairro a bairro por todo o Rio de Janeiro.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default LocationSelector;
