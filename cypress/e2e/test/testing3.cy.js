describe("one", () => {

    // 1. Launch browser
    // 2. Navigate to url 'http://automationexercise.com'
    // 3. Click on 'Products' button
    // 4. Verify user is navigated to ALL PRODUCTS page successfully
    // 5. Enter product name in search input and click search button
    // 6. Verify 'SEARCHED PRODUCTS' is visible
    // 7. Verify all the products related to search are visible

    it("one1", () => { 
        cy.visit('http://automationexercise.com')
        cy.get('[href="/products"]').click();
        cy.get('.features_items > .title ').should('have.text' , 'All Products')
        cy.get('#search_product').type('Top')
        cy.get('#submit_search').click();
        cy.get('.features_items > .title ').should('have.text' , 'Searched Products')
        //cy.get('[class="productinfo text-center"]').should('have.text' , 'Top')
        //cy.get('.single-products > .productinfo > p').first().should('contain', 'Top');
        cy.get('.features_items').within(()=>{
        cy.get('.productinfo > p').should('contain' , 'Top')
    })
})
});