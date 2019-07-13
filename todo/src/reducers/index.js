import { CREATE_TODO, TOGGLE_TODO } from "../actions";

const initialState = {
  todos: []
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_TODO: {
      return {
        ...state,
        todos: state.todos.concat(action.payload)
      };
    }
    default:
      return state;
  }
}
