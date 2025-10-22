import {expect, test} from "@playwright/test";
import path from "path";
test ("To Upload & Download Files", async ({page})  => { 

    //To Download Files

    await page.goto(`https://the-internet.herokuapp.com/download`);

const heading = page.locator(`//h3[text()="File Downloader"]`);
await expect(heading).toContainText("File Downloader");

//Absolute Path with Suggested File Name
const file1 = page.waitForEvent("download");
await page.locator(`(//a[contains(@href,"download")])[1]`).click();
const jpgfile = await file1;
await jpgfile.saveAs(path.join(__dirname, `../../Data`, jpgfile.suggestedFilename())) 

//Absolute Path with Customized Name
const file2 = page.waitForEvent("download");
await page.locator(`(//a[contains(@href,"download")])[2]`).click();
const sometxtfile = await file2;
await sometxtfile.saveAs(path.join(__dirname,`../../Data/sometextfile.txt`));

//Relative Path with Customized Name
const file3 = page.waitForEvent("download");
await page.locator(`(//a[contains(@href,"download")])[3]`).click();
const randomfile = await file3;
await randomfile.saveAs(`Data/random_data.txt`);

      // To Upload Files

await page.goto(`https://the-internet.herokuapp.com/upload`);
const choosefile =  page.locator(`//input[@id="file-upload"]`);
await choosefile.setInputFiles([path.join(__dirname,`../../Data/TestLeaf Logo.png`)]);
await page.locator(`.button`).click();

const msg = page.locator(`//div[@class="example"]/h3`);
await expect(msg).toHaveText("File Uploaded!");
const assertfile = page.locator(`//div[@class="example"]/div[@id="uploaded-files"]`);
await expect(assertfile).toBeVisible();

})