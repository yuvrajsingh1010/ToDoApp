export const addTask = (text) => ({
  type: 'ADD_TASK',
  payload: {
    id: Math.random().toString(36).substr(2, 9), // generate unique id
    text
  }
});

export const deleteTask = (id) => ({
  type: 'DELETE_TASK',
  payload: {
    id
  }
});
export const toggleTask = (id) => ({
    type: 'TOGGLE_TASK',
    payload: {
      id
    }
  });  