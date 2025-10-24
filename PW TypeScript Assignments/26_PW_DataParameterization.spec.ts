import {test} from "@playwright/test";
import credentials from "../../Data/DataParameterization.json";
for (let data of credentials) { 
    test("Data Parameterization", async ({page}) => {
 await page.goto(`http://leaftaps.com/opentaps/control/main`);
 await page.locator(`#username`).fill(data.Username);
 await page.locator(`#password`).fill(data.Password);
 await page.locator(`.decorativeSubmit`).click();
 await page.locator(`//a[contains(text(),"CRM")]`).click();
 await page.locator(`//a[contains(text(),"Leads")]`).click();
 await page.locator(`//a[contains(text(),"Create Lead")]`).click();
 await page.locator(`#createLeadForm_companyName`).fill(data.Company_Name);
 await page.locator(`#createLeadForm_firstName`).fill(data.First_Name);
 await page.locator(`#createLeadForm_lastName`).fill(data.Last_Name);
 await page.selectOption(`#createLeadForm_dataSourceId`, {label : data.Source});

 await page.selectOption(`#createLeadForm_marketingCampaignId`, {value : data.MarketingCamp});
 const marketingLoc =  page.locator(`//select[@id="createLeadForm_marketingCampaignId"]/option`);
 const marketing_count = await marketingLoc.count();
 const mark_value = console.log(`The Count of Marketing Campaign is... ${marketing_count}`);
 console.log("The values displayed under Marketing Campaign section are...");
 for (let marketingText = 0; marketingText < marketing_count; marketingText++) {
    console.log(await marketingLoc.nth(marketingText).innerText()); 
    
  }

await page.selectOption(`#createLeadForm_industryEnumId`, {index : data.Industry});
const IndustryLoc = page.locator(`//select[@id="createLeadForm_industryEnumId"]/option`);
const IndustryCount = await IndustryLoc.count();

console.log(`The Count of Industry Options available are... ${IndustryCount}`);
console.log("The values displayed under Industry section are...");
for (let industry = 0; industry < IndustryCount; industry++) {
   console.log(await IndustryLoc.nth(industry).innerText());
}

await page.selectOption(`#createLeadForm_currencyUomId`, {value : data.Currency});
const currencyLoc = await page.locator(`//select[@id="createLeadForm_currencyUomId"]/option`).count();

console.log(`The Count of Currency values available in the dropdown is... ${currencyLoc}`);

await page.selectOption(`#createLeadForm_generalCountryGeoId`, {label : data.Country});
const CountryLoc = await page.locator(`//select[@id="createLeadForm_generalCountryGeoId"]/option`).count();

console.log(`The Count of Countries available in the dropdown is... ${CountryLoc}`);

await page.selectOption(`#createLeadForm_generalStateProvinceGeoId`, {value : data.State});
const stateLoc = page.locator(`//select[@id="createLeadForm_generalStateProvinceGeoId"]/option`);
const stateCount = await stateLoc.count();

console.log(`The Count of all states in ${data.Country} is  ${stateCount}`);
console.log("The values displayed under State section are...");
for (let state = 0; state < stateCount; state++) {
   console.log(await stateLoc.nth(state).innerText());

}
        await page.locator(`.smallSubmit`).click();
  })

}
