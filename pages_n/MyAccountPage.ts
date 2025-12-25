import { Page, Locator } from "@playwright/test";

export class MyAccount {
  private readonly page: Page;
  private readonly myaccountLnk: Locator;
  private readonly myAccountAssert: Locator;

  constructor(page: Page) {
    this.page = page;
    this.myaccountLnk = page.locator('[title="My Account"]');
    this.myAccountAssert = page.locator('h2:has-text("My Account")');
  }

  // Actions methods

  async clickMyAccountLnk() {
    await this.myaccountLnk.click();
  }

  async accountAssertion(): Promise<string | null> {
    return this.myAccountAssert.textContent();
  }
}
