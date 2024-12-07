import { test, expect } from '@playwright/test';
import { DocsPageObjects } from '../POM-files/DocsPageObjects';
import { NavigationObjects } from '../POM-files/NavigationObjects';

test('User can navigate to Docs page', async ({ page }) => {
  const navigation = new NavigationObjects(page);
  await page.goto('/');

  await navigation.navigateToDocsPage();

  await expect(page.url()).toContain('intro');
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('User can navigate to writing tests link', async ({ page }) => {
  const navigation = new NavigationObjects(page);
  const docs = new DocsPageObjects(page);
  await page.goto('/');

  await navigation.navigateToDocsPage();
  await docs.navigateToPageUsingLeftSidebar('Writing tests');

  await expect(page.url()).toContain('writing-tests');
  await expect(page.getByRole('heading', { name: 'Writing tests'})).toBeVisible();
});
