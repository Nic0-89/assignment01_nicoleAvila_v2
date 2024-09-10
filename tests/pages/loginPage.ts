import { expect, type Locator, type Page } from '@playwright/test';
import { faker } from '@faker-js/faker';
import CommonActions from '../../actions/commonActions.ts';

export class LoginPage {
  //Attributes
  readonly page: Page;
  readonly usernameTextfield: Locator; 
  readonly passwordTextfield: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;


  //Const
  constructor(page: Page) {
    this.page = page;
    this.usernameTextfield = page.locator('input[type="text"]');
    this.passwordTextfield = page.locator('input[type="password"]');
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.errorMessage = page.getByText('Bad username or password');    
  }

  // Methods / functions
  async goto() {
    await this.page.goto(`${process.env.BASE_URL}`);
  }

  async performLogin(username: string, password:string) {
    //fill out the form - 2 textfields and click the submit button
    await this.usernameTextfield.fill(username);
    await this.passwordTextfield.fill(password);
    await this.loginButton.click();    
  }
}