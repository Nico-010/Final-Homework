describe('template spec', () => {
  beforeEach(()=> {
    cy.visit('https://redmed.ge/main?selectedLanguage=ka')
  })

  it('passes', () => {
    cy.get(".news>.section-header>.section-title").should("have.text", "ᲡᲔᲠᲕᲘᲡᲔᲑᲘ")
  })

  it('passes', () => {
    cy.get('#search').type('ირაკლი').should('have.value', 'ირაკლი').clear()
  })

  it('passes', () => {
    cy.get('.languageButton').click()
  })  

})