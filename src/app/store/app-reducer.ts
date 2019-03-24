import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';

export interface AppState {
  routerReducer: RouterReducerState;
}

export const reducers: ActionReducerMap<AppState> = {
  routerReducer: routerReducer
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

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [logger] : [];
