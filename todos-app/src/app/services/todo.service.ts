import { Injectable } from '@angular/core';
import { status, Todo } from '../interfaces/todo-interface';
import { UUID } from 'angular2-uuid';
import { Store } from '@ngrx/store';
import { addTodo, changeDescriptionTodo, changeStatusTodo, deleteTodo } from '../redux/actions/todo/todo.actions';
import { AppState } from '../redux/app.state';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private store: Store<AppState>) {
  }

  addNewTodo(description: string): void {
    this.store.dispatch(addTodo({ todo: { description, status: 'pending', id: UUID.UUID() } }))
  }

  updateStatusTodo(status: status, index: string): void {
    this.store.dispatch(changeStatusTodo({ id: index, status}))
  }

  updateTodoDescription(description: string, index: string): void {
    this.store.dispatch(changeDescriptionTodo({ id: index, description}))
  }

  deleteTodo(index: string): void {
    this.store.dispatch(deleteTodo({ todoId: index}))
  }
}
