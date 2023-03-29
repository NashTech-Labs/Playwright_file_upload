const { test, expect } =require('@playwright/test');

test('Multiple Files Upload', async ({ page }) => {
    
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');

 // upload multiple files

await page.setInputFiles('input#filesToUpload', 'tests/1.jpeg','tests/2.odt','tests/3.ods')
   
   });
  