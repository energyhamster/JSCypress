/// <reference types="Cypress" />

describe('My First Test', function() {
  it('Gets, types and asserts', function() {
    cy.visit('https://chicago-qa3.test.bingosys.net/client')

    cy.get('.register').click()

    // Should be on a new URL which includes '/commands/actions'
    cy.url().should('include', '#/registration')

    // Get an input, type into it and verify that the value has been updated
    cy.get('#mat-input-2')
      .type('Mike')
      .should('have.value', 'Mike')

    cy.get('#mat-input-3')
      .type('Mike')
      .should('have.value', 'Mike')

    cy.get('#mat-input-4')
      .type('1')
      .should('have.value', '1')

    cy.get('#mat-input-5')
      .type('1')
      .should('have.value', '1')

    cy.get('#mat-input-6')
      .type('1988')
      .should('have.value', '1988')

    cy.get('.checkbox').click()

    cy.get('.next-btn').click()

	

  })
})