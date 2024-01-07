const {test, expect}= require(`@playwright/test`);

let context, page;

test.beforeAll(async({browser})=>{
    context=await browser.newContext();
    await context.tracing.start({snapshots:true,screenshots:true});
    page= await context.newPage();
})

test.beforeAll(async({browser})=>{
    await context.tracing.stop({path:`./test-results/SampleTrace1.zip`});

})

test('Sample Test', async ({})=>{
   // await context.tracing.start({snapshots:true,screenshots:true});
    await page.goto('https://www.saucedemo.com/');
    // await page.pause()
    await page.getByText('Swag Labs').click();
     await expect(page.locator('#root')).toContainText('Swag Labs');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button123"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
    await page.locator('a').filter({ hasText: '4' }).click();
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.getByRole('link', { name: 'Logout' }).click();
    await expect(page.locator('[data-test="login-button"]')).toBeVisible();
    //await context.tracing.stop({path:`./test-result/SampleTrace.zip`});

});