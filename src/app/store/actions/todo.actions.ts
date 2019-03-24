/** NGRX Import **/
import { Action } from '@ngrx/store';


/** Model Import **/
import { Todo } from '../../models/todo';

export enum TodoActionsTypes {
  List    = '[TODO] Todo_List',
  Create  = '[TODO] Todo_Create',
  Edit    = '[TODO] Todo_Edit',
  Delete  = '[TODO] Todo_Delete',
}

export class ListTodo implements Action {
  readonly type = TodoActionsTypes.List;

  constructor() { }
}

export class CreateTodo implements Action {
  readonly type = TodoActionsTypes.Create;
  payload: Todo;

  constructor(payload: Todo) {
    this.payload = payload;
  }
}

export class EditTodo implements Action {
  readonly type = TodoActionsTypes.Edit;

  constructor(public id: number) { }
}

export class DeleteTodo implements Action {
  readonly type = TodoActionsTypes.Delete;

  constructor(public payload: Todo) { }
}

export type TodoActions = ListTodo | CreateTodo | EditTodo | DeleteTodo;
