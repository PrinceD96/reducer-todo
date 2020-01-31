import React, { useState } from "react";

const TodoForm = props => {
	const [newTodo, setNewTodo] = useState("");

	const handleChange = e => {
		setNewTodo(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		props.addTodo(newTodo);
		setNewTodo("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				onChange={handleChange}
				type='text'
				name='todo'
				value={newTodo}
				placeholder='...todo'
			/>
			<button>Add Todo</button>
		</form>
	);
};

export default TodoForm;
