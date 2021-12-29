import { createReducer, on } from '@ngrx/store';
import { addTodo, changeDescriptionTodo, changeStatusTodo, deleteTodo } from './todo.actions';
import { Todo} from './../../../interfaces/todo-interface'

import { UUID } from 'angular2-uuid';

export const initialState: ReadonlyArray<Todo> = [
    {
      id: UUID.UUID(),
      status: 'pending',
      description: 'Bananas'
    },
    {
      id: UUID.UUID(),
      status: 'pending',
      description: 'Tomatoes'
    },
    {
      id: UUID.UUID(),
      status: 'pending',
      description: 'Pinapple'
    }
  ];
 
export const todoRedReducer = createReducer(
  initialState,
  on(addTodo, (state, { todo }) => {
    if (state.indexOf(todo) > -1) return state;
    return [...state, todo];
  }),
  on(deleteTodo, (state, { todoId }) => state.filter((todo) => todo.id !== todoId)),
  on(changeStatusTodo, (state, { id, status }) => {
    return  state.map((value, index) => value.id  === id ? {...value, status} : value)
  }),
  on(changeDescriptionTodo, (state, { id, description }) => {
    return  state.map((value, index) => value.id  === id ? {...value, description} : value)
  })
);