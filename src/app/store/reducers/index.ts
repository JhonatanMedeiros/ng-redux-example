import { ActionReducerMap, MetaReducer, ActionReducer  } from '@ngrx/store';

import {  TodoReducer } from './todo.reducer';
import { environment } from '../../../environments/environment';


export const reducers: ActionReducerMap<any> = {
  todo: TodoReducer
};

export function logger(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state: any, action: any): any {
    console.groupCollapsed('>> REDUX LOGGER !<<');
    console.log(`State `, state);
    console.log(`Action`, action);
    console.groupEnd();

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<any>[] = !environment.production ? [logger] : [];

