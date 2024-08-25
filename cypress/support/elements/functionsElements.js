const faker = require('faker');

class FunctionsElements {
    constructor() {
        this.randomName = this.generateRandomName();
        const nameParts = this.randomName.split(' ');
        this.firstName = nameParts[0];
        this.lastName = nameParts.slice(1).join(' '); 
    }

    generateRandomName() {
        let fullName;
        do {
            fullName = faker.name.firstName() + ' ' + faker.name.lastName();
        } while (fullName.length < 5 || fullName.length > 15);
    
        return fullName;
    }
    
    
    generateRandomEmail() {
        const domain = 'inmetrics.com';
        return `${this.randomName.replace(/\s+/g, '.').replace(/'/g, "")}@${domain}`;
    }

    firstNamePersonalDetails() {
        return this.firstName;
    }

    lastNamePersonalDetails() {
        return this.lastName;
    }

    generateRandomPhoneNumber() {
        const areaCode = faker.phone.phoneNumber('##');
        const number = faker.phone.phoneNumber('#########');
        return `(${areaCode}) ${number}`;
    }

    generateRandomAddress() {
        const streetAddress = faker.address.streetAddress();
        const city = faker.address.city();
        const state = faker.address.state();
        const postalCode = faker.address.zipCode();
        const country = 'Brazil';
        return `${streetAddress}`;
    }

    generateRandomCountry() {
        return faker.address.country();
    }

    generateRandomCity() {
        const city = faker.address.city();
        return `${city}`
    }

    generateRandomState() {
        const state = faker.address.state();
        return state.length > 10 ? state.substring(0, 10) : state;
    }

    genertaeRandomZipCode() {
        const zipCode = faker.address.zipCode();
        return zipCode
    }

}

module.exports = FunctionsElements;
