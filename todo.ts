export type status = 'pending' | 'completed';

export interface Todo {
    status: status,
    description: string
}

export class TodoList {

    todos: Todo[] = [
        {
            status: 'pending',
            description: 'Bananas'
        },
        {
            status: 'pending',
            description: 'Tomatoes'
        },
        {
            status: 'pending',
            description: 'Pinapple'
        }
    ]

    constructor() {

    }

    addNewTodo(description: string): void {
        this.todos.push({description: description, status: 'pending'})
    }

    updateStatusTodo(status: status, index: number): void {
        this.todos[index] = { ...this.todos[index], status}
    }

    deleteTodo(index: number): void {
        this.todos.splice(index, 1);
    }
}

const todoList = new TodoList();
console.log('------------ADD PASSIONFRUIT TODOS-------------------');
todoList.addNewTodo('Passionfruit')
console.log(todoList.todos);
console.log('-------------UPDATE TOMATOES TODOS-------------------');
todoList.updateStatusTodo('completed', 1)
console.log(todoList.todos);
console.log('-------------DELETE PINAPPLE TODOS-------------------');
todoList.deleteTodo(2)
console.log(todoList.todos);
console.log('-------------END TODO LIST---------------------------');