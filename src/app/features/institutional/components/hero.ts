import { RouterLink } from '@angular/router';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { BRAND } from '../../../core/config/brand';
import { InstitutionalContent } from '../models/institutional';
@Component({
  imports: [RouterLink],
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {
  readonly brand = BRAND;
  readonly hero = input.required<InstitutionalContent['hero']>();
}
