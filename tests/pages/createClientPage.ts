import { expect, type Locator, type Page } from '@playwright/test'; //NEEDS FIXES

export class CreateClientPage {
    // class content
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

  }








  // await page.getByRole('link', { name: 'Create Client' }).click();
  // await page.locator('div').filter({ hasText: /^Name$/ }).getByRole('textbox').click();
  // await page.locator('div').filter({ hasText: /^Name$/ }).getByRole('textbox').fill('NicoNIcole');
  // await page.locator('input[type="email"]').click();
  // await page.locator('input[type="email"]').fill('a@email.com');
  // await page.locator('input[type="email"]').press('Tab');
  // await page.locator('div').filter({ hasText: /^Telephone$/ }).getByRole('textbox').fill('123344553');
  // await page.getByText('Save').click();'


  
  // await page.locator('div').filter({ hasText: /^ClientsNumber: 3View$/ }).getByRole('link').click();
  // await page.getByText('N NicoNIcole (#3)Email: a@').click();
  // await page.getByText('N NicoNIcole (#3)Email: a@').click();
  // await page.getByRole('img').nth(2).click();