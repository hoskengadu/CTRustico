import { TestBed } from '@angular/core/testing';
import { SeoService } from './seo.service';
import { BRAND } from '../config/brand';
import { DEPLOYMENT } from '../config/deployment.generated';
describe('SEO', () => {
  it('produz metadados e schema sem informações não confirmadas ou duplicação', () => {
    const service = TestBed.inject(SeoService);
    service.apply();
    service.apply();
    expect(document.title).toBe(BRAND.title);
    expect(document.querySelectorAll('#organization-schema')).toHaveLength(1);
    const schema = JSON.parse(document.querySelector('#organization-schema')!.textContent!);
    expect(schema.name).toBe(BRAND.name);
    expect(schema.sameAs).toEqual([BRAND.instagram]);
    for (const key of ['address', 'telephone', 'aggregateRating', 'openingHours', 'image'])
      expect(schema).not.toHaveProperty(key);
    expect(document.querySelector('meta[property="og:title"]')?.getAttribute('content')).toBe(
      BRAND.title,
    );
    expect(document.querySelector('meta[name="robots"]')?.getAttribute('content')).toBe(
      DEPLOYMENT.indexable ? 'index, follow' : 'noindex, nofollow',
    );
  });
});
