import { NgRxAction } from '../../../store/ngrx-action';
import { Todo } from '../../../models/todo';

export enum TodoActions {
  LOAD = '[Todo] LOAD Requested',
  LOAD_SUCCESS = '[Todo] LOAD Success',
  GET = '[Todo] GET Requested',
  GET_SUCCESS = '[Todo] GET Success',
  CREATE = '[Todo] CREATE Requested',
  CREATE_SUCCESS = '[Todo] CREATE Success',
  UPDATE = '[Todo] UPDATE Requested',
  UPDATE_SUCCESS = '[Todo] UPDATE Success',
  REMOVE = '[Todo] REMOVE Requested',
  REMOVE_SUCCESS = '[Todo] REMOVE Success',
  ERROR = '[Todo] Error'
}

export class LoadAction extends NgRxAction<any> { type = TodoActions.LOAD; }
export class LoadSuccessAction extends NgRxAction<Todo[]> { type = TodoActions.LOAD_SUCCESS; }

export class GetAction extends NgRxAction<{id}> { type = TodoActions.GET; }
export class GetSuccessAction extends NgRxAction<Todo> { type = TodoActions.GET_SUCCESS; }

export class CreateAction extends NgRxAction<any> { type = TodoActions.CREATE; }
export class CreateSuccessAction extends NgRxAction<Todo> { type = TodoActions.CREATE_SUCCESS; }

export class UpdateAction extends NgRxAction<Todo> { type = TodoActions.UPDATE; }
export class UpdateSuccessAction extends NgRxAction<Todo> { type = TodoActions.UPDATE_SUCCESS; }

export class RemoveAction extends NgRxAction<{id}> { type = TodoActions.REMOVE; }
export class RemoveSuccessAction extends NgRxAction<Todo> { type = TodoActions.REMOVE_SUCCESS; }

export class ErrorAction extends NgRxAction<any> { type = TodoActions.ERROR; }

export type TodoAction =
  LoadAction | LoadSuccessAction |
  GetAction | GetSuccessAction |
  CreateAction | CreateSuccessAction |
  UpdateAction | UpdateSuccessAction |
  RemoveAction | RemoveSuccessAction |
  ErrorAction;


