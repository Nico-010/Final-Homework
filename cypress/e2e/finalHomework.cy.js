import myuser from '../fixtures/myuser.json'

describe('Elit Electronics', () => {
    beforeEach(() => {
        cy.visit('https://ee.ge/')
    })


    it('search', () => {
        cy.get('#search_list').should('exist').should('have.attr', 'placeholder', 'ძიება...').should('be.empty')
            .click().type('Samsung');
        cy.get('.artist-name.seeall.pb-2').click()
        cy.get('#rcc-confirm-button').click()
        cy.get('#sort').select('2')
    })


    it('listLength', () => {
        cy.get('[href="/mobiluri-telefonebi-da-aqsesuarebi"]').should('contain', 'მობილური ტელეფონი და აქსესუარები').eq(0).click()
        cy.get('.categorySlider>.carousel-container>.react-multi-carousel-track').eq(0).click()
        cy.get('#rcc-confirm-button').should('have.text', 'დახურვა').click().wait(3000)
        cy.scrollTo(0, 3800)
        cy.get('#itemppage').should('have.value', 10).select(1)
    })


    it('cart', () => {
        cy.get('[href="/it/tablet"]>.category-overlay').should('contain', 'პლანშეტი').click()
        cy.get('#rcc-confirm-button').should('have.text', 'დახურვა').click()
        cy.get('#sort').should('contain', 'ახალი').select('4')
        cy.get('.product-list-parent>').eq(2).click()
        cy.get('.bottom-add-cart').click()
    })


    it('registration', () => {
        cy.contains('.btn-register.mb-2.mr-4', 'რეგისტრაცია').should('be.visible').click()
        cy.get('#rcc-confirm-button').should('have.text', 'დახურვა').click()
        cy.registerEE(myuser.firstName, myuser.lastName, myuser.email, myuser.password, myuser.password2)
        cy.get('#singup').should('be.visible').click()
    })


    it('login', () => {
        cy.contains('.btn-register.mb-2.mr-4', 'ავტორიზაცია').should('exist').should('be.visible').click()
        cy.get('#rcc-confirm-button').click()
        cy.get('.form-group.col-12.p-0>.form-control').eq(0).type(myuser.email)
        cy.get('.form-group.col-12.p-0>.form-control').eq(1).type(myuser.password)
        cy.get('.btn-darkred').should('contain', 'ავტორიზაცია').click()

    })


})