import {test} from "@playwright/test";
test ("Merge Leads", async ({page, context}) => {
await page.goto(`http://leaftaps.com/opentaps/control/main`);

await page.locator(`#username`).fill(`Demosalesmanager`);
await page.locator(`#password`).fill(`crmsfa`);
await page.locator(`.decorativeSubmit`).click();

await page.locator(`//a[contains(text(),"CRM/")]`).click();

await page.locator(`//a[contains(text(),"Leads")]`).click();
await page.locator(`//a[contains(text(),"Merge Leads")]`).click();

await page.locator(`(//img[@src="/images/fieldlookup.gif"])[1]`).click();
const newLeadPage = context.waitForEvent(`page`);
const childPage = await newLeadPage;
await childPage.locator(`(//a[@class="linktext"])[1]`).click();
await page.waitForTimeout(2000);

await page.locator(`(//img[@src="/images/fieldlookup.gif"])[2]`).click();
const newLeadPage2 = context.waitForEvent(`page`);
const childPage2 = await newLeadPage2;
await page.waitForTimeout(2000);
await childPage2.locator(`(//a[@class="linktext"])[7]`).click();
await page.waitForTimeout(2000);

await page.locator(`.buttonDangerous`).click();

page.once(`dialog`, async(alert) => {
const alertMsg = alert.message();
const alertType = alert.type();
console.log(`Alert Message is - ${alertMsg} and Alert Type is - ${alertType}`);
alert.accept();
console.log(`Leads are Merged!`);
await page.waitForTimeout(3000);
})

//await page.locator(`.buttonDangerous`).click();
await page.reload();
const pageTitle = await page.title();
console.log(`The Title of the page is ${pageTitle}`);

})