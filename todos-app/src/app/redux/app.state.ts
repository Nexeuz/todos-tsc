import { Todo } from "../interfaces/todo-interface";

export interface AppState {
    todos: ReadonlyArray<Todo>;
  }