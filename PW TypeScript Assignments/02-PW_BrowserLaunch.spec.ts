 import { chromium, test, webkit } from "@playwright/test";

test("To launch Flipkart Website in Edge Browser and RedBus Website in WebKit", async () => {
 const Browser_Edge = await chromium.launch({channel : "msedge"});
const context_Edge =  await Browser_Edge.newContext();
const Page_Edge = await context_Edge.newPage(); 

await Page_Edge.goto("https://www.flipkart.com")
let PageTitle1 = await Page_Edge.title();
let PageURL1 =  Page_Edge.url();
console.log("URL of the Page: ", PageURL1);
console.log("Title of the Page: ", PageTitle1); 



const Browser_webKit = await webkit.launch();
const context_webKit =  await Browser_webKit.newContext();
const Page_webKit = await context_webKit.newPage(); 

await Page_webKit.goto("https://www.redbus.in/")
let PageTitle2 = await Page_webKit.title();
let PageURL2 =  Page_webKit.url();
console.log("URL of the Page: ", PageURL2);
console.log("Title of the Page: ", PageTitle2);



});

