describe('template spec', () => {
    
    it('passes', () => {
      cy.visit('https://cavea.plus/ka')
      cy.get('a[href="/ka/auth/register"]').click() 
      cy.get('[label="register.first_name"]').find ("input").type("nestani")
      cy.get('[label="register.last_name"]').find ("input").type("merebashvili")
      cy.get('.registration-day').click()
      cy.get('.dropdown-menu > li').eq(3).click()
      cy.get('.birthdate') .find('.dropdown-input') .eq(1) .within(() => {
        cy.get('button') .click()
        cy.get('.dropdown-menu > [role="menuitem"] > .dropdown-item') .contains(" October ")
      })
    })
  });