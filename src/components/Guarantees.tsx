import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';

const guarantees = [
  {
    title: 'Nada vai ao ar sem a sua aprovação',
    desc: 'Você vê a prévia, pede ajustes e só aprova quando estiver perfeito.',
  },
  {
    title: 'Prova de cada exibição',
    desc: 'Comprovante por anúncio, tela e dia. Exibição interrompida não conta.',
  },
  {
    title: 'Sai do ar quando você quiser',
    desc: 'Pause ou encerre a campanha a qualquer momento pelo portal.',
  },
  {
    title: 'Seus dados só para você',
    desc: 'Login próprio. Nenhum outro cliente vê seus pedidos ou arquivos.',
  },
  {
    title: 'Custo de produção combinado antes',
    desc: 'Você sabe exatamente quanto vai pagar antes de aprovar qualquer coisa.',
  },
  {
    title: 'Regras do seu ramo respeitadas',
    desc: 'O sistema confere o texto do anúncio conforme o tipo de negócio.',
  },
];

const Guarantees: React.FC = () => {
  const { ref, isInView } = useScrollReveal(0.1);

  return (
    <section id="garantias" className="relative py-32 lg:py-44 bg-petroleo overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        <div className="absolute bottom-[30%] left-[-10%] w-[40%] h-[40%] bg-verde-agua/[0.02] rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 lg:mb-28"
        >
          <span className="label-caps text-amber/50 mb-6 block">Compromisso</span>
          <h2 className="heading-xl text-off-white text-[clamp(2.5rem,6vw,5.5rem)]">
            O que você pode
            <br />
            cobrar da Retoma
          </h2>
        </motion.div>

        <div className="max-w-4xl">
          {guarantees.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.08 * idx, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              <div className="flex gap-6 lg:gap-10 py-8 lg:py-10 border-b border-white/[0.04] group-hover:border-white/[0.08] transition-colors duration-300">
                <span className="font-display font-bold text-amber/20 text-sm mt-1 w-8 flex-shrink-0 group-hover:text-amber/40 transition-colors duration-300">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-display font-extrabold text-off-white uppercase tracking-wide text-base lg:text-lg mb-2 group-hover:text-amber transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-off-white/40 font-body text-sm lg:text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-12 text-off-white/20 text-sm font-body italic max-w-xl"
        >
          Durante o lançamento, a equipe Retoma confere cada cadastro e cada anúncio antes de ir ao ar.
        </motion.p>
      </div>
    </section>
  );
};

export default Guarantees;
