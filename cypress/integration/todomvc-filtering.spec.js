/// <reference types="cypress" />

import { TodoPage } from "../page-objects/todo-page"

describe('filtering actions', () => {

    const todoPage = new TodoPage()

    beforeEach(() => {
        todoPage.navigate()
        todoPage.addTodo('item number 1{enter}')
        todoPage.addTodo('item number 2{enter}')
        todoPage.addTodo('item number 3{enter}')
        
        todoPage.toggleTodo(2)
    })

    it('Verify filtering for active todos', () => {
        todoPage.filterActiveTodos()
        todoPage.elements.todoListItem().should('have.length', 2)
    })

    it('should filter Completed todos', () => {
        todoPage.filterCompletedTodos()
        todoPage.elements.todoListItem().should('have.length', 1)
    })

    it('should filter for All todos', () => {
        todoPage.elements.allFilter()
        todoPage.elements.todoListItem().should('have.length', 3)
    })
})