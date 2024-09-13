import { expect, type Locator, type Page } from '@playwright/test'; //NEEDS FIXES
import { faker } from '@faker-js/faker';

export class CreateClientPage {
    // class content
  //Attributes
  readonly page: Page;
  readonly createClientButton: Locator;
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly phoneInput: Locator;
  readonly saveButton: Locator;
  readonly backButton: Locator;
  readonly logoutButton: Locator;

  //constructor
  constructor(page: Page) {
    this.page = page;
    this.createClientButton = page.locator('a[href="/rooms"]');
    this.nameInput = page.locator('a[href="/clients"]');
    this.phoneInput = page.locator('a[href="/bills"]');
    this.saveButton = page.locator('a[href="/reservations"]');
    this.backButton = page.locator('a[href="/reservations"]');
    this.logoutButton = page.getByRole('button', { name: 'Logout' });

  }

//Methods 

}


  //getByRole('link', { name: 'Create Client' })





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