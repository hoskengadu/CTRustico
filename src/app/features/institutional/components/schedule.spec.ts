import { TestBed } from '@angular/core/testing';
import { Schedule } from './schedule';
import { TRAINING_SCHEDULE } from '../data/schedule.data';
describe('Grade de treinos', () => {
  it('separa as turmas, destaca No Gi e mantém sexta sem horário inventado', async () => {
    const fixture = TestBed.createComponent(Schedule);
    fixture.componentRef.setInput('sessions', TRAINING_SCHEDULE);
    fixture.componentRef.setInput('pending', '');
    fixture.componentRef.setInput('contactUrl', 'https://www.instagram.com/ctrusticobjj/');
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    expect(
      Array.from(page.querySelectorAll('.schedule-group h3'), (h) => h.textContent?.trim()),
    ).toEqual(['Adultos', 'Kids 1 e 2', 'Juvenil']);
    const rows = Array.from(page.querySelectorAll('article'));
    expect(rows).toHaveLength(7);
    const friday = rows.find((row) => row.textContent?.includes('Sexta-feira'))!;
    expect(friday.textContent).toContain('Treino aberto');
    expect(friday.textContent).toContain('Horário a confirmar');
    expect(friday.querySelector('time')).toBeNull();
    const noGi = rows.filter((row) => row.textContent?.includes('No Gi'));
    expect(noGi).toHaveLength(1);
    expect(noGi[0].textContent).toContain('Terça-feira');
    expect(noGi[0].querySelector('time')?.getAttribute('datetime')).toBe('17:00');
    expect(page.querySelector('[aria-label="Kids 1 e 2"] time')?.textContent).toBe('18:15');
    expect(page.querySelector('[aria-label="Juvenil"] time')?.textContent).toBe('19:15');
  });
  it('apresenta estado vazio sem inventar horários', async () => {
    const fixture = TestBed.createComponent(Schedule);
    fixture.componentRef.setInput('sessions', []);
    fixture.componentRef.setInput('pending', 'Grade aguardando confirmação');
    fixture.componentRef.setInput('contactUrl', 'https://www.instagram.com/ctrusticobjj/');
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    expect(page.textContent).toContain('Grade aguardando confirmação');
    expect(page.querySelectorAll('article')).toHaveLength(0);
    expect(page.querySelector('a')?.getAttribute('href')).toContain('ctrusticobjj');
  });
  it('mostra todos os campos e omite professor quando não informado', async () => {
    const fixture = TestBed.createComponent(Schedule);
    fixture.componentRef.setInput('sessions', [
      {
        id: 'fixture-a',
        day: 'Segunda-feira',
        time: '18:00',
        modality: 'Modalidade de teste',
        group: 'Turma de teste',
        teacher: 'Professor de teste',
      },
      {
        id: 'fixture-b',
        day: 'Terça-feira',
        time: '09:00',
        modality: 'Outra modalidade',
        group: 'Outro nível',
      },
    ]);
    fixture.componentRef.setInput('pending', '');
    fixture.componentRef.setInput('contactUrl', '');
    await fixture.whenStable();
    const cards = (fixture.nativeElement as HTMLElement).querySelectorAll('article');
    expect(cards).toHaveLength(2);
    for (const text of ['Segunda-feira', '18:00', 'Modalidade de teste', 'Professor de teste'])
      expect(cards[0].textContent).toContain(text);
    expect(cards[1].textContent).not.toContain('Professor');
    expect(cards[1].querySelectorAll('dt')).toHaveLength(1);
    expect((fixture.nativeElement as HTMLElement).querySelector('h3')?.textContent).toBe(
      'Turma de teste',
    );
  });
});
