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
    this.roomButton= page.locator('div').filter({ hasText: /^RoomsNumber: 3View$/ }).getByRole('link') ;
    this.clientButton= page.locator('div').filter({ hasText: /^ClientsNumber: 3View$/ }).getByRole('link');
    this.billButton= page.locator('div').filter({ hasText: /^BillsTotal: 2 \(6500kr\)Paid: 1 \(2000kr\)View$/ }).getByRole('link')
    this.reservationButton= page.locator('div').filter({ hasText: /^BillsTotal: 2 \(6500kr\)Paid: 1 \(2000kr\)View$/ }).getByRole('link');



    this.logoutButton = page.getByRole('button', { name: 'Logout' });

  }

 
  async goToRooms() {
    await this.roomButton.click();
  }
  
  async performLogout() {
    await this.logoutButton.click();
  }
}



// #app > div > div > div:nth-child(1) > a