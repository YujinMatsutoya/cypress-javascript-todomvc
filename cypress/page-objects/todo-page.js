export class TodoPage {
    
    elements = {
        newTodoInput: () => cy.get('.new-todo'),
        todoList: () => cy.get('ul.todo-list'),
        todoListItem: () => cy.get('ul.todo-list li'),
        todoText: (todoIndex) => cy.get('.todo-list li:nth-child(' + (todoIndex + 1) + ') label'),
        todoToggle: (todoIndex) => cy.get('.todo-list li:nth-child(' + (todoIndex + 1) + ') input'),
        todoDelete: (todoIndex) => cy.get('.todo-list li:nth-child(' + (todoIndex + 1) + ') .destroy'),
        allFilter: (todoIndex) => cy.get('.filters li:nth-child(1) a'),
        activeFilter: (todoIndex) => cy.get('.filters li:nth-child(2) a'),
        completedFilter: (todoIndex) => cy.get('.filters li:nth-child(3) a'),
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
