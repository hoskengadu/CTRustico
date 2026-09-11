import { InjectionToken } from '@angular/core';
import { InstitutionalContent } from '../models/institutional';
import { TRAINING_SCHEDULE } from './schedule.data';
export const INSTITUTIONAL_DATA: InstitutionalContent = {
  hero: {
    eyebrow: 'CT RÚSTICO · BRAZILIAN JIU-JITSU',
    title: 'Não tememos',
    emphasis: 'a guerra.',
    description:
      'Mais que um esporte: uma escola para a vida. Conheça o CT Rústico BJJ e fale com a equipe sobre como começar.',
    photo: {
      src: '/images/ct-pitbull-mural.png',
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
  teachers: [],
  schedule: TRAINING_SCHEDULE,
  scheduleNote:
    'Sexta-feira: treino aberto para adultos, sem horário informado no quadro. Confirme com a equipe antes de ir.',
  gallery: [],
  modalities: ['Adultos · Jiu-jítsu e No Gi', 'Kids 1 e 2 · Jiu-jítsu', 'Juvenil · Jiu-jítsu'],
  contact: { address: null, mapUrl: null, phone: null, whatsappUrl: null },
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
