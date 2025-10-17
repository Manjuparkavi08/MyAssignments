

import { expect, test} from "@playwright/test";
test.use({ storageState:"Data/salesforceLogin.json"})
test ("Marathon Session - I", async ({page})=> {
/* const newbrowser = await chromium.launch();
const newContext = await newbrowser.newContext();
const newpage = await newContext.newPage();
 */

 await page.goto("https://orgfarm-168a44d67f-dev-ed.develop.lightning.force.com/lightning/page/home");
 //await page.goto("https://login.salesforce.com");
 /* await page.locator(`//input[@id = "username"]`).fill(`manjuparkavi46187@agentforce.com`);
await page.locator(`//input[@id = "password"]`).fill(`SaiAgastya@21`)
await page.locator(`//input[@id = "Login"]`).click();  */
//await page.waitForTimeout(20000);
console.log(await page.title());

await page.waitForTimeout(2000);
 await page.locator(`//div[@class="slds-icon-waffle"]`).click();
await page.locator(`(//button[@class="slds-button"])[2]`).click();

await page.waitForTimeout(5000);
const Popup = page.locator(`//h2[text()="App Launcher"]`);
await expect (Popup).toBeVisible();

await page.waitForTimeout(5000);
await page.locator(`//input[@class="slds-input"]`).fill(`Marketing`);
await page.waitForTimeout(5000);
await page.locator(`//p[@class="slds-truncate"]/mark`).click();
await page.waitForTimeout(5000);

await page.locator(`(//span[text()="Leads"])[1]`).click();
const New =  page.locator(`//div[text()="New"]`);
await expect (New).toBeVisible();
await  page.locator(`//div[text()="New"]`).click();
const NewLeadPopup = page.locator(`//div[@class = "slds-modal__header"]/h2[text()="New Lead"]`);
await expect(NewLeadPopup).toBeVisible();

const LFN = await page.locator(`//input[@placeholder="First Name"]`).fill("Agastya");
await page.locator(`//input[@placeholder="Last Name"]`).fill("M");
await page.locator(`//input[@name="Company"]`).fill("Google");
await page.locator(`//button[@name="salutation"]`).click();
await page.locator(`//lightning-base-combobox-item[@data-value="Mr."]`).click();
await page.locator(`//button[@name="SaveEdit"]`).click();

await page.waitForTimeout(2000);
const ToastMessage = page.locator(`//div[contains(@id,"toastDescription")]/span[contains(@class,"toastMessage")]`);
await expect.soft(ToastMessage).toBeVisible();
let FN = await page.locator(`//slot[@class="slds-page-header__title slds-m-right--small slds-align-middle slds-line-clamp clip-text"]/lightning-formatted-name`).innerText();
let FN_Verify = console.log(`The First Name Printed is ${FN}`);
let FN_Assert =  page.locator (`//slot[@class="slds-page-header__title slds-m-right--small slds-align-middle slds-line-clamp clip-text"]/lightning-formatted-name`);
await expect(FN_Assert).toBeVisible();

await page.locator(`(//span[text()="Show more actions"])[2]`).click();
await page.locator(`//div[@class="slds-dropdown__item"]//span[text()="Convert"]`).click();
const convertPopup = page.locator(`//div[@class="modal-header slds-modal__header"]/h1[text()="Convert Lead "]`);
await expect(convertPopup).toBeVisible();
await page.waitForTimeout(2000);
await page.locator(`(//div[@class="createPanelCollapsed"]/button)[2]`).click();
await page.waitForTimeout(2000);
await page.locator(`(//label[@class="uiLabel-left form-element__label uiLabel"]/following-sibling::input)[4]`).click();
await page.locator(`(//label[@class="uiLabel-left form-element__label uiLabel"]/following-sibling::input)[4]`).clear();
await page.locator(`(//label[@class="uiLabel-left form-element__label uiLabel"]/following-sibling::input)[4]`).fill("Manjuparkavi.S");
await page.waitForTimeout(2000);

await page.locator(`//button[text()="Convert"]`).click();
await page.waitForTimeout(2000);

await page.locator(`//div[@class="title"]/h2[(text() = "Your lead has been converted")]`).isVisible();
await page.locator(`//button[(text() = "Go to Leads")]`).click();
await page.waitForTimeout(2000);

const myleadpage = page.locator(`//div[@class="slds-page-header__name slds-type-focus triggerLink"]//span[text()="Leads"]`);
await expect(myleadpage).toBeVisible();

//await page.locator(`//button[text()="List View"]`).click();
await page.locator(`//input[@class="slds-input"]`).click();
//await page.locator(`//input[@class="slds-input"]`).fill("Manju");

await page.locator(`(//span[text()="Opportunities"])[1]`).click();
const verify_Oppurtunity =  page.locator(`(//tr[@class="slds-hint-parent"])[1]`);
await expect(verify_Oppurtunity).toBeVisible();


}) 