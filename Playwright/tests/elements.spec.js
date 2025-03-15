import {test, expect, beforeEach, afterEach} from '@playwright/test'
import { assert } from 'console';

beforeEach(async ({page}) => {
    await page.goto('https://letcode.in/');
    await expect(page.locator('h1')).toContainText('LetCode with Koushik');
    await page.getByRole('link', { name: 'Work-Space' }).click();
    await expect(page.getByRole('heading')).toContainText('Ready to be a Pro Engineer?');
    await page.getByRole('link', { name: 'Find Elements' }).click();
    await expect(page.getByRole('heading')).toContainText('Elements');
})

afterEach(() => {
    console.log('Testing Done!')
})


test.describe('Elements Testing', () => {

    test('Test Elements', async ({page})=> {
        await page.locator('input[name="username"]').fill("ortonikc");
        await page.click('"Search"');
        await expect(page.locator('//p[@class="title is-4"]')).toHaveText('Koushik Chatterjee')
        const element = await page.$$('app-repos ol li', {timeout: 5000});
        console.log(element.length);

        for await (const text of element) {
            console.log(await text.innerText());

        }
        const image = page.locator('//img[@alt="Placeholder image"]')
        await expect(image).toHaveScreenshot('58769833.png');
    })

    test.only('Iterate from List', async ({page}) => {
        const listOfItems = page.locator('//app-root/app-home/section/div/div/div[1]/div/div/div/div/ol');
        for (const itemizedList of await listOfItems.getByRole('listitem').all())
            console.log(await itemizedList.innerText());
            
    })
})