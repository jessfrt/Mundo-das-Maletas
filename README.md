# Mundo das Maletas

Mundo das Maletas é um catálogo demonstrativo que explora direção visual, experiência de navegação e arquitetura frontend a partir de um acervo de nove imagens de maletas. A interface assume a linguagem de um atelier contemporâneo de viagem, com uma composição editorial acolhedora e responsiva.

> Este projeto foi criado para portfólio. Produtos, nomes, preços e disponibilidade são ilustrativos; não existe uma operação comercial associada a esta interface.

## Recursos da Unidade 1

- página inicial responsiva com barra informativa, cabeçalho, hero, categorias, catálogo, guia, sobre e rodapé;
- menu móvel funcional, navegação por âncoras e link de salto;
- nove itens renderizados a partir de uma fonte local tipada;
- detalhes de produtos em controles nativos e acessíveis, sem fluxo de compra;
- valores demonstrativos formatados em `pt-BR`;
- metadados essenciais para SEO e compartilhamento;
- identidade visual baseada em tokens CSS e compatível com movimento reduzido;
- assets locais, sem fontes, ícones ou imagens carregados de CDNs.

## Stack

- Vite;
- React;
- TypeScript em modo estrito;
- ESLint com configuração flat;
- CSS global organizado por camadas e tokens.

O desenvolvimento local e a integração contínua usam Node.js 24 LTS. O arquivo `.nvmrc` permite selecionar a versão correta com um gerenciador compatível.

As dependências são fixadas em versões exatas para manter instalações reproduzíveis. O projeto usa TypeScript 6.0.3 deliberadamente: `typescript-eslint@8.67.0` aceita TypeScript `>=4.8.4 <6.1.0`, por isso o TypeScript 7 não é compatível com esta matriz.

## Estrutura

```text
maletas/              # nove imagens originais preservadas
public/               # favicon local
src/
  components/         # seções e componentes de interface
  data/               # catálogo local tipado
  styles/             # tokens e estilos globais em camadas
  types/               # contratos de domínio
  App.tsx              # composição da página única
  main.tsx             # ponto de entrada React
```

## Comandos

```bash
npm ci
npm run dev
npm run lint
npm run typecheck
npm run build
npm run preview
```

O build é gerado em `dist/`. O Vite usa `base: '/Mundo-das-Maletas/'` para produzir URLs compatíveis com o subdiretório do repositório no GitHub Pages.

## Publicação

O endereço esperado do projeto é [https://jessfrt.github.io/Mundo-das-Maletas/](https://jessfrt.github.io/Mundo-das-Maletas/).

O navegador não executa os fontes TypeScript/React diretamente: o Vite precisa gerar o build antes da publicação. O workflow em `.github/workflows/deploy-pages.yml` instala as dependências com `npm ci`, executa lint, verificação de tipos e build, e envia somente `dist/` como artefato do GitHub Pages. O diretório `dist/` permanece fora do Git.

O deploy é disparado automaticamente por um push na branch `main` ou manualmente pela opção `workflow_dispatch` na aba **Actions**. Depois do primeiro commit que inclua o workflow, configure uma única vez em **Settings → Pages → Build and deployment → Source** a opção **GitHub Actions**.

Para reproduzir localmente com Node 24 LTS:

```bash
npm ci
npm run lint
npm run typecheck
npm run build
npm run preview
```

Como a base corresponde ao nome do repositório, valide o preview também em `http://localhost:4173/Mundo-das-Maletas/`.

## Decisões de UX e acessibilidade

- um único `h1`, landmarks semânticos e hierarquia lógica de títulos;
- link para pular diretamente ao conteúdo principal;
- foco visível e alvos de toque com dimensões adequadas;
- menu móvel com `aria-expanded`, `aria-controls`, fechamento por link e tecla `Escape`;
- links apenas para destinos reais dentro da página;
- textos alternativos específicos para cada item do catálogo;
- imagens do catálogo com dimensões intrínsecas, `aspect-ratio`, `object-fit: contain` e carregamento tardio;
- aviso explícito e recorrente sobre o caráter demonstrativo do projeto;
- animações discretas desativadas quando `prefers-reduced-motion` está ativo.

## Imagens

As nove imagens originais foram preservadas em `maletas/`. O repositório não documenta sua origem ou licença; identificar autoria, licença e permissão de uso permanece como pendência antes de qualquer publicação pública.

## Roadmap

- busca e filtros locais por categoria;
- favoritos e sacola estritamente demonstrativos;
- testes automatizados de componentes, acessibilidade e fluxos de teclado;
- otimização e documentação de origem dos assets;
- acompanhamento da primeira publicação no GitHub Pages e futuras atualizações mensais sugeridas pelo Dependabot.
