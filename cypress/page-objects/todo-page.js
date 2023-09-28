/// <reference types="cypress" />

export class TodoPage {
    
    elements = {
        newTodoInput: () => cy.get('.new-todo'),
        todoList: () => cy.get('ul.todo-list'),
        todoListItem: () => cy.get('ul.todo-list li'),
        todoText: (todoIndex) => cy.get('ul li label').eq(todoIndex),
        todoToggle: (todoIndex) => cy.get('ul li input').eq(todoIndex),
        todoDelete: (todoIndex) => cy.get('ul .destroy').eq(todoIndex),
        allFilter: () => cy.get('footer .filters li a').eq(0),
        activeFilter: () => cy.get('footer .filters li a').eq(1),
        completedFilter: () => cy.get('footer .filters li a').eq(2),
        todoCount: () => cy.get('footer .todo-count strong'),
        todoClear: () => cy.get('footer .clear-completed') 
    }

    navigate(){
        cy.visit('http://todomvc.com/examples/vanillajs')
    }

    addTodo(todoText){
        this.elements.newTodoInput().type(todoText + '{enter}')
    }

    toggleTodo(todoIndex){
        this.elements.todoToggle(todoIndex).click()
    }

    clearTodos(){
        this.elements.todoClear().click()
    }

    filterActiveTodos(){
        this.elements.activeFilter().click()
    }

    filterCompletedTodos(){
        this.elements.completedFilter().click()
    }

    filterAllTodos(){
        this.elements.allFilter().click()
    }

}
