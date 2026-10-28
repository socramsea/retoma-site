/**
 * Configuração do site — o único lugar para trocar endereços.
 *
 * VITE_ENDPOINT_CADASTRO: endereço do servidor da Retoma (ex.: https://app.retoma.com.br).
 *   Vazio = modo demonstração: o formulário valida tudo e não envia nada (avaliação da diretoria no GitHub Pages).
 * VITE_PORTAL_URL: endereço do portal do cliente (login). Vazio = link "Portal do cliente" não aparece.
 * VITE_AVALIACAO: "1" mostra a faixa "Versão de avaliação" no topo.
 */
export const ENDPOINT_CADASTRO = (import.meta.env.VITE_ENDPOINT_CADASTRO ?? '').replace(/\/$/, '');
export const PORTAL_URL = import.meta.env.VITE_PORTAL_URL ?? '';
export const AVALIACAO = (import.meta.env.VITE_AVALIACAO ?? '1') === '1';
export const BASE = import.meta.env.BASE_URL;
export const img = (nome: string) => `${BASE}img/${nome}`;
