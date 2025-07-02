import { useState } from "react";
import "./App.css";

// TaskList receives the list tasks and renders them
const TaskList = ({ tasks }) => {
	return (
		<ul className="list-group">
			{tasks.map((task, index) => (
				<li key={index} className="list-group-item card-body">
					<span className="mr-3">Task: {task}</span>
				</li>
			))}
		</ul>
	);
};

// TaskForm receives input value and handlers via props
const TaskForm = ({ inputValue, onInputChange, onAddTask }) => {
	return (
		<div className="input-group mb-3">
			<input
				type="text"
				className="form-control"
				placeholder="Add Task"
				value={inputValue}
				onChange={onInputChange}
			/>
			<button className="btn btn-outline-secondary" type="button" onClick={onAddTask}>
				Add Task
			</button>
		</div>
	);
};

// Main App component that manages state and renders TaskList and TaskForm
function App() {
	const [tasks, setTasks] = useState([
		"Create Business website",
		"Research Social App",
		"Update Ecommerce cart",
	]);
	const [inputValue, setInputValue] = useState("");

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	};

	const addTask = () => {
		if (inputValue.trim() !== "") {
			setTasks([...tasks, inputValue.trim()]);
			setInputValue(""); // Clear input after adding
		}
	};

	return (
		<div className="App">
			<h1>Project Information Application</h1>
			<TaskList tasks={tasks} />
			<br />
			<TaskForm
				inputValue={inputValue}
				onInputChange={handleInputChange}
				onAddTask={addTask}
			/>
		</div>
	);
}

export default App;
