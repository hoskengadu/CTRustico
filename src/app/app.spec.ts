import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { routes } from './app.routes';
import { BRAND } from './core/config/brand';
describe('Página institucional e navegação', () => {
  beforeEach(() => TestBed.configureTestingModule({ providers: [provideRouter(routes)] }));
  it('renderiza a página pública, todas as âncoras e o contato oficial', async () => {
    const harness = await RouterTestingHarness.create('/');
    const page = harness.routeNativeElement!;
    expect(page.querySelectorAll('h1')).toHaveLength(1);
    expect(page.querySelector('h1')?.textContent).toContain('Não tememos');
    for (const link of BRAND.navigation) {
      expect(page.querySelector('#' + link.id)).not.toBeNull();
      expect(page.querySelector('nav a[href="/#' + link.id + '"]')).not.toBeNull();
    }
    expect(page.querySelector('a[href="/#conteudo"]')).not.toBeNull();
    expect(page.querySelector('a[href="' + BRAND.instagram + '"]')).not.toBeNull();
    expect(page.textContent).not.toContain('Hello,');
    expect(page.querySelectorAll('img')).toHaveLength(3);
    expect(page.querySelectorAll('img[src="' + BRAND.logo.src + '"]')).toHaveLength(2);
    expect(page.querySelector('img.hero-photo')?.getAttribute('src')).toBe(
      '/images/ct-pitbull-mural.png',
    );
    expect(page.querySelector('a[href^="tel:"]')).toBeNull();
  });
  it('mostra página de erro para rota desconhecida', async () => {
    const harness = await RouterTestingHarness.create('/nao-existe');
    expect(harness.routeNativeElement?.textContent).toContain('Página não encontrada');
    expect(harness.routeNativeElement?.querySelector('a')?.getAttribute('href')).toBe('/');
  });
});
