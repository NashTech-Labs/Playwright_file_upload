const { test, expect } =require('@playwright/test');

test('Single File Upload', async ({ page }) => {
    
    await page.goto('https://the-internet.herokuapp.com/upload');

    // Upload single file

 await page.setInputFiles('input[type="file"]', 'tests/1.jpeg')

 // Click on Submit button
 await page.click('#file-submit')

 // asserting the file name on the success page.
 await expect(page.locator('#uploaded-files')).toContainText('1.jpeg')

 });
  