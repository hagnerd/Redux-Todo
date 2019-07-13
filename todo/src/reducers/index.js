import { CREATE_TODO, TOGGLE_TODO, DELETE_TODO } from "../actions";

const initialState = {
  todos: []
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_TODO:
      return {
        ...state,
        todos: state.todos.concat(action.payload)
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo, index) =>
          index === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((_todo, index) => index !== action.payload.id)
      };
    default:
      return state;
  }
}
