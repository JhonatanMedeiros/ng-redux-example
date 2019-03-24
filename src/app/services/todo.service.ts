/** Angular Imports **/
import { Injectable } from '@angular/core';

/** RXJS Imports **/
import { Observable, Observer } from 'rxjs';

/** NGRX Import **/
import { Store, select } from '@ngrx/store';

/** Models Imports **/
import { Todo } from '../models/todo';

/** Store Todo Actions **/
import * as TodoAction from '../store/actions/todo.actions';

@Injectable({ providedIn: 'root' })
export class TodoService {

  constructor(private store: Store<any>) { }

  getTodoList(): Observable<Todo[]> {
    return this.store.pipe(select('todo'));
  }

  createTodo(todo: Todo): Observable<Todo> {
    return Observable.create((observer: Observer<Todo>) => {
      this.store.dispatch(new TodoAction.CreateTodo(todo));
      observer.next(todo);
      observer.complete();
    });
  }

}
