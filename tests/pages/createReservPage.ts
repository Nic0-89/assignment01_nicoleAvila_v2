import { expect, type Locator, type Page } from '@playwright/test'; //NEEDS FIXES
export class CreateReservPage {
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
  }};



//   await page.getByRole('link', { name: 'Back' }).click();
//   await page.locator('div').filter({ hasText: /^ReservationsTotal: 1Current: 0View$/ }).getByRole('link').click();
//   await page.getByRole('link', { name: 'Create Reservation' }).click();
//   await page.locator('div').filter({ hasText: /^Start \(Format YYYY-MM-DD\)$/ }).getByPlaceholder('YYYY-MM-DD').click();
//   await page.locator('div').filter({ hasText: /^Start \(Format YYYY-MM-DD\)$/ }).getByPlaceholder('YYYY-MM-DD').fill('2024-12-21');
//   await page.locator('div').filter({ hasText: /^End \(Format YYYY-MM-DD\)$/ }).getByPlaceholder('YYYY-MM-DD').click();
//   await page.locator('div').filter({ hasText: /^End \(Format YYYY-MM-DD\)$/ }).getByPlaceholder('YYYY-MM-DD').fill('2021-12-31');
//   await page.locator('div').filter({ hasText: /^Client- Not selected -Jonas Hellman \(#1\)Mikael Eriksson \(#2\)$/ }).getByRole('combobox').selectOption('1');
//   await page.locator('div').filter({ hasText: /^Room- Not selected -Floor 1, Room 101Floor 1, Room 102$/ }).getByRole('combobox').selectOption('2');
//   await page.locator('div').filter({ hasText: /^Bill- Not selected -ID: 1ID: 2$/ }).getByRole('combobox').selectOption('1');
//   await page.getByText('Save').click();
// });