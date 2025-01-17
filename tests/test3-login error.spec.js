import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  
  //Error on Username
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('Administrator');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText("Invalid credentials")).toBeVisible();

  //Error on Password
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('admin');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText("Invalid credentials")).toBeVisible();

  //Error empty Username
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText("Required")).toBeVisible();
  
  //Error empty Password
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText("Required")).toBeVisible();
});