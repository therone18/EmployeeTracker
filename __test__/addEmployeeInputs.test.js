const { chromium } = require('playwright');

describe('Input Box Tests', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await chromium.launch();
  });

  afterAll(async () => {
    await browser.close();
  });

  beforeEach(async () => {
    page = await browser.newPage();
  });

  afterEach(async () => {
    await page.close();
  });

  const pagesWithInputs = [
    '/addEmployee'
    // Add page URLs containing input boxes to test here
  ];

  pagesWithInputs.forEach((url) => {
    it(`should have input boxes on ${url}`, async () => {
      const fullURL = `http://localhost:3000${url}`; // Replace with your base URL
      await page.goto(fullURL);

      // Check if input boxes exist on the page
      const inputElements = await page.$$('input');
      expect(inputElements.length).toBeGreaterThan(0); // Assert there is at least one input element
    });
  });
});
