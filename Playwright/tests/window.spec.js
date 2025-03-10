import {test, expect, beforeEach, afterEach} from '@playwright/test'
import { AsyncLocalStorage } from 'async_hooks';
import { CONNREFUSED } from 'dns';

beforeEach(async ({page}) => {
    await page.goto('https://letcode.in/');
    await expect(page.locator('h1')).toContainText('LetCode with Koushik');
    await page.getByRole('link', { name: 'Work-Space' }).click();
    await expect(page.getByRole('heading')).toContainText('Ready to be a Pro Engineer?');
    await page.getByRole('link', { name: 'Tabs' }).click();
    await expect(page.getByRole('heading')).toContainText('Windows');
})

afterEach(() => {
    console.log('Testing Done!')
})

test.describe('Window Testing', () => {
    
    // this command clicks a button and waits for a new page/tab or popup to open
    test('Open Single', async ({page}) => {

        const [newTab] = await Promise.all([
            page.waitForEvent('popup'),
            page.locator('//app-root/app-window/section/div/div/div[1]/div/div/div[1]/div/button').click()
        ])
        console.log(newTab.url());
    })

    test('Open Multiple Pages', async ({page})=> {
        
    })
})