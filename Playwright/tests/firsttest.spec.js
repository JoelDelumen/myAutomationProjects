import { test, expect } from '@playwright/test'

test('Open Website', async({ page }) => {
    await page.goto('https://letcode.in/test'),
    await expect(page).toHaveTitle('Workspace | LetCode with Koushik');
})