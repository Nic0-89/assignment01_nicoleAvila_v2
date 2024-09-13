import { test, expect } from '@playwright/test'; //Imports Playwright's test runner and assertion functions.

import { LoginPage } from './pages/loginPage.ts'; // Import the LoginPage class from a file in the same directory
import { DashboardPage } from './pages/dashboardPage.ts';
import { CreateRoomPage } from './pages/createRoomPage.ts';
import { CreateClientPage } from './pages/createClientPage.ts';
import { CreateBillPage } from './pages/createBillPage.ts';
import { CreateReservPage } from './pages/createReservPage.ts';
import { TestHelper} from './commonAction.ts';


test.describe('Test suite 01', () => {
  test('Log in into the app', async ({ page }) => { ////The page object is provided by Playwright and represents a browser page.
    const utility = new TestHelper(page);

    await utility.login(`${process.env.TEST_USERNAME}`, `${process.env.TEST_PASSWORD}`)
    await page.waitForTimeout(5000);

    await utility.logout()
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
    await newClientPage.pageClientButton();
    await page.waitForTimeout(2000);

    await newClientPage.fillOutClientInfo('name', 'email', 'phone');
    await page.waitForTimeout(2000);

    await newClientPage.saveNewClient()
    await page.waitForTimeout(2000);

    await dashboardPage.performLogout();
  });

  test('Create a new Bill', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    const createBill = new CreateBillPage(page);

    //navigate to login page
    await loginPage.goto();
    //   perform the loging
    await loginPage.performLogin(`${process.env.TEST_USERNAME}`, `${process.env.TEST_PASSWORD}`);
    await expect(page.getByRole('heading', { name: 'Tester Hotel' })).toBeVisible();
    // Navigate to the Create Room page
    await dashboardPage.goToBills();
    await page.waitForTimeout(2000);

    await createBill.pageBillButton();
    await page.waitForTimeout(2000);

    await createBill.createBill();
    await page.waitForTimeout(2000);

    await createBill.saveBill();

    await dashboardPage.performLogout();
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
    // Navigate to the Create Reservation page
    await dashboardPage.goToReservations();
    await page.waitForTimeout(2000);

    await newReservation.pageReservationButton();
    await page.waitForTimeout(2000);


    //await page.waitForTimeout(2000);
  });

});

test.describe('Test suite 02', () => {
  test('edit a client', async ({ page }) => {



  });
});

