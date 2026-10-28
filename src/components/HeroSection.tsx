import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const TOTEM_IMAGE = 'https://images.dualite.app/3fa131da-f725-48f1-ac76-801d3f48b582/asset-8b95925b-c306-4d6b-81ac-bd9ea1cf07ff.webp';

const HeroSection: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen flex items-end lg:items-center overflow-hidden bg-petroleo">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-amber/[0.04] rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-verde-agua/[0.03] rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(22,56,66,0.5),transparent)]" />
      </div>

      <div className="relative w-full max-w-[1400px] mx-auto px-6 lg:px-10 pb-24 pt-32 lg:pt-0 lg:pb-0">
        <div className="grid lg:grid-cols-[1fr,auto] gap-12 lg:gap-20 items-center min-h-[calc(100vh-6rem)]">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={loaded ? { opacity: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="label-caps text-amber/70 mb-8"
            >
              Mídia em tela &bull; Galerias do Rio de Janeiro
            </motion.div>

            <h1 className="heading-xl text-off-white text-[clamp(3rem,8vw,7rem)] mb-8">
              Sua loja{' '}
              <span className="relative inline-block">
                na tela
                <span className="absolute bottom-[0.05em] left-0 right-0 h-[0.06em] bg-amber/60" />
              </span>
              <br />
              da galeria
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={loaded ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-off-white/60 text-lg lg:text-xl leading-relaxed font-body max-w-[520px] mb-12"
            >
              Mande a foto do produto, o preço e onde fica a sua loja. A Retoma transforma isso num anúncio em vídeo e coloca nas telas por onde os seus clientes já passam.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={loaded ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/cadastro" className="btn-primary">
                Cadastrar minha loja
                <ArrowRight size={18} />
              </Link>
              <a href="#como-funciona" className="btn-secondary">
                Ver como funciona
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            animate={loaded ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ delay: 0.4, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2 relative flex justify-center lg:justify-end"
          >
            <div className="relative w-[280px] sm:w-[320px] lg:w-[380px] xl:w-[420px]">
              <div
                className="absolute -inset-8 lg:-inset-12 rounded-[40px] pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(255,194,61,0.08) 0%, transparent 70%)',
                }}
              />

              <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ boxShadow: '0 40px 80px rgba(0,0,0,0.5), 0 0 120px rgba(255,194,61,0.08)' }}>
                <img
                  src={TOTEM_IMAGE}
                  alt="Totem RETOMA com tela de 55 polegadas em hall de elevadores"
                  className="w-full h-auto block"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-petroleo/40 via-transparent to-transparent pointer-events-none" />
              </div>

              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[80%] h-12 bg-amber/[0.06] blur-2xl rounded-full pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={loaded ? { opacity: 1 } : {}}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
      >
        <span className="label-caps text-off-white/20 text-[10px]">Scroll</span>
        <ChevronDown size={16} className="text-off-white/20 animate-bounce" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
