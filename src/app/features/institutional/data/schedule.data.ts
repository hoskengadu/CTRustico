import { Training } from '../models/institutional';

// Fonte: quadro de horários enviado pelo usuário nesta conversa.
export const TRAINING_SCHEDULE: readonly Training[] = [
  {
    id: 'adultos-manha',
    day: 'Segunda e quarta',
    time: '08:00',
    modality: 'Jiu-jítsu',
    group: 'Adultos',
  },
  {
    id: 'adultos-tarde',
    day: 'Segunda, quarta e quinta',
    time: '17:00',
    modality: 'Jiu-jítsu',
    group: 'Adultos',
  },
  { id: 'adultos-no-gi', day: 'Terça-feira', time: '17:00', modality: 'No Gi', group: 'Adultos' },
  {
    id: 'adultos-noite',
    day: 'Segunda, quarta e quinta',
    time: '20:15',
    modality: 'Jiu-jítsu',
    group: 'Adultos',
  },
  {
    id: 'adultos-aberto',
    day: 'Sexta-feira',
    time: null,
    modality: 'Treino aberto',
    group: 'Adultos',
  },
  {
    id: 'kids',
    day: 'Segunda e quarta',
    time: '18:15',
    modality: 'Jiu-jítsu',
    group: 'Kids 1 e 2',
  },
  {
    id: 'juvenil',
    day: 'Segunda e quarta',
    time: '19:15',
    modality: 'Jiu-jítsu',
    group: 'Juvenil',
  },
];
