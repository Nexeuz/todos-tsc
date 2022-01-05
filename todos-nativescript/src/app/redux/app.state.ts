import { Todo } from "../intefaces/todo";

export interface AppState {
    todos: ReadonlyArray<Todo>;
  }