import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps';

Given("acesso homepage Adventure Shop", () => {
    cy.homepage();
});

When("acesso pagina de login", () => {
    cy.accessLogin();
});

And("preencho dados pessoais", () => {
    cy.fillRegistrationForm();
});

Then("Crio conta", () => {
    cy.registerAccount();
});

When("o usuário deve fazer login", () => {
    cy.loginUser();
});

And("busco um produto", () => {
    cy.searchProduct()
});

And("adiciono o produto ao carrinho", () => {
    cy.addProductToCard()
});

And("o produto deve ser adicionado ao carrinho", () => {
    cy.processPayment()
});

Then("realizar pagamento do produto", () => {
    cy.completePurchase()
})
