const puppeteer = require('puppeteer');

describe("Automationpracticelogin", () => {

    let browser;
    let page;

    beforeAll(async () => {
        browser = await puppeteer.launch({
            headless: false
        });
        page = await browser.newPage();
        await page.goto("http://automationpractice.com/login", { waitUntil: "domcontentloaded" });
    });

    afterEach(async () => {
        await page.waitFor(2000);
    });

    afterAll(async () => {
        await page.close();
        await browser.close();
    });

    test("The title of the page should be Sign in to automationpractice . automationpractice", async () => {
        const expectedPageTitle = "Sign in to automationpractice . automationpractice";
        const title = await page.title();
        expect(title).toBe(expectedPageTitle);
    });

    test("Type e-mail and password field, then press Enter", async () => {
        const emailField = "#login_field";
        await page.click(emailField); 
        await page.type(emailField, "test@gmail.com"); 

        const passwordField = "#password";
        await page.click(passwordField);
        await page.type(passwordField, "123123");

        await page.keyboard.press('Enter');
    });

    test("The title of the page should be GitHub", async() => {
        const expectedPageTitle = "GitHub";
        const title = await page.title();
        expect(title).toBe(expectedPageTitle);
    });

});
