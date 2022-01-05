import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Todo } from "../../../intefaces/todo";
import { AppState } from "../../app.state";


  export const selectTodosState = createFeatureSelector<
  ReadonlyArray<Todo>
>("todos");