const { test, expect } = require('@playwright/test');



const baseURL = 'http://localhost:3000';


test('Pages Load Test', async ({ page}) => {
  const pagesToTest = ['/addEmployee', '/employeeDetails/1', '/editEmployee/1', '/deletingEmployee/1']; // Add your page URLs here

  for (const pageURL of pagesToTest) {
    await page.goto(`${baseURL}${pageURL}`);
    const status = await page.evaluate(() => {
      return { status: document.querySelector('html') ? 'success' : 'failure' };
    });

    expect(status).toEqual({ status: 'success' });
  }
});
