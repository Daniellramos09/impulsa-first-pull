# Impulsa Path

# IMPULSA DOCS — PRIMEIRA VERSÃO

Aja como um Desenvolvedor Front-end Sênior e UI/UX Designer especializado em plataformas de documentação técnica e educação para iniciantes.

Crie uma plataforma web chamada **Impulsa Docs**.

## 1. OBJETIVO

A Impulsa Docs será uma plataforma educacional para jovens iniciantes em tecnologia que estão aprendendo:

- Git

- GitHub

- programação

- estrutura de projetos

- colaboração

- Open Source

O objetivo principal é levar uma pessoa do:

**ZERO → APRENDER → PRATICAR → CONTRIBUIR → PRIMEIRA PULL REQUEST**

A plataforma NÃO deve parecer apenas uma biblioteca de cursos.

Ela deve funcionar como uma documentação guiada, capaz de responder dúvidas diretamente na própria plataforma.

Vídeos, cursos e links externos serão apenas materiais complementares.

---

# 2. IDENTIDADE VISUAL

Utilize a **logo oficial da Impulsa fornecida neste projeto** como referência principal.

Não modificar a geometria da logo.

Não transformar a identidade em preto e branco.

Criar uma aplicação adequada para Dark Mode mantendo as cores da marca.

### Conceitos da logo

A identidade representa:

- **Núcleo:** pessoa, talento e potencial individual.

- **Órbita/rede:** networking, colaboração e comunidade.

- **Raízes:** fundamentos, estudo e crescimento sólido.

Utilize esses conceitos de forma sutil na interface.

Exemplos:

- linhas orbitais;

- pontos conectados;

- caminhos de progresso;

- elementos de rede;

- pequenas referências a raízes.

Não exagerar na decoração.

---

# 3. TEMA

O tema principal deve ser Dark Mode, mas implementar também Light Mode.

### Dark Mode

- Fundo: `#0F172A`

- Fundo secundário: `#111827`

- Cards: `#162033`

- Bordas: `#263449`

- Texto principal: `#E2E8F0`

- Texto secundário: `#94A3B8`

- Laranja Impulsa: `#F97316`

- Azul institucional: `#1E3A8A`

Priorizar acessibilidade e contraste.

Não usar azul escuro como texto principal sobre fundo escuro.

---

# 4. ESTILO

A interface deve combinar:

**Documentação técnica + plataforma educacional + comunidade Open Source**

Referências:

- Docusaurus

- GitBook

- GitHub Docs

- shadcn/ui

Use essas referências apenas como inspiração.

Não copiar interfaces.

Evitar:

- excesso de cards;

- excesso de gradientes;

- aparência de dashboard;

- excesso de animações;

- visual excessivamente futurista.

A prioridade é:

**LEITURA + CLAREZA + NAVEGAÇÃO + APRENDIZADO**

---

# 5. TECNOLOGIA E COMPONENTES

Utilizar:

- React

- Tailwind CSS

- shadcn/ui

- Lucide Icons

Utilizar componentes como:

- Sidebar

- Breadcrumb

- Search

- Accordion

- Card

- Alert

- Badge

- Progress

- Code Block

- Copy Button

- Previous / Next Navigation

---

# 6. LAYOUT

Desktop:

- Sidebar fixa à esquerda.

- Cabeçalho com logo, busca, controle de fonte e tema.

- Conteúdo principal centralizado.

- Navegação anterior/próximo.

Mobile:

- Sidebar transformada em menu.

- Busca acessível.

- Conteúdo responsivo.

- Código com rolagem horizontal.

---

# 7. NAVEGAÇÃO

Criar esta estrutura inicial:

## 🏠 Comece aqui

- Introdução

- O que é Open Source?

- Por que contribuir?

- Como funciona a trilha?

## 🧰 Git

- O que é Git?

- Git x GitHub

- git init

- git status

- git add

- git commit

- Branches

- Merge

- Conflitos

- git clone

- git pull

- git push

- .gitignore

## 🐙 GitHub

- O que é GitHub?

- Repositórios

- README

- Issues

- Fork

- Branches

- Pull Requests

- Code Review

## 🌎 Open Source

- O que é Open Source?

