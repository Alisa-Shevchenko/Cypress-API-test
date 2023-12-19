export let token;
export function loginViaAPI() {
    cy.request({
        method: 'POST',
        url: 'https://bookcart.azurewebsites.net/api/Login',
        body: {

            "username": Cypress.env("username"),

            "password": Cypress.env("password"),

        },
    }).then((response) => {
        token = response.body.token
        cy.log(response);
        cy.log(response.body.token);
        cy.log(response.status);
    });
}

export function createNewUser() {
    cy.request({
        method: 'POST',
        url: 'https://bookcart.azurewebsites.net/api/User',
        body: {
            "firstName": Cypress.env("firstName"),

            "lastName": Cypress.env("lastName"),

            "username": Cypress.env("username"),

            "password": Cypress.env("password"),

            "confirmPassword": Cypress.env("password"),

            "gender": Cypress.env("gender"),
        },
    }).then((response) => {
        cy.log(response);
        cy.log(response.body);
        cy.log(response.status);
    });
}

export function userIsLoggedIn() {
    cy.visit('/', {
        onBeforeLoad: (contentWindow) => {
            contentWindow.window.localStorage.setItem('authToken', token);
        }
    })
    cy.get('.mat-menu-trigger.mat-button > .mat-button-wrapper')
}

