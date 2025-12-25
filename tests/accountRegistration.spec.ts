import { test, expect } from "@playwright/test";
import { RegistrationPage } from "../pages_n/RegistrationPage";
import { randomDataUtil } from "../utils_n/randomDataGenerator";
import { TestConfig } from "../test.config";
import { HomePage } from "../pages_n/Homepage";

let homepage: HomePage;
let registrationPage: RegistrationPage;
let config: TestConfig;

test.beforeEach(async ({ page }) => {
  config = new TestConfig();
  await page.goto(config.appUrl);
  homepage = new HomePage(page);
  registrationPage = new RegistrationPage(page);
});

test.afterEach(async ({ page }) => {
  await page.close();
});

test("Verify Registration", async ({ page }) => {
  await homepage.clickMyAccount();
  await homepage.clickRegister();

  // await page.pause()

  await registrationPage.enterFirstName(randomDataUtil.getFirstName());
  await registrationPage.enterLastName(randomDataUtil.getLastName());
  await registrationPage.enterEmailID(randomDataUtil.getEmail());
  await registrationPage.enterMobileNumber(randomDataUtil.getMobileNumber());
  const getPassword = randomDataUtil.getPassword();
  await registrationPage.enterPassword(getPassword);
  await registrationPage.enterPasswordCfrm(getPassword);
  await registrationPage.clickCheckBox();
  await registrationPage.clickContinueBtn();
  const alert = "Your Account Has Been Created!";
  expect(await registrationPage.verifycfrmAlert()).toContain(alert);

  await page.pause();
});
