import {
  BookOpen,
  BriefcaseBusiness,
  CircleHelp,
  FlaskConical,
  GitBranch,
  Github,
  Globe2,
  Home,
  Rocket,
  type LucideIcon,
} from "lucide-react";
import { gitPages } from "./git-docs";

export type DocSection = {
  title: string;
  body?: string[];
  bullets?: string[];
  code?: { language: string; value: string };
  callout?: { kind: "tip" | "note" | "warning"; title: string; text: string };
  table?: { headers: string[]; rows: string[][] };
  checklist?: string[];
};

export type DocPage = {
  slug: string;
  title: string;
  group: string;
  description: string;
  time?: string;
  keywords: string[];
  sections: DocSection[];
  complete?: boolean;
};

export type NavGroup = { title: string; icon: LucideIcon; items: { title: string; slug: string }[] };

const basePages: DocPage[] = [
  {
    slug: "comece-aqui",
    title: "Comece aqui",
    group: "Comece aqui",
    description: "Entenda a trilha e dê seu primeiro passo com calma e direção.",
    time: "6 min",
    keywords: ["começar", "iniciante", "trilha", "open source"],
    complete: true,
    sections: [
      { title: "Você não precisa saber tudo", body: ["Contribuir com tecnologia não começa quando você domina programação. Começa quando entende como um projeto é organizado, aprende a fazer uma pequena alteração e consegue conversar sobre ela.", "Nesta trilha, cada etapa prepara a próxima. Você vai aprender o vocabulário, praticar em um ambiente seguro e então participar de um projeto real."] },
      { title: "O caminho que vamos percorrer", table: { headers: ["Etapa", "O que você conquista"], rows: [["Aprender", "Entende Git, GitHub e colaboração"], ["Praticar", "Repete os comandos sem medo de errar"], ["Contribuir", "Envia uma mudança para um projeto"], ["Receber feedback", "Aprende com a revisão de outras pessoas"], ["Registrar", "Transforma a experiência em portfólio"]] } },
      { title: "Pense assim", callout: { kind: "tip", title: "Uma trilha, não uma prova", text: "Você pode voltar, repetir e consultar. O objetivo não é memorizar comandos; é saber onde encontrar a resposta e entender o próximo passo." } },
      { title: "Antes de começar", checklist: ["Tenho uma conta no GitHub ou sei que poderei criar uma", "Consigo reservar 20 minutos para praticar", "Aceito que erros fazem parte do processo", "Vou consultar o glossário quando encontrar um termo novo"] },
    ],
  },
  {
    slug: "git-x-github", title: "Git x GitHub", group: "Git", time: "5 min", complete: true,
    description: "Separe duas ferramentas que trabalham juntas, mas não são iguais.", keywords: ["diferença git github", "git", "github"],
    sections: [
      { title: "A diferença em uma frase", callout: { kind: "note", title: "Git registra. GitHub conecta.", text: "Git controla versões no seu computador. GitHub hospeda repositórios na internet e oferece ferramentas para colaboração." } },
      { title: "Compare", table: { headers: ["Git", "GitHub"], rows: [["Programa instalado no computador", "Plataforma acessada pela web"], ["Funciona sem internet", "Depende da internet para sincronizar"], ["Cria commits e branches", "Oferece Issues, Pull Requests e Code Review"], ["Guarda o histórico local", "Compartilha o repositório com a comunidade"]] } },
      { title: "Pense assim", body: ["Se o seu projeto fosse um livro, Git seria o sistema que guarda cada versão escrita. GitHub seria a biblioteca onde o livro fica disponível para outras pessoas lerem e colaborarem."] },
      { title: "Exemplo", code: { language: "bash", value: "# Git: registra no computador\ngit add .\ngit commit -m \"docs: adiciona introdução\"\n\n# Git envia para o repositório no GitHub\ngit push origin minha-branch" } },
      { title: "✅ Checklist", checklist: ["Sei que posso usar Git sem GitHub", "Sei que um commit nasce localmente", "Entendo que push envia mudanças para um repositório remoto"] },
    ],
  },
  {
    slug: "o-que-e-github", title: "O que é GitHub?", group: "GitHub", time: "7 min", complete: true,
    description: "Descubra onde projetos ganham colaboração, contexto e comunidade.", keywords: ["github", "repositório", "issues", "pull request"],
    sections: [
      { title: "O que é?", body: ["GitHub é uma plataforma para armazenar repositórios Git e colaborar em projetos. Além dos arquivos, ele reúne discussões, tarefas, propostas de mudança e revisões."] },
      { title: "Para que serve?", bullets: ["Publicar e compartilhar projetos", "Organizar tarefas com Issues", "Propor mudanças com Pull Requests", "Revisar código e documentação", "Construir um histórico público de contribuições"] },
      { title: "Pense assim", callout: { kind: "tip", title: "Uma oficina colaborativa", text: "O repositório é a bancada, as Issues são tarefas disponíveis e a Pull Request é o pedido para incorporar seu trabalho ao projeto." } },
      { title: "As partes principais", table: { headers: ["Área", "Função"], rows: [["Code", "Arquivos e histórico"], ["Issues", "Tarefas, erros e ideias"], ["Pull Requests", "Propostas de mudança"], ["Actions", "Testes e automações"], ["Insights", "Dados sobre atividade e comunidade"]] } },
      { title: "🧪 Pratique", body: ["Abra um repositório público. Localize o README, a aba Issues e uma Pull Request já encerrada. Observe como a conversa registra decisões."] },
      { title: "✅ Checklist", checklist: ["Localizei os arquivos de um repositório", "Entendi a função das Issues", "Consigo explicar o que uma Pull Request propõe"] },
    ],
  },
  {
    slug: "o-que-e-open-source", title: "O que é Open Source?", group: "Open Source", time: "8 min", complete: true,
    description: "Entenda como software aberto permite aprender, usar e colaborar.", keywords: ["open source", "código aberto", "licença", "comunidade"],
    sections: [
      { title: "O que é?", body: ["Open Source, ou código aberto, é uma forma de desenvolver software em que o código-fonte pode ser estudado, usado, modificado e distribuído de acordo com uma licença.", "Aberto não significa sem regras. Cada projeto define sua licença, seus objetivos e a forma adequada de colaboração."] },
      { title: "Contribuição não é somente código", bullets: ["Corrigir uma frase confusa na documentação", "Traduzir uma página", "Relatar um erro com detalhes", "Testar uma funcionalidade", "Melhorar exemplos", "Acolher dúvidas da comunidade"] },
      { title: "Pense assim", callout: { kind: "tip", title: "Comunidade antes de código", text: "Uma boa contribuição resolve uma necessidade real e respeita os acordos do projeto, mesmo quando altera apenas uma palavra." } },
      { title: "Como funciona?", body: ["Projetos abertos normalmente publicam orientações no README e no CONTRIBUTING. Você identifica uma necessidade, conversa com a comunidade quando necessário e envia uma proposta revisável."] },
      { title: "Erros comuns", bullets: ["Confundir acesso ao código com ausência de licença", "Começar uma mudança grande sem conversar", "Ignorar o guia de contribuição", "Achar que iniciantes não podem ajudar"] },
      { title: "✅ Checklist", checklist: ["Sei que a licença define permissões", "Entendo que documentação também é contribuição", "Vou ler as regras antes de alterar um projeto"] },
    ],
  },
  {
    slug: "como-ler-repositorio", title: "Como ler um repositório", group: "Open Source", time: "10 min", complete: true,
    description: "Aprenda a reconhecer os arquivos e sinais mais importantes antes de contribuir.", keywords: ["ler repositório", "readme", "contributing", "license", "estrutura"],
    sections: [
      { title: "Comece pelo mapa, não pelo código", body: ["Um repositório pode parecer grande, mas você não precisa entender todos os arquivos. Primeiro, procure os documentos que explicam o propósito, as regras e como executar o projeto."] },
      { title: "Arquivos que orientam", table: { headers: ["Arquivo", "O que responde"], rows: [["README.md", "O que é o projeto e como começar"], ["CONTRIBUTING.md", "Como preparar e enviar contribuições"], ["LICENSE", "Como o projeto pode ser usado"], ["CODE_OF_CONDUCT.md", "Como a comunidade espera que as pessoas se comportem"], ["package.json", "Scripts e dependências em projetos JavaScript"]] } },
      { title: "Uma ordem segura", bullets: ["Leia a descrição e o README", "Procure CONTRIBUTING e CODE_OF_CONDUCT", "Confira as Issues abertas", "Observe Pull Requests recentes", "Só então explore a pasta ligada à tarefa"] },
      { title: "Pense assim", callout: { kind: "note", title: "Você está entrando em uma conversa", text: "O histórico, as Issues e as Pull Requests mostram como o projeto toma decisões. Ler essa conversa evita retrabalho." } },
      { title: "🧪 Pratique", checklist: ["Encontrei o objetivo do projeto no README", "Localizei as instruções de instalação", "Descobri se existe guia de contribuição", "Observei uma Pull Request aceita", "Identifiquei onde ficam os testes"] },
    ],
  },
  {
    slug: "como-encontrar-projeto", title: "Como encontrar um projeto", group: "Open Source", time: "9 min", complete: true,
    description: "Escolha um projeto acolhedor, ativo e compatível com o que você já consegue fazer.", keywords: ["encontrar projeto", "good first issue", "help wanted", "iniciante"],
    sections: [
      { title: "O melhor projeto não é o maior", body: ["Para a primeira contribuição, procure um projeto que você consiga executar ou compreender, tenha documentação atualizada e mostre atividade recente da comunidade."] },
      { title: "Sinais positivos", bullets: ["README claro e atualizado", "CONTRIBUTING com passos objetivos", "Issues com contexto e respostas recentes", "Etiquetas como good first issue ou help wanted", "Pull Requests revisadas com respeito"] },
      { title: "Sinais de cuidado", callout: { kind: "warning", title: "Pare e observe", text: "Muitas Issues sem resposta, instruções quebradas ou comentários hostis podem tornar sua primeira experiência mais difícil. Escolher outro projeto também é uma decisão madura." } },
      { title: "Como pesquisar", code: { language: "text", value: "github.com/topics/good-first-issue\n\nNa busca do GitHub:\nlabel:\"good first issue\" language:javascript state:open" } },
      { title: "🧪 Pratique", body: ["Salve três projetos que despertam seu interesse. Use o checklist abaixo e escolha apenas um para investigar com mais profundidade."] },
      { title: "✅ Checklist", checklist: ["O projeto teve atividade recente", "As instruções são compreensíveis", "Existe uma tarefa pequena e bem descrita", "A comunidade parece respeitosa", "Consigo explicar por que escolhi esse projeto"] },
    ],
  },
  {
    slug: "primeira-contribuicao", title: "Minha primeira contribuição", group: "Minha primeira contribuição", time: "20 min", complete: true,
    description: "Siga a jornada completa, da escolha do projeto ao aprendizado com o feedback.", keywords: ["primeira contribuição", "passo a passo", "fork", "clone", "branch", "pull request"],
    sections: [
      { title: "Sua jornada em 14 passos", body: ["Não tente executar tudo de uma vez. Complete um passo, confirme o resultado e avance. Se algo divergir das instruções do projeto, siga sempre as instruções do próprio projeto."], bullets: ["1. Escolher um projeto", "2. Ler README", "3. Ler CONTRIBUTING", "4. Encontrar uma Issue", "5. Fazer Fork", "6. Clonar", "7. Criar Branch", "8. Fazer alteração", "9. Testar", "10. Criar o Commit", "11. Fazer Push", "12. Abrir a Pull Request", "13. Participar do Code Review", "14. Corrigir o feedback"] },
      { title: "Prepare sua cópia", code: { language: "bash", value: "git clone https://github.com/seu-usuario/projeto.git\ncd projeto\ngit checkout -b docs/minha-primeira-contribuicao" } },
      { title: "Registre e envie", code: { language: "bash", value: "git status\ngit add caminho/do/arquivo.md\ngit commit -m \"docs: melhora instrução de instalação\"\ngit push -u origin docs/minha-primeira-contribuicao" } },
      { title: "Antes de abrir a Pull Request", checklist: ["Li o CONTRIBUTING", "Minha mudança resolve a Issue combinada", "Revisei apenas os arquivos necessários", "Executei os testes ou verifiquei a documentação", "Minha mensagem de commit explica a mudança"] },
      { title: "Receber feedback", callout: { kind: "tip", title: "Revisão não é reprovação", text: "Pedidos de ajuste fazem parte da colaboração. Responda com clareza, faça as correções na mesma branch e envie novos commits." } },
    ],
  },
  {
    slug: "pull-request", title: "Pull Request", group: "GitHub", time: "9 min", complete: true,
    description: "Transforme sua alteração em uma proposta clara, revisável e colaborativa.", keywords: ["pull request", "pr", "code review", "abrir pr"],
    sections: [
      { title: "O que é?", body: ["Pull Request, ou PR, é uma proposta para incorporar mudanças de uma branch em outra. Ela apresenta o que foi alterado e abre espaço para testes, conversa e revisão."] },
      { title: "Para que serve?", bullets: ["Explicar o problema resolvido", "Mostrar exatamente o que mudou", "Executar verificações automáticas", "Receber sugestões", "Registrar a decisão da comunidade"] },
      { title: "Uma boa descrição", code: { language: "markdown", value: "## O que foi alterado\nMelhora as instruções de instalação no Windows.\n\n## Por quê\nResolve #42.\n\n## Como verifiquei\n- Segui os passos em uma instalação limpa\n- Revisei links e comandos" } },
      { title: "Erros comuns", bullets: ["Misturar várias mudanças sem relação", "Não conectar a Issue", "Ignorar o modelo de Pull Request", "Alterar arquivos gerados sem necessidade", "Tratar sugestões como críticas pessoais"] },
      { title: "✅ Checklist", checklist: ["O título diz claramente o que mudou", "A descrição explica o motivo", "A PR está ligada à Issue", "Os testes passaram", "Revisei a aba Files changed"] },
    ],
  },
  {
    slug: "deu-erro", title: "Deu erro", group: "Deu erro", time: "Consulta rápida", complete: true,
    description: "Respire, leia a mensagem e encontre o próximo passo sem apagar seu trabalho.", keywords: ["erro", "commit errado", "push recusado", "conflito", "branch errada", "desfazer commit"],
    sections: [
      { title: "Primeiro: preserve as pistas", callout: { kind: "warning", title: "Não execute comandos aleatórios", text: "Copie a mensagem completa, rode git status e entenda o estado atual. Evite comandos com --force até saber exatamente o que eles fazem." } },
      { title: "Commit errado", body: ["Se você acabou de criar o commit e ainda não fez push, pode desfazer somente o registro e manter as alterações nos arquivos."], code: { language: "bash", value: "git reset --soft HEAD~1" } },
      { title: "Push recusado", body: ["Isso geralmente significa que o repositório remoto tem mudanças que você ainda não possui. Antes de tentar novamente, sincronize sua branch conforme as orientações do projeto."], code: { language: "bash", value: "git pull --rebase origin nome-da-branch\ngit push origin nome-da-branch" } },
      { title: "Conflitos", body: ["Um conflito acontece quando Git não consegue decidir sozinho como combinar mudanças. Abra os arquivos indicados, escolha o conteúdo correto, remova os marcadores e continue o processo."], code: { language: "text", value: "<<<<<<< sua alteração\nconteúdo da sua branch\n=======\nconteúdo recebido\n>>>>>>> outra alteração" } },
      { title: "Diagnóstico rápido", table: { headers: ["Situação", "Primeira ação"], rows: [["Não sei onde estou", "git status"], ["Estou na branch errada", "git branch --show-current"], ["Não sei o que mudou", "git diff"], ["Push foi recusado", "Leia a resposta e verifique o remoto"], ["PR tem arquivos extras", "Compare sua branch com a branch base"]] } },
      { title: "✅ Checklist", checklist: ["Li a mensagem inteira", "Rodei git status", "Não usei --force por impulso", "Guardei uma cópia de mudanças importantes", "Consultei o guia do projeto"] },
    ],
  },
  {
    slug: "glossario", title: "Glossário", group: "Recursos", time: "Consulta", complete: true,
    description: "Consulte os termos mais usados em Git, GitHub e Open Source.", keywords: ["glossário", "termos", "branch", "fork", "clone", "commit"],
    sections: [
      { title: "A — F", table: { headers: ["Termo", "Em palavras simples"], rows: [["Branch", "Linha de trabalho separada para desenvolver uma mudança"], ["Clone", "Cópia de um repositório remoto no computador"], ["Code Review", "Revisão feita por outras pessoas antes de aceitar mudanças"], ["Commit", "Registro identificado de um conjunto de mudanças"], ["Fork", "Cópia de um repositório na sua conta do GitHub"]] } },
      { title: "G — P", table: { headers: ["Termo", "Em palavras simples"], rows: [["Git", "Sistema que controla versões de arquivos"], ["GitHub", "Plataforma de hospedagem e colaboração em repositórios"], ["Issue", "Registro de tarefa, problema ou ideia"], ["Open Source", "Software cujo código pode ser estudado e modificado conforme a licença"], ["Pull Request", "Proposta de incorporar mudanças entre branches"]] } },
      { title: "R — U", table: { headers: ["Termo", "Em palavras simples"], rows: [["Repositório", "Pasta de projeto acompanhada por Git"], ["Remote", "Endereço de uma cópia do repositório em outro local"], ["Review", "Análise e conversa sobre uma mudança proposta"], ["Upstream", "Repositório original do qual um fork foi criado"]] } },
    ],
  },
];

