import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    num: '01',
    title: 'Cadastre a sua loja',
    desc: 'A equipe Retoma libera o acesso ao portal.',
  },
  {
    num: '02',
    title: 'Mande o material',
    desc: 'Fotos do celular, logo, preço, prazo da oferta e onde fica a loja.',
  },
  {
    num: '03',
    title: 'Aprove a prévia',
    desc: 'A Retoma cria o vídeo. Você assiste no portal, pede ajuste ou aprova.',
  },
  {
    num: '04',
    title: 'Acompanhe na tela',
    desc: 'O anúncio entra nas telas combinadas e o portal mostra cada exibição.',
  },
];

const HowItWorks: React.FC = () => {
  const { ref: sectionRef, isInView } = useScrollReveal(0.15);
  const { ref: transRef, isInView: transInView } = useScrollReveal(0.2);

  return (
    <section id="como-funciona" className="relative py-32 lg:py-44 bg-petroleo overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        <div className="absolute top-[20%] right-[-5%] w-[40%] h-[40%] bg-amber/[0.02] rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10" ref={sectionRef}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 lg:mb-28"
        >
          <span className="label-caps text-amber/50 mb-6 block">Processo</span>
          <h2 className="heading-xl text-off-white text-[clamp(2.5rem,6vw,5.5rem)]">
            Como funciona
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0">
          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 * idx, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative group"
            >
              <div className={`p-8 lg:p-10 h-full border-t border-white/[0.06] ${idx > 0 ? 'lg:border-l' : ''}`}>
                <span className="heading-lg text-amber/20 text-6xl lg:text-7xl block mb-8 transition-colors duration-500 group-hover:text-amber/40">
                  {step.num}
                </span>
                <h3 className="font-display font-extrabold text-off-white uppercase tracking-wide text-base mb-4">
                  {step.title}
                </h3>
                <p className="text-off-white/40 font-body text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div ref={transRef} className="mt-28 lg:mt-40">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={transInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-3xl overflow-hidden border border-white/[0.04]"
            style={{ background: 'linear-gradient(135deg, #0d2a33 0%, #0B1F26 50%, #102e38 100%)' }}
          >
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-amber/[0.04] rounded-full blur-[80px]" />
            </div>

            <div className="relative grid lg:grid-cols-2 gap-16 lg:gap-0">
              <div className="p-10 lg:p-16 flex flex-col justify-center">
                <span className="label-caps text-amber/50 mb-8 block">Transformação</span>
                <h3 className="heading-lg text-off-white text-4xl lg:text-5xl mb-6">
                  Da foto ao cinema
                </h3>
                <p className="text-off-white/50 font-body text-base lg:text-lg leading-relaxed max-w-md">
                  O motor de criação da Retoma transforma sua foto simples de celular em um anúncio cinematográfico. O produto é sempre o da foto, com a cor real. A tecnologia cria luz, cenário e movimento em volta.
                </p>
              </div>

              <div className="p-10 lg:p-16 flex items-center justify-center lg:border-l border-white/[0.04]">
                <div className="flex items-center gap-6 lg:gap-10">
                  <div className="relative flex-shrink-0">
                    <div className="w-32 h-44 lg:w-40 lg:h-52 rounded-xl border border-white/[0.08] bg-petroleo-light/30 overflow-hidden flex flex-col items-center justify-center">
                      <div className="w-16 h-20 lg:w-20 lg:h-24 rounded bg-gradient-to-br from-off-white/10 to-off-white/5 flex items-center justify-center mb-3">
                        <div className="w-10 h-12 lg:w-12 lg:h-14 rounded bg-verde-agua/30" />
                      </div>
                      <span className="text-off-white/25 text-[10px] font-body">Foto do celular</span>
                    </div>
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3/4 h-3 bg-white/[0.02] blur-md rounded-full" />
                  </div>

                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber/90 flex items-center justify-center shadow-[0_0_30px_rgba(255,194,61,0.3)]">
                    <ArrowRight size={16} className="text-petroleo" />
                  </div>

                  <div className="relative flex-shrink-0">
                    <div
                      className="w-32 h-44 lg:w-40 lg:h-52 rounded-xl border border-amber/20 overflow-hidden flex flex-col items-center justify-center"
                      style={{
                        background: 'linear-gradient(180deg, rgba(22,56,66,0.8) 0%, rgba(11,31,38,0.9) 100%)',
                        boxShadow: '0 0 60px rgba(255,194,61,0.1), 0 20px 40px rgba(0,0,0,0.4)',
                      }}
                    >
                      <div className="w-16 h-20 lg:w-20 lg:h-24 rounded-lg bg-gradient-to-br from-verde-agua/60 to-verde-agua/30 flex items-center justify-center mb-3 shadow-[0_10px_30px_rgba(79,179,154,0.3)] transform -rotate-2">
                        <div className="w-10 h-12 lg:w-12 lg:h-14 rounded bg-verde-agua/50" />
                      </div>
                      <span className="text-amber text-[10px] font-display uppercase tracking-[0.2em]">Na tela</span>
                      <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-verde-agua animate-pulse" />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-6 bg-amber/[0.06] blur-xl rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
