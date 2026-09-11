# Contexto vivo — CT Rústico BJJ

Atualizado em 10/09/2026.

## Slogan oficial

A foto enviada pelo usuário confirma a frase pintada na parede do CT: “Não tememos a guerra”. Ela foi centralizada em `BRAND.slogan`, aplicada ao hero e rodapé e estilizada com fonte cursiva disponível no sistema.

## Visão e limites

Site público institucional em Angular, primeira porta de entrada para um futuro ecossistema digital. Nesta entrega: apresentação, história/valores, professores, horários, modalidades, galeria, contato e CTA para consulta de aula experimental. Não implementar antecipadamente administração, mensalidades, alunos, autenticação, pagamentos ou APIs.

Não houve deploy, vínculo com Vercel, alteração da licença, envio de mensagens ou criação de conta.

## Estado inicial e evidências

Repositório inicialmente com README, .gitignore e LICENSE; sem projeto Angular ou dependências equivalentes. Nenhum AGENTS.md aplicável foi encontrado nos diretórios consultados. Node instalado: 24.16.0, npm 11.13.0. Registro npm consultado: Angular core 22.1.6 / CLI 22.1.8 estáveis e compatíveis.

Informações fornecidas pelo solicitante: nome CT Rústico BJJ, universo do jiu-jítsu e perfil oficial https://www.instagram.com/ctrusticobjj/.

Tentativa de leitura do Instagram em 10/09/2026 não retornou conteúdo. Nenhum navegador integrado estava conectado. Não se alegou análise de fotos, cores, biografia ou publicações. Foi aplicado o fallback preto/grafite/branco/vermelho autorizado.

## Decisões

- Angular standalone, TypeScript e templates estritos, SCSS, OnPush explícito.
- Router com layout público e feature institucional lazy; rota desconhecida separada.
- Prerender estático e hidratação, sem servidor Express ou funcionalidades privadas.
- Contratos tipados em institutional/models e fonte local injetável em institutional/data. Componentes recebem os contratos; futura obtenção assíncrona deve ocorrer em serviço/página, sem lógica HTTP dentro de componentes visuais.
- Marca/links em core/config/brand.ts; sem dados de CT duplicados em componentes.
- Hero e grade separados da composição da página; Signals usados no menu e nos inputs.
- Tipografia local do sistema, cores tokenizadas em preto/branco/grafite/vermelho e logo fornecida pelo solicitante, com pitbull de kimono em brasão circular (mascote confirmado pelo usuário). Logo local em public/images/logo-ct-rustico.jpg, preservada em 150 × 150 px. Substitui monograma e favicon provisórios; aplicada ao cabeçalho, hero e rodapé. Textos de força/disciplina/respeito/evolução são proposta editorial e não declarações verificadas.
- Dados desconhecidos permanecem null/arrays vazios, com mensagens visíveis. Não preencher lacunas por inferência.
- Schema SportsOrganization com fatos fornecidos, sem local ou contato não confirmado.
- SEO gerado antes do build. SITE_URL é a única origem de canonical/og:url/sitemap/schema URL; previews e builds sem domínio usam noindex.
- Vercel: build estático, preset Other explícito, saída dist/ct-rustico/browser, sem rewrite global. Rota / e fragmentos funcionam diretamente; 404.html atende caminhos inexistentes.
- Fontes sem chamadas externas, imagens futuras locais com dimensões e lazy loading; não incorporar feed do Instagram.
- Dependências E2E/axe apenas de desenvolvimento; sem biblioteca visual.

## Pendências de conteúdo

Versão da logo em alta resolução/vetor e manual de marca; fotos autorizadas; história/missão/cultura; validação de valores e frases; professores e graduações; níveis e idades exatas; horário do treino aberto de sexta; endereço/mapa; telefone/WhatsApp; regras da aula experimental; domínio de produção.

## Quadro de horários fornecido

Fonte: imagem enviada pelo usuário em `C:\Users\gadug\OneDrive\Imagens\Screenshots\{0FCFA446-054B-449A-80C6-91D6686C76AE}.png`. Transcrição visual, sem inferências de professores, idades, duração ou horário de sexta:

- Adultos: segunda e quarta 08:00; segunda, quarta e quinta 17:00; terça 17:00 No Gi; segunda, quarta e quinta 20:15; sexta treino aberto, sem hora informada.
- Kids 1 e 2: segunda e quarta 18:15.
- Juvenil: segunda e quarta 19:15.
- Fonte tipada em `institutional/data/schedule.data.ts`. Hora desconhecida é `null`; componente agrupa as linhas por turma e exibe “Horário a confirmar”. Modalidades/turmas atualizadas na página.
- Captura usada apenas como fonte de transcrição, sem publicar sobreposições de interface presentes nela. Marca do site preservada.

