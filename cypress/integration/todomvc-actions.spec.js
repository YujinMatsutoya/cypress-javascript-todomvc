/// <reference types="cypress" />

import { TodoPage } from "../page-objects/todo-page"

describe('todo actions', () => {

    const todoPage = new TodoPage()

    beforeEach(() => {
        todoPage.navigate()
        todoPage.addTodo('item number 1')
    })

    it.only('Verify a new todo is added to the list', () => {
        todoPage.elements.todoText(0).should('contain.text', 'number')
        todoPage.elements.todoToggle(0).should('not.be.checked')
    })
    
    it('Verify marking a todo as completed', () => {
        todoPage.toggleTodo(0)
        todoPage.elements.todoToggle(0).should('be.checked')
        todoPage.elements.todoText(0).should('have.css', 'text-decoration-line', 'line-through')
    })
    
    it('Verify clearing a completed todo', () => {
        todoPage.toggleTodo(0)
        todoPage.elements.todoList().should('have.descendants', 'li')
        todoPage.clearTodos()
        todoPage.elements.todoList().should('not.have.descendants', 'li')
    })

})

