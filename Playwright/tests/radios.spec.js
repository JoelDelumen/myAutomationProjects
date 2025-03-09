import {test, expect, beforeEach, afterEach} from '@playwright/test';
import { assert, count } from 'console';

beforeEach(async ({page}) => {
    await page.goto('https://letcode.in/');
    await expect(page.locator('h1')).toContainText('LetCode with Koushik');
    await page.getByRole('link', { name: 'Work-Space' }).click();
    await expect(page.getByRole('heading')).toContainText('Ready to be a Pro Engineer?');
    await page.getByRole('link', { name: 'Toggle' }).click();
    await expect(page.getByRole('heading')).toContainText('Radio & Checkbox');
})

afterEach(() => {
    console.log('Testing Done!')
})

test.describe('Radio Button Tests', () => {
    test('Select Any', async ({page})=>{
        await page.getByText('Yes').first().click();
    })

    test('Confirm if Selected', async({page})=> {
        await page.locator('#one').check();
        await page.locator('#one').isChecked();
    })

    test('Find the Bug', async({page})=> {
        await page.locator('#nobug').check();
        await page.locator('#bug').check();
        const radio_is_selectable = await page.locator('#bug').isChecked();
        console.log(radio_is_selectable);
        if (radio_is_selectable == true) {
            console.log("The NO Radio Button is Selectable therefore a bug")
        } else {
            console.log("There was no issue whatsoever");
        }
    })

    test('Find the Selected', async({page})=> {
        const rBtn_1 = await page.locator('#foo').isChecked();
        const rBtn_2 = await page.locator('#notfoo').isChecked();
        const btnArr = [rBtn_1, rBtn_2]
        for (let sel = 0; sel < btnArr.length; sel++) {
            if (btnArr[sel] == true) {
                continue;
            } else {
                console.log(`Button ${sel + 2} is Selected!`)
            }
        }
    })

    test('Confirm Last Field', async ({page}) => {
        const disabledBtn = await page.getByRole('radio', {disabled: 'true'}).isDisabled();
        console.log(`The last field is disabled: ${disabledBtn}`);
    })

    test('Find Checkbox if Checked', async ({page})=> {
        const checkBox = await page.getByRole('checkbox', {name: 'Remember me'}).isChecked();
        console.log(`Checkbox is Checked: ${checkBox}`);
    })

    test.only('Accept T&C', async ({page})=> {
        const tAndC = await page.getByRole('checkbox', {name: 'Remember me'}).click();
    })
})