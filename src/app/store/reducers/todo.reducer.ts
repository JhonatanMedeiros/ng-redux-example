import { Todo } from '../../models/todo';
import { TodoActions, TodoActionsTypes} from '../actions/todo.actions';

export const initialState: Todo[] = [
  { id: 1, title: 'Create todo application', assign: 'Jhonatan', isDone: false }
];

export function TodoReducer(state: Todo[] = initialState, action: TodoActions) {

  switch (action.type) {
    case TodoActionsTypes.List: {
      return { ...state, Loaded: false, Loading: true };
    }

    case TodoActionsTypes.Create: {
      return [...state, action.payload];
    }

    case TodoActionsTypes.Edit: {
      return state;
    }

    case TodoActionsTypes.Delete: {
      const todo = action.payload;
      return state.filter((el) => el.id !== todo.id);
    }

    default: {
      return state;
    }
  }
}
