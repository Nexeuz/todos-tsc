import 'nativescript-localstorage';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptModule } from '@nativescript/angular'
import { StoreModule, Action, ActionReducer, MetaReducer, ActionReducerMap  } from '@ngrx/store'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { todoRedReducer } from "./redux/actions/todo/todo.reducer"
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { localStorageSync } from 'ngrx-store-localstorage';
import { AppState } from './redux/app.state';

const STORE_KEYS_TO_PERSIST = [
  'todos',
];
const reducers: ActionReducerMap<AppState> = {
  todos: todoRedReducer,
};



export function localStorageSyncReducer(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  return localStorageSync({
    keys: STORE_KEYS_TO_PERSIST,
    rehydrate: true,
  })(reducer);
}

export const metaReducers: Array<MetaReducer<AppState, Action>> = [localStorageSyncReducer];


@NgModule({
  bootstrap: [AppComponent],
  imports: [AppRoutingModule, NativeScriptModule,
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
    StoreModule.forRoot(reducers, {metaReducers} ),
  ],
  declarations: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule { }
