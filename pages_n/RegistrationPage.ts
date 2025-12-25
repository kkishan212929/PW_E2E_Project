import { Page,Locator } from "@playwright/test"

export class RegistrationPage {

private readonly page : Page

// Locators
private readonly txtFirstName : Locator
private readonly txtLastName : Locator
private readonly enterEmail : Locator
private readonly enterMobile : Locator
private readonly txtPassword : Locator
private readonly txtPasswordCfrm : Locator
private readonly checkBox : Locator
private readonly continueBtn : Locator
private readonly cfrmAlert : Locator


// Constructors

constructor(page:Page) {
this.page =page
this.txtFirstName = page.locator('#input-firstname')
this.txtLastName = page.locator('#input-lastname')
this.enterEmail = page.locator('#input-email')
this.enterMobile = page.locator('#input-telephone')
this.txtPassword = page.locator('#input-password')
this.txtPasswordCfrm = page.locator('#input-confirm')
this.checkBox =  page.locator("[name = 'agree']")
this.continueBtn = page.locator('[value="Continue"]')
this.cfrmAlert =  page.locator('h1:has-text("Your Account Has Been Created!")')
}

// Actions Methods

async enterFirstName(fName: string) : Promise<void> {
    await this.txtFirstName.fill(fName)
}

async enterLastName(lName:string) : Promise<void> {

    await this.txtLastName.fill(lName)
}

async enterEmailID(email : string) :Promise<void> {
    await this.enterEmail.fill(email)
}

async enterMobileNumber(mobileNo : string) :Promise<void> {
    await this.enterMobile.fill(mobileNo)
}

async enterPassword(pwd : string) :Promise<void> {

    await this.txtPassword.fill(pwd)
}

async enterPasswordCfrm(pwdcfrm : string) :Promise<void> {
     await this.txtPasswordCfrm.fill(pwdcfrm)
}

async clickCheckBox() :Promise<void>  {

    await this.checkBox.click()
}

async clickContinueBtn() :Promise<void> {
    await this.continueBtn.click()
}

async verifycfrmAlert() : Promise<string | null> {

  return await this.cfrmAlert.textContent()

}

}

