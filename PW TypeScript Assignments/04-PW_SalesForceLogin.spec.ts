import {test} from "@playwright/test";

test ("To Login to Salesforce Login", async ({page}) => {
    await page.goto("https://login.salesforce.com/");
    await page.locator(`//input[@id="username"]`).fill(`manjuparkavi46187@agentforce.com`);
    await page.locator(`//input[@id="password"]`).fill(`SaiAgastya@21`);
    await page.locator(`//input[@id="Login"]`).click();
})