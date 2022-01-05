import { Component, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from '../intefaces/todo';
import { AppState } from './../redux/app.state'
import { selectTodosState } from './../redux/actions/todo/todo.selectors'
import { addTodo, changeDescriptionTodo, changeStatusTodo, deleteTodo } from '../redux/actions/todo/todo.actions';
import { UUID } from 'angular2-uuid';
import { tap } from 'rxjs/operators';
import { TextView } from '@nativescript/angular';
import { isIOS, isAndroid } from '@nativescript/core';
import * as utils from '@nativescript/core/utils';
declare const UIApplication;
@Component({
  selector: 'Home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  todos$: Observable<readonly Todo[]>
  tvtext: FormControl = new FormControl('');
  constructor(private store: Store<AppState>) {
    this.todos$ = this.store.select(selectTodosState)
    .pipe(
      tap(it => console.dir(it))
    );
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    
  }


  addTodo(textView: TextView): void {
    this.store.dispatch(addTodo({ todo: { description: textView.text, status: 'pending', id: UUID.UUID() } }));
    textView.text = '';
    this.dismissKeyboard();
  }

  updateTodo(todo: Todo, description: string): void {
    console.log(todo);
    this.store.dispatch(changeDescriptionTodo({id: todo.id, description }));

  }

  dismissKeyboard() {
    if (isIOS) {
      UIApplication.sharedApplication.keyWindow.endEditing(true);
    }
    if (isAndroid) {
      utils.ad.dismissSoftInput();
    }
  }

  toggleTodo(event, todo: Todo) {
    this.store.dispatch(changeStatusTodo({ id: todo.id, status: todo.status === 'completed' ? 'pending' : 'completed' }))
    this.dismissKeyboard();
  }


  onItemTap(event) {

    console.log(event);
    // this.store.dispatch(changeStatusTodo({ id: todo.id, status: todo.status === 'completed' ? 'pending' : 'completed' }))  
  }

  deleteItem(id) {
    this.store.dispatch(deleteTodo({todoId: id}))
  }
}
