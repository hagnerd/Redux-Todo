// This function will either load our state from localStorage
// or return undefined so that it will use the initialState
// provided to the reducer
export const loadState = () => {
  try {
    const serializedState = window.localStorage.getItem("state");

    if (serializedState === null) {
      return undefined;
    } else {
      return JSON.parse(serializedState);
    }
  } catch (_e) {
    return undefined;
  }
};

// This function will attempt to save state to localStorage.
// User permissions may have localStorage disabled, in which case
// it will throw an error.
export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (e) {
    console.error(e);
  }
};
