import { RouterLink } from '@angular/router';
import { ChangeDetectionStrategy, Component, ElementRef, signal, viewChild } from '@angular/core';
import { BRAND } from '../../core/config/brand';
@Component({
  imports: [RouterLink],
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` <a class="skip-link" routerLink="/" fragment="conteudo">Pular para o conteúdo</a>
    <header (keydown.escape)="close(true)">
      <div class="container header-inner">
        <a
          routerLink="/"
          fragment="inicio"
          class="brand"
          aria-label="CT Rústico BJJ — início"
          (click)="close()"
          ><img
            class="brand-logo"
            [src]="brand.logo.src"
            alt=""
            [width]="brand.logo.width"
            [height]="brand.logo.height"
          /><span>CT RÚSTICO<small>BRAZILIAN JIU-JITSU</small></span></a
        >
        <button
          #toggle
          class="menu-toggle"
          type="button"
          [attr.aria-expanded]="open()"
          aria-controls="main-navigation"
          (click)="open.set(!open())"
        >
          {{ open() ? 'Fechar' : 'Menu' }} <span aria-hidden="true">{{ open() ? '×' : '☰' }}</span>
        </button>
        <nav id="main-navigation" aria-label="Navegação principal" [class.is-open]="open()">
          @for (link of brand.navigation; track link.id) {
            <a routerLink="/" [fragment]="link.id" (click)="close()">{{ link.label }}</a>
          }
          <a
            [href]="brand.instagram"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram oficial (abre em nova aba)"
            class="social-link"
            >Instagram ↗</a
          >
          <a class="button button-small" routerLink="/" fragment="contato" (click)="close()"
            >Aula experimental <span aria-hidden="true">↗</span></a
          >
        </nav>
      </div>
    </header>`,
  styleUrl: './header.scss',
})
export class Header {
  readonly brand = BRAND;
  readonly open = signal(false);
  readonly toggle = viewChild<ElementRef<HTMLButtonElement>>('toggle');
  close(restoreFocus = false): void {
    this.open.set(false);
    if (restoreFocus) this.toggle()?.nativeElement.focus();
  }
}
