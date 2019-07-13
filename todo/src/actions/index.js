/////////////////////////////////
// ACTIONS
export const CREATE_TODO = "CREATE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const DELETE_TODO = "DELETE_TODO";

////////////////////////////////
// ACTION CREATORS
export const createTodo = value => ({
  type: CREATE_TODO,
  payload: {
    value,
    completed: false
  }
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: {
    id
  }
});

export const deleteTodo = id => ({
  type: DELETE_TODO,
  payload: {
    id
  }
});
