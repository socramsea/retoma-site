import React, { useMemo, useRef, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { GRUPOS, noPiloto, segmentoPorValor } from '../conteudo/segmentos';
import { ENDPOINT_CADASTRO } from '../config';

/**
 * Cadastro de lojistas. Os nomes dos campos são os que o servidor da Retoma espera em POST /cadastro
 * (plataforma/servidor/vitrine.py). Com ENDPOINT_CADASTRO vazio, roda em modo demonstração e não envia nada.
 */
type Campos = { nome: string; empresa: string; segmento: string; local: string; whatsapp: string; email: string; registro: string; mensagem: string; aceite: boolean };
const VAZIO: Campos = { nome: '', empresa: '', segmento: '', local: '', whatsapp: '', email: '', registro: '', mensagem: '', aceite: false };

const mascaraZap = (v: string) => {
  const d = v.replace(/\D/g, '').slice(0, 11);
  if (d.length <= 2) return d.length ? `(${d}` : '';
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
};

function validar(c: Campos): Partial<Record<keyof Campos, string>> {
  const e: Partial<Record<keyof Campos, string>> = {};
  if (!c.nome.trim()) e.nome = 'Preencha o seu nome.';
  if (!c.empresa.trim()) e.empresa = 'Preencha o nome da loja.';
  if (!c.segmento) e.segmento = 'Escolha o tipo de negócio.';
  if (!c.local.trim()) e.local = 'Diga onde fica a loja: galeria, número e andar.';
  if (c.whatsapp.replace(/\D/g, '').length < 10) e.whatsapp = 'Confira o WhatsApp: use DDD e número, ex.: (21) 99999-9999.';
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(c.email.trim())) e.email = 'Confira o e-mail: falta o @ ou o domínio.';
  const s = segmentoPorValor(c.segmento);
  if (s?.pedeRegistro && !c.registro.trim()) e.registro = `Para ${s.nome.toLowerCase()}, informe o registro no conselho (${s.pedeRegistro}).`;
  if (!c.aceite) e.aceite = 'Marque a autorização para enviarmos o cadastro.';
  return e;
}

const rotulo = 'flex flex-col gap-2 font-body text-[15px] font-bold text-off-white';
const campo = 'rounded-xl border-2 border-white/15 bg-petroleo-light px-4 py-3.5 font-body text-base font-normal text-off-white placeholder:text-off-white/45 focus:border-amber focus:outline-none';
const erroCls = 'font-body text-sm font-normal text-amber';

