import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { BRAND } from '../../../core/config/brand';
import { SeoService } from '../../../core/services/seo.service';
import { INSTITUTIONAL_CONTENT } from '../data/institutional.data';
import { Hero } from '../components/hero';
import { Schedule } from '../components/schedule';
@Component({
  selector: 'app-home',
  imports: [Schedule, Hero],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  readonly brand = BRAND;
  readonly content = inject(INSTITUTIONAL_CONTENT);
  constructor() {
    inject(SeoService).apply();
  }
}
