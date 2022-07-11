// delete_content_test.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
/* ==== Test Created with Cypress Studio ==== */
it('should delete content', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('http://localhost:4200/login');
  cy.get('.username').clear();
  cy.get('.username').type('admin');
  cy.get('.password').clear();
  cy.get('.password').type('admin{enter}');

  cy.get('.post-container > :nth-child(2)').should('be.visible');
  cy.get('.post-container > :nth-child(2) > .mat-focus-indicator > .mat-button-wrapper').click();
  /* ==== End Cypress Studio ==== */
});
