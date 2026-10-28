import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowRight } from 'lucide-react';

const CallToAction: React.FC = () => {
  const { ref, isInView } = useScrollReveal(0.2);

  return (
    <section className="relative py-32 lg:py-44 bg-petroleo overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber/[0.04] rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="heading-xl text-off-white text-[clamp(2.5rem,7vw,6rem)] mb-8 mx-auto max-w-4xl">
            Sua loja pode estar na tela da galeria
          </h2>

          <p className="text-off-white/40 text-lg font-body mb-12 max-w-lg mx-auto">
            Cadastre em dois minutos. A equipe Retoma entra em contato com o acesso ao portal.
          </p>

          <Link to="/cadastro" className="btn-primary text-base">
            Cadastrar minha loja
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
