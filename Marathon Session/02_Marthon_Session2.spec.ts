

import { expect, test} from "@playwright/test";
test.use({ storageState:"Data/salesforceLogin.json"})
test ("Marathon Session - II", async ({page})=> {
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
await page.locator(`//input[@class="slds-input"]`).fill(`Service`);
await page.waitForTimeout(2000);
await page.locator(`(//p[@class="slds-truncate"]/mark[text()="Service"])[1]`).click();
await page.waitForTimeout(5000);

const servicePage = page.locator(`//span[@title="Service"]`);
await expect(servicePage).toBeVisible();

await page.locator(`//span[text()="Cases"]`).click();
await page.waitForTimeout(2000);
let New =  page.locator(`//div[text()="New"]`);
await expect (New).toBeVisible();
await  page.locator(`//div[text()="New"]`).click();
await page.waitForTimeout(3000);
let NewCase = page.locator(`//div[@class="slds-modal__header"]/h2[text()="New Case"]`);
await expect(NewCase).toBeVisible();

await page.locator(`//input[@placeholder="Search Contacts..."]`).click();
/* const search = page.locator(`//h3[@title="Recent Contacts"]`);
await expect(search).toBeVisible(); */
await page.locator(`//span[text()="New Contact"]`).click();

await page.waitForTimeout(3000);
let newContact = page.locator(`//div[@class="slds-modal__header"]/h2[text()="New Contact"]`);
await expect(newContact).toBeVisible();

await page.waitForTimeout(2000);
await page.locator(`//input[@placeholder="First Name"]`).fill("Sai");
await page.locator(`//input[@placeholder="Last Name"]`).fill("Agastya");
await page.locator(`//button[@name="salutation"]`).click();
await page.locator(`//lightning-base-combobox-item[@data-value="Mr."]`).click();
await page.locator(`(//button[text()="Save"])[2]`).click();
await page.waitForTimeout(1000);

let toastMsg1 = page.locator(`//div[@data-key="success"]`);
await expect(toastMsg1).toBeVisible();
let toastMsgText1 = await page.locator(`//div[@data-key="success"]`).innerText();
console.log(`${toastMsgText1}`);
await expect(toastMsg1).toBeHidden();
await page.waitForTimeout(2000);
await page.locator(`//input[@placeholder="Search Accounts..."]`).click();
await page.locator(`//span[text()="New Account"]`).click();
await page.waitForTimeout(2000);

await page.locator(`//input[@name="Name"]`).fill("Sai Agastya");
await page.locator(`//input[@name="AccountNumber"]`).fill("2111202400001");
await page.locator(`//button[@aria-label="Rating"]`).click();
await page.locator(`//span[@title="Hot"]`).click();
await page.locator(`(//button[@name="SaveEdit"])[2]`).click();

await page.waitForTimeout(1000);
let toastMsg2 = page.locator(`//div[@data-key="success"]`);
await expect(toastMsg2).toBeVisible();
let toastMsgText2 = await page.locator(`//div[@data-key="success"]`).innerText();
console.log(`${toastMsgText2}`);
await expect(toastMsg2).toBeHidden();

await page.locator(`//button[@aria-label="Status"]`).click();
await page.locator(`//span[@title="New"]`).click();

await page.locator(`//button[@aria-label="Priority"]`).click();
await page.locator(`//span[@title="High"]`).click();

await page.locator(`//button[@aria-label="Case Origin"]`).click();
await page.locator(`//span[@title="Email"]`).click();

await page.locator(`//input[@name="Subject"]`).fill(`Product Return Request`);
await page.locator(`(//textarea[@class="slds-textarea"])[1]`).fill(`Requesting a
return for a defective product`);
await page.locator(`(//button[@name="SaveEdit"])[1]`).click();

await page.waitForTimeout(3000);
let casestatus = page.locator(`//span[@class="preamble_custom-preamble"]`);
let casestatus_Text = await page.locator(`//span[@class="preamble_custom-preamble"]`).innerText();
 console.log(`The Status of the Case is, ${casestatus_Text}`);
await expect(casestatus).toContainText("Case created");


await page.locator(`(//span[@aria-hidden="true"])[4]`).click();
await page.locator(`//button[contains(@id,"combobox-button")]/span[text()="New"]`).click();
await page.locator(`//span[@class="slds-media__body"]/span[@title="Escalated"]`).click();
await page.locator(`//button[@name="SaveEdit"]`).click();
//const changedStatus = page.locator(`(//lightning-formatted-text[text()="Escalated"])[1]`).innerText();
//console.log(`The Status is changed to ${changedStatus}`);

await page.locator(`(//button[@type="button"]/span[text()="Share an update..."])[1]`).click();
await page.locator(`//div[@role="textbox"]`).click();
await page.locator(`//div[@role="textbox"]`).fill(`I have successfully created a test case!`);
await page.locator(`//button[@title="Click, or press Ctrl+Enter"]`).click();
await page.waitForTimeout(1000);
let share_Msg = await page.locator(`//div[@class="feedBodyInner Desktop oneApp"]`).innerText();
console.log(`The Share Message is ${share_Msg}`);

await page.locator(`(//lightning-primitive-icon[@exportparts="icon"])[40]`).click();
await page.waitForTimeout(1000);
await page.locator(`//span[text()="Like on Chatter"]`).click();
await page.waitForTimeout(1000);
let toastMsg3 =  page.locator(`//span[@class="toastMessage slds-text-heading--small forceActionsText"]`);
await expect(toastMsg3).toContainText(`Post was liked.`);

await page.locator(`(//span[text()="Chatter"])[1]`).click();
let Chatter_Msg = await page.locator(`(//div[@class="feedBodyInner Desktop oneApp"])[2]`).innerText();
console.log(`The Chatter Message is ${Chatter_Msg}`);

if (share_Msg === Chatter_Msg) {
    console.log("The Share Message and Chatter Messages are Verified");
    
    
}

}) 