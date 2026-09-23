# CT Rústico BJJ

Slogan oficial: “Não tememos a guerra”, confirmado na foto da parede enviada pelo usuário. O slogan está centralizado em `BRAND.slogan` e aparece no hero e rodapé; o destaque usa fonte cursiva local para remeter à pintura manual.

Site institucional público do CT Rústico BJJ. Primeira fase da futura plataforma digital do CT, sem administração, cadastro, pagamentos ou área do aluno.

## Escopo entregue

Página única com identidade baseada na logo fornecida pelo solicitante, apresentação, história/valores, professores, modalidades/turmas, grade de treinos, galeria, localização/contato, Instagram e chamada para aula experimental. Conteúdos não confirmados têm estados explícitos de atualização; nenhum professor, horário, endereço, telefone, título ou fotografia de terceiros foi inventado.

A consulta ao [Instagram informado](https://www.instagram.com/ctrusticobjj/) em 10/09/2026 não retornou conteúdo acessível. Não foi possível confirmar logotipo, cores, fotos, biografia ou publicações. Nome e perfil são informações fornecidas pelo solicitante. Posteriormente, o solicitante forneceu a logo e confirmou que o mascote é um pitbull de kimono. A marca está incorporada ao projeto.

## Tecnologias e pré-requisitos

- Angular 22.1.6, CLI/build 22.1.8, TypeScript 6, SCSS e Router.
- Standalone Components, OnPush explícito, modo estrito e templates estritos.
- Prerenderização Angular e hidratação; execução sem Zone.js.
- Vitest para componentes; Playwright e axe-core apenas no desenvolvimento.
- Node 24.16.0 usado na entrega (`.nvmrc`); compatibilidade declarada em `package.json`.
- npm e Google Chrome para os testes E2E. Sem biblioteca visual, fontes remotas ou feed embutido.

## Instalação e execução

```sh
npm ci
npm start
```

Acesse http://localhost:4200. A instalação e os comandos de início/teste geram a configuração local de SEO. Não edite `deployment.generated.ts` manualmente.

O servidor usa `--no-hmr`: alterações recarregam a página inteira, evitando divergência entre HTML renderizado no servidor e componentes antigos durante a hidratação. A atualização automática continua habilitada.

## Testes e build

```sh
npm test -- --watch=false
npm run test:seo
npm run build
npm run test:e2e
npm run test:e2e:dev
npm run preview
```

O preview serve a saída de produção em http://127.0.0.1:4173. Os testes E2E iniciam esse servidor quando necessário; execute o build antes deles. Usam o Chrome instalado (`channel: chrome`); em CI, instale-o com `npx playwright install --with-deps chrome`.

`test:e2e:dev` testa todos os links dos menus também no servidor Angular em 4200, incluindo cliques repetidos e recarregamento com fragmento. A navegação usa RouterLink e rolagem para âncoras configurada no Router, preservando URLs diretas e links nativos no HTML prerenderizado.

Cobertura funcional: página e rotas, âncoras, skip link, menu mobile/Escape/foco, dados vazios e preenchidos, imagens com dimensões/lazy loading, schema, geração de robots/sitemap, HTML sem JavaScript, 404, console, larguras de 320 a 1920 pixels e ampliação de texto a 200%. Axe verifica regras WCAG A/AA, incluindo menu aberto. Isso não substitui avaliação manual com leitores de tela e dispositivos reais.

Screenshots e traces são gravados em `test-results/` (ignorado pelo Git). Não são carregados no site.

## Build e publicação na Vercel

O build gera `dist/ct-rustico/browser`, com `index.html` prerenderizado. O projeto não foi publicado nem vinculado a conta alguma.

Quando houver autorização para publicar:

1. Importe o repositório na Vercel e use Node 24.x.
2. Instalação: `npm ci`. Build: `npm run build`.
3. Diretório de saída: `dist/ct-rustico/browser`.
4. O `vercel.json` seleciona preset **Other** (`framework: null`) e saída estática explicitamente, evitando depender de detecção de servidor Angular.
5. Defina `SITE_URL` com a origem HTTPS real, sem caminho, query ou fragmento, no ambiente de produção. Exemplo de formato: `https://seu-dominio-real`. Não use esse exemplo como domínio publicado.
6. Faça o deploy autorizado e verifique domínio, HTTPS, HTML, canonical, sitemap, robots e links.

Apenas `/` existe nesta fase. Seções usam fragmentos como `/#horarios`, que funcionam ao acessar diretamente. Não há rewrite global para index: caminhos desconhecidos retornam o `404.html` estático, evitando soft 404. Novas rotas públicas deverão ser prerenderizadas; futuras rotas autenticadas exigirão uma decisão explícita de renderização e hosting.

`SITE_URL` alimenta canonical, Open Graph URL, schema, robots e sitemap em uma única etapa antes do build. Sem domínio, canonical é omitido, sitemap fica vazio e o site usa `noindex, nofollow`/robots bloqueado. Previews da Vercel também não são indexáveis, mesmo que tenham `SITE_URL`. As configurações geradas são ignoradas pelo Git e regeneradas pelo `npm ci`, início, teste e build.

## Estrutura

```text
src/app/
  core/
    config/                 # Marca, links e configuração de deploy gerada
    services/               # Metadados e dados estruturados
  layout/
    header/                 # Navegação e estado do menu
    footer/
    public-layout/          # Shell exclusivo das páginas públicas
  shared/components/        # Página de rota desconhecida
  features/institutional/
    models/                 # Contratos de dados
    data/                   # Fonte local e token de injeção
    components/             # Hero e grade de treinos
    pages/                  # Composição da página institucional
  app.routes.ts
src/styles/                 # Breakpoints
scripts/                    # SEO e preview de produção
e2e/                        # Fluxos no Chrome e acessibilidade
public/                     # Logo fornecida, favicon, 404 e arquivos SEO gerados
```

## Decisões arquiteturais

- Feature institucional carregada por rota, isolada do shell e de futuras áreas privadas.
- Dados locais tipados expostos por `INSTITUTIONAL_CONTENT`; componentes de apresentação recebem dados por inputs. Uma integração futura poderá obter dados em um serviço/repositório e entregá-los à página, preservando contratos e componentes. Não há camada HTTP fictícia nesta fase.
- Signals somente para interação do menu e inputs reativos.
- Prerender estático: conteúdo disponível no HTML inicial, sem servidor de aplicação em produção. A [documentação Angular](https://angular.dev/guide/ssr) descreve esse modo.
- `SportsOrganization` foi escolhido por não haver localização confirmada. Schema contém somente nome, modalidade, perfil fornecido e URL quando configurada; não contém endereço, telefone, avaliações, horários ou imagem inventada.
- A [configuração estática da Vercel](https://vercel.com/docs/project-configuration/vercel-json) permite fixar preset e diretório de saída.
- Fontes do sistema e logo JPEG local evitam downloads externos. A logo fornecida substitui o monograma provisório no cabeçalho, hero, rodapé e favicon. Preto, branco, grafite e vermelho seguem a marca; elementos circulares remetem ao brasão. O arquivo original tem 150 × 150 px e 9 KB; foi preservado sem redesenho.
- Tokens de cores, fontes e espaçamento em `src/styles.scss`; breakpoints em `src/styles/_tokens.scss`.
- Grade em cartões sem tabela horizontal; galeria e professores só exibem registros fornecidos. Fotos devem ser locais, autorizadas, otimizadas (preferir WebP/AVIF), ter texto alternativo e dimensões reais.
- Hero com foto futura usa prioridade alta; imagens abaixo da primeira dobra usam lazy loading e dimensões reservadas.
- Nenhuma comunicação é enviada automaticamente: os CTAs abrem o perfil oficial para o visitante conversar com a equipe.

## Conteúdo provisório e informações necessárias

Atualize `src/app/core/config/brand.ts` e `src/app/features/institutional/data/institutional.data.ts`. Não distribua os dados do CT pelos templates.

Pendentes: versão da logo em alta resolução/vetor e manual de marca; autorização e arquivos das fotos; história, missão e cultura; validação da proposta de valores/frases; nomes, fotos, graduações e apresentações dos professores; níveis e faixas etárias exatas; horário do treino aberto de sexta; link de mapa; condições da aula experimental; domínio real.

WhatsApp confirmado: `+55 21 97032-5614`. O CTA abre uma conversa pré-preenchida para solicitar informações sobre o CT.

O quadro enviado pelo usuário foi transcrito para `src/app/features/institutional/data/schedule.data.ts`: Adultos segunda/quarta às 08:00, segunda/quarta/quinta às 17:00 e 20:15, terça No Gi às 17:00; sexta treino aberto (hora não informada); Kids 1 e 2 segunda/quarta às 18:15; Juvenil segunda/quarta às 19:15. O componente agrupa por turma e representa a hora desconhecida como `null`. Não foram inferidos horários de término, professores ou idades. A captura de tela não é publicada como imagem, pois contém elementos de interface alheios ao quadro.

A imagem correta do desenho mural foi fornecida pelo usuário e incorporada como imagem principal do hero em `public/images/ct-pitbull-mural.png`, com dimensões reservadas e carregamento prioritário. Ela contextualiza o pitbull de kimono no espaço do CT.

O texto motivacional e os valores são propostas editoriais explicitamente provisórias. A logo usada é a fornecida pelo solicitante. Não representam fatos históricos ou credenciais do CT.

## Próximas fases

Área do aluno, autenticação, cadastro, grade via API, agendamentos, presença, eventos, graduações, comunicados, loja e administração/financeiro poderão ser planejados em features próprias. Nenhum desses recursos foi antecipado. Definir autorização no backend, contratos e estratégia de renderização antes de incluir dados privados.

Consulte [PROJECT_CONTEXT.md](PROJECT_CONTEXT.md) antes de iniciar novos trabalhos.
