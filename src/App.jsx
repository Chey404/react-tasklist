import { useState } from "react";
import "./App.css";

// TaskList component to display a list of hardcoded tasks
const TaskList = () => {
	const tasks = [
		{ title: "Business website", category: "Web Design" },
		{ title: "Social App", category: "Mobile Design" },
		{ title: "Ecommerce cart", category: "Web Development" },
	];

	return (
		<ul className="list-group">
			{tasks.map((task, index) => (
				<li key={index} className="list-group-item card-body">
					<span className="mr-3">Project Name: {task.title}</span>
					<br />
					Project Category: {task.category}
				</li>
			))}
		</ul>
	);
};

// TaskForm component to handle input and button for adding tasks
const TaskForm = () => {
	const [inputValue, setInputValue] = useState("");

	//update input value on change
	const onChange = (e) => {
		setInputValue(e.target.value);
	};

	const logOnClick = () => {
		//logs input value to the console
		console.log(inputValue);
	};

	return (
		<div className="input-group mb-3">
			<input
				type="text"
				className="form-control"
				placeholder="Add Task"
				value={inputValue}
				onChange={onChange}
			/>
			<button className="btn btn-outline-secondary" type="button" onClick={logOnClick}>
				Add Task
			</button>
		</div>
	);
};

function App() {
	return (
		<div className="App">
			<h1>Project Information Application</h1>
			<TaskList />
			<br />
			<TaskForm />
		</div>
	);
}

export default App;
