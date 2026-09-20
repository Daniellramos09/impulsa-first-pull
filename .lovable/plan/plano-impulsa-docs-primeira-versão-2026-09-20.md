# Plano — Impulsa Docs primeira versão

## Resultado
Criar a primeira versão da Impulsa Docs como uma plataforma de documentação guiada para jovens iniciantes chegarem até a primeira Pull Request, com identidade visual da Impulsa, modo escuro principal, modo claro, busca, navegação lateral, páginas completas e estrutura preparada para expansão.

## Escopo da entrega
- Usar a logo enviada como marca, sem alterar sua geometria.
- Substituir a página inicial vazia por uma experiência real da Impulsa Docs.
- Criar um layout de documentação com:
  - barra lateral fixa no desktop;
  - menu lateral acessível no mobile;
  - cabeçalho com logo, busca, controle de fonte e tema;
  - conteúdo centralizado e confortável para leitura;
  - breadcrumb e navegação anterior/próximo.
- Implementar busca global com atalho Ctrl + K e resultados preparados para futuras páginas.
- Implementar controle de fonte A- | A | A+.
- Implementar Dark Mode como padrão e Light Mode como alternativa.
- Incluir componentes de documentação: alertas, badges, progress, accordion, tabelas, blocos de código com copiar, checklists e callouts.

## Páginas completas nesta versão
1. Home
2. Comece aqui
3. O que é Git?
4. Git x GitHub
5. O que é GitHub?
6. O que é Open Source?
7. Como ler um repositório
8. Como encontrar um projeto
9. Minha primeira contribuição
10. Pull Request
11. Deu erro
12. Glossário

As demais entradas da navegação existirão como estrutura expansível, com estado de “em breve” ou conteúdo introdutório curto, sem preencher dezenas de textos genéricos.

## Direção visual
- Tema principal escuro com as cores especificadas:
  - fundo #0F172A;
  - fundo secundário #111827;
  - cards #162033;
  - bordas #263449;
  - texto principal #E2E8F0;
  - texto secundário #94A3B8;
  - laranja #F97316;
  - azul institucional #1E3A8A.
- Usar referências sutis da marca: órbitas, pontos conectados, caminhos de progresso e raízes, sem excesso decorativo.
- Evitar visual de dashboard, excesso de gradientes e animações pesadas.

## Implementação técnica
- Criar um conjunto de dados de documentação com grupos, páginas, conteúdo, palavras-chave e links anterior/próximo.
- Criar componentes reutilizáveis para layout, navegação, busca, conteúdo, blocos de código, callouts e controles de acessibilidade.
- Manter uma única rota principal com navegação por parâmetros de busca para validar a arquitetura inicial sem multiplicar arquivos de rota.
- Atualizar `src/styles.css` com tokens semânticos, fontes, cores, tema claro/escuro e utilitários específicos.
- Atualizar metadata da página com título e descrição próprios da Impulsa Docs.
- Usar o asset da logo via CDN e gerar/faviconar um ícone a partir do arquivo enviado.

## Validação
- Conferir contraste, foco visível, nomes acessíveis e navegação por teclado.
- Verificar o resultado no navegador em desktop e mobile.
- Conferir o log de build após as alterações.
