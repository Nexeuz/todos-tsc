import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Todo } from "src/app/interfaces/todo-interface";
import { AppState } from "../../app.state";


  export const selectTodosState = createFeatureSelector<
  ReadonlyArray<Todo>
>("todos");