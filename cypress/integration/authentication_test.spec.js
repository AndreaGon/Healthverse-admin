// authentication_test.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe("Testing the authentication for the admin side of Healthverse", ()=>{
    it('should login user', ()=>{
        cy.visit('http://localhost:4200/login');
        /* ==== Generated with Cypress Studio ==== */
        cy.get('.username').clear();
        cy.get('.username').type('admin');
        cy.get('.password').clear();
        cy.get('.password').type('admin');
        cy.get('.mat-focus-indicator').click();
        cy.get('.greetings').should('be.visible');
        cy.get('.post-container').should('be.visible');
        /* ==== End Cypress Studio ==== */
    })

    /* ==== Test Created with Cypress Studio ==== */
    it('should logout user', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('http://localhost:4200/login');
        cy.get('.username').clear();
        cy.get('.username').type('admin');
        cy.get('.password').clear();
        cy.get('.password').type('admin{enter}');
        
        cy.get(':nth-child(3) > .nav-link > a').should('have.text', 'Logout');
        cy.get('.logout-button1').click();
        cy.get('.login-header').should('be.visible');
        cy.get('form.ng-untouched').should('be.visible');
        /* ==== End Cypress Studio ==== */
    });
})