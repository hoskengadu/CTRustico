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
  history: null,
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
  ],
  schedule: TRAINING_SCHEDULE,
  scheduleNote:
    'Sexta-feira: treino aberto para adultos, sem horário informado no quadro. Confirme com a equipe antes de ir.',
  gallery: [],
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
