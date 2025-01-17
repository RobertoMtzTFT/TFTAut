import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  
  //Validate Elements
  const elementuser = await page.getByPlaceholder('Username');
  await expect(elementuser).toBeVisible();
  const elementpass = await page.getByPlaceholder('Password');
  await expect(elementpass).toBeVisible();
  const elementlogb = await page.getByRole('button', { name: 'Login' });
  await expect(elementlogb).toBeVisible();
  
});