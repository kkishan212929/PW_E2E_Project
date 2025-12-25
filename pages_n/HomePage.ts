import {Page,expect, Locator} from '@playwright/test'

export class HomePage {

    private readonly page : Page

//Locators

private readonly lnkMyAccount : Locator
private readonly lnkRegister : Locator
private readonly lnkLogin : Locator
private readonly txtSearchBox : Locator
private readonly btnSearch : Locator



//Consturctor

constructor(page:Page) {
    this.page = page
    this.lnkMyAccount = page.locator('span:has-text("My Account")')
    this.lnkRegister   = page.locator('a:has-text("Register")')
    this.lnkLogin = page.locator('a:has-text("Login")')
    this.txtSearchBox = page.getByPlaceholder('Search')
    this.btnSearch = page.locator('.btn-default')
}

//Action methods
 // check wethere home page exists or not

 async isHomePageExists() {
    let title: string = await this.page.title()
    if(title)
    {
        return true
    }
    
    return false

 }

 async clickMyAccount() 
 {

    try {
        await this.lnkMyAccount.click()
    }
    catch(error)
    {
        console.log(`execption occured while clicking My Account: ${error}`)
        throw error

    }


 }

 async clickRegister()
 {
    try {
            await this.lnkRegister.click()
    }
    catch(error)
    {
        console.log(`Exception occured while clicking on register button : ${error}`)
        throw error
    }

    }



 async clickLogin() {
    try
    {
        await this.lnkLogin.click()
    }
    catch(error)
    {
        console.log(`Exception occured while clciking on Login button : ${error}`)
        throw error
    }
 }

 async inputSearchBox(pname: string){

        try{

            await this.txtSearchBox.fill(pname)
        }
        catch(error)
        {
            console.log(`execption occured while entering in search box : ${error}`)
            throw error
        }

 }

 async clickSearchBtn() {

    try {
        await this.btnSearch.click()
    }
    catch(error)
    {
        console.log(`exception occured while clicking search button: ${error}`)
        throw(error)
    }

 }


 }

