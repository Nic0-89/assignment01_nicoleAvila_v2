import {type Locator, type Page } from '@playwright/test'; //NEEDS FIXES
import { faker } from '@faker-js/faker';

export class CreateReservPage {
// class content
  //Attributes
  readonly page: Page;
  readonly createReservationButton: Locator;
  readonly valueInput: Locator;
  readonly paidBox: Locator;
  readonly saveButton: Locator;
  readonly backButton: Locator;
  readonly logoutButton: Locator;

  //constructor
  constructor(page: Page) {
    this.page = page;
    this.createReservationButton = page.getByRole('link', { name: 'Create Reservation' })
    this.valueInput = page.locator('div').filter({ hasText: /^Name$/ }).getByRole('textbox');
    this.paidBox = page.locator('input[type="email"]');
    this.saveButton = page.getByText('Save');
    this.backButton = page.getByRole('link', { name: 'Back' });
    this.logoutButton = page.getByRole('button', { name: 'Logout' });
  }

//Methods 
async pageClientButton() {
  await this.createReservationButton.click()
}


async fillOutClientInfo(name: string, email: string, telephone: string) {
  //pick a name at random
const newName= faker.person.fullName();
const newEmail= faker.internet.email();
const newPhone= faker.phone.number();
  // Simulate filling in the form fields with random data
}

async saveNewClient() {
  await this.saveButton.click();
}};


