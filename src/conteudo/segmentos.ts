/** Segmentos aceitos no cadastro. Os valores são os mesmos de config/segmentos.json no servidor da Retoma.
 *  Segmentos vetados (tabaco, apostas, advocacia, propaganda política...) não aparecem aqui. */

export interface Segmento { valor: string; nome: string; pedeRegistro?: string }

export const GRUPOS: { nome: string; segmentos: Segmento[] }[] = [
  {
    nome: 'Comércio e serviços',
    segmentos: [
      { valor: 'moda', nome: 'Moda e vestuário' },
      { valor: 'calcados_acessorios', nome: 'Calçados, bolsas e acessórios' },
      { valor: 'joias_relogios', nome: 'Joias, relógios e bijuterias' },
      { valor: 'eletronicos', nome: 'Eletrônicos e celulares' },
      { valor: 'alimentacao', nome: 'Restaurantes, cafés e docerias' },
      { valor: 'beleza_salao', nome: 'Salão, barbearia e cosméticos' },
      { valor: 'casa_decoracao', nome: 'Casa e decoração' },
      { valor: 'papelaria_presentes', nome: 'Papelaria e presentes' },
      { valor: 'servicos_gerais', nome: 'Serviços gerais' },
      { valor: 'escritorios_coworking', nome: 'Escritórios e coworking' },
      { valor: 'turismo', nome: 'Turismo' },
      { valor: 'cursos_livres', nome: 'Cursos e idiomas' },
      { valor: 'pet_shop', nome: 'Pet shop' },
      { valor: 'telefonia', nome: 'Telefonia e internet' },
    ],
  },
  {
    nome: 'Comércio com regras específicas',
    segmentos: [
      { valor: 'otica', nome: 'Ótica' },
      { valor: 'farmacia', nome: 'Farmácia e drogaria' },
      { valor: 'suplementos', nome: 'Suplementos e produtos naturais' },
      { valor: 'imobiliaria', nome: 'Imobiliária e corretores', pedeRegistro: 'CRECI' },
      { valor: 'credito_financeira', nome: 'Crédito e financeiras' },
      { valor: 'infantil', nome: 'Brinquedos e produtos infantis' },
      { valor: 'academia', nome: 'Academias e personal trainer', pedeRegistro: 'CREF' },
      { valor: 'bebidas', nome: 'Bares e adegas' },
    ],
  },
  {
    nome: 'Saúde e profissões regulamentadas',
    segmentos: [
      { valor: 'clinica_medica', nome: 'Clínicas e consultórios médicos', pedeRegistro: 'CRM' },
      { valor: 'odontologia', nome: 'Odontologia', pedeRegistro: 'CRO' },
      { valor: 'psicologia', nome: 'Psicologia', pedeRegistro: 'CRP' },
      { valor: 'nutricao', nome: 'Nutrição', pedeRegistro: 'CRN' },
      { valor: 'fisioterapia', nome: 'Fisioterapia', pedeRegistro: 'CREFITO' },
      { valor: 'estetica_procedimentos', nome: 'Estética com procedimentos', pedeRegistro: 'CRM, CRO, CRBM…' },
      { valor: 'veterinaria', nome: 'Clínica veterinária', pedeRegistro: 'CRMV' },
    ],
  },
];

export const segmentoPorValor = (v: string) => GRUPOS.flatMap((g) => g.segmentos).find((s) => s.valor === v);
