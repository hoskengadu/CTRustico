import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Home } from './home';
import { INSTITUTIONAL_CONTENT, INSTITUTIONAL_DATA } from '../data/institutional.data';
describe('Conteúdo institucional', () => {
  beforeEach(() => TestBed.configureTestingModule({ providers: [provideRouter([])] }));
  it('apresenta os estados pendentes sem perfis, fotos ou endereço fictícios', async () => {
    const fixture = TestBed.createComponent(Home);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    for (const message of [INSTITUTIONAL_DATA.pending.history, INSTITUTIONAL_DATA.pending.gallery])
      expect(page.textContent).toContain(message);
    expect(page.querySelectorAll('.teacher')).toHaveLength(3);
    expect(page.textContent).toContain('Vitão');
    expect(page.textContent).toContain('Santos');
    expect(page.textContent).toContain('Caio');
    expect(page.textContent).toContain('Praia Belo Jardim, 619');
    expect(page.textContent).toContain('+55 21 97032-5614');
    expect(page.querySelector('a[href^="https://wa.me/5521970325614"]')).not.toBeNull();
    expect(page.querySelector('.hero-photo')?.getAttribute('src')).toBe(
      '/images/ct-pitbull-mural.jpeg',
    );
    expect(page.querySelector('.gallery img')).toBeNull();
  });
  it('apresenta dados fornecidos sem reescrever componentes e reserva dimensões das fotos', async () => {
    const photo = { src: '/test-only.svg', alt: 'Imagem de teste', width: 800, height: 600 };
    TestBed.configureTestingModule({
      providers: [
        {
          provide: INSTITUTIONAL_CONTENT,
          useValue: {
            ...INSTITUTIONAL_DATA,
            history: 'História de teste',
            mission: 'Missão de teste',
            culture: 'Cultura de teste',
            teachers: [
              {
                id: 'fixture',
                name: 'Pessoa de teste',
                rank: 'Graduação de teste',
                role: 'Função de teste',
                bio: 'Apresentação de teste',
                photo,
              },
            ],
            gallery: [photo],
            modalities: ['Modalidade de teste'],
            contact: {
              address: 'Endereço de teste',
              mapUrl: 'https://example.com/map',
              phone: '+550000000000',
              whatsappUrl: 'https://example.com/contact',
            },
          },
        },
      ],
    });
    const fixture = TestBed.createComponent(Home);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    expect(page.textContent).toContain('História de teste');
    expect(page.textContent).toContain('Pessoa de teste');
    expect(page.textContent).toContain('Endereço de teste');
    const images = page.querySelectorAll('.teacher img, .gallery img');
    expect(images).toHaveLength(2);
    for (const image of images) {
      expect(image.getAttribute('loading')).toBe('lazy');
      expect(image.getAttribute('width')).toBe('800');
      expect(image.getAttribute('height')).toBe('600');
      expect(image.getAttribute('alt')).toBe('Imagem de teste');
    }
  });
});
