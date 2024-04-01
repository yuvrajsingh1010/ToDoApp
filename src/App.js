import React from 'react'; // Import React library
import { Provider } from 'react-redux'; // Import Provider component from react-redux library
import store from './store'; // Import Redux store
import TaskInput from './components/TaskInput'; // Import TaskInput component
import TaskList from './components/TaskList'; // Import TaskList component
import '../src/App.css'; // Import CSS file for styling

const App = () => {
  return (
    <Provider store={store}> {/* Wrap the entire app with Provider and pass Redux store */}
      <div className="App"> {/* Main container for the app */}
        <h1>Todo List</h1> {/* Heading for the Todo List */}
        <TaskInput /> {/* TaskInput component for adding new tasks */}
        <TaskList /> {/* TaskList component for displaying tasks */}
      </div>
    </Provider>
  );
}

export default App; // Export the App component