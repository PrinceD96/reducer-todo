import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import { Header } from "semantic-ui-react";

function App() {
	return (
		<>
			<Header as='h1'>Todo App</Header>
			<div className='App'>
				<TodoList />
			</div>
		</>
	);
}

export default App;
