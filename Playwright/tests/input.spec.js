import {test, expect, beforeEach, afterEach} from '@playwright/test';

beforeEach(async ({page}) => {
    await page.goto('https://letcode.in/');
    await expect(page.locator('h1')).toContainText('LetCode with Koushik');
    await page.getByRole('link', { name: 'Work-Space' }).click();
    await expect(page.getByRole('heading')).toContainText('Ready to be a Pro Engineer?');
    await page.getByRole('link', { name: 'Edit' }).click();
})

afterEach(() => {
    console.log('Testing Done!')
})

// here we add a conditional skip
test.describe('Input Features Tests', () => {
    test.skip(({browserName}) => browserName !== 'chromium', 'Chromium Only!'); 

    test('Enter Full Name', {tag: '@input'}, async({page}) => {
        await expect(page.getByRole('heading')).toContainText('Input');
        await expect(page.getByRole('textbox', { name: 'Enter first & last name' })).toBeVisible();
        await page.getByRole('textbox', { name: 'Enter first & last name' }).click();
        await page.getByRole('textbox', { name: 'Enter first & last name' }).fill('Joel Delumen');
    });

    test('Append to input', async ({page}) => {
        await expect(page.locator('#join')).toBeVisible();
        await page.locator('#join').click();
        await page.locator('#join').fill('I am good at Programming');
        await expect(page.locator('#join')).toBeVisible();
    ;})

    test('What is Inside the textbox', async ({page})=> {
        const inputValue = await page.locator('#getMe').getAttribute('value');
        console.log(inputValue);
    });
    //This test has annotation
    test('Clear Values', {annotation: {type: 'issue', description: 'testing'}}, async ({page}) => {
        await page.locator('#clearMe').clear();
    });

    test('Disabled Editing', async ({page}) => {
        const is_disabled = await page.locator('#noEdit').isDisabled();
        if(is_disabled == true) {
            console.log("The textbox is Disabled")
        } else {console.log("Textbox is enabled")}
    });

    test('ReadOnly', async ({page}) => {
        const is_readOnly = await page.locator('#dontwrite').isEditable()
        console.log(is_readOnly)
        if(is_readOnly == false) {
            console.log("The textbox is Read-Only");
        } 
        else {
            console.log("Textbox is Not Read-Only")
        }
    });
});