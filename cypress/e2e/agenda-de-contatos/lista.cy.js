/// <reference types="cypress" />

describe('Testes para a lista de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app')
        cy.reload()
    })

    it('Deve incluir um novo contato', () => {
        cy.get('input[type="text"]').clear().type('Marcos Mantovani')
        cy.get('input[type="email"]').clear().type('marcosmantovani@teste.com')
        cy.get('input[type="tel"]').clear().type('48 90000-0000')
        cy.get('button.adicionar').click()

        cy.get('.contato').should('have.length', 6);
    })

    it('Deve editar um contato existente', () => {
        cy.get(':nth-child(5) > .sc-gueYoa > .edit').click()
        cy.get('input[type="text"]').clear().type('Pedro')
        cy.get('input[type="email"]').clear().type('pedro@teste.com')
        cy.get('input[type="tel"]').clear().type('48 91111-0000')
        cy.get('.alterar').click()

        cy.get('.sc-eDDNvR > :nth-child(1)').should('contain', 'Pedro');
        cy.get('.sc-eDDNvR > :nth-child(2)').should('contain', '48 91111-0000');
        cy.get('.sc-eDDNvR > :nth-child(3)').should('contain', 'pedro@teste.com');
    })

    it('Deve excluir um contato existente', () => {
        cy.get(':nth-child(5) > .sc-gueYoa > .delete').click()

        cy.get('.contato li').should('not.contain', 'Pedro');
        cy.get('.contato li').should('not.contain', '48 91111-0000');
        cy.get('.contato li').should('not.contain', 'pedro@teste.com');
    })
})