import {expect, test} from "@playwright/test";
test.use({ storageState:"Data/salesforceLogin.json"})
import path from "path";
test ("File upload in SalesForce", async({page, context}) => {

await page.goto("https://orgfarm-168a44d67f-dev-ed.develop.lightning.force.com/lightning/page/home");
console.log(await page.title());

await page.waitForTimeout(2000);
 await page.locator(`//div[@class="slds-icon-waffle"]`).click();
await page.locator(`(//button[@class="slds-button"])[2]`).click();

const appLauncherpopUp = page.locator(`//h2[text()="App Launcher"]`);
await expect (appLauncherpopUp).toBeVisible();

await page.locator(`//input[@class="slds-input"]`).fill(`Accounts`);
await page.waitForTimeout(2000);
await page.locator(`//p[@class="slds-truncate"]/mark`).click();
await page.waitForTimeout(2000);

const New = page.locator(`//div[@title="New"]`);
await expect (New).toBeVisible();
await page.locator(`//div[@title="New"]`).click();
await page.locator(`//input[@name="Name"]`).fill(`Manjuparkavi`);
await page.waitForTimeout(1000);
await page.locator(`//button[@aria-label="Rating"]`).click();
await page.locator(`//span[@title="Warm"]`).click();
await page.waitForTimeout(1000);
await page.locator(`//button[@aria-label="Type"]`).click();
await page.locator(`//lightning-base-combobox-item[@data-value="Prospect"]`).click();
await page.waitForTimeout(1000);
await page.locator(`//button[@aria-label="Industry"]`).click();
await page.locator(`//lightning-base-combobox-item[@data-value="Banking"]`).click();
await page.waitForTimeout(1000);
await page.locator(`//button[@aria-label="Ownership"]`).click();
await page.locator(`//lightning-base-combobox-item[@data-value="Public"]`).click();
await page.waitForTimeout(1000);

await page.locator(`//button[@name="SaveEdit"]`).click();
await page.waitForTimeout(1000);

let toastMsg = page.locator(`//div[@data-key="success"]`);
await expect(toastMsg).toBeVisible();
const toastMsgText = await page.locator(`//div[@data-key="success"]`).innerText();
console.log(`${toastMsgText}`);
await expect(toastMsg).toBeHidden();

const uploadPage = page.locator(`//span[@part="button"]`);
await expect(uploadPage).toBeVisible();

const uploadfiles = page.locator(`//span[@part="button"]`);
await uploadfiles.setInputFiles([path.join(__dirname,`../../Data/TestLeaf Logo.png`)]);

await page.locator(`//span[text()="Done"]`).click();

const afterFileUpload = page.locator(`//span[contains(@class,"regulardesktop uiOutputText")]`);
await expect(afterFileUpload).toBeVisible();
const filename = await afterFileUpload.innerText();
console.log(`${filename} is uploaded successfully`);

})