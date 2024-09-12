// import { Page } from 'playwright';

// export default class CommonActions {
//   private page: Page;

//   constructor(page: Page) {
//     this.page = page;
//   }

//   async navigate(url: string): Promise<void> {
//     // await this.page.pause(); // Uncomment this line if you need to pause the page
//     await this.page.goto(url);
//   }

//   async click(selector: string): Promise<void> {
//     await this.page.click(selector);
//   }

//   async fill(selector: string, text: string): Promise<void> {
//     await this.page.fill(selector, text);
//   }

//   async getText(selector: string): Promise<string | null> {
//     return await this.page.textContent(selector);
//   }

//   async isChecked(selector: string): Promise<boolean> {
//     return await this.page.isChecked(selector);
//   }
// }
