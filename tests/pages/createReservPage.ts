import { type Locator, type Page } from '@playwright/test'; //NEEDS FIXES
import { faker } from '@faker-js/faker';

export class CreateReservPage {
  // class content
  //Attributes
  readonly page: Page;
  readonly createReservationButton: Locator;
  readonly startDate: Locator;
  readonly endDate: Locator;
  readonly client: Locator
  readonly room: Locator
  readonly bill: Locator
  readonly saveButton: Locator;
  readonly backButton: Locator;
  readonly logoutButton: Locator;

  //constructor
  constructor(page: Page) {
    this.page = page;
    this.createReservationButton = page.getByRole('link', { name: 'Create Reservation' })
    this.startDate = page.locator('div').filter({ hasText: /^Start \(Format YYYY-MM-DD\)$/ }).getByPlaceholder('YYYY-MM-DD')
    this.endDate = page.locator('div').filter({ hasText: /^End \(Format YYYY-MM-DD\)$/ }).getByPlaceholder('YYYY-MM-DD')
    this.client = page.locator('div').filter({ hasText: /^Client- Not selected/ }).getByRole('combobox');
    this.room = page.locator('div').filter({ hasText: /^Room- Not selected/ }).getByRole('combobox');
    this.bill = page.locator('div').filter({ hasText: /^Bill- Not selected/ }).getByRole('combobox');
    this.saveButton = page.getByText('Save');
    this.backButton = page.getByRole('link', { name: 'Back' });
    this.logoutButton = page.getByRole('button', { name: 'Logout' });
  }

  //Methods 
  async pageReservationButton() {
    await this.createReservationButton.click()
  }

  // async Dates() {
  //   const options= await this.startDate.all();
  //   const randomIndex = faker.datatype.number({ min: 0, max: options.length - 1 });

  // }
  // async fillOutDateReservation(date: Date ,enddate: Date, name: string, room: string, Bill: string) {
  //   //pick a name at random

  //   const randomIndex = faker.datatype.number({ min: 0, max: options.length - 1 });
  //   const newStartDate = faker.date.recent().toISOString();
  //   const newEndDate = faker.date.recent().toISOString()
 
    // Simulate filling in the form fields with random data
  }

  // async fillOutComboBoxes(date: Date ,enddate: Date, name: string, room: string, Bill: string) {
  //   //pick a name at random
  //   const randomIndex = faker.datatype.number({ min: 0, max: options.length - 1 });
  //   const newClient = faker.phone.number();
  //   const newRoom = faker.internet.email();
  //   const newBill = faker.phone.number();

    // Simulate filling in the form fields with random data
//   }


//   async saveNewClient() {
//     await this.saveButton.click();
//   }
// };


