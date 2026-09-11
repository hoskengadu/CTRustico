import { expect, test } from '@playwright/test';
test.use({ reducedMotion: 'reduce' });

test('todos os links internos funcionam após hidratação e em cliques repetidos', async ({
  page,
  isMobile,
}) => {
  test.setTimeout(60000);
  const errors: string[] = [];
  page.on('pageerror', (e) => errors.push(e.message));
  page.on('console', (m) => {
    if (m.type() === 'error') errors.push(m.text());
  });
  await page.goto('/');
  const sections = ['essencia', 'professores', 'horarios', 'galeria', 'contato'];
  for (const area of ['header', 'footer']) {
    for (const id of sections) {
      if (area === 'header' && isMobile) await page.getByRole('button', { name: 'Menu' }).click();
      await page
        .locator(area + ' nav a[href="/#' + id + '"]')
        .first()
        .click();
      await expect(page).toHaveURL(new RegExp('#' + id + '$'));
      await expect(page.locator('#' + id)).toBeInViewport();
      if (area === 'header' && isMobile)
        await expect(page.getByRole('button', { name: 'Menu' })).toHaveAttribute(
          'aria-expanded',
          'false',
        );
    }
  }
  await page.locator('footer a[fragment="inicio"]').last().click();
  await expect(page.locator('#inicio')).toBeInViewport();
  await page.locator('app-hero a[fragment="horarios"]').click();
  await expect(page.locator('#horarios')).toBeInViewport();
  await page.locator('app-hero a[fragment="horarios"]').click();
  await expect(page.locator('#horarios')).toBeInViewport();
  await page.reload();
  await expect(page.locator('#horarios')).toBeInViewport();
  expect(errors).toEqual([]);
});