- Quem pode contribuir?

- Contribuição não é somente código

- Como ler um repositório

- README

- CONTRIBUTING

- LICENSE

- CODE_OF_CONDUCT

- Good First Issue

- Help Wanted

- Como escolher um projeto

## 🚀 Minha primeira contribuição

Criar uma jornada:

1. Escolher um projeto

2. Ler README

3. Ler CONTRIBUTING

4. Encontrar uma Issue

5. Fazer Fork

6. Clonar

7. Criar Branch

8. Fazer alteração

9. Testar

10. Commit

11. Push

12. Pull Request

13. Code Review

14. Corrigir feedback

## 🧪 Pratique

- Learn Git Branching

- First Contributions

- Exercícios de Git

## 🆘 Deu erro

- Commit errado

- Push recusado

- Conflitos

- Branch errada

- Problemas com Pull Request

## 💼 Meu portfólio

Ensinar como registrar contribuições reais no:

- GitHub

- Currículo

- LinkedIn

- Portfólio

## 📚 Recursos

Área para cursos, vídeos, documentação oficial e outros materiais.

---

# 8. HOME

Criar uma Home visual e simples.

Título:

# Seu primeiro passo no Open Source começa aqui.

Subtítulo:

> Você está aprendendo tecnologia e ainda não sabe como contribuir para um projeto real? A Impulsa Docs mostra o caminho, do primeiro Git até sua primeira Pull Request.

Botão:

**🚀 Começar a trilha**

Mostrar visualmente:

**APRENDER → PRATICAR → CONTRIBUIR → RECEBER FEEDBACK → REGISTRAR EXPERIÊNCIA**

Adicionar indicador de progresso.

---

# 9. DOCUMENTAÇÃO

As páginas de documentação NÃO devem ser compostas somente por cards.

Priorizar:

- texto;

- exemplos;

- código;

- callouts;

- tabelas;

- checklists;

- exercícios;

- navegação.

Cada página técnica deve seguir:

### O que é?

### Para que serve?

### Pense assim

### Como funciona?

### Exemplo

### Erros comuns

### 🧪 Pratique

### ✅ Checklist

### 🔗 Veja também

---

# 10. PÚBLICO

A linguagem deve ser:

- simples;

- acolhedora;

- direta;

- profissional;

- acessível.

Não presumir conhecimento prévio.

Não infantilizar o usuário.

Explicar termos técnicos antes de utilizá-los.

---

# 11. ACESSIBILIDADE

Implementar desde o início:

- navegação por teclado;

- foco visível;

- contraste adequado;

- HTML semântico;

- suporte a leitores de tela;

- textos redimensionáveis;

- botões claros;

- ícones acompanhados de texto quando necessário;

- não utilizar apenas cores para transmitir informação.

Adicionar controle:

**A- | A | A+**

para tamanho da fonte.

---

# 12. BUSCA

Criar busca global no topo.

O usuário deve conseguir pesquisar frases como:

- "como desfazer um commit"

- "o que é fork"

- "como criar uma branch"

- "meu push deu erro"

- "como fazer pull request"

Adicionar atalho:

**Ctrl + K**

A busca deve estar preparada para futuramente indexar todas as páginas da documentação.

---

# 13. IMPORTANTE PARA ESTA PRIMEIRA VERSÃO

Não tentar preencher dezenas de páginas com textos genéricos.

Nesta primeira geração, criar páginas completas e bem elaboradas principalmente para:

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

As demais páginas podem existir como estrutura preparada para expansão.

O objetivo desta primeira versão é validar:

**ARQUITETURA + IDENTIDADE VISUAL + UX + NAVEGAÇÃO + LEITURA**

e não quantidade de conteúdo.

# RESULTADO ESPERADO

A primeira impressão deve ser:

> "Eu não sei nada sobre Open Source, mas esta plataforma consegue me ensinar por onde começar."

A experiência deve conduzir o usuário de:

**NÃO SEI POR ONDE COMEÇAR**

para:

**AGORA EU SEI COMO FAZER MINHA PRIMEIRA CONTRIBUIÇÃO.**

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/959f66a2-9166-4646-9358-1d9a8f7e2c61).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
