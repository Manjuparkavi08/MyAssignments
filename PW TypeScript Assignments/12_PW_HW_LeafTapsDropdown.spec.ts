import { expect, test } from "@playwright/test";
    
test ("DropDown Assertion", async({page}) => {

await page.goto("https://leafground.com/select.xhtml");
page.locator(`//select[@class="ui-selectonemenu"]`);
let AutTool_DropDown_List = page.locator(`//select[@class="ui-selectonemenu"]/option`);
let AutTool_Count = await AutTool_DropDown_List.count();
console.log("The Count of Automation Tools Available Are" ,AutTool_Count-1);
   console.log("The Automation Tools available are:");
for (let ToolCount = 1; ToolCount < AutTool_Count; ToolCount++) {
        console.log(await AutTool_DropDown_List.nth(ToolCount).innerText());   
}

await page.locator(`//label[text()="Select Country"]`).click();

let Country  =  page.locator(`//select[contains(@id,"country")]/option`);
//await page.selectOption(`//select[contains(@id,"country_input")]/option`, {value : "Brazil"});
let Country_Count = await Country.count();
console.log("The Number of Countries is:" ,Country_Count-1);
console.log("The Country Names are as Follows:");
for (let Country_List = 1; Country_List < Country_Count; Country_List++) {
  console.log(await Country.nth(Country_List).innerText());
  } 

 
  let Country_Brazil =  page.locator(`//li[@data-label="Brazil"]`); 
   let Country_Brazil_Click = await Country_Brazil.click();
   await page.locator(`//label[text()="Select City"]`).click();
      console.log("If the selected Country is Brazil, then...");
       let City_Name_B =  page.locator(`//ul[contains(@id,"city_items")]/li`);
       let City_Count_B = await City_Name_B.count();
         console.log("The Number of Cities are:" ,City_Count_B-1);

       for (var Cities_List = 1; Cities_List  < City_Count_B; Cities_List++) {
         console.log(await City_Name_B.nth(Cities_List).innerText()); }
   
  
  await page.locator(`//div[contains(@id,":country")]//span[contains(@class,"ui-icon ui-icon-triangle")]`).click();
  let Country_India =  page.locator(`//li[@data-label="India"]`);
  let Country_India_Click = await Country_India.click();
  await page.locator(`//label[text()="Select City"]`).click();
  console.log("If the selected Country is India, then...");
       let City_Name_I =  page.locator(`//ul[contains(@id,"city_items")]/li`);
       let City_Count_I = await City_Name_I.count();
         console.log("The Number of Cities are:" ,City_Count_I-1);

       for (var Cities_List = 1; Cities_List  < City_Count_I; Cities_List++) {
         console.log(await City_Name_I.nth(Cities_List).innerText()); }


await page.locator(`//div[contains(@id,":country")]//span[contains(@class,"ui-icon ui-icon-triangle")]`).click();
  let Country_Germany =  page.locator(`//li[@data-label="Germany"]`);
  let Country_Germany_Click = await Country_Germany.click();
  await page.locator(`//label[text()="Select City"]`).click();
  console.log("If the selected Country is Germany, then...");
       let City_Name_G =  page.locator(`//ul[contains(@id,"city_items")]/li`);
       let City_Count_G = await City_Name_I.count();
         console.log("The Number of Cities are:" ,City_Count_I-1);

       for (var Cities_List = 1; Cities_List  < City_Count_I; Cities_List++) {
         console.log(await City_Name_I.nth(Cities_List).innerText()); }
    
await page.locator(`//div[contains(@id,":country")]//span[contains(@class,"ui-icon ui-icon-triangle")]`).click();
  let Country_USA =  page.locator(`//li[@data-label="USA"]`);
  let Country_USA_Click = await Country_USA.click();
  await page.locator(`//label[text()="Select City"]`).click();
  console.log("If the selected Country is USA, then...");
       let City_Name_U =  page.locator(`//ul[contains(@id,"city_items")]/li`);
       let City_Count_U = await City_Name_I.count();
         console.log("The Number of Cities are:" ,City_Count_I-1);

       for (var Cities_List = 1; Cities_List  < City_Count_I; Cities_List++) {
         console.log(await City_Name_I.nth(Cities_List).innerText()); }
      
 await page.locator(`//div[contains(@id,":auto-complete")]//span[contains(@class,"ui-button-text")]`).click();
 await page.locator('//ul[contains(@class,"-autocomplete")]/li[@data-item-label="Playwright"]').click();
 await page.waitForTimeout(1000);
  await page.locator(`//div[contains(@id,":auto-complete")]//span[contains(@class,"ui-button-text")]`).click();
 await page.locator('//ul[contains(@class,"-autocomplete")]/li[@data-item-label="ReactJs"]').click();
 await page.waitForTimeout(1000); 
 await page.locator(`//div[contains(@id,":auto-complete")]//span[contains(@class,"ui-button-text")]`).click();
 await page.locator('//ul[contains(@class,"-autocomplete")]/li[@data-item-label="JMeter"]').click();
 
 await page.locator(`//div[contains(@id,":lang")]//span[contains(@class,"ui-icon ui-icon-tr")]`).click();
 let lang_locator =  page.locator(`//ul[contains(@id,":lang_items")]/li`);
 let lang_count = await lang_locator.count();
 console.log("The Available Languages are:");
for (let lang = 1; lang < lang_count; lang++) {
  console.log(await lang_locator.nth(lang).innerText());
}
    await page.locator(`//div[contains(@id,":lang")]//span[contains(@class,"ui-icon ui-icon-tr")]`).click();
 let selected_Lang = await lang_locator.nth(1).click();

 await page.locator(`//div[contains(@id,":value")]//span[contains(@class,"ui-icon ui-icon-tr")]`).click();
 let Select_Two_Locator = page.locator(`//ul[contains(@id,":value_items")]//li`);
 await page.waitForTimeout(2000);
  await Select_Two_Locator.nth(3).click();
  
 
 })