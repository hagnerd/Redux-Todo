/////////////////////////////////
// ACTIONS
export const CREATE_TODO = "CREATE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

////////////////////////////////
// ACTION CREATORS
export const createTodo = value => ({
  type: CREATE_TODO,
  payload: {
    value
  }
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: {
    id
  }
});
