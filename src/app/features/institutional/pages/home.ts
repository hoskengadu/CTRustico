import { afterNextRender, ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';
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
  readonly activePhoto = signal(0);
  readonly galleryPaused = signal(false);
  private galleryHovered = false;
  private galleryFocused = false;
  private galleryVisible = false;
  constructor() {
    inject(SeoService).apply();
    const destroyRef = inject(DestroyRef);
    afterNextRender(() => {
      const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
      this.galleryPaused.set(motion.matches);
      const observer = new IntersectionObserver(([entry]) => {
        this.galleryVisible = entry.isIntersecting;
      });
      const gallery = document.getElementById('ct-gallery');
      if (gallery) observer.observe(gallery);
      const timer = window.setInterval(() => {
        if (this.galleryVisible && !document.hidden && !this.galleryPaused() &&
            !this.galleryHovered && !this.galleryFocused && this.content.gallery.length > 1) {
          this.changePhoto(1);
        }
      }, 5000);
      destroyRef.onDestroy(() => {
        window.clearInterval(timer);
        observer.disconnect();
      });
    });
  }
  changePhoto(direction: number) {
    const count = this.content.gallery.length;
    if (count) this.activePhoto.update(index => (index + direction + count) % count);
  }
  setGalleryHovered(hovered: boolean) {
    this.galleryHovered = hovered;
  }
  setGalleryFocused(event: FocusEvent) {
    this.galleryFocused = event.type === 'focusin' ||
      (event.relatedTarget instanceof Node && (event.currentTarget as HTMLElement).contains(event.relatedTarget));
  }
}
