/** Dicas e novidades. Para publicar uma dica nova: acrescente um item no topo de DICAS. */

export interface Dica {
  slug: string;
  titulo: string;
  resumo: string;
  data: string; // AAAA-MM-DD
  blocos: { tipo: 'p' | 'ul' | 'ol'; itens: string[] }[];
}

export const DICAS: Dica[] = [
  {
    slug: 'como-fotografar-seu-produto',
    titulo: 'Como fotografar seu produto com o celular',
    resumo: 'Cinco cuidados que fazem a diferença entre um anúncio comum e um anúncio que faz a pessoa parar.',
    data: '2026-10-28',
    blocos: [
      { tipo: 'p', itens: ['O anúncio parte da sua foto. A tecnologia da Retoma cria luz, cenário e movimento de cinema em volta, mas o produto que aparece na tela é o da sua foto, com a cor de verdade. Por isso a foto conta muito.'] },
      { tipo: 'ol', itens: [
        '**Luz de janela.** Fotografe de dia, perto de uma janela, sem flash. Evite luz amarela de lâmpada.',
        '**Fundo liso.** Uma parede clara, um lençol esticado ou uma cartolina. Nada atrás do produto.',
        '**Produto inteiro e esticado.** Roupa no cabide ou estendida, sem dobras; relógio e joia de perto, com o celular firme.',
        '**Uma foto por cor.** Se a camisa tem verde, azul e amarela, mande as três.',
        '**Três ângulos.** Frente, lado e um detalhe (etiqueta, textura, fecho).',
      ] },
      { tipo: 'p', itens: ['Na dúvida, mande mais fotos do que precisa. A equipe Retoma confere o material antes de produzir.'] },
    ],
  },
  {
    slug: 'anuncio-de-15-segundos-sem-som',
    titulo: 'O que faz um anúncio de 15 segundos funcionar numa tela sem som',
    resumo: 'Quem passa olha por dois ou três segundos. O anúncio precisa dizer uma coisa só, grande e clara.',
    data: '2026-10-28',
    blocos: [
      { tipo: 'p', itens: ['As telas da Retoma ficam em corredores, halls e recepções. As pessoas estão andando ou esperando, e o vídeo não tem som. O que funciona:'] },
      { tipo: 'ul', itens: [
        '**Uma mensagem por anúncio.** "Camisa de malha de R$ 89 por R$ 59" funciona; cinco ofertas juntas não.',
        '**Onde fica a sua loja.** Andar e número da loja no final. A pessoa está a poucos metros de você.',
        '**Prazo claro.** "Até sábado" ou "até durar os estoques" dá motivo para ir agora.',
        '**Pouco texto.** Título curto e preço grande, legíveis a alguns metros de distância.',
      ] },
      { tipo: 'p', itens: ['Você combina em quais telas o anúncio passa: a do térreo, a do hall dos elevadores ou a mais perto da sua loja.'] },
    ],
  },
  {
    slug: 'clinicas-e-consultorios-anunciar-dentro-das-regras',
    titulo: 'Clínicas e consultórios: como anunciar dentro das regras do seu conselho',
    resumo: 'Médicos, dentistas, psicólogos e nutricionistas têm regras próprias. O portal já aplica as principais.',
    data: '2026-10-28',
    blocos: [
      { tipo: 'p', itens: ['Profissionais de saúde seguem as regras de publicidade dos seus conselhos. A Retoma trabalha dentro delas e o sistema confere o texto do anúncio antes de produzir.'] },
      { tipo: 'ul', itens: [
        '**Medicina:** pode divulgar serviços, equipamentos, fotos do próprio consultório e preço de consulta. Não pode prometer resultado nem usar sensacionalismo.',
        '**Odontologia:** não pode anunciar preço, desconto ou promoção. Mostre serviços, estrutura e equipe.',
        '**Psicologia:** nome, a palavra psicóloga ou psicólogo e o número do CRP; sem preço como propaganda.',
        '**Em todos os casos:** o anúncio mostra o nome do responsável e o número no conselho. O cadastro pede esses dados.',
      ] },
      { tipo: 'p', itens: ['A Retoma não veicula fotos de antes e depois. A responsabilidade ética pela divulgação continua sendo do profissional; em caso de dúvida, consulte o seu conselho regional.'] },
    ],
  },
  {
    slug: 'como-acompanhar-seu-anuncio',
    titulo: 'Como acompanhar seu anúncio e baixar o comprovante',
    resumo: 'Do pedido até a tela: o que cada etapa do portal quer dizer e onde está a prova de exibição.',
    data: '2026-10-28',
    blocos: [
      { tipo: 'p', itens: ['No portal, cada anúncio mostra em que etapa está:'] },
      { tipo: 'ul', itens: [
        '**Em produção:** a Retoma está criando a sua peça.',
        '**Pronto para sua aprovação:** assista à prévia e aprove ou peça ajuste.',
        '**Aprovado:** a peça está entrando na programação das telas combinadas.',
        '**Programado:** a tela já recebeu o seu anúncio.',
        '**Exibido:** a tela confirmou que o anúncio passou.',
      ] },
      { tipo: 'p', itens: ['Cada tela registra cada exibição completa. No portal, você baixa o comprovante por anúncio, tela e dia. Exibição interrompida não conta.'] },
    ],
  },
];

export const NOVIDADES = [
  { data: '2026-10-28', texto: 'Regras por segmento no portal: o sistema confere o texto do anúncio conforme o tipo de negócio.' },
  { data: '2026-10-27', texto: 'Novo status "programado": você vê quando a tela já recebeu o seu anúncio.' },
];

const MESES = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
export const dataPorExtenso = (iso: string) => {
  const [a, m, d] = iso.split('-').map(Number);
  return `${d} de ${MESES[m - 1]} de ${a}`;
};
