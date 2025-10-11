
import {   expect, test} from "@playwright/test";
test ("LeafTaps_Button", async ({page}) => {
await page.goto("https://leafground.com/button.xhtml");
//await page.waitForTimeout(1000);
let page_Title1 = await page.title();
console.log(`The title of the page1 is ${page_Title1}`); //button

let Title_Locator = page.locator(`(//div[@class="card"]//span[@class="ui-button-text ui-c"])[1]`);
let Title_Locator_Click = await Title_Locator.click();
await page.waitForTimeout(1000);
let page_Title2 = await page.title();
console.log(`The title of the page2 is ${page_Title2}`); //Dashboard

await page.goBack();
//await page.waitForTimeout(1000);
let button_Disabled = page.locator(`//div[@class="grid button-demo"]//button[@disabled="disabled"]`);
 await expect(button_Disabled).toBeDisabled();

 await page.locator(`//span[text()="Image"]`).click();
 await page.waitForTimeout(1000);
 
 let button_Secondary = page.locator(`//span[text()="Secondary"]`)
 //await expect.soft(button_Secondary ).toBeHidden (); //fails
 await expect(button_Secondary ).toBeVisible (); 
 await page.locator(`//span[text()="Image"]`).click();
 await button_Secondary.click();

await page.waitForTimeout(1000);
let rounded_Button =  page.locator(`//button[contains(@class,'rounded-button')]`);
let rounded_Button_Count = await rounded_Button.count();
await page.waitForTimeout(1000);
console.log(`The Number of Rounded Buttons in the Webpage is:` ,rounded_Button_Count); //4


})
