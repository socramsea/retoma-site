import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Building2, ArrowRight } from 'lucide-react';

const Administradoras: React.FC = () => {
  const { ref, isInView } = useScrollReveal(0.2);

  return (
    <section className="relative py-32 lg:py-44 bg-petroleo overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto"
        >
          <div
            className="relative rounded-3xl overflow-hidden border border-white/[0.04] p-10 lg:p-16"
            style={{ background: 'linear-gradient(135deg, #0d2a33 0%, #0B1F26 100%)' }}
          >
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-amber/[0.03] rounded-full blur-[80px]" />
            </div>

            <div className="relative flex flex-col lg:flex-row items-start gap-10">
              <div className="w-16 h-16 rounded-2xl bg-amber/[0.08] flex items-center justify-center flex-shrink-0 border border-amber/10">
                <Building2 size={28} className="text-amber/70" />
              </div>

              <div className="flex-1">
                <span className="label-caps text-amber/50 mb-6 block">Parceiros</span>
                <h2 className="heading-lg text-off-white text-3xl lg:text-4xl mb-6">
                  Para administradoras de galerias e shoppings
                </h2>
                <p className="text-off-white/50 font-body text-base leading-relaxed mb-10 max-w-lg">
                  A galeria recebe espaço garantido nas telas para os próprios avisos e define categorias que não podem ser anunciadas no seu espaço.
                </p>
                <a href="mailto:contato@retoma.com.br" className="btn-secondary">
                  Falar com a Retoma
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Administradoras;
