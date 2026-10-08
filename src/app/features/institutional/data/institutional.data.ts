import { InjectionToken } from '@angular/core';
import { InstitutionalContent } from '../models/institutional';
import { TRAINING_SCHEDULE } from './schedule.data';
export const INSTITUTIONAL_DATA: InstitutionalContent = {
  hero: {
    eyebrow: 'CT RÚSTICO · BRAZILIAN JIU-JITSU',
    title: 'Não tememos',
    emphasis: 'a guerra.',
    description:
      'Conheça o CT Rústico BJJ e fale com a equipe sobre como começar.',
    photo: {
      src: '/images/ct-pitbull-mural.jpeg',
      alt: 'Desenho mural do CT Rústico BJJ com um pitbull de kimono',
      width: 768,
      height: 1024,
    },
  },
  history: `O CT RÚSTICO nasceu da vontade de fazer diferente. Da vontade de construir um lugar onde o Jiu-Jitsu fosse muito além de uma arte marcial — um lugar onde pessoas pudessem evoluir, criar laços, superar seus próprios limites e se tornar melhores dentro e fora dos tatames.

E foi assim que, Caio Henrique, Alberto Santos e Vitor Ripper, três amigos que se conheceram no tatame, começaram a transformar um sonho em realidade.

O que começou com conversas, ideias e a vontade de construir algo juntos ganhou forma, ganhou um nome e, principalmente, ganhou uma família.

Assim nasceu o CT RÚSTICO.

Localizado no coração do Galeão, o Rústico rapidamente se tornou muito mais do que uma academia. É um espaço onde crianças aprendem disciplina e respeito, onde jovens descobrem sua força e onde adultos encontram no Jiu-Jitsu um caminho de evolução.

Em pouco mais de um ano de existência, os resultados já mostram que o sonho deu certo. Atletas formados dentro do Rústico vêm conquistando resultados expressivos em competições, levando o nome da equipe cada vez mais longe.

Mas, para nós, resultado não se mede apenas por medalhas.

Resultado é ver um aluno superar seus medos.
É ver uma criança crescer com disciplina.
É ver um atleta acreditar novamente em si mesmo.
É ver amizades nascerem no tatame e permanecerem para a vida.

O CT RÚSTICO forma atletas para os tatames e, acima de tudo, pessoas para a vida.

Porque três amigos se encontraram no tatame, tiveram um sonho e decidiram lutar por ele.

E essa história está apenas começando.

CT RÚSTICO BJJ — mais que um tatame, uma família.

OSS! 🥋🔥`,
  mission: null,
  culture: null,
  values: [
    {
      title: 'Disciplina',
      description: 'Voltar ao tatame. Aprender. Repetir. Um passo de cada vez.',
    },
    {
      title: 'Respeito',
      description: 'A técnica começa com o cuidado por quem treina ao seu lado.',
    },
    { title: 'Evolução', description: 'Cada treino é uma oportunidade de ir além de si mesmo.' },
    {
      title: 'Comunidade',
      description: 'O caminho é individual. O aprendizado se constrói junto.',
    },
  ],
  teachers: [
    {
      id: 'caio',
      name: 'Caio',
      rank: 'Mestre',
      role: 'Professor',
      bio: 'Professor do CT Rústico BJJ.',
      photo: {
        src: '/images/teachers/caio.jpeg',
        alt: 'Caio usando kimono azul no CT Rústico BJJ',
        width: 960,
        height: 1280,
      },
    },
    {
      id: 'santos',
      name: 'Santos',
      rank: 'Mestre',
      role: 'Professor',
      bio: 'Professor do CT Rústico BJJ.',
      photo: {
        src: '/images/teachers/santos.jpeg',
        alt: 'Santos usando kimono preto no CT Rústico BJJ',
        width: 960,
        height: 1280,
      },
    },
    {
      id: 'vitao',
      name: 'Vitão',
      rank: 'Mestre',
      role: 'Professor',
      bio: 'Professor do CT Rústico BJJ.',
      photo: {
        src: '/images/teachers/vitao.jpeg',
        alt: 'Vitão usando kimono azul no CT Rústico BJJ',
        width: 1200,
        height: 1600,
      },
    },
  ],
  schedule: TRAINING_SCHEDULE,
  scheduleNote:
    'Sexta-feira: treino aberto para adultos, sem horário informado no quadro. Confirme com a equipe antes de ir.',
  gallery: [
    { src: '/images/gallery/podio-campeonato.jpeg', alt: 'Atletas no pódio de um campeonato de Jiu-Jitsu', width: 960, height: 1280 },
    { src: '/images/gallery/equipe-certificado.jpeg', alt: 'Integrantes da equipe reunidos no tatame com um certificado', width: 720, height: 1280 },
    { src: '/images/gallery/equipe-tatame.jpeg', alt: 'Quatro integrantes da equipe de kimono no CT Rústico', width: 720, height: 1280 },
    { src: '/images/gallery/treino-tecnica.jpeg', alt: 'Prática de uma técnica de Jiu-Jitsu no tatame', width: 1280, height: 960 },
    { src: '/images/gallery/atleta-medalha.jpeg', alt: 'Atleta de kimono branco com medalha ao lado de um colega', width: 960, height: 1280 },
    { src: '/images/gallery/equipe-graduacao.jpeg', alt: 'Equipe reunida no CT Rústico com aluno segurando um certificado', width: 960, height: 1280 },
    { src: '/images/gallery/treino-academia.jpeg', alt: 'Alunos treinando no tatame do CT Rústico ao entardecer', width: 1280, height: 960 },
    { src: '/images/gallery/alunos-tatame.jpeg', alt: 'Alunos de kimono sentados juntos no tatame', width: 720, height: 1280 },
    { src: '/images/gallery/luta-competicao.jpeg', alt: 'Atletas de kimono azul e branco durante uma luta de Jiu-Jitsu', width: 853, height: 1280 },
  ],
  modalities: ['Adultos · Jiu-jítsu e No Gi', 'Kids 1 e 2 · Jiu-jítsu', 'Juvenil · Jiu-jítsu'],
  contact: {
    address: 'Praia Belo Jardim, 619 — Ilha do Governador — RJ',
    mapUrl: null,
    phone: '+55 21 97032-5614',
    whatsappUrl:
      'https://wa.me/5521970325614?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20o%20CT%20R%C3%BAstico%20BJJ.',
  },
  pending: {
    history:
      'A história, a missão e a cultura oficial do CT serão compartilhadas aqui após confirmação da equipe.',
    teachers:
      'Em breve, conheça quem conduz os treinos. Nomes, graduações e apresentações aguardam confirmação do CT.',
    schedule:
      'A grade oficial está em atualização. Consulte dias, horários e disponibilidade de turmas diretamente com a equipe.',
    gallery:
      'O espaço, os treinos e a nossa gente. As fotos oficiais serão publicadas após seleção e autorização do CT.',
    address:
      'Endereço aguardando confirmação. Solicite a localização à equipe antes de sua visita.',
    modalities: 'Modalidades, níveis e faixas etárias aguardam confirmação da equipe.',
  },
};
export const INSTITUTIONAL_CONTENT = new InjectionToken<InstitutionalContent>(
  'Institutional content',
  { providedIn: 'root', factory: () => INSTITUTIONAL_DATA },
);
