
import { expect } from '@playwright/test'; //Imports Playwright's test runner and assertion functions.
import { Page } from '@playwright/test';
import { LoginPage } from './pages/loginPage.ts'; // Import the LoginPage class from a file in the same directory
import { DashboardPage } from './pages/dashboardPage.ts';
export class TestHelper {
  page: Page;
  loginPage: LoginPage;
  dashboardPage: DashboardPage;

  constructor(page: Page) {
    this.page = page;
    this.loginPage = new LoginPage(page);
    this.dashboardPage = new DashboardPage(page);
  }

  // Utility method for logging in
  async login(username: string, password: string) {
    await this.loginPage.goto();
    await this.loginPage.performLogin(`${process.env.TEST_USERNAME}`, `${process.env.TEST_PASSWORD}`);
    await expect(this.page.getByRole('heading', { name: 'Tester Hotel' })).toBeVisible();
  }

  // Utility method for logging out
  async logout() {
    await this.dashboardPage.performLogout();
    await expect(this.page.getByRole('heading', { name: 'Login' })).toBeVisible();
  }

  // Other utility methods can go here
}