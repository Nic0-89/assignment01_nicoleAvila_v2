import { type Locator, type Page } from '@playwright/test'; //NEEDS FIXES
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
    this.createClientButton = page.getByRole('link', { name: 'Create Client' })
    this.nameInput = page.locator('div').filter({ hasText: /^Name$/ }).getByRole('textbox');
    this.emailInput = page.locator('input[type="email"]');
    this.phoneInput = page.locator('div').filter({ hasText: /^Telephone$/ }).getByRole('textbox');
    this.saveButton = page.getByText('Save');
    this.backButton = page.getByRole('link', { name: 'Back' });
    this.logoutButton = page.getByRole('button', { name: 'Logout' });
  }

//Methods 
async pageClientButton() {
  await this.createClientButton.click()
}


async fillOutClientInfo(name: string, email: string, telephone: string) {
  //pick a name at random
const newName= faker.person.fullName();
const newEmail= faker.internet.email();
const newPhone= faker.phone.number();
  // Simulate filling in the form fields with random data
  await this.nameInput.fill(newName);
  await this.emailInput.fill(newEmail);
  await this.phoneInput.fill(newPhone);
}

async saveNewClient() {
  await this.saveButton.click();
}};





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