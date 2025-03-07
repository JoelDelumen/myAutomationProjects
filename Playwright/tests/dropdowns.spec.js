import {test, expect, beforeEach, afterEach} from '@playwright/test'

beforeEach(async ({page}) => {
    await page.goto('https://letcode.in/');
    await expect(page.locator('h1')).toContainText('LetCode with Koushik');
    await page.getByRole('link', { name: 'Work-Space' }).click();
    await expect(page.getByRole('heading')).toContainText('Ready to be a Pro Engineer?');
    await page.getByRole('link', { name: 'Drop-Down' }).click();
    await expect(page.getByRole('heading')).toContainText('Dropdown');
})

afterEach(() => {
    console.log('Testing Done!')
})

test.describe('Dropdowns Test', () => {

    test('Select Fruits' ,async ({page})=> {
        //selecting a friut using the name from the options
        await page.selectOption('#fruits', 'Apple');
    })
})