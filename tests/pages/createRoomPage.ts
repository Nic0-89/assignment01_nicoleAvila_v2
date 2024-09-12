import { type Locator, type Page } from '@playwright/test';
import { faker } from '@faker-js/faker';

export class CreateRoomPage {
  //Attributes
  readonly page: Page;
  readonly selectElement: Locator; 
  readonly categoryInput: Locator;
  readonly numberInput: Locator;
  readonly floorInput: Locator;
  readonly availableCheckBox: Locator;
  readonly priceInput:Locator;
  readonly selectFeature: Locator;
  readonly saveButton: Locator;
  readonly backButton: Locator;
  //Add the missing attributes

  constructor(page: Page) {
    this.page = page;
    this.selectElement = page.getByRole('combobox'); //Use the select element
    this.numberInput = page.locator('input[type="number"]');//page.getByLabel('Number'); 
    this.floorInput = page.getByLabel('Floor');//page.locator('div').filter({ hasText: /^Floor$/ }).getByRole('spinbutton');
    this.availableCheckBox = page.getByRole('checkbox', { name: 'Available' })
    this.priceInput = page.getByLabel('Price');
    this.selectFeature = page.getByRole('listbox');// page.getByRole('listbox').selectOption
    this.saveButton = page.getByRole('button', { name: 'Save' });
    this.backButton = page.getByRole('button', { name: 'Back' });
    //Add the missing attributes
  }
  

//   async fillOutCreateRoomsForm() {
//     await this.selectElement.selectOption({ index: 0 }); //to select Double option
//     await this.selectElement.selectOption({ index: 1 }); //to select single option
//     await this.selectElement.selectOption({ index: 2 }); //to select twin option
//     //Add the missing elements that are to be filled out in the form. Think about using e.g. fakerjs
//   }
// }
  // Methods to use on this page
  async fillOutCreateRoomsForm() {
    // select a room type at random
    const roomTypes = ['Double', 'Single', 'Twin'];
    const randomRoomType = faker.helpers.arrayElement(roomTypes);
    await this.selectElement.selectOption({ label: randomRoomType });
    
    // Fill out the form fields with random data
    const randomNumber = faker.number.int({ min: 1, max: 100 }).toString();
    const randomFloor = faker.number.int({ min: 1, max: 10 }).toString();
    const randomPrice = faker.commerce.price({ min: 1, max: 1000 }).toString(); 

    await this.numberInput.fill(randomNumber);
    await this.floorInput.fill(randomFloor);
    await this.priceInput.fill(randomPrice);

    //select a random feature from the listbox
    const features = await this.selectFeature.locator('option').allTextContents();
    const randomFeature = faker.helpers.arrayElement(features);
    await this.selectFeature.selectOption({ label: randomFeature });

    // toggle the availability checkbox
    const shouldCheckAvailable = faker.datatype.boolean();
    if (shouldCheckAvailable) {
      await this.availableCheckBox.check();
    } else {
      await this.availableCheckBox.uncheck();
    }

    // Click the Save button to submit the form
    await this.saveButton.click();
  }

}


// await page.getByRole('link', { name: 'Create Room' }).click();
// await page.getByRole('combobox').selectOption('single');
// await page.locator('div').filter({ hasText: /^Number$/ }).getByRole('spinbutton').click();
// await page.locator('div').filter({ hasText: /^Number$/ }).getByRole('spinbutton').click({
//   clickCount: 3
// });
// await page.locator('div').filter({ hasText: /^Number$/ }).getByRole('spinbutton').fill('102');
// await page.locator('div').filter({ hasText: /^Floor$/ }).getByRole('spinbutton').click();
// await page.locator('div').filter({ hasText: /^Floor$/ }).getByRole('spinbutton').fill('1');
// await page.locator('.checkbox').click();
// await page.locator('div').filter({ hasText: /^Price$/ }).getByRole('spinbutton').click();
// await page.locator('div').filter({ hasText: /^Price$/ }).getByRole('spinbutton').fill('1500');
// await page.getByRole('listbox').selectOption('balcony');
// await page.getByRole('listbox').selectOption(['balcony', 'sea_view']);
// await page.getByRole('listbox').selectOption(['balcony', 'sea_view', 'penthouse']);
// await page.getByText('Save').click();


// await page.getByRole('button', { name: 'Logout' }).click();
// });