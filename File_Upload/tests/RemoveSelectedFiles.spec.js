const { test, expect } =require('@playwright/test');

test('Remove selected File ', async ({ page }) => {
    
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');

 // upload file

await page.setInputFiles('input#filesToUpload','tests/3.ods')

// Remove selected files

await page.setInputFiles('input#filesToUpload', [])
   
   });
  