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

        cy.get('.contato').should('have.length', 1)
    })

    it('Deve editar um contato existente', () => {
        cy.get('.edit').click()
        cy.get('input[type="text"]').clear().type('Pedro')
        cy.get('input[type="email"]').clear().type('pedro@teste.com')
        cy.get('input[type="tel"]').clear().type('48 91111-0000')
        cy.get('.alterar').click()

        cy.get('.sc-eDDNvR > :nth-child(1)').should('contain', 'Pedro');
        cy.get('.sc-eDDNvR > :nth-child(2)').should('contain', '48 91111-0000');
        cy.get('.sc-eDDNvR > :nth-child(3)').should('contain', 'pedro@teste.com');
    })

    it('Deve excluir um contato existente', () => {
        cy.get('button.delete').first().click()

        cy.get('.contato').should('have.length', 0)
    })
})