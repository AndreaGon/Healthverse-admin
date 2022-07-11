// add_content_test.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
/* ==== Test Created with Cypress Studio ==== */
it('should create new tips', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('http://localhost:4200/login');
  cy.get('.username').clear();
  cy.get('.username').type('admin');
  cy.get('.password').clear();
  cy.get('.password').type('admin{enter}');

  cy.get('.new-button').click();
  cy.get('.title').clear();
  cy.get('.title').type('New tips!');
  cy.get('.content').click();
  cy.get('.content').clear();
  cy.get('.content').type('Here is a new daily tip!');
  cy.get('.post-button > .mat-button-wrapper').click();
  cy.get('.post-container').should('be.visible');
  /* ==== End Cypress Studio ==== */
});
