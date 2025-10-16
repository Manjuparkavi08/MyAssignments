import {expect, test} from "@playwright/test";
test("Alert Home Assignment", async({page}) => {
await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm"); //page is taking long time to load
await page.reload();
//await page.waitForTimeout(2000);

page.on(`dialog`, async (alert) => {
const alertmsg = alert.message();
console.log(`Alert message is ${alertmsg}`);

const alertType = alert.type();
console.log(`AlertBox Type is ${alertType}`);
alert.accept();

})

const f1 = page.frameLocator(`[id= "iframeResult"]`);
const btn1 = await f1.locator(`//button[@onclick = "myFunction()"]`).click();
const msg = await f1.locator(`[id= "demo"]`).innerText();
console.log(`The Alert Msg is ${msg}`);
const msg_loc =  f1.locator(`[id= "demo"]`);
await expect(msg_loc).toContainText("You pressed OK!");

})