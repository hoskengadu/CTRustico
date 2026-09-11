import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-not-found',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template:
    '<main class="container section"><p class="eyebrow">404 · CT RÚSTICO BJJ</p><h1>Página não encontrada.</h1><a class="button" href="/">Voltar ao início</a></main>',
})
export class NotFound {
  constructor() {
    inject(Title).setTitle('Página não encontrada | CT Rústico BJJ');
    inject(Meta).updateTag({ name: 'robots', content: 'noindex' });
  }
}
