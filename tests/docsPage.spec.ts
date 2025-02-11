import { test, expect } from '@playwright/test';
import { DocsPageObjects } from '../POM-files/DocsPageObjects';
import { NavigationObjects } from '../POM-files/NavigationObjects';
import { Data } from '../testdata.json';

test.describe('Documentation Navigation Tests', () => {
  let navigation;
  let docs;

  // Setup: run before each test
  test.beforeEach(async ({ page }) => {
      navigation = new NavigationObjects(page);
      docs = new DocsPageObjects(page);
      await page.goto('/');
  });

  test('User can navigate to Docs page', async ({ page }) => {
    await navigation.navigateToDocsPage();
    
    // Assertions to check URL and visibility of heading
    await expect(page.url()).toContain('intro');
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();

    // Additional assertion for expected content presence
    await expect(page.getByText('You will learn')).toBeVisible();
  });
  
  test('User can navigate to writing tests link', async ({ page }) => {
    await navigation.navigateToDocsPage();
    await docs.navigateToPageUsingLeftSidebar('Writing tests');
    
    // Assertions to check URL and visibility of heading
    await expect(page.url()).toContain('writing-tests');
    await expect(page.getByRole('heading', { name: 'Writing tests'})).toBeVisible();

    // Additional assertion for expected content presence
    await expect(page.getByText('Playwright tests are simple')).toBeVisible();
  });

});
