import { mkdirSync, writeFileSync } from 'node:fs';

const raw = process.env.SITE_URL?.trim();
let siteUrl = '';
if (raw) {
  const url = new URL(raw);
  if (
    url.protocol !== 'https:' ||
    url.username ||
    url.password ||
    url.search ||
    url.hash ||
    url.pathname !== '/'
  ) {
    throw new Error(
      'SITE_URL deve ser uma origem HTTPS, sem caminho, credenciais, query ou fragmento.',
    );
  }
  siteUrl = url.origin;
}
const indexable =
  Boolean(siteUrl) && (!process.env.VERCEL_ENV || process.env.VERCEL_ENV === 'production');
mkdirSync('src/app/core/config', { recursive: true });
mkdirSync('public', { recursive: true });
writeFileSync(
  'src/app/core/config/deployment.generated.ts',
  'export const DEPLOYMENT = ' + JSON.stringify({ siteUrl, indexable }) + ' as const;\n',
);
writeFileSync(
  'public/robots.txt',
  indexable
    ? 'User-agent: *\nAllow: /\nSitemap: ' + siteUrl + '/sitemap.xml\n'
    : 'User-agent: *\nDisallow: /\n',
);
writeFileSync(
  'public/sitemap.xml',
  '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' +
    (indexable ? '<url><loc>' + siteUrl + '/</loc></url>' : '') +
    '</urlset>\n',
);
if (!siteUrl)
  console.info(
    'SITE_URL ausente: canonical omitido, sitemap vazio e indexação desativada até configurar o domínio real.',
  );
