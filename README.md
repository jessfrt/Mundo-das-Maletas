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

É necessário Node.js 20.19+ ou 22.12+ para a versão do Vite usada no projeto.

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
npm install
npm run dev
npm run lint
npm run typecheck
npm run build
npm run preview
```

O build é gerado em `dist/`. O Vite usa `base: './'`, fazendo com que os assets compilados tenham caminhos relativos. Essa decisão mantém a página única portátil em hospedagens sob subdiretórios, incluindo GitHub Pages, sem fixar domínio ou nome de conta.

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
- pipeline de publicação no GitHub Pages.
