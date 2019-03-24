/** Angular Import **/
import { Injectable } from '@angular/core';

/** RXJS Imports **/
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

/** Ngrx Import **/
import { Actions, Effect, ofType } from '@ngrx/effects';

/** Store Import **/
import * as todo from './todo-actions';
import { TodoService } from '../services/todo.service';

@Injectable()
export class TodoEffects {
  constructor(private api: TodoService, private actions$: Actions) {}

  @Effect()
  loadAction$ = this.actions$
    .pipe(
      ofType<todo.LoadAction>(todo.TodoActions.LOAD),
      map(action => action.payload),
      switchMap(payload =>
        this.api
          .load()
          .pipe(
            map(res => new todo.LoadSuccessAction(res)),
            catchError(error => this.handleError(error))
          )
      )
    );

  @Effect()
  getAction$ = this.actions$
    .pipe(
      ofType<todo.LoadAction>(todo.TodoActions.GET),
      map(action => action.payload),
      switchMap(payload =>
        this.api
          .get(payload)
          .pipe(
            map(res => new todo.GetSuccessAction(res)),
            catchError(error => this.handleError(error))
          )
      )
    );

  @Effect()
  createAction$ = this.actions$
    .pipe(
      ofType<todo.CreateAction>(todo.TodoActions.CREATE),
      map(action => action.payload),
      switchMap(payload =>
        this.api
          .create(payload)
          .pipe(
            map(res => new todo.CreateSuccessAction(res)),
            catchError(error => this.handleError(error))
          )
      )
    );

  @Effect()
  updateAction$ = this.actions$
    .pipe(
      ofType<todo.UpdateAction>(todo.TodoActions.UPDATE),
      map(action => action.payload),
      switchMap(payload =>
        this.api
          .update(payload)
          .pipe(
            map(res => new todo.UpdateSuccessAction(res)),
            catchError(error => this.handleError(error))
          )
      )
    );

  @Effect()
  removeAction$ = this.actions$
    .pipe(
      ofType<todo.RemoveAction>(todo.TodoActions.REMOVE),
      map(action => action.payload),
      switchMap(payload =>
        this.api
          .remove(payload.id)
          .pipe(
            map(res => new todo.RemoveSuccessAction(res)),
            catchError(error => this.handleError(error))
          )
      )
    );

  private handleError(error) {
    return of(new todo.ErrorAction(error));
  }
}
