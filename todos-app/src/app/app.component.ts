import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from './interfaces/todo-interface';
import { selectTodosState } from './redux/actions/todo/todo.selectors';
import { AppState } from './redux/app.state';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todos-app';
  todos$: Observable<readonly Todo[]>

  constructor(private todoService: TodoService,
    private store: Store<AppState>) {
    this.todos$ = this.store.select(selectTodosState);
  }

  updateTodoDescription(index: string, event: any) {
      this.todoService.updateTodoDescription(event.target.value, index)
  }

  updateTodoStatus(index: string, todo: Todo) {
    this.todoService.updateStatusTodo(todo.status === 'completed' ? 'pending' : 'completed', index);
  }

  addTodo(description: string) {

    this.todoService.addNewTodo(description === '' ? 'Untitle todo' : description)
  }

  removeItem(index: string) {
    this.todoService.deleteTodo(index)
  }
}

