export class TodoPage {
    
    
    navigate(){
        cy.visit('http://todomvc.com/examples/vanillajs')
    }

    addTodo(todoText){
        cy.get('.new-todo').type(todoText + '{enter}')
    }

    validateTodoText(todoIndex, expectedText){
        cy.get('.todo-list li:nth-child(' + (todoIndex + 1) + ') label').should('contain.text', expectedText)
    }
}