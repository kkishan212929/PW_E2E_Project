import { Page, Locator } from "@playwright/test";

export class LogOutPage {
  private readonly page: Page;
  private readonly logOutLnk: Locator;

  // constructor

  constructor(page: Page) {
    this.page = page;
    this.logOutLnk = page.locator('a:has-text("Logout")');
  }

  // Action Methods

  async clicklogoutLnk() {
    await this.logOutLnk.click();
  }
}
