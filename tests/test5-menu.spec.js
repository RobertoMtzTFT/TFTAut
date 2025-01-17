import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  
  //Fill login data
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  
  //Validate new page URL
  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
  
  //Validate Menu
  await expect(page.getByRole('link', { name: 'Admin', exact: true  })).toBeVisible();
  await expect(page.getByRole('link', { name: 'PIM', exact: true   })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Leave', exact: true   })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Time', exact: true   })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Recruitment', exact: true   })).toBeVisible();
  await expect(page.getByRole('link', { name: 'My Info', exact: true   })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Performance', exact: true   })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Dashboard', exact: true   })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Directory', exact: true   })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Maintenance', exact: true   })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Claim', exact: true   })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Buzz', exact: true   })).toBeVisible();

});
