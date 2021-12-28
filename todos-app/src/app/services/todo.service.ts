import { Injectable } from '@angular/core';
import { status, Todo } from '../interfaces/todo-interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
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
    this.todos.push({ description: description, status: 'pending' })
  }

  updateStatusTodo(status: status, index: number): void {
    this.todos[index] = { ...this.todos[index], status }
  }

  updateTodoDescription(description: string, index: number): void {
    this.todos[index] = { ...this.todos[index], description }
  }

  deleteTodo(index: number): void {
    this.todos.splice(index, 1);
  }
}
