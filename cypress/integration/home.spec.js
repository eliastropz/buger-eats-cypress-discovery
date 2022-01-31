

describe('home page', ()=>{

    before(function() {
        cy.log('Tudo aqui é executado uma única vez ANTES de TODOS os casos de teste')
    })

    beforeEach(function() {
        cy.log('Tudo aqui é executado sempre ANTES de CADA caso de teste')
    })

    after(function() {
        cy.log('Tudo aqui é executado uma única vez DEPOIS de TODOS os casos de teste')
    })

    afterEach(function() {
        cy.log('Tudo aqui é executado sempre DEPOIS de CADA caso de teste')
    })
    it('app deve estar online', ()=>{      
        cy.visit('/')
        cy.get('#page-home main h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')
    })
})