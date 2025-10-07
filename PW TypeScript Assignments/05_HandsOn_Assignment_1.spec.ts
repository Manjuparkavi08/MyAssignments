import {test} from "@playwright/test";

test("Assignment - 1 - Create Lead", async({page}) => {
await page.goto("http://leaftaps.com/opentaps/control/main");


await page.locator(`#username`).fill("Demosalesmanager"); //css
await page.locator(`//input[@id="password"]`).fill("crmsfa"); //relative 
await page.locator(".decorativeSubmit").click(); //css

await page.locator(`//div[@id="label"]`).click();

await page.locator(`//a[text()='Create Lead']`).click();
//await page.locator(`//a[text()='Create Lead']`).click();

await page.locator(`#createLeadForm_companyName`).fill("TestLeaf");
await page.locator(`#createLeadForm_firstName`).fill("Manjuparkavi");
await page.locator(`#createLeadForm_lastName`).fill("S");
await page.locator(`#createLeadForm_personalTitle`).fill("Ms");
await page.locator(`#createLeadForm_generalProfTitle`).fill("Playwright Course");
await page.locator(`#createLeadForm_annualRevenue`).fill("20000");
await page.locator(`#createLeadForm_departmentName`).fill("Information Technology");
await page.locator(`#createLeadForm_primaryPhoneNumber`).fill("9627490014");
await page.locator(`.smallSubmit`).click();

await page.waitForTimeout(2000);

let PageTitle1 = await page.title();
console.log("The Title of the Page is", PageTitle1);


//await page.locator(`#viewLead_companyName_sp`).isVisible()
 //page.getByText(`#viewLead_companyName_sp`);


//await page.locator(`#viewLead_firstName_sp`).isVisible()
//await page.locator(`#viewLead_lastName_sp`).isVisible()
//await page.locator(`#viewLead_statusId_sp`).isVisible()



})