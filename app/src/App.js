import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import { Header } from "semantic-ui-react";

function App() {
	return (
		<>
			<h1 className='title'>To-do App</h1>
			<div className='App'>
				<TodoList />
			</div>
		</>
	);
}

export default App;
