import FunctionsElements from "./elements/functionsElements";

const func = new FunctionsElements();

Cypress.Commands.add('homepage', () => {
    cy.visit('https://advantageonlineshopping.com/#/');
    cy.url().should('include', 'advantageonlineshopping.com');
    cy.get('#menuUserLink').should('be.visible');
});

Cypress.Commands.add('accessLogin', () => {
    cy.get('#menuUserLink').click();
    cy.get('.create-new-account').click();
    cy.get('input[name="usernameRegisterPage"]').should('be.visible');
});

Cypress.Commands.add('fillRegistrationForm', () => {
    const user = {
        username: func.firstNamePersonalDetails(),
        email: func.generateRandomEmail(),
        password: 'Teste123',
        firstName: func.firstNamePersonalDetails(),
        lastName: func.lastNamePersonalDetails(),
        phoneNumber: func.generateRandomPhoneNumber(),
        country: func.generateRandomCountry(),
        city: func.generateRandomCity(),
        address: func.generateRandomAddress(),
        state: func.generateRandomState(),
        postalCode: func.genertaeRandomZipCode()
    };

    Cypress.env('user', user);

    cy.get('input[name="usernameRegisterPage"]').type(user.username);
    cy.get('input[name="emailRegisterPage"]').type(user.email); 
    cy.get('input[name="passwordRegisterPage"]').type(user.password, {log: false});
    cy.get('[a-hint="Confirm password"] > .inputContainer > label').type(user.password, {log: false});
    cy.get('input[name="first_nameRegisterPage"]').type(user.firstName);
    cy.get('input[name="last_nameRegisterPage"]').type(user.lastName);
    cy.get('input[name="phone_numberRegisterPage"]').type(user.phoneNumber);
    cy.get('select[name="countryListboxRegisterPage"]').scrollIntoView().select('Brazil');
    cy.get('input[name="cityRegisterPage"]').type(user.city);
    cy.get('input[name="addressRegisterPage"]').type(user.address);
    cy.get('[sec-name="userState"] > .inputContainer > label').type(user.state);
    cy.get('input[name="postal_codeRegisterPage"]').type(user.postalCode);
    cy.get('input[name="usernameRegisterPage"]').should('have.value', user.username);
    cy.get('input[name="emailRegisterPage"]').should('have.value', user.email);
});

Cypress.Commands.add('registerAccount', () => {
    cy.get('input[name="i_agree"]').check();
    cy.contains('button', 'REGISTER').click();
    cy.get('#menuUserLink').should('contain', Cypress.env('user').username);
});

Cypress.Commands.add('loginUser', () => {
    const user = Cypress.env('user');
    cy.get('#menuUserLink').click();
    cy.get('input[name="username"]').type(user.username);
    cy.get('input[name="password"]').type(user.password);
    cy.contains('button', 'SIGN IN').click();
    cy.get('#menuUserLink').should('contain', user.username);
});

Cypress.Commands.add('searchProduct', () => {
    cy.get('#mobileSearch > #menuSearch').click();
    cy.get('#mobileSearch > .roboto-medium').clear().type('HP ENVY X360 - 15T LAPTOP{enter}');
    cy.get('[data-ng-show="([] | productsFilterForCategoriesProduct:searchResult:minPriceToFilter:maxPriceToFilter:productsInclude).length != 0"] > ul > li.ng-scope').click();
    cy.contains('HP ENVY X360 - 15T LAPTOP').should('contain', 'HP ENVY X360 - 15T LAPTOP');
});

Cypress.Commands.add('addProductToCard', () => {
    cy.contains('button', 'ADD TO CART').click();
    cy.get('#checkOutPopUp').click();
});

Cypress.Commands.add('checkoutProduct', () => {
    cy.contains('button', 'NEXT').click();
    cy.get('#paymentMethod').should('be.visible');
});

Cypress.Commands.add('processPayment', () => {
    cy.contains('button', 'NEXT').click();
    cy.contains('ORDER PAYMENT').should('be.visible');
});

Cypress.Commands.add('completePurchase', () => {
    const user = Cypress.env('user');
    cy.get('input[name="safepay_username"]').type(user.username);
    cy.get('input[name="safepay_password"]').type(user.password);
    cy.contains('button', "PAY NOW").click();
    cy.contains('Thank you for buying with Advantage').should('be.visible');
});
