import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Todo } from '../../../models/todo';


export interface TodoState extends EntityState<Todo> {
  isLoading: boolean;
  selectedTaskId: any;
  error: any;
}

export const todoAdapter: EntityAdapter<Todo> = createEntityAdapter<Todo>({
  selectId: (todo: Todo) => todo.id,
  sortComparer: false,
});

export const todoInitialState: TodoState = todoAdapter.getInitialState({
  isLoading: true,
  selectedTaskId: null,
  error: null
});

export const selectedTodoId = (state: TodoState) => state.selectedTaskId;
export const selectIsLoading = (state: TodoState) => state.isLoading;
export const selectError = (state: TodoState) => state.error;
