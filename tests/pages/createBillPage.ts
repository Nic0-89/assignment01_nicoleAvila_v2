import { expect, type Locator, type Page } from '@playwright/test';
import { faker } from '@faker-js/faker';
import CommonActions from '../../actions/commonActions.ts';


export class CreateBillPage {
    // // class content Atrributes, What do I see in this page?
         readonly page: Page;
         readonly textfield: Locator; 
         readonly isPaidCheckbox: Locator;
         readonly saveButton: Locator;
         readonly backButton: Locator;
       
   //Const special method that is called when an instance of the class is created. It initializes the attributes of the class.
          constructor(page: Page) {
          this.page = page;
          this.textfield = page.locator('input[type="number"]');
          this.isPaidCheckbox= page.locator('.checkbox');
          this.saveButton= page.getByText('Save');
          this.backButton= page.getByText('Back');
       }


//Methods what can I do in this page? I can create a bill adding price and paid/notpaid boolean

async createBill() {
 // const billAmount = faker.datatype.number({ min: 1, max: 2000 }); 
 

  }

}

//code snippet from codegen

  // await page.locator('div').filter({ hasText: /^BillsTotal: 1 \(4500kr\)Paid: 0 \(0kr\)View$/ }).getByRole('link').click();
  // await page.getByRole('link', { name: 'Create Bill' }).click();
  // await page.getByRole('spinbutton').click();

  // await page.getByRole('spinbutton').fill('2000');
  // await page.getByRole('spinbutton').click();
  // await page.locator('.checkbox').click();
  // await page.getByText('Save').click();
  // await page.getByRole('link', { name: 'Create Bill' }).click();
  // await page.getByRole('link', { name: 'Back' }).click();