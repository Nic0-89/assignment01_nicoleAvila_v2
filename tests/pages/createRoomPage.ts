import { type Locator, type Page } from '@playwright/test';

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
    this.numberInput = page.getByLabel('Number');
    this.floorInput = page.getByLabel('Floor');
    this.availableCheckBox.getByRole('checkbox', { name: 'Available' })
    this.priceInput = page.getByLabel('Price');
    this.selectFeature = page.getByRole('listbox');
    this.saveButton = page.getByRole('button', { name: 'Save' });
    this.backButton = page.getByRole('button', { name: 'Back' });
    //Add the missing attributes
  }
  

  async fillOutCreateRoomsForm() {
    await this.selectElement.selectOption({ index: 0 }); //to select Double option
    await this.selectElement.selectOption({ index: 1 }); //to select single option
    await this.selectElement.selectOption({ index: 2 }); //to select twin option
    //Add the missing elements that are to be filled out in the form. Think about using e.g. fakerjs
  }
}
