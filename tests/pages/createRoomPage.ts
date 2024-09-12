import { type Locator, type Page } from '@playwright/test';
import { faker } from '@faker-js/faker';

export class CreateRoomPage {
  //Attributes
  readonly page: Page;
  readonly createRoomButton: Locator;
  readonly selectElement: Locator;
  readonly categoryInput: Locator;
  readonly numberInput: Locator;
  readonly floorInput: Locator;
  readonly CheckBox: Locator;
  readonly priceInput: Locator;
  readonly selectFeature: Locator;
  readonly saveButton: Locator;
  readonly backButton: Locator;
  //Add the missing attributes<div data-v-4ecb1f34="" data-v-af6b34c6="" class="checkbox"> ✓ </div>

  constructor(page: Page) {
    this.page = page;
    this.createRoomButton = page.getByRole('link', { name: 'Create Room' })
    this.selectElement = page.getByRole('combobox'); //Use the select element
    this.numberInput = page.locator('div').filter({ hasText: /^Number$/ }).getByRole('spinbutton')
    this.floorInput = page.locator('div').filter({ hasText: /^Floor$/ }).getByRole('spinbutton')
    this.CheckBox = page.locator('div.checkbox');
    this.priceInput = page.locator('div').filter({ hasText: /^Price$/ }).getByRole('spinbutton')
    this.selectFeature = page.getByRole('listbox');
    this.saveButton = page.getByText('Save');
    this.backButton = page.getByText('Back');
  }

  // Methods to use on this page
  //to go to the form to create a new room
  async pageRoomButton() {
    await this.createRoomButton.click()
  }

  async fillOutRoomType() {
    // select a room type at random
    const roomTypes = ['Double', 'Single', 'Twin'];
    const randomRoomType = faker.helpers.arrayElement(roomTypes);
    await this.selectElement.selectOption({ label: randomRoomType });

    // Fill out the form fields with random data
    const randomNumber = faker.number.int({ min: 1, max: 100 }).toString();

    await this.numberInput.fill(randomNumber);
  }

  async fillOutAvailability() {

    await this.CheckBox.click();  // Check current state of the checkbox

  }

  async floorPrice() {
    const randomFloor = faker.number.int({ min: 1, max: 10 }).toString();
    const randomPrice = faker.commerce.price({ min: 1, max: 2000 })
    const randomWholePrice = Math.floor(parseFloat(randomPrice));
    const stringPrice = randomWholePrice.toString()

    await this.floorInput.fill(randomFloor);
    await this.priceInput.fill(stringPrice);

  }
  // toggle the availability checkbox


  async completeFeatures() {
    const options = ['Balcony', 'Ensuite', 'Sea View', 'Penthouse',];
    const randomFeature = faker.helpers.arrayElement(options);
    await this.selectFeature.selectOption({ label: randomFeature });

    // ramdon how many options to pick
    const numberOfOptions = faker.number.int({ min: 1, max: 4 })

    // Shuffle the options and select the first 'n' options
    const shuffledOptions = faker.helpers.shuffle(options).slice(0, numberOfOptions);

    // Hold down 'Control' (or 'Meta' on macOS) and select multiple options
    await this.page.keyboard.down('Control'); // Use 'Meta' instead of 'Control' for macOS

    // Loop through and select each option
    for (const option of shuffledOptions) {
      await this.selectFeature.click()
    }
    // Release 'Control' after selections are made
    //await this.page.keyboard.up('Control');

  }
  async saveRoom() {
    await this.saveButton.click();
  }
}