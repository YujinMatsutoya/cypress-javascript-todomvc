# cypress-javascript-todomvc

Sample automated tests project using Cypress in Javascript following a Page Object Model. Following Gil Taylar's course on Test Automation University and expanding on some elements from self-learning.

The Applicaiton under test is a demo todo list app called Todo MVC (http://todomvc.com/examples/vanillajs)

I plan to expand out this project as I continue my Cypress learning.

**Tests Covered**

- Todo List Actions
  - Adding new Todos
  - Completing a Todo
  - Clearing completed Todos
 
- Filtering Actions
  - Filtering for active Todos
  - Filtering for completed Todos
  - Filtering for all Todos   

To run these tests, clone this repository and run:

```
npm install
npm eyes-setup
npx cypress run
```