- Desenho correto fornecido em `C:\Users\gadug\Downloads\{5E563FCF-DC6D-4B1B-A42A-B9E7557F8DD9}.png` incorporado em `public/images/ct-pitbull-mural.png` e usado no hero. A imagem vertical mostra o pitbull de kimono; tem 768 × 1024 px e recebe `fetchpriority="high"`. A foto JPEG anterior permanece como asset, mas não é usada no hero.

Até confirmação, o Instagram fornecido é o único canal de contato. CTA solicita consulta, não confirma agendamento nem gratuidade. Não existe formulário coletando dados pessoais.

## Validação e limites

Resultado em 10/09/2026: 8 testes Angular, 4 testes de configuração SEO e 10 E2E aprovados. Build de produção com uma rota prerenderizada, sem erros ou avisos de orçamento; bundle inicial estimado em 76 KB transferidos, mais cerca de 6,5 KB para a página lazy. Servidor Angular local respondeu HTTP 200. npm audit reportou zero vulnerabilidades no momento da instalação. Sem violações axe nos cenários testados e sem erros de console nos fluxos E2E.

- Unitários cobrem renderização, navegação, menu/Escape, estados vazios/preenchidos, horários, imagens e schema.
- E2E Chrome cobre desktop/mobile, larguras 320–1920 px, ampliação de texto a 200%, foco, skip link, âncoras, HTML sem JavaScript, 404 e console.
- Axe verifica WCAG A/AA automaticamente em desktop/mobile e menu aberto; não é certificação de acessibilidade.
- Screenshots desktop/mobile revisados localmente.
- SEO possui testes de build sem domínio, produção com domínio de teste, preview e configuração inválida.
- Não há dados de campo de Core Web Vitals, auditoria com leitor de tela, nem verificação em Safari/Firefox ou dispositivos físicos.
- Recursos visuais e sociais reais precisam ser novamente revisados em performance/acessibilidade quando fornecidos.

## Orientações para próximas implementações

1. Ler este contexto e verificar o estado real do repositório.
2. Preservar os limites institucionais até existir solicitação de nova fase.
3. Atualizar os arquivos centrais com dados confirmados e registrar origem/data.
4. Não inserir fixtures de testes em conteúdo público.
5. Para uma API futura, preservar interfaces e componentes de apresentação; criar serviço de obtenção, tratamento de falha e estado de carregamento conforme necessidade real.
6. Isolar futuras áreas administrativas/aluno em features e layouts próprios; autenticação/autorização precisa de validação no servidor.
7. Novas rotas públicas: rever app.routes.server.ts, sitemap, SEO e regras Vercel. Rotas privadas não devem ser incluídas em sitemap/prerender público.
8. Antes de publicar: validar conteúdo e domínio real, rodar testes/build e obter autorização de publicação.
9. Atualizar este documento a cada mudança relevante.

## Registro resumido

- Restauração de posição mantida a cargo do navegador: habilitar `scrollPositionRestoration` no Router fazia o reload de uma URL com fragmento retornar ao topo. `anchorScrolling` continua habilitado para cliques via RouterLink.

- Corrigida navegação local: reproduzido NG0500 de hidratação no rodapé após HMR reter versão anterior à logo. Servidor reiniciado; `npm start` usa `ng serve --no-hmr`, mantendo live reload completo. Links internos integrados ao RouterLink com fragmentos, rolagem e navegação repetida habilitadas. Testes de regressão percorrem cabeçalho/rodapé, cliques repetidos e reload com fragmento em desktop/mobile, tanto em desenvolvimento quanto em produção (`test:e2e:dev`).

- Inicializado Angular 22 com routing, SCSS, standalone e prerender.
- Construídos shell público, navegação acessível, página institucional e 404.
- Criados conteúdo central tipado e estados de informações pendentes.
- Criada identidade provisória sem fotografias de terceiros.
- Implementados metadados, schema e geração consistente de robots/sitemap.
- Configurada saída estática Vercel sem efetuar publicação.
- Adicionados testes de componentes, SEO, E2E, responsividade e axe.
- Corrigido overflow na ampliação de texto e separado Hero para manter estilos abaixo do orçamento.
- Mantida LICENSE e versionado package-lock para instalações reprodutíveis.

### Atualização da identidade visual

- Usuário forneceu C:\Users\gadug\Downloads\logo ct rustico.jpg e autorizou adotar sua identidade visual.
- Mascote confirmado pelo usuário: pitbull, não gorila. Descrição acessível corrigida.
- Logo copiada para os assets locais sem edição do desenho. Sem dependência do caminho Downloads em execução.
- Monograma R e indicação de identidade provisória removidos; círculos, preto/branco e vermelho seguem o brasão. Demais dados institucionais permanecem pendentes.
