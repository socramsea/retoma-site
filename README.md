# Site da Retoma

Vitrine da Retoma e porta de entrada dos lojistas: página inicial, cadastro, dicas.
React + Vite + Tailwind. Gerado na Dualite e refeito pela equipe (veja o histórico do git).

## Rodar no computador

```bash
npm install
npm run dev            # http://localhost:5173
```

Com o servidor da Retoma rodando no laboratório (repositório `Retoma-labs/retoma-plataforma`, porta 8700),
o cadastro do site cai direto no painel:

```bash
VITE_ENDPOINT_CADASTRO=http://localhost:8700 VITE_PORTAL_URL=http://localhost:8700/entrar VITE_AVALIACAO=0 npm run dev
```

## Configuração (variáveis de ambiente, lidas em `src/config.ts`)

| Variável | Para que serve | Avaliação (GitHub Pages) | Produção |
|---|---|---|---|
| `VITE_BASE` | Caminho onde o site fica | `/retoma-site/` | `/` |
| `VITE_ENDPOINT_CADASTRO` | Servidor que recebe o cadastro | vazio = modo demonstração | endereço do servidor |
| `VITE_PORTAL_URL` | Link "Entrar" do portal | vazio = sem link | `https://…/entrar` |
| `VITE_AVALIACAO` | Faixa "Versão de avaliação" | `1` | `0` |

Ao publicar oficialmente: tirar `<meta name="robots" content="noindex">` do `index.html` e apagar `public/robots.txt`.

## Onde editar

| O quê | Arquivo |
|---|---|
| Dicas e novidades | `src/conteudo/dicas.ts` |
| Segmentos do cadastro (mesmos valores de `config/segmentos.json` do servidor) | `src/conteudo/segmentos.ts` |
| Anúncios de exemplo que passam no totem | `src/components/Anuncios.tsx` |
| Foto do totem e encaixe da tela | `src/components/TotemNoite.tsx`, `public/img/` |
| Textos da página inicial | `src/pages/HomePage.tsx` |
| Cores e fontes da marca | `tailwind.config.js`, `src/index.css`, `public/fonts/` |

## Publicação

Cada envio na `main` publica no GitHub Pages (`.github/workflows/pages.yml`).
Uma vez só: Settings → Pages → Source: **GitHub Actions**.
