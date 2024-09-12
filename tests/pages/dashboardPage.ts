import { expect, type Locator, type Page } from '@playwright/test';

export class DashboardPage {
  //Attributes
  readonly page: Page;
  readonly roomButton: Locator;
  readonly clientButton: Locator;
  readonly billButton: Locator;
  readonly reservationButton: Locator;
  readonly logoutButton: Locator;

  //constructor
  constructor(page: Page) {
    this.page = page;
    this.roomButton = page.locator('a[href="/rooms"]');
    this.clientButton = page.locator('a[href="/clients"]');
    this.billButton = page.locator('a[href="/bills"]');
    this.reservationButton = page.locator('a[href="/reservations"]');

    this.logoutButton = page.getByRole('button', { name: 'Logout' });

  }
//Go to all the different section in the dashboard
  async goToRooms() {
    await this.roomButton.click();
  }
  async goToClients() {
    await this.clientButton.click();
  }
  async goToBills() {
    await this.billButton.click();
  }
  async goToReservations() {
    await this.reservationButton.click();
  }

  async performLogout() {
    await this.logoutButton.click();
  }
}
