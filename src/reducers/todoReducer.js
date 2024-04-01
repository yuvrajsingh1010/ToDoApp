const initialState = {
    tasks: JSON.parse(localStorage.getItem('tasks')) || []
  };
  
  const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        const newTask = {
          id: action.payload.id,
          text: action.payload.text,
          completed: false
        };
        const newTasks = [...state.tasks, newTask];
        localStorage.setItem('tasks', JSON.stringify(newTasks));
        return {
          ...state,
          tasks: newTasks
        };
      case 'DELETE_TASK':
        const filteredTasks = state.tasks.filter(task => task.id !== action.payload.id);
        localStorage.setItem('tasks', JSON.stringify(filteredTasks));
        return {
          ...state,
          tasks: filteredTasks
        };
      case 'TOGGLE_TASK':
        const toggledTasks = state.tasks.map(task => {
          if (task.id === action.payload.id) {
            return {
              ...task,
              completed: !task.completed
            };
          }
          return task;
        });
        localStorage.setItem('tasks', JSON.stringify(toggledTasks));
        return {
          ...state,
          tasks: toggledTasks
        };
      default:
        return state;
    }
  };
  
  export default todoReducer;  