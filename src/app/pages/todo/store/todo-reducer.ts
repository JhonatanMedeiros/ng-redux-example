import { TodoAction, TodoActions } from './todo-actions';
import { todoAdapter, todoInitialState, TodoState } from './todo-state';

export function TodoReducer(
  state = todoInitialState,
  action: TodoAction
): TodoState {

  switch (action.type) {
    case TodoActions.LOAD: {
      return Object.assign({}, state, {
        isLoading: true,
        isLoaded: false,
        hasError: false,
        error: null
      });
    }

    case TodoActions.LOAD_SUCCESS: {
      return {
        ...todoAdapter.addMany(action.payload, state),
        isLoading: false,
        error: null
      };
    }

    case TodoActions.CREATE_SUCCESS: {
      return {
        ...todoAdapter.addOne(action.payload, state),
        error: null
      };
    }

    case TodoActions.UPDATE_SUCCESS: {
      return {
        ...todoAdapter.updateOne({id: action.payload.id, changes: action.payload}, state),
        error: null
      };
    }

    case TodoActions.REMOVE_SUCCESS: {
      return {
        ...todoAdapter.removeOne(action.payload.id, state),
        error: null,
      };
    }

    case TodoActions.ERROR: {
      return Object.assign({}, state, {
        error: action.payload.message
      });
    }

    default: {
      return state;
    }
  }
}
