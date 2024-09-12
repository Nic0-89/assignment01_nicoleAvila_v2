import { expect, type Locator, type Page } from '@playwright/test';
import * as dotenv from 'dotenv';
dotenv.config();
import { faker } from '@faker-js/faker';

export class LoginPage {
  //Attributes
  readonly page: Page;
  readonly usernameTextfield: Locator; //use locator for elements that are always there
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

  async performLogin(username: string, password: string) {
    //fill out the form - 2 textfields and click the submit button
    await this.usernameTextfield.fill(`${process.env.USERNOMBRE}`);
    await this.passwordTextfield.fill(`${process.env.PASSWORD}`);
    await this.loginButton.click();
  }
  //getting error message when needed
  async getErrorMessage(): Promise<Locator> {
    return this.page.getByText('Bad username or password');
  }

}
