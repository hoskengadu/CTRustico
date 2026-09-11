import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';
const script = resolve('scripts/prepare-seo.mjs');
function generate(env, verify) {
  const directory = mkdtempSync(join(tmpdir(), 'ct-rustico-seo-'));
  try {
    const result = spawnSync(process.execPath, [script], {
      cwd: directory,
      env: { ...process.env, SITE_URL: '', VERCEL_ENV: '', ...env },
      encoding: 'utf8',
    });
    verify(result, (name) => readFileSync(join(directory, name), 'utf8'));
  } finally {
    rmSync(directory, { recursive: true });
  }
}
test('sem domínio: nenhum URL fictício e indexação bloqueada', () => {
  generate({}, (result, read) => {
    assert.equal(result.status, 0);
    assert.match(read('public/robots.txt'), /Disallow: \/\n/);
    assert.doesNotMatch(read('public/sitemap.xml'), /<loc>/);
    assert.match(read('src/app/core/config/deployment.generated.ts'), /"siteUrl":""/);
  });
});
test('domínio de teste: canonical configurável e sitemap consistente', () => {
  generate({ SITE_URL: 'https://example.com/', VERCEL_ENV: 'production' }, (result, read) => {
    assert.equal(result.status, 0);
    assert.match(read('public/sitemap.xml'), /<loc>https:\/\/example.com\/<\/loc>/);
    assert.match(read('public/robots.txt'), /Sitemap: https:\/\/example.com\/sitemap.xml/);
    assert.match(read('src/app/core/config/deployment.generated.ts'), /"indexable":true/);
  });
});
test('preview permanece sem indexação mesmo com domínio definido', () => {
  generate({ SITE_URL: 'https://example.com', VERCEL_ENV: 'preview' }, (result, read) => {
    assert.equal(result.status, 0);
    assert.match(read('public/robots.txt'), /Disallow/);
    assert.doesNotMatch(read('public/sitemap.xml'), /<loc>/);
  });
});
test('rejeita domínio com protocolo inseguro ou caminho', () => {
  for (const SITE_URL of [
    'http://example.com',
    'https://example.com/path',
    'https://example.com/?query=test',
  ]) {
    generate({ SITE_URL }, (result) => assert.notEqual(result.status, 0));
  }
});
