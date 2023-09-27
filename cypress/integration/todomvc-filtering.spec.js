/// <reference types="cypress" />

describe('filtering', () => {

    beforeEach(() => {
        cy.visit('http://todomvc.com/examples/vanillajs')
        cy.get('.new-todo').type('item 1{enter}')
        cy.get('.new-todo').type('item 2{enter}')
        cy.get('.new-todo').type('item 3{enter}')

        cy.get('li:nth-child(2) .toggle').click()
    })

    it('should filter active todos', () => {
        cy.contains('Active').click()
        cy.get('.todo-list li').should('have.length', 2)
    })

    it('should filter Completed todos', () => {
        cy.contains('Completed').click()
        cy.get('.todo-list li').should('have.length', 1)
    })

    it('should filter for All todos', () => {
        cy.contains('All').click()
        cy.get('.todo-list li').should('have.length', 3)
    })
})