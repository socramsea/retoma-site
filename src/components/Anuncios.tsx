import React from 'react';

/** Anúncios de exemplo (fictícios) no formato da tela Retoma: vertical 9:16, sem som, pouco texto, preço grande.
 *  Cada componente ocupa 100% da caixa onde for colocado. */

const camisa = 'polygon(30% 0,70% 0,100% 17%,86% 34%,78% 28%,78% 100%,22% 100%,22% 28%,14% 34%,0 17%)';

export const AnuncioModa: React.FC = () => (
  <div className="relative h-full w-full overflow-hidden" style={{ background: 'radial-gradient(120% 70% at 50% 28%, #2e7d5b 0%, #0c2a22 72%)' }}>
    <div className="zoom absolute inset-0 flex flex-col px-[9%] pb-[11%] pt-[12%] text-white">
      <div className="flex justify-center gap-[5%]">
        {['#2e9a62', '#2d64c8', '#f2c230'].map((c, i) => (
          <div key={c} className="w-[29%]" style={{ aspectRatio: '1/1.15', background: c, clipPath: camisa, transform: `translateY(${i === 1 ? '-8%' : '0'})`, filter: 'drop-shadow(0 10px 14px rgba(0,0,0,.35))' }} />
        ))}
      </div>
      <div className="mt-auto">
        <p className="font-display font-extrabold uppercase leading-[0.88]" style={{ fontSize: '4.1em' }}>Camisa<br />de malha</p>
        <p className="mt-[4%] font-display font-extrabold" style={{ fontSize: '2.1em' }}>
          <span className="mr-[0.3em] text-white/60 line-through decoration-2">R$ 89</span>
          <span className="text-amber">R$ 59</span>
        </p>
        <p className="mt-[6%] font-body" style={{ fontSize: '0.95em' }}>Até durar os estoques · Loja 112, 1º piso</p>
      </div>
    </div>
  </div>
);

export const AnuncioClinica: React.FC = () => (
  <div className="relative h-full w-full overflow-hidden" style={{ background: 'linear-gradient(170deg, #eef4f2 0%, #d4e6e1 58%, #b9d6cf 100%)' }}>
    <div className="zoom absolute inset-0 flex flex-col px-[9%] pb-[11%] pt-[12%] text-petroleo">
      <p className="font-body font-bold" style={{ fontSize: '1em' }}>Clínica exemplo</p>
      <div className="mt-[10%] h-[2px] w-[22%] bg-verde-agua" />
      <div className="mt-auto">
        <p className="font-display font-extrabold uppercase leading-[0.9]" style={{ fontSize: '3.4em' }}>Check-up completo em uma manhã</p>
        <p className="mt-[6%] font-body font-bold" style={{ fontSize: '1.35em' }}>Agende pelo WhatsApp</p>
        <p className="mt-[6%] font-body" style={{ fontSize: '0.95em' }}>Sala 304, 3º andar</p>
        <p className="mt-[2%] font-body text-petroleo/70" style={{ fontSize: '0.8em' }}>Resp. técnica: Dra. Exemplo · CRM-RJ 00000</p>
      </div>
    </div>
  </div>
);

export const AnuncioCafe: React.FC = () => (
  <div className="relative h-full w-full overflow-hidden" style={{ background: 'radial-gradient(90% 55% at 50% 30%, #7a3d16 0%, #24110a 75%)' }}>
    <div className="zoom absolute inset-0 flex flex-col px-[9%] pb-[11%] pt-[14%]" style={{ color: '#ffe7c2' }}>
      <div className="mx-auto w-[46%]" style={{ aspectRatio: '1', borderRadius: '50%', background: 'radial-gradient(circle at 50% 45%, #3b1d0d 0 38%, #f3e3cc 39% 46%, transparent 47%)' }} />
      <div className="mt-auto">
        <p className="font-display font-extrabold uppercase leading-[0.88]" style={{ fontSize: '4.1em' }}>Café<br />da tarde</p>
        <p className="mt-[4%] font-display font-extrabold" style={{ fontSize: '1.9em' }}>Café + pão de queijo <span className="text-amber">R$ 12</span></p>
        <p className="mt-[6%] font-body" style={{ fontSize: '0.95em' }}>Térreo, ao lado da escada</p>
      </div>
    </div>
  </div>
);
