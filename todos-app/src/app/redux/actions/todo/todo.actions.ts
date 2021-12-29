import { createAction, props } from '@ngrx/store';
import { status, Todo } from 'src/app/interfaces/todo-interface';

export const addTodo = createAction('[TODO] Add Todo', props<{todo: Todo}>() );
export const changeStatusTodo = createAction('[TODO] change status', props<{id: string, status: status}>());
export const changeDescriptionTodo = createAction('[TODO] change description', props<{id: string, description: string}>());
export const deleteTodo = createAction('[TODO] delete todo', props<{todoId: string}>());