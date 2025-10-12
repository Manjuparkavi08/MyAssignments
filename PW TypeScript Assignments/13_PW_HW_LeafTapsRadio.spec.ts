import { expect, test } from "@playwright/test";
test("Assertion - Radio Button", async({page}) => {
await page.goto ("https://leafground.com/radio.xhtml ");
 let default_btn = page.locator(`(//label[text()="Safari"])[2]`);
    await expect(default_btn).toHaveText("Safari");

let default_btn2 = await page.locator(`(//label[text()="Safari"])[2]`).innerText();
console.log(`The Default Radio Button selected is: ${default_btn2}`);

let fav_brwser =  page.locator(`(//label[contains(@for,"console")])[1]`);
let fav_brwser2 = await fav_brwser.innerText();
console.log(`The Favourite Browser is: ${fav_brwser2}`);
await expect (fav_brwser).toBeEnabled();
await page.locator(`(//label[contains(@for,"console")])[1]`).click(); 

 await page.locator(`(//label[contains(@for,":city")])[1]`).click();
 let city = await page.locator(`(//label[contains(@for,":city")])[1]`).innerText();
 console.log(`The selected city is: ${city}`);

 let default_age =  page.locator(`(//label[contains(@for,":age")])[2]`);
 await expect(default_age).toContainText("21-40 Years");

 let default_age_value = await default_age.innerText();
 console.log(`The Default age selected is ${default_age_value}`);

 await page.locator(`(//label[contains(@for,":age")])[1]`).click();

 await page.close();


})