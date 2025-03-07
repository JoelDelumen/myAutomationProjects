import {test, expect, beforeEach, afterEach} from '@playwright/test';

beforeEach(async ({page}) => {
    await page.goto('https://letcode.in/');
    await expect(page.locator('h1')).toContainText('LetCode with Koushik');
    await page.getByRole('link', { name: 'Work-Space' }).click();
    await expect(page.getByRole('heading')).toContainText('Ready to be a Pro Engineer?');
    await page.getByRole('link', { name: 'Dialog' }).click();
    await expect(page.getByRole('heading')).toContainText('Alert');
})

afterEach(() => {
    console.log('Testing Done!')
})

test.describe('Dialogs Test', () => {

    test('Accept the Alert', async ({page})=>{
        page.on('dialog', dialog => dialog.accept());
        await page.getByRole('button', {name: 'Simple Alert'}).click();
        await page.waitForTimeout(10000)
    })

    test('Confirm and Print Alert', async({page}) => {
        page.on('dialog', async dialog => {
            console.log(dialog.message());
        })
        page.on('dialog', async dialog => {
            console.log(dialog.dismiss());
        })
        await page.getByRole('button', {name: 'Confirm Alert'}).click();
    })

    test('Input Name in Dialog', async({page}) => {
        const fullName = 'Joel Delumen';
        page.on('dialog', async dialog => {
            await dialog.accept(fullName);
        });
        page.getByRole('button', {name: 'Prompt Alert'}).click();
        await page.waitForTimeout(5000);
        expect(page.isVisible('#myName', `Your name is: ${fullName}`));
    })

    test('Modern Alert Handling', async ({page})=> {
        await page.getByRole('button', {name: 'Modern Alert'}).click();
        const alertMessage = await page.locator('//app-root/app-alert/section/div/div/div[1]/div/div/div[5]/div[2]/div').textContent();
        console.log(alertMessage)
    })
})