const CadastroPage: React.FC = () => {
  const [params] = useSearchParams();
  const origem = (params.get('origem') ?? '').replace(/[^\w-]/g, '').slice(0, 40);
  const [c, setC] = useState<Campos>(VAZIO);
  const [erros, setErros] = useState<Partial<Record<keyof Campos, string>>>({});
  const [demo, setDemo] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  const navegar = useNavigate();
  const seg = useMemo(() => segmentoPorValor(c.segmento), [c.segmento]);

  const muda = (k: keyof Campos) => (ev: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const v = ev.target.type === 'checkbox' ? (ev.target as HTMLInputElement).checked : ev.target.value;
    setC((x) => ({ ...x, [k]: k === 'whatsapp' ? mascaraZap(String(v)) : v }));
  };

  const enviar = (ev: React.FormEvent) => {
    const e = validar(c);
    setErros(e);
    if (Object.keys(e).length) {
      ev.preventDefault();
      form.current?.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus();
      return;
    }
    if (!ENDPOINT_CADASTRO) {      // modo demonstração (GitHub Pages): não envia nada
      ev.preventDefault();
      setDemo(true);
      navegar('/cadastro/enviado?demo=1');
    }
    // com servidor configurado, o formulário segue normalmente (POST) e o servidor responde com a página de confirmação
  };

  const err = (k: keyof Campos) => (erros[k] ? <span className={erroCls} id={`erro-${k}`}>{erros[k]}</span> : null);
  const a11y = (k: keyof Campos) => ({ 'aria-invalid': erros[k] ? true : undefined, 'aria-describedby': erros[k] ? `erro-${k}` : undefined });

  return (
    <div className="min-h-screen bg-petroleo">
      <Header />
      <main className="bloco max-w-[860px] pb-24 pt-10">
        <h1 className="titulo text-[clamp(3rem,7vw,5.2rem)]">Cadastre a sua loja</h1>
        <p className="mt-5 max-w-xl font-body text-lg text-off-white/85">
          Leva dois minutos. A equipe Retoma confere os dados e manda o seu acesso ao portal pelo WhatsApp.
        </p>
        {!ENDPOINT_CADASTRO && (
          <p className="mt-6 rounded-xl border-l-4 border-amber bg-petroleo-light px-5 py-4 font-body text-off-white/90">
            Versão de avaliação: o cadastro ainda não é enviado. Você pode preencher para conferir o formulário.
          </p>
        )}

        <form ref={form} method="post" action={`${ENDPOINT_CADASTRO}/cadastro`} onSubmit={enviar} noValidate
          className="mt-10 grid gap-6 sm:grid-cols-2" aria-busy={demo}>
          <input type="hidden" name="origem" value={origem} />
          <label className="absolute -left-[9999px]" aria-hidden="true">Não preencha<input name="site" tabIndex={-1} autoComplete="off" /></label>

          <label className={rotulo}>Seu nome
            <input name="nome" value={c.nome} onChange={muda('nome')} autoComplete="name" maxLength={80} className={campo} {...a11y('nome')} />{err('nome')}</label>
          <label className={rotulo}>Nome da loja
            <input name="empresa" value={c.empresa} onChange={muda('empresa')} autoComplete="organization" maxLength={80} className={campo} {...a11y('empresa')} />{err('empresa')}</label>

          <label className={`${rotulo} sm:col-span-2`}>Tipo de negócio
            <select name="segmento" value={c.segmento} onChange={muda('segmento')} className={campo} {...a11y('segmento')}>
              <option value="">Escolha</option>
              {GRUPOS.map((g) => (
                <optgroup key={g.nome} label={g.nome}>
                  {g.segmentos.map((s) => <option key={s.valor} value={s.valor}>{s.nome}</option>)}
                </optgroup>
              ))}
              <option value="outro">Outro tipo de negócio</option>
            </select>{err('segmento')}
            {c.segmento && (noPiloto(c.segmento)
              ? (noPiloto(c.segmento)?.restricao && <span className="font-body text-sm font-normal text-off-white/80">{noPiloto(c.segmento)?.restricao}</span>)
              : <span className="rounded-lg bg-petroleo-light px-3 py-2 font-body text-sm font-normal text-off-white/90">Ainda não estamos produzindo anúncios para esse tipo de negócio. O seu cadastro entra na lista de interesse e avisamos você quando abrir.</span>)}
          </label>

          <label className={`${rotulo} sm:col-span-2`}>Onde fica
            <input name="local" value={c.local} onChange={muda('local')} placeholder="Ex.: Galeria A, loja 112, 1º piso" maxLength={120} className={campo} {...a11y('local')} />{err('local')}</label>

          <label className={rotulo}>WhatsApp
            <input name="whatsapp" value={c.whatsapp} onChange={muda('whatsapp')} type="tel" inputMode="tel" autoComplete="tel" placeholder="(21) 99999-9999" className={campo} {...a11y('whatsapp')} />{err('whatsapp')}</label>
          <label className={rotulo}>E-mail
            <input name="email" value={c.email} onChange={muda('email')} type="email" autoComplete="email" maxLength={120} className={campo} {...a11y('email')} />{err('email')}</label>

          {seg?.pedeRegistro && (
            <label className={`${rotulo} sm:col-span-2`}>Registro no conselho
              <span className="font-normal text-off-white/70">Número com a sigla ({seg.pedeRegistro}), ex.: {seg.pedeRegistro.split(',')[0]}-RJ 12345</span>
              <input name="registro" value={c.registro} onChange={muda('registro')} maxLength={60} className={campo} {...a11y('registro')} />{err('registro')}</label>
          )}

          <label className={`${rotulo} sm:col-span-2`}>O que você quer anunciar? <span className="font-normal text-off-white/70">Opcional</span>
            <textarea name="mensagem" value={c.mensagem} onChange={muda('mensagem')} rows={3} maxLength={600} className={campo} /></label>

          <label className="flex items-start gap-3 font-body text-off-white/90 sm:col-span-2">
            <input type="checkbox" name="aceite" value="1" checked={c.aceite} onChange={muda('aceite')} className="mt-1 h-5 w-5 accent-amber" {...a11y('aceite')} />
            <span>Autorizo a Retoma a usar estes dados para analisar o meu cadastro e entrar em contato comigo.{err('aceite') && <><br />{err('aceite')}</>}</span>
          </label>

          <div className="sm:col-span-2">
            <button className="btn-primario">Enviar cadastro</button>
          </div>
        </form>
        <p className="mt-10 font-body text-off-white/70">
          Antes de fotografar, veja <Link to="/dicas/como-fotografar-seu-produto" className="text-amber underline underline-offset-4">como fotografar o seu produto</Link>.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default CadastroPage;
