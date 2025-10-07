import {test} from "@playwright/test";

test("Assignment - 2 - Update Lead", async({page}) => {
await page.goto("http://leaftaps.com/opentaps/control/main");
await page.locator(`#username`).fill("Demosalesmanager");
await page.locator(`//input[@id="password"]`).fill("crmsfa");
await page.locator(".decorativeSubmit").click();

await page.locator(`//div[@id="label"]`).click();

await page.locator(`//a[text()='Leads']`).click();
await page.locator(`//a[text()='Find Leads']`).click();

await page.locator(`//a[text()="10012"]`).click();

//await page.locator(`//a[text()='Edit']`).click();

await page.locator(`//a[@class ="subMenuButton"][3]`).click();

  page.locator(`#updateLeadForm_companyName`).clear;
 await page.locator(`#updateLeadForm_companyName`).fill("TestLeaf Co");

 page.locator(`#updateLeadForm_annualRevenue`).clear;
 await page.locator(`#updateLeadForm_annualRevenue`).fill("20000");

 page.locator(`#updateLeadForm_departmentName`).clear;
 await page.locator(`#updateLeadForm_departmentName`).fill("IT");

 page.locator(`#updateLeadForm_description`).clear;
 await page.locator(`#updateLeadForm_description`).fill("New Lead Updated and Completed");

 await page.locator(`//input[@value="Update"]`).click();

 
 await page.waitForTimeout(2000);
 let pageTitle = await page.title();
 console.log("Title Of The Page is: ", pageTitle);

})