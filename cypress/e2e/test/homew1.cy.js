describe('template spec', () => {
    beforeEach(()=> {
        cy.visit('https://www.myvideo.ge/')
    })
    

    it('passes', () => {
        cy.get('a[href="?act=inc&p=agreement"]') .should('contain', 'სამომხმარებლო შეთანხმება') .click() ; 
     })


    it('passes', () => {
        cy.get('.mv_sport') .should('contain', 'სპორტი') .click();
        cy.get('.has_ico.ico-football-ball') .should('have.text', 'ფეხბურთი') .click()
     })
    

    it('passes', () => {
        cy.get('#srch_str') .type('კომედია') .should('have.value', 'კომედია'); 
        cy.get('.mv_search_submit.bpgNino') .click() .should('have.value', 'ძიება')
        cy.get('a[href="c/search/?srch_str=კომედია&time_limit=alltime&order=date"]') .should('have.text', 'ახლები').click();
     })
    
    
})