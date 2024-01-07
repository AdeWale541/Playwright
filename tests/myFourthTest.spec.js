const { test, expect } = require(`@playwright/test`);

test('Sample Test', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await page.pause();
    await page.click(`id=user-name`); // Selecting locator by id
    await page.locator(`[id="user-name"]`).fill(`standard_user`); // alternative way of writing id locator
    await page.locator(`xpath=//input[@id="password"]`).fill(`Password`);// Selecting locator by xpath
    await page.locator(`//input[@id="password"]`).fill(`Password`);//alternative way of writing xpath locator
    await page.locator(`#login-button`).click(); // Selecting locator by css selector
    await page.locator(`text=LOGIN`).click(); // Selecting element by text
    await page.locator(`input:has-text=("LOGIN")`).click(); // alternative way of selecting element by text
    await page.getByText('Swag Labs').click();
    await expect(page.locator('#root')).toContainText('Swag Labs');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button123"]').click();
});