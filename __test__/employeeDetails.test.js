
const { chromium } = require('playwright');

describe('Next.js Pages Rendering', () => {
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

  const pagesToTest = [ '/employeeDetails/10']

  pagesToTest.forEach((pageURL) => {
    it(`should render page: ${pageURL}`, async () => {
      const fullURL = `http://localhost:3000${pageURL}`; // Update with your base URL
      const response = await page.goto(fullURL);

      // Check if the page is loaded successfully (200 OK status)
      expect(response.status()).toBe(200);

      // Alternatively, you can check for any console errors
      const errors = await page.evaluate(() => {
        return window.errors; // Assuming you log errors to window.errors in your app
      });
      expect(errors).toBeFalsy(); // Check if there are no errors logged during rendering
    });
  });
});
