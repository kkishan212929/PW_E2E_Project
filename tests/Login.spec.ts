import { test, expect } from "@playwright/test";

import { LoginPage } from "../pages_n/LoginPage";
import { HomePage } from "../pages_n/Homepage";
import { LogOutPage } from "../pages_n/LogOutPage";
import { RegistrationPage } from "../pages_n/RegistrationPage";
import { MyAccount } from "../pages_n/MyAccountPage";
import { TestConfig } from "../test.config";

let config: TestConfig;
let hPage: HomePage;
let loginPage: LoginPage;
let logoutPage: LogOutPage;
let registrationpage: RegistrationPage;
let myAccountPage: MyAccount;

test.beforeEach(async ({ page }) => {
  config = new TestConfig();
  await page.goto(config.appUrl);
  hPage = new HomePage(page);
  loginPage = new LoginPage(page);
  logoutPage = new LogOutPage(page);
  registrationpage = new RegistrationPage(page);
  myAccountPage = new MyAccount(page);
});

test("Login Functionality Tests", async ({ page }) => {
  await hPage.clickMyAccount();
  await loginPage.clickLogin();

  await loginPage.login(config.email, config.password);
  await page.pause();
  expect(await myAccountPage.accountAssertion()).toContain("My Account");
});
