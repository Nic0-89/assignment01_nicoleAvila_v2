import { type Locator, type Page } from '@playwright/test';
import { faker } from '@faker-js/faker';


export class CreateBillPage {
    // // class content Atrributes, What do I see in this page?
         readonly page: Page;
         readonly createBillButton : Locator;
         readonly valueInput : Locator;
         readonly isPaidCheckbox: Locator;
         readonly saveButton: Locator;
         readonly backButton: Locator;
       
   //Const special method that is called when an instance of the class is created. It initializes the attributes of the class.
          constructor(page: Page) {
          this.page = page;
          this.createBillButton = page.getByRole('link', { name: 'Create Bill' })
          this.valueInput = page.getByRole('spinbutton')
          this.isPaidCheckbox= page.locator('.checkbox');
          this.saveButton= page.getByText('Save');
          this.backButton= page.getByRole('link', { name: 'Back' })

       }

//Methods what can I do in this page? I can create a bill adding price and paid/notpaid boolean
async pageBillButton() {
  await this.createBillButton.click()
}

async createBill() {
  const randomValue = faker.commerce.price({ min: 500, max: 10000 }).toString();
  const randomValueFloor = Math.floor(parseFloat(randomValue));
  const stringValue = randomValueFloor.toString()
  // Simulate filling in the form fields with random data
  await this.valueInput.fill(stringValue);
  await this.isPaidCheckbox.click();

}
async saveBill() {
  await this.saveButton.click();

}


};



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