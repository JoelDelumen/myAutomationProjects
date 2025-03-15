import {test, expect, beforeEach, afterEach} from '@playwright/test'

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
    test('Open Single Tab', async ({page}) => {

        const [newTab] = await Promise.all([
            page.waitForEvent('popup'),
            page.click('"Open Home Page"')
        ])
        console.log(newTab.url())
        newTab.close();
        await page.bringToFront();
        
    })

    test('Open Multiple Tab', async ({page})=> {
        const [multipage] = await Promise.all([
            page.waitForEvent('popup'),
            await page.click('"Muiltiple windows"')
        ])
        await multipage.waitForLoadState();
        const pages = multipage.context().pages();
        console.log(pages.length);
        pages.forEach(page => {
            console.log(page.url());
        })
        pages[1].on('dialog', (dialog) => {
            console.log(dialog.message());
            dialog.accept();
        })
        await pages[1].click('"Confirm Alert"');
        pages[1].close();

        await pages[2].bringToFront();
        await pages[2].selectOption('#fruits', 'Apple');
        await expect(pages[2].locator('//*[@class="notification is-success"]')).toHaveText('You have selected Apple');
        pages[2].close();
    })
})