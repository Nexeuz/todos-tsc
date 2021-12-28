import { Component } from '@angular/core';
import { Todo } from './interfaces/todo-interface';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todos-app';
  todos: Todo[]

  constructor(private todoService: TodoService) {
    this.todos = this.todoService.todos
  }

  updateTodoDescription(index: number, event: any) {
      this.todoService.updateTodoDescription(event.target.value, index)
  }

  updateTodoStatus(index: number, todo: Todo) {
    this.todoService.updateStatusTodo(todo.status === 'completed' ? 'pending' : 'completed', index);
  }

  addTodo(description: string) {

    this.todoService.addNewTodo(description === '' ? 'Untitle todo' : description)
  }

  removeItem(index: number) {
    this.todoService.deleteTodo(index)
  }
}

