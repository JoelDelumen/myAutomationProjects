import {test, expect, beforeEach, afterEach} from '@playwright/test'

beforeEach(async ({page}) => {
    await page.goto('https://letcode.in/');
    await expect(page.locator('h1')).toContainText('LetCode with Koushik');
    await page.getByRole('link', { name: 'Work-Space' }).click();
    await expect(page.getByRole('heading')).toContainText('Ready to be a Pro Engineer?');
    await expect(page.locator('div').filter({ hasText: 'Button Interact with' }).nth(3)).toBeVisible();
    await page.getByRole('link', { name: 'Click' }).click();
})

afterEach(() => {
    console.log('Testing Done!')
})


test.describe('Button Features Tests', () => {

    test('Go to Home', async ({page}) => {
        await expect(page.getByRole('heading', { name: 'Button', exact: true })).toBeVisible();
        await page.getByRole('button', { name: 'Goto Home and come back here' }).click();
    });

    test('Get Location', async ({page}) => {
        const find_button = await page.getByRole('button', { name: 'Find Location' });
        const boundingBox = await find_button.boundingBox();
        if (boundingBox) {
            const { x, y } = boundingBox;
            console.log(`Element's coordinates are: x=${x}, y=${y}`);
          } else {
            console.log("Element not found or is not visible");
          }

    })

    test('Get Element Color', async ({page})=> {
        const btnColor = await page.getByRole('button', { name: 'Find the color of the button' });
        const color = await btnColor.evaluate((el) => {
            return window.getComputedStyle(el).backgroundColor;
        })
        console.log(color)
    })

    test('Find Height and Width', async ({page}) => {
        const element = page.getByRole('button', {name: 'How tall & fat I am?'});
        const elementSize  = await element.boundingBox();
        console.log(elementSize)
        if (elementSize) {
            const {width, height} = elementSize;
            console.log(`Height is ${height}, Width is ${width}`);
        }
    })

    test('Disabled Button', async ({page})=> {
        const checkBtn = await page.getByRole('button', {name: 'Disabled'}).isDisabled();
        if(checkBtn === true) {
            console.log("The button is Disabled")
        } else {
            console.log("The button is Enabled")
        }
    });

    test('Hold Button', async ({page}) => {
        const waitBtn = page.getByRole('button', {name: ' Button Hold!'});
        await expect(waitBtn).toBeVisible();
        const btnBounds = await waitBtn.boundingBox();
        if(btnBounds) {
            const {x, y} = btnBounds;
            await page.mouse.move(x + 1, y + 1);
            await page.mouse.down('left');
            await page.waitForTimeout(2000);
            expect(page.getByRole('button', {name: ' Button has been long pressed'})).toBeVisible;
        }
    })
})