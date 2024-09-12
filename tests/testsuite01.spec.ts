import { test, expect } from '@playwright/test';

import { LoginPage } from './pages/loginPage.ts';
import { DashboardPage } from './pages/dashboardPage.ts';
import { CreateRoomPage } from './pages/createRoomPage.ts';
import {CreateClientPage} from './pages/createClientPage.ts';
import { CreateBillPage } from './pages/createBillPage.ts';
import { CreateReservPage } from './pages/createReservPage.ts';



test.describe('Test suite 01', () => {
  test('Test case 01', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);


    await loginPage.goto();
    await loginPage.performLogin(`${process.env.TEST_USERNAME}`, `${process.env.TEST_PASSWORD}`)
    await expect(page.getByRole('heading', { name: 'Tester Hotel' })).toBeVisible();
    await dashboardPage.performLogout();
    await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();
    await page.waitForTimeout(5000);


    test('should create a room with random data', async ({ page }) => {
      const createRoomPage = new CreateRoomPage(page);
      // Navigate to the Create Room page
      await page.goto('http://localhost:3000/room/new');

      // Fill out the form with random data
      await createRoomPage.fillOutCreateRoomsForm();
    });
  });
});












// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
