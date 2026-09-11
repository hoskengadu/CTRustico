import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
@Component({
  selector: 'app-public-layout',
  imports: [Header, Footer, RouterOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template:
    '<app-header /><main id="conteudo" tabindex="-1"><router-outlet /></main><app-footer />',
})
export class PublicLayout {}