const completePages: DocPage[] = [basePages[0]!, gitPages[0]!, basePages[1]!, ...gitPages.slice(1), ...basePages.slice(2)];

export const navGroups: NavGroup[] = [
  { title: "Comece aqui", icon: Home, items: [{ title: "Introdução", slug: "comece-aqui" }, { title: "O que é Open Source?", slug: "o-que-e-open-source" }, { title: "Por que contribuir?", slug: "por-que-contribuir" }, { title: "Como funciona a trilha?", slug: "como-funciona-a-trilha" }] },
  { title: "Git", icon: GitBranch, items: [["O que é Git?", "o-que-e-git"], ["Git x GitHub", "git-x-github"], ["Instalação", "instalacao"], ["git config", "git-config"], ["git init", "git-init"], ["git status", "git-status"], ["git add", "git-add"], ["git commit", "git-commit"], ["git log", "git-log"], ["git diff", "git-diff"], ["git branch", "git-branch"], ["git switch", "git-switch"], ["git merge", "git-merge"], ["git clone", "git-clone"], ["git pull", "git-pull"], ["git push", "git-push"], [".gitignore", "gitignore"]].map(([title, slug]) => ({ title: title!, slug: slug! })) },
  { title: "GitHub", icon: Github, items: [{ title: "O que é GitHub?", slug: "o-que-e-github" }, { title: "Repositórios", slug: "repositorios" }, { title: "README", slug: "readme" }, { title: "Issues", slug: "issues" }, { title: "Fork", slug: "fork" }, { title: "Branches", slug: "github-branches" }, { title: "Pull Requests", slug: "pull-request" }, { title: "Code Review", slug: "code-review" }] },
  { title: "Open Source", icon: Globe2, items: [{ title: "O que é Open Source?", slug: "o-que-e-open-source" }, { title: "Quem pode contribuir?", slug: "quem-pode-contribuir" }, { title: "Contribuição não é somente código", slug: "contribuicao-alem-codigo" }, { title: "Como ler um repositório", slug: "como-ler-repositorio" }, { title: "Good First Issue", slug: "good-first-issue" }, { title: "Help Wanted", slug: "help-wanted" }, { title: "Como escolher um projeto", slug: "como-encontrar-projeto" }] },
  { title: "Minha primeira contribuição", icon: Rocket, items: [{ title: "Jornada completa", slug: "primeira-contribuicao" }] },
  { title: "Pratique", icon: FlaskConical, items: [{ title: "Learn Git Branching", slug: "learn-git-branching" }, { title: "First Contributions", slug: "first-contributions" }, { title: "Exercícios de Git", slug: "exercicios-git" }] },
  { title: "Deu erro", icon: CircleHelp, items: [{ title: "Guia de solução", slug: "deu-erro" }, { title: "Commit errado", slug: "commit-errado" }, { title: "Push recusado", slug: "push-recusado" }, { title: "Conflitos", slug: "conflitos" }, { title: "Branch errada", slug: "branch-errada" }] },
  { title: "Meu portfólio", icon: BriefcaseBusiness, items: [{ title: "Registrar contribuições", slug: "portfolio" }] },
  { title: "Recursos", icon: BookOpen, items: [{ title: "Materiais", slug: "recursos" }, { title: "Glossário", slug: "glossario" }] },
];

const placeholders: DocPage[] = navGroups.flatMap((group) => group.items).filter((item) => !completePages.some((page) => page.slug === item.slug)).map((item) => ({ slug: item.slug, title: item.title, group: navGroups.find((group) => group.items.some((candidate) => candidate.slug === item.slug))?.title ?? "Documentação", description: "Esta página já faz parte da trilha e receberá conteúdo aprofundado em uma próxima etapa.", keywords: item.title.toLowerCase().split(" "), sections: [{ title: "Conteúdo em preparação", callout: { kind: "note", title: "A trilha continua crescendo", text: "Enquanto esta página é preparada, use a busca ou avance pelas páginas completas da primeira versão." } }] }));

export const docs = [...completePages, ...placeholders];
export const completeDocs = completePages;
export const getDoc = (slug?: string) => docs.find((page) => page.slug === slug);
