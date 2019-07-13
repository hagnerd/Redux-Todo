import { CREATE_TODO, TOGGLE_TODO } from "../actions";

const initialState = {
  todos: []
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
