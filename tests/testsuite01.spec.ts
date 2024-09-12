import { test, expect } from '@playwright/test'; //Imports Playwright's test runner and assertion functions.

import { LoginPage } from './pages/loginPage.ts'; // Import the LoginPage class from a file in the same directory
import { DashboardPage } from './pages/dashboardPage.ts';
import { CreateRoomPage } from './pages/createRoomPage.ts';
import { CreateClientPage } from './pages/createClientPage.ts';
import { CreateBillPage } from './pages/createBillPage.ts';
import { CreateReservPage } from './pages/createReservPage.ts';


test.describe('Test suite 01', () => {
  test('Test case 01', async ({ page }) => { ////The page object is provided by Playwright and represents a browser page.
    const loginPage = new LoginPage(page); // Creates an instance of the LoginPage class, passing the page object to it. This instance allows you to use methods defined in the LoginPage class to interact with the login page.
    const dashboardPage = new DashboardPage(page);

    //navigate to login page
    await loginPage.goto();
    //perform the loging
    await loginPage.performLogin(`${process.env.TEST_USERNAME}`, `${process.env.TEST_PASSWORD}`)
    await expect(page.getByRole('heading', { name: 'Tester Hotel' })).toBeVisible();
    await dashboardPage.performLogout();
    await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();
    await page.waitForTimeout(5000);
  });



  test('should create a room with random data', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    const newRoomPage = new CreateRoomPage(page);

    //navigate to login page
    await loginPage.goto();
    //perform the loging
    await loginPage.performLogin(`${process.env.TEST_USERNAME}`, `${process.env.TEST_PASSWORD}`);
    await expect(page.getByRole('heading', { name: 'Tester Hotel' })).toBeVisible();
    // Navigate to the Create Room page
    await dashboardPage.goToRooms();

    await page.waitForTimeout(2000);
    await newRoomPage.pageRoomButton();

    // Fill out the form with random data
    await newRoomPage.fillOutRoomType();
    await page.waitForTimeout(2000);

    await newRoomPage.floorPrice();
    await page.waitForTimeout(2000);

    await newRoomPage.fillOutAvailability();
    await page.waitForTimeout(2000);
    await newRoomPage.completeFeatures()

    await newRoomPage.saveRoom();

    await dashboardPage.performLogout();

  });
  //FROM HERE ON I NEED TO CHECK
  test('Create a new client', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    const newClientPage = new CreateClientPage(page);

    //navigate to login page
    await loginPage.goto();
    //perform the loging
    await loginPage.performLogin(`${process.env.TEST_USERNAME}`, `${process.env.TEST_PASSWORD}`);
    await expect(page.getByRole('heading', { name: 'Tester Hotel' })).toBeVisible();
    // Navigate to the Create Room page
    await dashboardPage.goToClients();

    await page.waitForTimeout(2000);
  });

  test('Create a new Bill', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    const createBill = new CreateBillPage(page);

    //navigate to login page
    await loginPage.goto();
    //perform the loging
    await loginPage.performLogin(`${process.env.TEST_USERNAME}`, `${process.env.TEST_PASSWORD}`);
    await expect(page.getByRole('heading', { name: 'Tester Hotel' })).toBeVisible();
    // Navigate to the Create Room page
    await dashboardPage.goToClients();

    await page.waitForTimeout(2000);
  });

  test('Create a new reservation', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    const newReservation = new CreateReservPage(page);

    //navigate to login page
    await loginPage.goto();
    //perform the loging
    await loginPage.performLogin(`${process.env.TEST_USERNAME}`, `${process.env.TEST_PASSWORD}`);
    await expect(page.getByRole('heading', { name: 'Tester Hotel' })).toBeVisible();
    // Navigate to the Create Room page
    await dashboardPage.goToClients();

    await page.waitForTimeout(2000);
  });
});


// test('another test case 3', async ({ page }) => {

// });

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

