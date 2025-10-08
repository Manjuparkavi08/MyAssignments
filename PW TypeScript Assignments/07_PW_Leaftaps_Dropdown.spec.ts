import {test} from "@playwright/test";

test("To Verify Dropdown in Leaftaps Application", async({page}) => {
await page.goto ("http://leaftaps.com/opentaps/control/main");
await page.locator(`//input[@id="username"]`).fill("Demosalesmanager");
await page.locator(`//input[@id="password"]`).fill("crmsfa");
await page.locator(`//input[@class="decorativeSubmit"]`).click();


await page.locator(`//a[contains(text(),"CRM")]`).click();
await page.locator(`//a[contains(text(),"Create Lead")]`).click();


await page.locator(`//input[@id="createLeadForm_companyName"]`).fill(`Test Leaf Corporation & Services`);
await page.locator(`//input[@id="createLeadForm_firstName"]`).fill("First Employee");
await page.locator(`//input[@id="createLeadForm_lastName"]`).fill("LE");
await page.locator(`//input[@id="createLeadForm_personalTitle"]`).fill("Ms");
await page.locator(`//input[@id="createLeadForm_generalProfTitle"]`).fill("Title");
await page.locator(`//input[@id="createLeadForm_departmentName"]`).fill("EEE");
await page.locator(`//input[@id="createLeadForm_annualRevenue"]`).fill("120000");

await page.selectOption(`//select[@id="createLeadForm_currencyUomId"]`, {value : "INR"});

await page.locator(`//textarea[@id="createLeadForm_description"]`).fill("Details are updated. Please Review and Acknowledge.");
await page.locator(`//input[@id="createLeadForm_primaryPhoneNumber"]`).fill("9583262569");
await page.locator(`//input[@id="createLeadForm_primaryEmail"]`).fill("firstemployee@yahoo.in");

await page.selectOption(`//select[@id="createLeadForm_generalCountryGeoId"]`, {value : "IND"});

await page.locator(`//input[@name="submitButton"]`).click();

await page.waitForTimeout(2000);
let PageTitle = await page.title();
console.log(`The Title Of The Page Is: `, PageTitle);

})