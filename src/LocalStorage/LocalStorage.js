export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (!serializedState) {
      return saveState([]);
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (err) {}
};
