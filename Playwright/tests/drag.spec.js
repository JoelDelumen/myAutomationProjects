import {test, expect, beforeEach, afterEach} from '@playwright/test'

beforeEach(async ({page}) => {
    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html');
    await expect(page.getByRole('heading')).toContainText('Drag and drop - demo 3');
})

afterEach(() => {
    console.log('Testing Done!')
})

test.describe('Drag and Drop Testing', () => {
    /* This test validates if the city belongs to a certain country by verifying the background color 
       of the draggable box from the left, against the country in the right. */
    test('Drag the Box', async ({page}) => {
        test.setTimeout(150000);
        const washington = page.locator('(//div[@dragableelement="2"])[2]');
        const copenhagen = page.locator('(//div[@dragableelement="3"])[2]');
        const stockholm = page.locator('(//div[@dragableelement="1"])[2]');
        const oslo = page.locator('(//div[@dragableelement="0"])[2]');
        const madrid = page.locator('(//div[@dragableelement="6"])[2]');
        const rome = page.locator('(//div[@dragableelement="5"])[2]');
        const seoul = page.locator('(//div[@dragableelement="4"])[2]');

        const italy = page.locator('//div[normalize-space(text())="Italy"]');
        const spain = page.locator('//div[normalize-space(text())="Spain"]');
        const norway = page.locator('//div[normalize-space(text())="Norway"]');
        const denmark = page.locator('//div[normalize-space(text())="Denmark"]');
        const south_korea = page.locator('//div[normalize-space(text())="South Korea"]');
        const sweden = page.locator('//div[normalize-space(text())="Sweden"]');
        const us = page.locator('//div[normalize-space(text())="United States"]');

        let cities = [washington, copenhagen, stockholm, oslo, madrid, rome, seoul]
        let countries = [italy, spain, norway, denmark, south_korea, sweden, us]

        //Iterate over cities towards Countries.
        for (let cty = 0; cty < cities.length; cty++) {
            const city = cities[cty];
        
            // Iterate over all countries for each city
            for (let cnty = 0; cnty < countries.length; cnty++) {
              const country = countries[cnty];

              const cityName = await city.textContent();
              const countryName = await country.textContent();

              // Perform drag and drop action: drag the city to the country
              await city.dragTo(country);
              await page.waitForTimeout(200);

              //validation here....
              const color = await city.evaluate((bgColor) => {
                return window.getComputedStyle(bgColor).backgroundColor;
              })
              if(color === 'rgb(0, 255, 0)') {
                console.log(`${cityName} belongs to ${countryName}`)
              }
              
              //Return the draggable into its main location...
              await city.dragTo(page.locator('(//div[@id="capitals"]//div)[1]'));
              
            }
        }
    })

    test('Drag and Drop Some', async({browser}) => {
        const context = await browser.newContext({baseURL: "http://www.dhtmlgoodies.com"});
        const page = await context.newPage();
        await page.goto('/scripts/drag-drop-custom/demo-drag-drop-2.html')

        // A simple Drag and Drop
        const dog = page.locator('(//div[@dragableelement="1"])[2]')
        const horse = page.locator('(//div[@dragableelement="2"])[2]')
        const tiger = page.locator('(//div[@dragableelement="3"])[2]')
        const cat = page.locator('(//div[@dragableelement="0"])[2]')

        const animals = [dog, horse, tiger, cat]

        for (let i = 0; i < animals.length; i++) {
            const pets = animals[i]
            console.log(await pets.textContent())
            await pets.dragTo(page.locator('(//div[@id="rightColumn"]//div)[1]'))
        }
    })
})