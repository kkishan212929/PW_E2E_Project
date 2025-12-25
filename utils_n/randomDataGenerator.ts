import { faker } from "@faker-js/faker";   


export class randomDataUtil {

    static getFirstName() {
         return faker.person.firstName()
    }

    static getLastName() {
         return faker.person.lastName()
    }

    static getFullName() {
        return faker.person.fullName()
    }

    static getEmail() {
        return faker.internet.email()
    }

    static getMobileNumber(){
        return faker.phone.number()
    }

    static getUserName(){
        return faker.internet.username()
    }
    static getPassword(){
        return faker.internet.password()
    }

    static getRandomUUID(): string {
        return faker.string.uuid()
    }


}

