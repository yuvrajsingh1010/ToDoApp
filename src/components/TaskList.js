import React from 'react'; // Import React library
import { useSelector, useDispatch } from 'react-redux'; // Import useSelector and useDispatch hooks from react-redux
import { deleteTask, toggleTask } from '../actions/todoAction'; // Import deleteTask and toggleTask action creators
import '../components/TaskList.css'; // Import CSS file for TaskList component styling

const TaskList = () => {
  const tasks = useSelector(state => state.tasks); // Get tasks from Redux store using useSelector hook
  const dispatch = useDispatch(); // Get dispatch function from useDispatch hook

  // Function to handle task deletion
  const handleDelete = (id) => {
    dispatch(deleteTask(id)); // Dispatch deleteTask action with task ID
  };

  // Function to handle task toggling
  const handleToggle = (id) => {
    dispatch(toggleTask(id)); // Dispatch toggleTask action with task ID
  };

  return (
    <div>
        <h2>Tasks:</h2> {/* Heading for the list of tasks */}
        <ul className='text-list'> {/* Unordered list to display tasks */}
            {tasks.map(task => (
            <li key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }} className="task-item"> {/* List item for each task */}
                <div className="task-content"> {/* Container for task text */}
                    <span onClick={() => handleToggle(task.id)} className="task-text">{task.text}</span> {/* Task text with click event to toggle task completion */}
                </div>
                <button className="delete-btn" onClick={() => handleDelete(task.id)}>Delete</button> {/* Button to delete the task */}
            </li>
            ))}
        </ul>
    </div>
  );
};

export default TaskList; // Export TaskList component