import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
test('acessibilidade WCAG AA sem violações automáticas', async ({ page, isMobile }) => {
  await page.goto('/');
  expect(
    (await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze())
      .violations,
  ).toEqual([]);
  if (isMobile) {
    await page.getByRole('button', { name: 'Menu' }).click();
    expect(
      (await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze())
        .violations,
    ).toEqual([]);
  }
});
test('página sem erros, navegação e menu por teclado', async ({ page, isMobile }) => {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(message.text());
  });
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('CT Rústico BJJ');
  await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: 'Pular para o conteúdo' })).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.locator('#conteudo')).toBeFocused();
  if (isMobile) {
    const menu = page.getByRole('button', { name: 'Menu' });
    await expect(page.getByRole('navigation', { name: 'Navegação principal' })).toBeHidden();
    await menu.click();
    await expect(page.getByRole('button', { name: 'Fechar' })).toHaveAttribute(
      'aria-expanded',
      'true',
    );
    await page.keyboard.press('Tab');
    await expect(
      page
        .getByRole('navigation', { name: 'Navegação principal' })
        .getByRole('link', { name: 'O CT', exact: true }),
    ).toBeFocused();
    await page.keyboard.press('Escape');
    await expect(menu).toBeFocused();
    await expect(menu).toHaveAttribute('aria-expanded', 'false');
    await menu.click();
  }
  await page
    .getByRole('navigation', { name: 'Navegação principal' })
    .getByRole('link', { name: 'Horários', exact: true })
    .click();
  await expect(page).toHaveURL(/#horarios$/);
  await expect(page.locator('#horarios')).toBeInViewport();
  if (isMobile)
    await expect(page.getByRole('button', { name: 'Menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    );
  await page.getByRole('link', { name: 'Falar pelo WhatsApp' }).scrollIntoViewIfNeeded();
  await expect(page.getByRole('link', { name: 'Falar pelo WhatsApp' })).toHaveAttribute(
    'href',
    /https:\/\/wa\.me\/5521970325614/,
  );
  expect(errors).toEqual([]);
});
test('sem transbordamento em diferentes larguras e com texto ampliado', async ({ page }) => {
  await page.goto('/');
  for (const width of [320, 375, 640, 768, 1024, 1440, 1920]) {
    await page.setViewportSize({ width, height: 900 });
    expect(
      await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth),
    ).toBe(true);
  }
  await page.setViewportSize({ width: 390, height: 844 });
  await page.evaluate(() => (document.documentElement.style.fontSize = '200%'));
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(
    true,
  );
});
test('HTML prerenderizado e URL direta funcionam sem JavaScript', async ({ browser, baseURL }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto(baseURL + '/#contato');
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  await expect(page.locator('#contato')).toBeInViewport();
  await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
    'content',
    'CT Rústico BJJ | Jiu-jítsu',
  );
  const response = await page.goto(baseURL + '/nao-existe');
  expect(response?.status()).toBe(404);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Página não encontrada.');
  await context.close();
});
test('registra screenshot da página', async ({ page }, testInfo) => {
  await page.goto('/');
  await page.screenshot({
    path: testInfo.outputPath('home.png'),
    fullPage: true,
    animations: 'disabled',
  });
});
