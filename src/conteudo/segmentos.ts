/** Segmentos aceitos no cadastro. Os valores são os mesmos de config/segmentos.json no servidor da Retoma.
 *  Segmentos vetados (tabaco, apostas, advocacia, propaganda política...) não aparecem aqui. */

export interface Segmento { valor: string; nome: string; pedeRegistro?: string }

/** Piloto (decisão 0001, 28/10/2026): só estes segmentos têm produção de anúncio agora. Os demais entram na lista
 *  de interesse e são avisados quando abrirem. Mantido em sincronia com config/comercial-piloto.json. */
export const PILOTO: (Segmento & { restricao?: string })[] = [
  { valor: 'moda', nome: 'Moda e vestuário', restricao: 'Por enquanto, só peças sem marca de outras empresas (marca própria ou sem marca).' },
  { valor: 'calcados_acessorios', nome: 'Calçados, bolsas e acessórios', restricao: 'Por enquanto, só produtos sem marca de outras empresas (marca própria ou sem marca).' },
  { valor: 'casa_decoracao', nome: 'Casa e decoração' },
  { valor: 'papelaria_presentes', nome: 'Papelaria e presentes' },
  { valor: 'eletronicos', nome: 'Eletrônicos e acessórios', restricao: 'Por enquanto, só acessórios sem marca de outras empresas, marca própria ou assistência técnica.' },
  { valor: 'alimentacao', nome: 'Restaurantes, cafés e docerias', restricao: 'Sem bebidas alcoólicas.' },
];

const EM_BREVE: Segmento[] = [
  { valor: 'joias_relogios', nome: 'Joias, relógios e bijuterias' },
  { valor: 'beleza_salao', nome: 'Salão, barbearia e cosméticos' },
  { valor: 'servicos_gerais', nome: 'Serviços gerais' },
  { valor: 'escritorios_coworking', nome: 'Escritórios e coworking' },
  { valor: 'turismo', nome: 'Turismo' },
  { valor: 'cursos_livres', nome: 'Cursos e idiomas' },
  { valor: 'pet_shop', nome: 'Pet shop' },
  { valor: 'telefonia', nome: 'Telefonia e internet' },
  { valor: 'otica', nome: 'Ótica' },
  { valor: 'farmacia', nome: 'Farmácia e drogaria' },
  { valor: 'suplementos', nome: 'Suplementos e produtos naturais' },
  { valor: 'imobiliaria', nome: 'Imobiliária e corretores', pedeRegistro: 'CRECI' },
  { valor: 'credito_financeira', nome: 'Crédito e financeiras' },
  { valor: 'infantil', nome: 'Brinquedos e produtos infantis' },
  { valor: 'academia', nome: 'Academias e personal trainer', pedeRegistro: 'CREF' },
  { valor: 'bebidas', nome: 'Bares e adegas' },
  { valor: 'clinica_medica', nome: 'Clínicas e consultórios médicos', pedeRegistro: 'CRM' },
  { valor: 'odontologia', nome: 'Odontologia', pedeRegistro: 'CRO' },
  { valor: 'psicologia', nome: 'Psicologia', pedeRegistro: 'CRP' },
  { valor: 'nutricao', nome: 'Nutrição', pedeRegistro: 'CRN' },
  { valor: 'fisioterapia', nome: 'Fisioterapia', pedeRegistro: 'CREFITO' },
  { valor: 'estetica_procedimentos', nome: 'Estética com procedimentos', pedeRegistro: 'CRM, CRO, CRBM…' },
  { valor: 'veterinaria', nome: 'Clínica veterinária', pedeRegistro: 'CRMV' },
];

export const GRUPOS: { nome: string; segmentos: Segmento[] }[] = [
  { nome: 'Atendemos agora', segmentos: PILOTO },
  { nome: 'Em breve: entre na lista de interesse', segmentos: EM_BREVE },
];

export const segmentoPorValor = (v: string) => GRUPOS.flatMap((g) => g.segmentos).find((s) => s.valor === v);
export const noPiloto = (v: string) => PILOTO.find((s) => s.valor === v);
