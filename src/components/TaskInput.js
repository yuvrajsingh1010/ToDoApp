import React, { useState } from 'react'; // Import React and useState hook
import { useDispatch } from 'react-redux'; // Import useDispatch hook from react-redux
import { addTask } from '../actions/todoAction'; // Import addTask action creator
import '../components/TaskInput.css'; // Import CSS file for TaskInput component styling

const TaskInput = () => {
  const [text, setText] = useState(''); // State to store the input text
  const dispatch = useDispatch(); // Get dispatch function from useDispatch hook

  // Function to handle input change
  const handleChange = (e) => {
    setText(e.target.value); // Update the text state with input value
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (text.trim() !== '') { // Check if input text is not empty
      dispatch(addTask(text)); // Dispatch addTask action with input text
      setText(''); // Clear the input text state
    }
  };

  return (
    <form className="task-input-container" onSubmit={handleSubmit}> {/* Form element */}
      <input className="task-input" type="text" value={text} onChange={handleChange} placeholder="Add a new task..."/> {/* Input field for adding new tasks */}
      <button className="add-btn" type="submit">Add Task</button> {/* Button to submit the form and add the task */}
    </form>
  );
};

export default TaskInput; // Export TaskInput component