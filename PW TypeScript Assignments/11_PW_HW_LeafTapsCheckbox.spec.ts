import {expect, test} from "@playwright/test";
test ("LeafTaps_Checkboxes", async({page}) => {
await page.goto("https://leafground.com/checkbox.xhtml");

await page.locator(`//div[@class="ui-selectbooleancheckbox ui-chkbox ui-widget"]/span[text()="Basic"]`).click();
await page.locator(`//div[@class="ui-selectbooleancheckbox ui-chkbox ui-widget"]/span[text()="Ajax"]`).click();
 await page.waitForTimeout(2000);
 let Ajax_Notification_Locator = page.locator(`//div[@class="ui-growl-message"]/span[@class="ui-growl-title"]`);
 await expect (Ajax_Notification_Locator).toContainText("Checked");
 let Ajax_InnerText = await Ajax_Notification_Locator.innerText();
 console.log(`Ajax Notification is ${Ajax_InnerText}`); // Checked
 
await page.locator(`//label[text()="Javascript"]`).click();

for (let index = 1; index <=3 ; index++) {
    await page.locator(`//div[@class="col-12"]/div[@class="ui-chkbox ui-widget"]`).click();
    await page.waitForTimeout(2000);
    let Tri_Msg = page.locator(`//div[@class="ui-growl-message"]/span[@class="ui-growl-title"]`);
     await page.waitForTimeout(2000);
    let Tri_Msg_Title = await Tri_Msg.innerText();
    let Tri_Msg_State = page.locator(`//div[@class="ui-growl-message"]/p`);
    //await page.waitForTimeout(1000);
    let Tri_Msg_Noti = await Tri_Msg_State.innerText();
    console.log(` The Title is: "${Tri_Msg_Title}" and The State is: ${Tri_Msg_Noti}`);
}

for (let i = 1; i <= 2; i++) {
  await  page.locator(`//div[@class="ui-helper-hidden-accessible"]/following-sibling::div[@class="ui-toggleswitch-slider"]`).click();
  await page.waitForTimeout(2000);
let toggle_locator = page.locator(`//div[@class="ui-growl-message"]/span[@class="ui-growl-title"]`);
await page.waitForTimeout(2000);
let toggle_msg = await toggle_locator.innerText();
console.log(`The Toggle msg is: ${toggle_msg}`);
}

 await page.waitForTimeout(1000);
 let disabled = page.locator(`//div[contains(@class,"disabled")]`);
 //await expect(disabled).toBeDisabled();
 await expect(disabled).toBeEnabled();

 page.locator(`//div[contains(@id,":multiple")]/ul[@data-label="Cities"]`).click();
let dropdown_list =  page.locator(`//ul[@class="ui-selectcheckboxmenu-items ui-selectcheckboxmenu-list ui-widget-content ui-widget ui-corner-all ui-helper-reset"]/li`);
let dropdown_Count = await dropdown_list.count();
console.log("The Dropdown Count is" ,dropdown_Count);
for (let j = 0; j < dropdown_Count; j++) {
    console.log(await dropdown_list.nth(j).innerText());
    
}

 await page.close();

})

