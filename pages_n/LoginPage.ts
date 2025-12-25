import { Page, Locator } from "@playwright/test";

export class LoginPage {
  private readonly page: Page;

  private readonly emailAddress: Locator;
  private readonly password: Locator;
  private readonly loginBtn: Locator;
  private readonly loginLnk: Locator;

  // constructor

  constructor(page: Page) {
    this.page = page;
    this.loginLnk = page.locator('a:has-text("Login")');
    this.emailAddress = page.locator("#input-email");
    this.password = page.locator("#input-password");
    this.loginBtn = page.locator('[value="Login"]');
  }

  // Action Methods

  async clickLogin() {
    await this.loginLnk.click();
  }

  async txtEmailAddress(email: string) {
    await this.emailAddress.fill(email);
  }

  async txtPassword(pwd: string) {
    await this.password.fill(pwd);
  }

  async clickLoginBtn() {
    await this.loginBtn.click();
  }

  async login(email: string, pwd: string) {
    await this.txtEmailAddress(email);
    await this.txtPassword(pwd);
    await this.clickLoginBtn();
  }
}
