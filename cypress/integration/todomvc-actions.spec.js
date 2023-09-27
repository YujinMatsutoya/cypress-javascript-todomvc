/// <reference types="cypress" />

import { TodoPage } from "../page-objects/todo-page"

describe('todo actions', () => {

    const todoPage = new TodoPage()

    beforeEach(() => {
        todoPage.navigate()
        todoPage.addTodo('item number 1')
    })

    it.only('should add a new todo to the list', () => {
        
        todoPage.validateTodoText(0, 'number')
        todoPage.toggle.should('not.be.checked')
        //cy.get('.toggle').click()
    })
    
    it('should mark a todo as completed', () => {
        //cy.get('.todo-list').should('have.descendants', 'li')
        cy.get('.toggle').click()
        cy.get('.toggle').should('be.checked')
        cy.get('.view > label').should('have.css', 'text-decoration-line', 'line-through')
    })
    
    it('should clear completed todos', () => {
        cy.get('.toggle').click()
        cy.get('.todo-list').should('have.descendants', 'li')
        cy.contains('Clear').click()
        cy.get('.todo-list').should('not.have.descendants', 'li')
    })

})

