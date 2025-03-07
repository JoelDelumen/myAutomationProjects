import {test, expect, beforeEach, afterEach} from '@playwright/test'

beforeEach(async ({page}) => {
    await page.goto('https://letcode.in/');
    await expect(page.locator('h1')).toContainText('LetCode with Koushik');
    await page.getByRole('link', { name: 'Work-Space' }).click();
    await expect(page.getByRole('heading')).toContainText('Ready to be a Pro Engineer?');
    await expect(page.locator('div').filter({ hasText: 'Interact with different types of frames/iframes' }).nth(3)).toBeVisible();
    await page.getByRole('link', { name: 'Inner HTML' }).click();
  await expect(page.getByRole('heading', { name: 'Frame' })).toBeVisible();
})

afterEach(() => {
    console.log('Testing Done!')
})

test.describe('Testing InnerHTML', () => {
    
    test.fixme('Enter Details', async ({page}) => {
        //there was an issue with the locators as the textbox contains similar texts
        const firstName = 'Joel'
        const lastName = 'Delumen'
        const userMail = 'joel.delumen@gmail.com'
        await page.locator('iframe[name="firstFr"]').contentFrame().getByRole('textbox', { name: 'Enter name' }).click();
        await page.locator('iframe[name="firstFr"]').contentFrame().getByRole('textbox', { name: 'Enter name' }).fill(firstName);
        await page.locator('iframe[name="firstFr"]').contentFrame().getByRole('textbox', { name: 'Enter name' }).click();
        await page.locator('iframe[name="firstFr"]').contentFrame().getByRole('textbox', { name: 'Enter name' }).fill(lastName);
        await page.locator('iframe[name="firstFr"]').contentFrame().getByRole('textbox', { name: 'Enter email' }).click();
        await page.locator('iframe[name="firstFr"]').contentFrame().getByRole('textbox', { name: 'Enter email' }).fill('Delumen');
        await page.locator('iframe[name="firstFr"]').contentFrame().locator('app-frame-content iframe').contentFrame().getByRole('textbox', { name: 'Enter email' }).click();
        await page.locator('iframe[name="firstFr"]').contentFrame().locator('app-frame-content iframe').contentFrame().getByRole('textbox', { name: 'Enter email' }).fill('joel.delumen@gmail.com');
        await expect(page.locator('iframe[name="firstFr"]').contentFrame().getByRole('paragraph')).toContainText(`You have entered ${firstName} ${lastName}`);
    })
})

