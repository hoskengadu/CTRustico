import { DOCUMENT, Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { BRAND } from '../config/brand';
import { DEPLOYMENT } from '../config/deployment.generated';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly document = inject(DOCUMENT);
  private readonly meta = inject(Meta);
  private readonly title = inject(Title);

  apply(): void {
    this.title.setTitle(BRAND.title);
    this.meta.updateTag({ name: 'description', content: BRAND.description });
    this.meta.updateTag({
      name: 'robots',
      content: DEPLOYMENT.indexable ? 'index, follow' : 'noindex, nofollow',
    });
    for (const [property, content] of Object.entries({
      'og:title': BRAND.title,
      'og:description': BRAND.description,
      'og:type': 'website',
      'og:locale': 'pt_BR',
      'og:site_name': BRAND.name,
    }))
      this.meta.updateTag({ property, content });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:title', content: BRAND.title });
    this.meta.updateTag({ name: 'twitter:description', content: BRAND.description });
    if (DEPLOYMENT.siteUrl) {
      const canonical =
        this.document.querySelector<HTMLLinkElement>('link[rel="canonical"]') ??
        this.document.createElement('link');
      canonical.rel = 'canonical';
      canonical.href = DEPLOYMENT.siteUrl + '/';
      this.document.head.appendChild(canonical);
      this.meta.updateTag({ property: 'og:url', content: canonical.href });
    }
    const schema =
      this.document.getElementById('organization-schema') ?? this.document.createElement('script');
    schema.id = 'organization-schema';
    schema.setAttribute('type', 'application/ld+json');
    schema.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'SportsOrganization',
      name: BRAND.name,
      sport: 'Brazilian Jiu-Jitsu',
      sameAs: [BRAND.instagram],
      ...(DEPLOYMENT.siteUrl ? { url: DEPLOYMENT.siteUrl + '/' } : {}),
    });
    this.document.head.appendChild(schema);
  }
}
