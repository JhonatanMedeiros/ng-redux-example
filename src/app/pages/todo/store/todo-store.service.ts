/** Angular Imports **/
import { Injectable } from '@angular/core';

/** RXJS Imports **/
import { combineLatest } from 'rxjs';

/** Ngrx Import **/
import { Store, createFeatureSelector, createSelector } from '@ngrx/store';

/** Store Import **/
import { StoreService } from '../../../store/app-store.service';
import { AppState } from '../../../store/app-reducer';
import * as state from './todo-state';
import * as todo from './todo-actions';

@Injectable()
export class TodoStoreService extends StoreService {

  private todoState = createFeatureSelector<state.TodoState>('todo');

  private selectors = state.todoAdapter.getSelectors(this.todoState);

  private selectCurrentTodoId = createSelector(
    this.todoState,
    state.selectedTodoId
  );
  private isLoading = createSelector(this.todoState, state.selectIsLoading);
  private error = createSelector(this.todoState, state.selectError);

  constructor(protected store: Store<AppState>) {
    super();
  }

  dispatchLoadAction() {
    this.dispatchAction(new todo.LoadAction());
  }

  dispatchGetAction(id: any) {
    this.dispatchAction(new todo.GetAction(id));
  }

  dispatchCreateAction(record: any) {
    this.dispatchAction(new todo.CreateAction(record));
  }

  dispatchUpdateAction(record: any) {
    this.dispatchAction(new todo.UpdateAction(record));
  }

  dispatchRemoveAction(id) {
    this.dispatchAction(new todo.RemoveAction(id));
  }

  getTodo() {
    return this.store.select(this.selectors.selectAll);
  }

  getIsLoading() {
    return this.store.select(this.isLoading);
  }

  getError() {
    return this.store.select(this.error);
  }

  findById(record: { id }) {
    return this.getTodo()[record['id']];
  }

  getCurrentTaskSelected() {
    return combineLatest(
      this.getTodo(),
      this.store.select(this.selectCurrentTodoId),
      (tasks, selectedId) => selectedId.map(id => tasks[id])
    );
  }

}
