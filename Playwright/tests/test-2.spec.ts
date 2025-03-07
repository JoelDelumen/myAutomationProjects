import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://letcode.in/');
  await page.getByRole('link', { name: 'Work-Space' }).click();
  await page.getByRole('link', { name: 'Inner HTML' }).click();
  await page.locator('iframe[name="firstFr"]').contentFrame().getByRole('textbox', { name: 'Enter name' }).click();
  await page.locator('iframe[name="firstFr"]').contentFrame().getByRole('textbox', { name: 'Enter name' }).fill('Joel Delumen');
  await page.locator('iframe[name="firstFr"]').contentFrame().getByRole('textbox', { name: 'Enter name' }).click();
  await page.locator('iframe[name="firstFr"]').contentFrame().getByRole('textbox', { name: 'Enter name' }).fill('Joel');
  await page.locator('iframe[name="firstFr"]').contentFrame().getByRole('textbox', { name: 'Enter email' }).click();
  await page.locator('iframe[name="firstFr"]').contentFrame().getByRole('textbox', { name: 'Enter email' }).fill('Delumen');
  await page.locator('iframe[name="firstFr"]').contentFrame().locator('app-frame-content iframe').contentFrame().getByRole('textbox', { name: 'Enter email' }).click();
  await page.locator('iframe[name="firstFr"]').contentFrame().locator('app-frame-content iframe').contentFrame().getByRole('textbox', { name: 'Enter email' }).fill('joel.delumen@gmail.com');
  await expect(page.locator('iframe[name="firstFr"]').contentFrame().getByRole('paragraph')).toContainText('You have entered Joel Delumen');

});