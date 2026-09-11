import { RouterLink } from '@angular/router';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BRAND } from '../../core/config/brand';
@Component({
  imports: [RouterLink],
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` <footer class="container">
    <div class="footer-top">
      <a class="brand" routerLink="/" fragment="inicio"
        ><img
          class="brand-logo"
          [src]="brand.logo.src"
          alt=""
          [width]="brand.logo.width"
          [height]="brand.logo.height"
        /><span>CT RÚSTICO<small>BRAZILIAN JIU-JITSU</small></span></a
      >
      <p>{{ brand.slogan }}.</p>
      <a
        [href]="brand.instagram"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram oficial (abre em nova aba)"
        >{{ brand.handle }} ↗</a
      >
    </div>
    <nav aria-label="Navegação do rodapé">
      @for (link of brand.navigation; track link.id) {
        <a routerLink="/" [fragment]="link.id">{{ link.label }}</a>
      }
    </nav>
    <div class="footer-bottom">
      <small>© {{ year }} {{ brand.name }}. Todos os direitos reservados.</small
      ><a routerLink="/" fragment="inicio">Voltar ao topo ↑</a>
    </div>
  </footer>`,
  styles: `
    footer {
      padding-block: 50px 24px;
    }
    .footer-top,
    .footer-bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 24px;
      flex-wrap: wrap;
    }
    p,
    small {
      color: var(--muted);
    }
    a {
      font-size: 0.85rem;
    }
    nav {
      display: flex;
      gap: 24px;
      flex-wrap: wrap;
      padding: 32px 0;
    }
    .footer-bottom {
      padding-top: 24px;
      border-top: 1px solid var(--line);
    }
    nav a,
    .footer-top > a,
    .footer-bottom a {
      min-height: 44px;
      display: inline-flex;
      align-items: center;
    }
  `,
})
export class Footer {
  readonly brand = BRAND;
  readonly year = new Date().getFullYear();
}
