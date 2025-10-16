import {expect, test} from "@playwright/test";
test("To Handle Frames - 2", async ({page}) => {
await page.goto("https://leafground.com/frame.xhtml");

const insideframe = page.frameLocator(`//iframe[@src="default.xhtml"]`);
await  insideframe.locator(`(//button[text()="Click Me"][1])`).click();
//await page.waitForTimeout(2000);
const Insideframe_innertext =  await  insideframe.locator(`(//button[@id="Click"][1])`).innerText();
let F1 =   insideframe.locator(`(//button[@id="Click"][1])`);
console.log(`The Text after clicking the Inside frame is, ${Insideframe_innertext}`);
await expect(F1).toContainText("Hurray! You Clicked Me.");

const allframes = page.frames();
 const framecount = allframes.length; //length is a property that calculates the framecount
console.log (`The Total Number of Frames in the WebPage is, ${framecount}`);

const OF =  page.frameLocator(`[src="page.xhtml"]`);
const IF = OF.frameLocator(`[src="framebutton.xhtml"]`)
const IF_Click = await IF.locator(`#Click`).click();
//await page.waitForTimeout(2000);
const IF_InnerText = await IF.locator(`#Click`).innerText();
console.log(`The Text dispalyed after clicking the Nested Frame is, ${IF_InnerText}`);
const IF_Assert =  IF.locator(`(//button[@id="Click"][1])`);
await expect(IF_Assert).toContainText("Hurray! You Clicked Me.");


})